# Backend Implementation Checklist

Use this checklist to track your backend implementation progress.

---

## Phase 1: Database Setup (Days 1-2)

### Database & ORM
- [ ] Create PostgreSQL database (Neon/Supabase)
- [ ] Add `DATABASE_URL` to `.env.local`
- [ ] Install Drizzle ORM: `npm install drizzle-orm drizzle-kit pg`
- [ ] Create `/lib/db/schema.ts` with all 10 tables
- [ ] Create migrations
- [ ] Run `npm run db:migrate`
- [ ] Verify tables created in database

### Tables to Create
- [ ] `users` - Authentication & user data
- [ ] `distributor_applications` - Distributor signups
- [ ] `reseller_applications` - Reseller signups
- [ ] `installer_applications` - Installer signups
- [ ] `products` - Product catalog
- [ ] `orders` - Customer orders
- [ ] `calculator_submissions` - Calculator results
- [ ] `contact_submissions` - Contact form entries
- [ ] `blog_posts` (optional)
- [ ] `careers_applications` (optional)

**Status**: ⬜️ Not started | 🟨 In progress | ✅ Complete

---

## Phase 2: Authentication (Days 2-3)

### Setup NextAuth
- [ ] Install NextAuth v5: `npm install next-auth@beta`
- [ ] Generate `NEXTAUTH_SECRET`: `openssl rand -base64 32`
- [ ] Add to `.env.local`
- [ ] Install dependencies: `npm install bcryptjs zod`

### Create Auth Routes
- [ ] Create `/app/api/auth/[...nextauth]/route.ts`
- [ ] Configure Credentials provider
- [ ] Add JWT callbacks
- [ ] Add session callbacks
- [ ] Test registration at `POST /api/auth/register`
- [ ] Test login at `POST /api/auth/login`
- [ ] Test session at `GET /api/auth/session`
- [ ] Create `/app/middleware.ts` for auth checks

### Auth Endpoints Checklist
- [ ] `POST /api/auth/register` - Returns user ID
- [ ] `POST /api/auth/login` - Returns session token
- [ ] `POST /api/auth/logout` - Clears session
- [ ] `GET /api/auth/session` - Returns user info & role
- [ ] `POST /api/auth/forgot-password` - Password reset
- [ ] Password hashing with bcryptjs
- [ ] Session persistence

**Status**: ⬜️ Not started | 🟨 In progress | ✅ Complete

---

## Phase 3: API Routes (Days 3-4)

### Application Submission Routes

#### Distributor Application
- [ ] Create `/app/api/applications/distributor/route.ts`
- [ ] `POST` handler validates with `distributorAppSchema`
- [ ] Insert into `distributor_applications` table
- [ ] Send confirmation email
- [ ] Send notification email to admin
- [ ] Return `applicationId` in response
- [ ] Test with cURL or Postman

#### Reseller Application
- [ ] Create `/app/api/applications/reseller/route.ts`
- [ ] `POST` handler validates with `resellerAppSchema`
- [ ] Insert into `reseller_applications` table
- [ ] Send confirmation email
- [ ] Return `applicationId` in response

#### Installer Application
- [ ] Create `/app/api/applications/installer/route.ts`
- [ ] `POST` handler with file upload support
- [ ] Insert into `installer_applications` table
- [ ] Send confirmation email
- [ ] Return `applicationId` in response

### Admin Review Routes

#### Approve Application
- [ ] Create `/app/api/applications/[id]/approve/route.ts`
- [ ] Check user role is `super_admin`
- [ ] Update application status to `approved`
- [ ] Create user account if needed
- [ ] Send approval email
- [ ] Return success message

#### Reject Application
- [ ] Create `/app/api/applications/[id]/reject/route.ts`
- [ ] Check user role is `super_admin`
- [ ] Update application status to `rejected`
- [ ] Send rejection email with notes
- [ ] Return success message

#### List Applications
- [ ] Create `/app/api/applications?status=pending` GET route
- [ ] Check user role is `super_admin`
- [ ] Support filters: `status`, `role`, `country`
- [ ] Support pagination
- [ ] Return application list

### File Upload Route
- [ ] Create `/app/api/upload/route.ts`
- [ ] Check user authentication
- [ ] Validate file type (PDF, JPG, PNG)
- [ ] Validate file size (max 5MB)
- [ ] Upload to Vercel Blob or AWS S3
- [ ] Return file URL
- [ ] Store file URL in database

### Contact Form Route
- [ ] Create `/app/api/contact/route.ts`
- [ ] `POST` handler validates with `contactSchema`
- [ ] Insert into `contact_submissions` table
- [ ] Send confirmation email to user
- [ ] Send notification email to admin
- [ ] Return success message

### Product Routes
- [ ] Create `/app/api/products/route.ts`
- [ ] `GET` - List all products
- [ ] `POST` - Create product (admin only)
- [ ] Create `/app/api/products/[id]/route.ts`
- [ ] `GET` - Get product details
- [ ] `PATCH` - Update product (admin only)

### Calculator Route
- [ ] Create `/app/api/calculator/route.ts`
- [ ] `POST` - Submit calculator inputs
- [ ] Calculate recommended system
- [ ] Calculate savings, ROI, carbon reduction
- [ ] Insert into `calculator_submissions` table
- [ ] Return results with shareable link

**Status**: ⬜️ Not started | 🟨 In progress | ✅ Complete

---

## Phase 4: Admin Dashboard Routes (Days 3-4)

### Analytics Endpoints
- [ ] Create `/app/api/admin/analytics/dashboard/route.ts`
  - [ ] Total users count
  - [ ] Total orders count
  - [ ] Total revenue
  - [ ] Pending applications count
  - [ ] Users by role breakdown

- [ ] Create `/app/api/admin/analytics/sales/route.ts`
  - [ ] Sales by month (last 12 months)
  - [ ] Top products
  - [ ] Revenue trends

- [ ] Create `/app/api/admin/analytics/products/route.ts`
  - [ ] Product performance
  - [ ] Units sold per product
  - [ ] Revenue per product

- [ ] Create `/app/api/admin/analytics/regions/route.ts`
  - [ ] Orders by region
  - [ ] Distributors by region
  - [ ] Revenue by region

### Partner Management Routes
- [ ] Create `/app/api/admin/partners/route.ts`
- [ ] `GET` - List all partners with filters
  - [ ] Filter by `role` (distributor/installer/reseller)
  - [ ] Filter by `status` (active/inactive)
  - [ ] Support pagination
- [ ] `POST` - Create new partner (admin)

- [ ] Create `/app/api/admin/partners/[id]/route.ts`
- [ ] `GET` - Get partner details
- [ ] `PATCH` - Update partner info
- [ ] `DELETE` - Deactivate partner

### Order Management Routes
- [ ] Create `/app/api/admin/orders/route.ts`
- [ ] `GET` - List all orders
  - [ ] Filter by status
  - [ ] Filter by date range
  - [ ] Support pagination

- [ ] Create `/app/api/admin/orders/[id]/route.ts`
- [ ] `GET` - Get order details
- [ ] `PATCH` - Update order status

**Status**: ⬜️ Not started | 🟨 In progress | ✅ Complete

---

## Phase 5: Frontend Integration (Days 5)

### Connect Distributor Form
- [ ] Update `/app/distributor/page.tsx`
- [ ] Add form submission handler
- [ ] Call `POST /api/applications/distributor`
- [ ] Show loading state
- [ ] Show success/error toast
- [ ] Redirect to thank you page on success
- [ ] Test form submission end-to-end

### Connect Reseller Form
- [ ] Update `/app/reseller/page.tsx`
- [ ] Add form submission handler
- [ ] Call `POST /api/applications/reseller`
- [ ] Show loading state
- [ ] Show success/error toast
- [ ] Test form submission end-to-end

### Connect Installer Form
- [ ] Update `/app/installer/page.tsx`
- [ ] Add form submission handler
- [ ] Handle file uploads
- [ ] Call `POST /api/applications/installer`
- [ ] Show loading state
- [ ] Show success/error toast
- [ ] Test form submission end-to-end

### Connect Calculator
- [ ] Update `/app/calculator/page.tsx`
- [ ] Add form submission handler
- [ ] Call `POST /api/calculator`
- [ ] Display results from API
- [ ] Generate shareable link
- [ ] Test calculator end-to-end

### Connect Contact Form
- [ ] Update contact page
- [ ] Add form submission handler
- [ ] Call `POST /api/contact`
- [ ] Show success/error toast
- [ ] Test form submission end-to-end

### Connect Admin Dashboard
- [ ] Update `/app/admin/page.tsx`
- [ ] Call `/api/admin/analytics/dashboard`
- [ ] Display KPI cards with real data
- [ ] Add loading skeleton

- [ ] Update `/app/admin/partners/page.tsx`
- [ ] Call `/api/admin/partners`
- [ ] Display partner list from API
- [ ] Add search and filter functionality

- [ ] Update `/app/admin/orders/page.tsx`
- [ ] Call `/api/admin/orders`
- [ ] Display order list from API
- [ ] Add status update functionality

- [ ] Update `/app/admin/analytics/page.tsx`
- [ ] Call `/api/admin/analytics/*`
- [ ] Display charts with real data

**Status**: ⬜️ Not started | 🟨 In progress | ✅ Complete

---

## Phase 6: Email Notifications (Optional but Recommended)

### Setup Email Service
- [ ] Install Resend: `npm install resend`
- [ ] Add `RESEND_API_KEY` to `.env.local`
- [ ] Create `/lib/email.ts` helper function

### Email Templates
- [ ] Distributor application received
- [ ] Distributor application approved
- [ ] Distributor application rejected
- [ ] Reseller application received
- [ ] Installer application received
- [ ] Application approval notification (to admin)
- [ ] Contact form notification (to admin)
- [ ] Thank you email (to user)

### Send Emails
- [ ] Send on distributor application submission
- [ ] Send on application approval
- [ ] Send on application rejection
- [ ] Send on contact form submission
- [ ] Send admin notifications

**Status**: ⬜️ Not started | 🟨 In progress | ✅ Complete

---

## Phase 7: Testing & QA (Days 6-7)

### API Testing
- [ ] Test all auth endpoints
- [ ] Test all application submission endpoints
- [ ] Test all admin endpoints
- [ ] Test file upload endpoint
- [ ] Test contact form endpoint
- [ ] Test with Postman/cURL
- [ ] Check response status codes
- [ ] Check error messages

### Frontend Testing
- [ ] Test distributor application form
- [ ] Test reseller application form
- [ ] Test installer application form
- [ ] Test calculator
- [ ] Test contact form
- [ ] Test admin dashboard
- [ ] Verify forms submit successfully
- [ ] Verify redirects work
- [ ] Verify error handling

### Database Testing
- [ ] Verify data inserted correctly
- [ ] Check data relationships
- [ ] Verify timestamps set correctly
- [ ] Check for orphaned records
- [ ] Verify indexes created

### Security Testing
- [ ] Test auth middleware
- [ ] Test role-based access control
- [ ] Test CORS (if applicable)
- [ ] Test rate limiting
- [ ] Test SQL injection prevention
- [ ] Test XSS prevention
- [ ] Test password hashing

### Performance Testing
- [ ] Check API response times
- [ ] Check database query performance
- [ ] Test with large datasets
- [ ] Check for N+1 queries

**Status**: ⬜️ Not started | 🟨 In progress | ✅ Complete

---

## Phase 8: Deployment (Day 7)

### Environment Setup
- [ ] Set `DATABASE_URL` on Vercel
- [ ] Set `NEXTAUTH_SECRET` on Vercel
- [ ] Set `NEXTAUTH_URL` on Vercel
- [ ] Set `BLOB_READ_WRITE_TOKEN` on Vercel
- [ ] Set `RESEND_API_KEY` on Vercel
- [ ] Set `ADMIN_EMAIL` on Vercel
- [ ] Verify all env vars are set

### Pre-Deployment Checks
- [ ] All tests passing
- [ ] No console errors/warnings
- [ ] Database migrations applied
- [ ] API endpoints tested
- [ ] Forms working end-to-end
- [ ] Admin dashboard functional
- [ ] Email notifications working

### Deployment
- [ ] Push changes to main branch
- [ ] Deploy to staging first
- [ ] Test all features on staging
- [ ] Deploy to production
- [ ] Monitor logs for errors
- [ ] Verify all pages load
- [ ] Verify forms submit
- [ ] Verify admin dashboard works

### Post-Deployment
- [ ] Monitor error logs
- [ ] Check database performance
- [ ] Verify email notifications sent
- [ ] Test user registration flow
- [ ] Test application submission flow
- [ ] Test admin approval workflow

**Status**: ⬜️ Not started | 🟨 In progress | ✅ Complete

---

## Overall Progress

### Summary
```
Phase 1: Database Setup         ⬜️ 0% [...................]
Phase 2: Authentication         ⬜️ 0% [...................]
Phase 3: API Routes             ⬜️ 0% [...................]
Phase 4: Admin Routes           ⬜️ 0% [...................]
Phase 5: Frontend Integration   ⬜️ 0% [...................]
Phase 6: Email Setup            ⬜️ 0% [...................]
Phase 7: Testing & QA           ⬜️ 0% [...................]
Phase 8: Deployment             ⬜️ 0% [...................]

Total Progress: ⬜️ 0%
```

### Timeline
- **Days 1-2**: Database & Authentication
- **Days 3-4**: API Routes & Admin Endpoints
- **Day 5**: Frontend Integration
- **Day 6**: Testing & QA
- **Day 7**: Deployment

**Estimated Total**: 7 days for experienced developer, 10-14 days for learning

---

## Quick Reference Links

- **Full Documentation**: See `BACKEND_SETUP.md`
- **Code Examples**: See `API_IMPLEMENTATION_GUIDE.md`
- **Quick Start**: See `BACKEND_QUICK_START.md`
- **Project Status**: See `PROJECT_SUMMARY.md`

---

## Notes

- Frontend is ready and waiting for backend
- All forms have validation with Zod
- Database schema is provided
- API route examples are provided
- Use this checklist to track progress
- Update status as you complete each item

---

**Start Date**: _____________
**Expected End Date**: _____________
**Actual End Date**: _____________

**Notes**:
_________________________________
_________________________________
_________________________________
