# FavEco API Implementation Guide

## Quick Start: API Route Structure

### Folder Organization
```
app/
├── api/
│   ├── auth/
│   │   ├── register/route.ts
│   │   ├── login/route.ts
│   │   ├── logout/route.ts
│   │   └── session/route.ts
│   ├── applications/
│   │   ├── distributor/route.ts
│   │   ├── reseller/route.ts
│   │   ├── installer/route.ts
│   │   └── [id]/
│   │       ├── route.ts (GET/PATCH)
│   │       ├── approve/route.ts
│   │       └── reject/route.ts
│   ├── admin/
│   │   ├── partners/route.ts
│   │   ├── orders/route.ts
│   │   └── analytics/route.ts
│   ├── products/route.ts
│   ├── calculator/route.ts
│   ├── contact/route.ts
│   └── upload/route.ts
└── (other pages)
```

---

## Example API Route Implementation

### 1. Authentication Setup

**File**: `app/api/auth/register/route.ts`
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';
import { userSchema } from '@/lib/schemas';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validate input
    const validation = userSchema.parse(body);
    
    // Check if user exists
    const existing = await db
      .select()
      .from(users)
      .where(eq(users.email, validation.email))
      .limit(1);
    
    if (existing.length > 0) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      );
    }
    
    // Hash password
    const hashedPassword = await hash(validation.password, 10);
    
    // Create user
    const newUser = await db
      .insert(users)
      .values({
        email: validation.email,
        password: hashedPassword,
        firstName: validation.firstName,
        lastName: validation.lastName,
        phone: validation.phone,
        role: 'customer',
        status: 'active',
      })
      .returning();
    
    return NextResponse.json(
      { 
        message: 'User registered successfully',
        userId: newUser[0].id 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 500 }
    );
  }
}
```

---

### 2. Application Submission

**File**: `app/api/applications/distributor/route.ts`
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { distributorApplications } from '@/lib/db/schema';
import { distributorAppSchema } from '@/lib/schemas';
import { sendEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validate with Zod
    const validated = distributorAppSchema.parse(body);
    
    // Create application
    const application = await db
      .insert(distributorApplications)
      .values({
        userId: validated.userId || null,
        companyName: validated.company,
        businessType: validated.businessType,
        country: validated.country,
        state: validated.state,
        experience: validated.experience,
        monthlyCapacity: validated.monthlyCapacity,
        cacDocumentUrl: validated.cacDocUrl || null,
        businessLicenseUrl: validated.licenseUrl || null,
        status: 'pending',
        appliedTier: validated.tier || 'gold',
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();
    
    // Send confirmation email
    await sendEmail({
      to: validated.email,
      template: 'distributor-application-received',
      data: {
        name: validated.name,
        applicationId: application[0].id,
      },
    });
    
    // Notify admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL!,
      template: 'new-distributor-application',
      data: {
        companyName: validated.company,
        applicantName: validated.name,
        applicationId: application[0].id,
      },
    });
    
    return NextResponse.json(
      { 
        message: 'Application submitted successfully',
        applicationId: application[0].id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Application error:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
```

---

### 3. Admin Review Endpoint

**File**: `app/api/applications/[id]/approve/route.ts`
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { distributorApplications, users } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { sendEmail } from '@/lib/email';
import { getServerSession } from 'next-auth';

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Verify admin authentication
    const session = await getServerSession();
    if (!session || session.user.role !== 'super_admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const body = await req.json();
    
    // Get application
    const app = await db
      .select()
      .from(distributorApplications)
      .where(eq(distributorApplications.id, params.id))
      .limit(1);
    
    if (app.length === 0) {
      return NextResponse.json(
        { error: 'Application not found' },
        { status: 404 }
      );
    }
    
    // Update status
    await db
      .update(distributorApplications)
      .set({
        status: 'approved',
        reviewedBy: session.user.id,
        reviewedAt: new Date(),
        notes: body.notes,
      })
      .where(eq(distributorApplications.id, params.id));
    
    // Create distributor account if user doesn't exist
    let userId = app[0].userId;
    if (!userId) {
      const newUser = await db
        .insert(users)
        .values({
          email: body.email,
          firstName: body.firstName,
          lastName: body.lastName,
          phone: body.phone,
          role: 'distributor',
          status: 'active',
          password: '', // Will need to set through forgot password
        })
        .returning();
      userId = newUser[0].id;
    }
    
    // Send approval email
    await sendEmail({
      to: body.email,
      template: 'distributor-approved',
      data: {
        name: body.firstName,
        tier: app[0].appliedTier,
        loginUrl: `${process.env.NEXTAUTH_URL}/login`,
      },
    });
    
    return NextResponse.json(
      { message: 'Application approved' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Approval error:', error);
    return NextResponse.json(
      { error: 'Failed to approve application' },
      { status: 500 }
    );
  }
}
```

---

### 4. Admin Dashboard Analytics

**File**: `app/api/admin/analytics/dashboard/route.ts`
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { 
  users, 
  orders, 
  distributorApplications,
  installerApplications,
  resellerApplications 
} from '@/lib/db/schema';
import { count } from 'drizzle-orm';
import { getServerSession } from 'next-auth';

export async function GET(req: NextRequest) {
  try {
    // Verify admin
    const session = await getServerSession();
    if (!session || session.user.role !== 'super_admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // Fetch key metrics
    const totalUsers = await db
      .select({ count: count() })
      .from(users);
    
    const totalOrders = await db
      .select({ count: count() })
      .from(orders);
    
    const pendingApplications = await db
      .select({ count: count() })
      .from(distributorApplications)
      .where(eq(distributorApplications.status, 'pending'));
    
    const totalRevenue = await db
      .select({ 
        total: sql`SUM(${orders.totalAmount})` 
      })
      .from(orders)
      .where(eq(orders.status, 'paid'));
    
    // Distribution by role
    const usersByRole = await db
      .select({
        role: users.role,
        count: count(),
      })
      .from(users)
      .groupBy(users.role);
    
    return NextResponse.json({
      totalUsers: totalUsers[0].count,
      totalOrders: totalOrders[0].count,
      totalRevenue: totalRevenue[0]?.total || 0,
      pendingApplications: pendingApplications[0].count,
      usersByRole,
      lastUpdated: new Date(),
    });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}
```

---

### 5. File Upload Handler

**File**: `app/api/upload/route.ts`
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { getServerSession } from 'next-auth';

export async function POST(req: NextRequest) {
  try {
    // Verify authentication
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const formData = await req.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }
    
    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'image/jpeg',
      'image/png',
    ];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type' },
        { status: 400 }
      );
    }
    
    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File too large' },
        { status: 400 }
      );
    }
    
    // Upload to blob storage
    const blob = await put(
      `${session.user.id}/${Date.now()}-${file.name}`,
      file,
      { access: 'private' }
    );
    
    return NextResponse.json({
      url: blob.url,
      filename: blob.pathname,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    );
  }
}
```

---

## Database Schema with Drizzle

**File**: `lib/db/schema.ts`
```typescript
import { 
  pgTable, 
  text, 
  timestamp, 
  uuid, 
  varchar,
  integer,
  boolean,
  decimal,
  jsonb,
  enum as pgEnum
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: text('password'),
  firstName: varchar('first_name', { length: 255 }),
  lastName: varchar('last_name', { length: 255 }),
  phone: varchar('phone', { length: 20 }),
  role: pgEnum('role', [
    'customer',
    'distributor',
    'installer',
    'reseller',
    'super_admin'
  ]).default('customer'),
  status: pgEnum('status', [
    'active',
    'inactive',
    'suspended'
  ]).default('active'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const distributorApplications = pgTable('distributor_applications', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id),
  companyName: varchar('company_name', { length: 255 }).notNull(),
  businessType: varchar('business_type', { length: 255 }),
  country: varchar('country', { length: 100 }),
  state: varchar('state', { length: 100 }),
  experience: text('experience'),
  monthlyCapacity: integer('monthly_capacity'),
  solarExperience: text('solar_experience'),
  warehouseCapacity: varchar('warehouse_capacity', { length: 255 }),
  cacDocumentUrl: text('cac_document_url'),
  businessLicenseUrl: text('business_license_url'),
  status: pgEnum('status', [
    'pending',
    'approved',
    'rejected'
  ]).default('pending'),
  appliedTier: varchar('applied_tier', { length: 50 }),
  notes: text('notes'),
  reviewedBy: uuid('reviewed_by').references(() => users.id),
  reviewedAt: timestamp('reviewed_at'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const products = pgTable('products', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).unique(),
  description: text('description'),
  minPower: integer('min_power'),
  maxPower: integer('max_power'),
  basePrice: decimal('base_price', { precision: 10, scale: 2 }),
  features: jsonb('features'),
  specifications: jsonb('specifications'),
  warranty: integer('warranty'),
  category: varchar('category', { length: 100 }),
  imageUrl: text('image_url'),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const orders = pgTable('orders', {
  id: uuid('id').defaultRandom().primaryKey(),
  customerId: uuid('customer_id').references(() => users.id),
  productIds: text('product_ids').array(),
  totalAmount: decimal('total_amount', { precision: 10, scale: 2 }),
  status: pgEnum('status', [
    'pending',
    'paid',
    'shipped',
    'delivered',
    'cancelled'
  ]).default('pending'),
  paymentStatus: pgEnum('payment_status', [
    'pending',
    'completed',
    'failed'
  ]).default('pending'),
  paymentMethod: varchar('payment_method', { length: 50 }),
  shippingAddress: jsonb('shipping_address'),
  deliveryDate: timestamp('delivery_date'),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
```

---

## Zod Validation Schemas

**File**: `lib/schemas.ts`
```typescript
import { z } from 'zod';

export const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  phone: z.string().optional(),
});

export const distributorAppSchema = z.object({
  userId: z.string().uuid().optional(),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string(),
  company: z.string().min(2),
  businessType: z.string(),
  country: z.string(),
  state: z.string(),
  experience: z.string(),
  monthlyCapacity: z.number().positive().optional(),
  solarExperience: z.string().optional(),
  cacDocUrl: z.string().url().optional(),
  licenseUrl: z.string().url().optional(),
  tier: z.enum(['gold', 'platinum', 'diamond']).optional(),
});

export const calculatorSchema = z.object({
  userId: z.string().uuid().optional(),
  email: z.string().email(),
  location: z.string(),
  monthlyBill: z.number().positive(),
  generatorUsage: z.string().optional(),
  fuelSpending: z.number().optional(),
  appliances: z.array(z.string()).optional(),
  requiredHours: z.number().positive(),
});

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string(),
  subject: z.string().min(5),
  message: z.string().min(10),
  category: z.enum(['sales', 'support', 'partnership', 'other']),
});
```

---

## Frontend Integration Example

**File**: `app/distributor/page.tsx` (Updated)
```typescript
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { distributorAppSchema } from '@/lib/schemas';
import { toast } from 'sonner';

export default function DistributorPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
    resolver: zodResolver(distributorAppSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/applications/distributor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Submission failed');
      }

      const result = await response.json();
      toast.success('Application submitted! We\'ll review it shortly.');
      form.reset();
      // Optionally redirect: router.push('/thank-you');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Form fields */}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  );
}
```

---

## Testing API Routes

### Using cURL
```bash
# Register user
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Password123",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+1234567890"
  }'

# Submit application
curl -X POST http://localhost:3000/api/applications/distributor \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@company.com",
    "company": "Solar Corp",
    "phone": "+1234567890",
    "country": "Nigeria",
    "state": "Lagos",
    "experience": "5-10 years"
  }'
```

---

## Deployment Checklist

- [ ] Database created and migrated on production
- [ ] All environment variables set on Vercel
- [ ] Authentication configured (NextAuth setup)
- [ ] File upload service configured (Vercel Blob)
- [ ] Email service configured (Resend API key)
- [ ] Rate limiting implemented
- [ ] CORS configured if needed
- [ ] Error logging set up
- [ ] Database backups automated
- [ ] All endpoints tested in staging

---

**Next Steps**: 
1. Create database schema migration files
2. Set up NextAuth authentication
3. Implement the API routes following the examples above
4. Update frontend forms to call the APIs
5. Test all integrations before deployment
