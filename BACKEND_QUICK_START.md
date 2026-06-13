# Backend Quick Start Guide

## TL;DR - What You Need to Do

The **frontend is 100% complete**. Your job is to:

1. **Set up database** (PostgreSQL)
2. **Create API routes** at `/app/api/*`
3. **Add authentication** (NextAuth v5)
4. **Connect forms to APIs**
5. **Handle file uploads**
6. **Send emails** on app submissions

---

## 5-Step Implementation Plan

### Step 1: Database Setup (Day 1)
```bash
# Create PostgreSQL database
npx drizzle-kit generate

# Run migrations
npm run db:migrate
```

Create `/lib/db/schema.ts` with tables:
- `users` (authentication)
- `distributor_applications`
- `reseller_applications`
- `installer_applications`
- `orders`, `products`, `contact_submissions`

**See**: `BACKEND_SETUP.md` for complete schema

---

### Step 2: Authentication (Day 2)
```bash
npm install next-auth
```

Create `/app/api/auth/[...nextauth]/route.ts`:
```typescript
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const user = await db.select().from(users)
          .where(eq(users.email, credentials.email));
        if (user && comparePassword(credentials.password, user.password)) {
          return { id: user.id, email: user.email, role: user.role };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
});

export const { GET, POST } = handlers;
```

---

### Step 3: Core API Routes (Days 3-4)

Create these **5 essential routes**:

#### 1. Distributor Application
```typescript
// /app/api/applications/distributor/route.ts
export async function POST(req: NextRequest) {
  const data = await req.json();
  
  const app = await db.insert(distributorApplications)
    .values({ ...data, status: 'pending' })
    .returning();
  
  await sendEmail(data.email, 'distributor-app-received');
  
  return NextResponse.json({ applicationId: app[0].id }, { status: 201 });
}
```

#### 2. Approve Application (Admin)
```typescript
// /app/api/applications/[id]/approve/route.ts
export async function PATCH(req: NextRequest, { params }) {
  const session = await getServerSession();
  if (session?.user.role !== 'super_admin') return new Response(null, { status: 401 });
  
  await db.update(distributorApplications)
    .set({ status: 'approved', reviewedBy: session.user.id, reviewedAt: new Date() })
    .where(eq(distributorApplications.id, params.id));
  
  await sendEmail(/* ... */, 'distributor-approved');
  return NextResponse.json({ message: 'Approved' });
}
```

#### 3. Get Dashboard Analytics
```typescript
// /app/api/admin/analytics/dashboard/route.ts
export async function GET() {
  const session = await getServerSession();
  if (session?.user.role !== 'super_admin') return new Response(null, { status: 401 });
  
  const [totalUsers] = await db.select({ count: count() }).from(users);
  const [totalOrders] = await db.select({ count: count() }).from(orders);
  const [revenue] = await db.select({ total: sum(orders.totalAmount) }).from(orders);
  
  return NextResponse.json({ totalUsers, totalOrders, revenue });
}
```

#### 4. File Upload
```typescript
// /app/api/upload/route.ts
import { put } from "@vercel/blob";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file');
  
  const blob = await put(file.name, file, { access: 'private' });
  return NextResponse.json({ url: blob.url });
}
```

#### 5. Contact Form
```typescript
// /app/api/contact/route.ts
export async function POST(req: NextRequest) {
  const data = await req.json();
  
  await db.insert(contactSubmissions).values(data);
  await sendEmail(process.env.ADMIN_EMAIL, 'new-contact', data);
  
  return NextResponse.json({ message: 'Message received' }, { status: 201 });
}
```

---

### Step 4: Frontend Integration (Day 5)

Update form submission in each page:

```typescript
// app/distributor/page.tsx (example)
const onSubmit = async (data) => {
  const res = await fetch('/api/applications/distributor', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  
  if (res.ok) {
    toast.success('Application submitted!');
    router.push('/thank-you');
  } else {
    toast.error('Failed to submit');
  }
};
```

**Forms to update:**
- `/distributor` → POST `/api/applications/distributor`
- `/reseller` → POST `/api/applications/reseller`
- `/installer` → POST `/api/applications/installer`
- `/calculator` → POST `/api/calculator`
- Contact page → POST `/api/contact`

---

### Step 5: Deployment (Day 6)

```bash
# Test locally
npm run dev

# Set environment variables on Vercel
# DATABASE_URL, NEXTAUTH_SECRET, BLOB_READ_WRITE_TOKEN, etc.

# Deploy
git push
```

---

## File Structure Reference

```
After backend setup, your structure will be:
app/
├── api/
│   ├── auth/
│   │   ├── register/route.ts
│   │   ├── login/route.ts
│   │   └── [...nextauth]/route.ts
│   ├── applications/
│   │   ├── distributor/route.ts
│   │   ├── reseller/route.ts
│   │   ├── installer/route.ts
│   │   └── [id]/
│   │       ├── approve/route.ts
│   │       └── reject/route.ts
│   ├── admin/
│   │   ├── analytics/route.ts
│   │   ├── partners/route.ts
│   │   └── orders/route.ts
│   ├── calculator/route.ts
│   ├── contact/route.ts
│   └── upload/route.ts
├── (all existing pages work as-is)
└── middleware.ts (auth check)
```

---

## Dependencies to Install

```bash
npm install \
  drizzle-orm \
  drizzle-kit \
  pg \
  next-auth@beta \
  bcryptjs \
  nodemailer \
  @vercel/blob \
  zod
```

---

## Environment Variables

Create `.env.local`:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/faveco
NEXTAUTH_SECRET=your_secret_key_here
NEXTAUTH_URL=http://localhost:3000
BLOB_READ_WRITE_TOKEN=your_blob_token
RESEND_API_KEY=your_resend_api_key
ADMIN_EMAIL=admin@faveco.com
```

---

## Database Tables Summary

| Table | Purpose | Key Fields |
|-------|---------|-----------|
| `users` | Authentication | email, password, role, status |
| `distributor_applications` | Distributor signups | company, status, tier, documents |
| `reseller_applications` | Reseller signups | company, status, tier |
| `installer_applications` | Installer network | company, certifications, status |
| `products` | Product catalog | name, price, specs |
| `orders` | Customer orders | customerId, status, amount |
| `contact_submissions` | Contact form entries | name, email, message, status |
| `calculator_submissions` | Calculator results | location, savings, roi |

**See**: `BACKEND_SETUP.md` for complete schema with all fields

---

## Quick API Endpoints Checklist

- [ ] `POST /api/auth/register` - User registration
- [ ] `POST /api/auth/login` - User login
- [ ] `GET /api/auth/session` - Get current user
- [ ] `POST /api/applications/distributor` - Submit distributor app
- [ ] `POST /api/applications/reseller` - Submit reseller app
- [ ] `POST /api/applications/installer` - Submit installer app
- [ ] `PATCH /api/applications/[id]/approve` - Admin approve
- [ ] `PATCH /api/applications/[id]/reject` - Admin reject
- [ ] `GET /api/admin/analytics/dashboard` - Dashboard metrics
- [ ] `GET /api/admin/partners` - List partners (admin)
- [ ] `GET /api/admin/orders` - List orders (admin)
- [ ] `POST /api/calculator` - Submit calculator inputs
- [ ] `POST /api/contact` - Submit contact form
- [ ] `POST /api/upload` - Upload file

---

## Common Issues & Solutions

### Forms not submitting?
- Check `/api/applications/*` routes exist
- Verify form has correct field names
- Check browser console for errors
- Ensure API returns 201 status code

### Admin dashboard empty?
- Verify admin user has role 'super_admin'
- Check `/api/admin/analytics/*` endpoints return data
- Ensure session/auth middleware is working

### File uploads failing?
- Verify BLOB_READ_WRITE_TOKEN is set
- Check file size < 5MB
- Verify file type is allowed (PDF, JPG, PNG)
- Check `/api/upload` route exists

### Emails not sending?
- Verify RESEND_API_KEY is set
- Check email templates exist
- Verify recipient email is valid
- Check Resend dashboard for errors

---

## Testing Checklist

```bash
# Test registration
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"Test123","firstName":"John","lastName":"Doe"}'

# Test application submission
curl -X POST http://localhost:3000/api/applications/distributor \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","company":"Solar Corp","country":"Nigeria","state":"Lagos"}'

# Test admin endpoint (need session)
curl -X GET http://localhost:3000/api/admin/analytics/dashboard \
  -H "Authorization: Bearer YOUR_SESSION_TOKEN"
```

---

## Documentation Reference

**For more details, see:**
- `BACKEND_SETUP.md` - Complete specification
- `API_IMPLEMENTATION_GUIDE.md` - Code examples and patterns
- `/app/page.tsx` - Frontend structure reference
- `/app/distributor/page.tsx` - Form example to integrate

---

## Support

All forms are **ready for integration**. No frontend changes needed - just add the API routes and update the form `onSubmit` handlers to call them.

**Frontend pages with forms waiting for backend:**
1. `/distributor` - Distributor application
2. `/reseller` - Reseller application
3. `/installer` - Installer application
4. `/calculator` - Solar calculator
5. `contact` page - Contact form

Each form already has validation with Zod. Your API just needs to handle the submission.

---

**Status**: Ready for backend implementation ✅
