# FavEco Backend Setup Guide

## Overview

This document outlines all the backend infrastructure, API routes, and database schema required to support the FavEco platform frontend. The frontend is a fully functional Next.js 16 application with forms, pages, and user interfaces that require backend services to operate.

## Current State

The frontend is **100% complete** with:
- ✅ Navigation, hero, and landing pages
- ✅ Product showcase pages (products, product details, categories)
- ✅ Partner program pages (Distributor, Reseller, Installer)
- ✅ Solar calculator page
- ✅ Trust & testimonials page
- ✅ Admin dashboard pages (analytics, partners, orders management)
- ✅ Contact, about, blog, careers pages
- ✅ All forms with validation (but no backend submission yet)

**Currently Missing:**
- ❌ Database schema and models
- ❌ API routes for form submissions and data management
- ❌ Authentication & authorization system
- ❌ File uploads for documents (CAC, licenses, certificates)
- ❌ Email notifications
- ❌ Payment processing

---

## Tech Stack Recommendation

### Backend Framework
- **Next.js App Router** (API Routes at `/app/api/`)
- **Database**: PostgreSQL (recommended) via Neon or Supabase
- **ORM**: Drizzle ORM or Prisma
- **Authentication**: NextAuth v5 or Auth.js
- **File Storage**: Vercel Blob or AWS S3
- **Email**: Resend or SendGrid
- **Validation**: Zod (already in project)

---

## Database Schema

### Core Tables

#### 1. **users** (Authentication)
```typescript
{
  id: string (UUID)
  email: string (unique)
  password: string (hashed)
  firstName: string
  lastName: string
  phone: string
  role: enum ('customer' | 'distributor' | 'reseller' | 'installer' | 'super_admin')
  status: enum ('active' | 'inactive' | 'suspended')
  createdAt: timestamp
  updatedAt: timestamp
}
```

#### 2. **distributor_applications**
```typescript
{
  id: string (UUID)
  userId: string (FK to users)
  companyName: string
  businessType: string
  country: string
  state: string
  experience: string
  monthlyCapacity: number
  solarExperience: string
  warehouseCapacity: string
  cacDocumentUrl: string (file path)
  businessLicenseUrl: string (file path)
  status: enum ('pending' | 'approved' | 'rejected')
  appliedTier: enum ('gold' | 'platinum' | 'diamond')
  notes: text
  reviewedBy: string (FK to users, admin)
  reviewedAt: timestamp
  createdAt: timestamp
  updatedAt: timestamp
}
```

#### 3. **reseller_applications**
```typescript
{
  id: string (UUID)
  userId: string (FK to users)
  companyName: string
  salesExperience: string
  country: string
  preferredRegion: string
  appliedTier: enum ('silver' | 'gold')
  status: enum ('pending' | 'approved' | 'rejected')
  notes: text
  reviewedBy: string (FK to users, admin)
  reviewedAt: timestamp
  createdAt: timestamp
  updatedAt: timestamp
}
```

#### 4. **installer_applications**
```typescript
{
  id: string (UUID)
  userId: string (FK to users)
  companyName: string
  experienceLevel: enum ('certified_technician' | 'master_installer' | 'partner')
  certifications: string[] (array of cert names)
  serviceLocations: string[] (states/regions)
  teamSize: number
  idDocumentUrl: string (file path)
  certificationsDocUrl: string (file path)
  portfolioUrl: string (file path)
  certificationLevel: enum ('bronze' | 'silver' | 'gold')
  status: enum ('pending' | 'approved' | 'rejected')
  notes: text
  reviewedBy: string (FK to users, admin)
  reviewedAt: timestamp
  createdAt: timestamp
  updatedAt: timestamp
}
```

#### 5. **products**
```typescript
{
  id: string (UUID)
  name: string ('Smart' | 'Active' | 'Grow' | 'Flow')
  slug: string
  description: text
  minPower: number (watts)
  maxPower: number (watts)
  basePrice: number
  features: string[]
  specifications: JSON object
  warranty: number (years)
  category: string
  imageUrl: string
  isActive: boolean
  createdAt: timestamp
  updatedAt: timestamp
}
```

#### 6. **orders**
```typescript
{
  id: string (UUID)
  customerId: string (FK to users)
  productIds: string[] (array of product IDs)
  totalAmount: number
  status: enum ('pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled')
  paymentStatus: enum ('pending' | 'completed' | 'failed')
  paymentMethod: string
  shippingAddress: JSON object
  deliveryDate: timestamp
  notes: text
  createdAt: timestamp
  updatedAt: timestamp
}
```

#### 7. **calculator_submissions**
```typescript
{
  id: string (UUID)
  userId: string (FK to users, nullable)
  email: string
  location: string
  monthlyBill: number
  generatorUsage: string
  fuelSpending: number
  appliances: string[]
  requiredHours: number
  recommendedSystem: string
  estimatedSavings: number
  roiTimeline: number (months)
  carbonReduction: number
  sharedUrl: string (unique shareable link)
  createdAt: timestamp
  updatedAt: timestamp
}
```

#### 8. **contact_submissions**
```typescript
{
  id: string (UUID)
  name: string
  email: string
  phone: string
  subject: string
  message: text
  category: enum ('sales' | 'support' | 'partnership' | 'other')
  status: enum ('new' | 'in_progress' | 'resolved')
  assignedTo: string (FK to users, admin)
  createdAt: timestamp
  updatedAt: timestamp
}
```

#### 9. **blog_posts** (Optional, for /blog)
```typescript
{
  id: string (UUID)
  title: string
  slug: string
  content: text
  author: string
  excerpt: string
  imageUrl: string
  category: string
  published: boolean
  publishedAt: timestamp
  createdAt: timestamp
  updatedAt: timestamp
}
```

#### 10. **careers_applications** (Optional, for /careers)
```typescript
{
  id: string (UUID)
  name: string
  email: string
  phone: string
  position: string
  resumeUrl: string (file path)
  coverLetterUrl: string (file path)
  linkedinUrl: string
  experience: string
  status: enum ('new' | 'reviewing' | 'interviewed' | 'rejected' | 'offered')
  notes: text
  createdAt: timestamp
  updatedAt: timestamp
}
```

---

## API Routes to Implement

### Authentication
```
POST   /api/auth/register          → Register new user
POST   /api/auth/login             → Login user
POST   /api/auth/logout            → Logout user
POST   /api/auth/refresh           → Refresh session token
GET    /api/auth/session           → Get current session
POST   /api/auth/forgot-password   → Request password reset
POST   /api/auth/reset-password    → Reset password
```

### Applications (Distributor, Reseller, Installer)
```
POST   /api/applications/distributor      → Submit distributor application
POST   /api/applications/reseller         → Submit reseller application
POST   /api/applications/installer       → Submit installer application
GET    /api/applications/[id]            → Get application details
GET    /api/applications?status=pending  → List applications (admin)
PATCH  /api/applications/[id]/approve    → Approve application (admin)
PATCH  /api/applications/[id]/reject     → Reject application (admin)
```

### Admin - Partner Management
```
GET    /api/admin/partners?role=distributor     → List all distributors
GET    /api/admin/partners/[id]                 → Get partner details
PATCH  /api/admin/partners/[id]                 → Update partner info
DELETE /api/admin/partners/[id]                 → Deactivate partner
GET    /api/admin/partners/analytics           → Partner performance metrics
```

### Admin - Orders
```
GET    /api/admin/orders                → List all orders
GET    /api/admin/orders/[id]          → Get order details
PATCH  /api/admin/orders/[id]/status   → Update order status
GET    /api/admin/orders/analytics     → Sales metrics and trends
```

### Admin - Analytics
```
GET    /api/admin/analytics/dashboard  → Dashboard KPIs (users, orders, revenue)
GET    /api/admin/analytics/sales      → Sales trends
GET    /api/admin/analytics/products   → Product performance
GET    /api/admin/analytics/regions    → Regional distribution
```

### Products
```
GET    /api/products                   → List all products
GET    /api/products/[id]             → Get product details
POST   /api/products                  → Create product (admin)
PATCH  /api/products/[id]             → Update product (admin)
```

### Solar Calculator
```
POST   /api/calculator/submit         → Submit calculator inputs
GET    /api/calculator/[id]          → Get calculation results
POST   /api/calculator/[id]/share    → Generate shareable link
```

### Contact & Inquiries
```
POST   /api/contact/submit            → Submit contact form
GET    /api/contact?status=new       → List submissions (admin)
PATCH  /api/contact/[id]             → Update submission status (admin)
```

### File Uploads
```
POST   /api/upload                    → Upload file (returns URL)
DELETE /api/upload/[fileId]          → Delete uploaded file (admin)
```

### Email
```
POST   /api/email/send-notification  → Send email notification
POST   /api/email/send-approval      → Send application approval email
```

---

## Implementation Priority

### Phase 1: Authentication & Core Setup (Week 1)
- [ ] Set up database (PostgreSQL)
- [ ] Create authentication system (NextAuth v5 / Auth.js)
- [ ] Implement user roles and middleware
- [ ] Create `/api/auth/*` routes
- [ ] Set up Zod schemas for validation

### Phase 2: Application Management (Week 2)
- [ ] Create application tables in database
- [ ] Implement `/api/applications/*` routes
- [ ] Add file upload system for documents
- [ ] Create admin review endpoints
- [ ] Add email notifications for applications

### Phase 3: Admin Dashboard Backend (Week 2-3)
- [ ] Create admin analytics endpoints
- [ ] Implement partner management routes
- [ ] Add order management endpoints
- [ ] Connect dashboard pages to APIs

### Phase 4: Products & Calculator (Week 3)
- [ ] Seed products database
- [ ] Create `/api/products` endpoints
- [ ] Implement calculator submission logic
- [ ] Add shareable links for results

### Phase 5: Additional Features (Week 4)
- [ ] Contact form submission system
- [ ] Email notification service
- [ ] Payment processing (if needed)
- [ ] Careers application system
- [ ] Blog/CMS system (if needed)

---

## Database Query Examples

### With Drizzle ORM

```typescript
// Get pending applications
const pendingApps = await db
  .select()
  .from(distributorApplications)
  .where(eq(distributorApplications.status, 'pending'))
  .orderBy(desc(distributorApplications.createdAt));

// Approve application
await db
  .update(distributorApplications)
  .set({ 
    status: 'approved', 
    reviewedAt: new Date(),
    reviewedBy: adminId 
  })
  .where(eq(distributorApplications.id, appId));

// Get user with role
const user = await db
  .select()
  .from(users)
  .where(eq(users.id, userId));
```

---

## Form Submission Integration

### Current Frontend Forms (Ready for Backend)

The following pages have validated forms that need backend integration:

1. **Distributor Application** (`/distributor`)
   - Form data: company, name, email, phone, region, experience, message
   - Needs: POST `/api/applications/distributor`

2. **Reseller Application** (`/reseller`)
   - Form data: name, email, phone, country, region, experience
   - Needs: POST `/api/applications/reseller`

3. **Installer Application** (`/installer`)
   - Form data: name, company, experience, certifications, locations, team size
   - Needs: POST `/api/applications/installer` + file uploads

4. **Solar Calculator** (`/calculator`)
   - Form data: monthly bill, system type
   - Needs: POST `/api/calculator/submit`

5. **Contact Form** (contact page)
   - Form data: name, email, phone, subject, message, category
   - Needs: POST `/api/contact/submit`

### Integration Steps

1. Update form `onSubmit` handler in each page
2. Call `/api/[endpoint]` with form data
3. Handle loading/error states
4. Show success/error toast
5. Redirect or reset form on success

Example implementation:
```typescript
const onSubmit = async (data) => {
  try {
    const response = await fetch('/api/applications/distributor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) throw new Error('Submission failed');
    
    toast.success('Application submitted successfully!');
    router.push('/thank-you');
  } catch (error) {
    toast.error('Error submitting application');
  }
};
```

---

## Environment Variables Required

Create a `.env.local` file with:

```env
# Database
DATABASE_URL=postgresql://user:password@host:5432/faveco

# Authentication
NEXTAUTH_SECRET=generate_with_openssl_rand_base64_32
NEXTAUTH_URL=http://localhost:3000

# File Storage (Vercel Blob)
BLOB_READ_WRITE_TOKEN=your_token_here

# Email Service
RESEND_API_KEY=your_resend_key

# Payment (if needed)
STRIPE_SECRET_KEY=your_stripe_key
STRIPE_PUBLIC_KEY=your_public_key

# Admin Email
ADMIN_EMAIL=admin@faveco.com
```

---

## Security Considerations

1. **Authentication**: Always validate user sessions on backend
2. **Authorization**: Check user role before allowing admin operations
3. **File Uploads**: Validate file types and sizes, scan for malware
4. **Rate Limiting**: Add rate limiting on form submissions
5. **CORS**: Configure CORS properly for API routes
6. **Input Validation**: Use Zod schemas on every endpoint
7. **SQL Injection**: Use parameterized queries (ORM handles this)
8. **Sensitive Data**: Hash passwords, never expose user details

---

## Testing Checklist

- [ ] All API endpoints return correct status codes
- [ ] Forms submit successfully and create database records
- [ ] Admin can view and manage applications
- [ ] Email notifications send on application submission
- [ ] File uploads work and are stored correctly
- [ ] User authentication persists across page reloads
- [ ] Role-based access control works (admin vs user)
- [ ] Duplicate submissions are prevented
- [ ] Error messages are helpful and clear

---

## Deployment Notes

1. Database should be hosted on Neon or Supabase
2. Set production environment variables on Vercel
3. Enable HTTPS for all API calls
4. Set up monitoring/logging for API errors
5. Configure backup schedule for database
6. Test all integrations in staging before production

---

## Questions & Support

For questions about the frontend structure:
- Check existing pages in `/app` directory
- Review forms in component files
- All pages use TypeScript + React 19.2

For questions about the plan:
- See `/v0_plans/realistic-outline.md` for full specifications

---

**Status**: Ready for backend implementation ✅
