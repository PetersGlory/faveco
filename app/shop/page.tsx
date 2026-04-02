'use client';

import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, Zap, ChevronDown, X, Search, CheckCircle2,
  User, Mail, Phone, MapPin, Building2, MessageSquare, Send
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

// ── Types ──────────────────────────────────────────────────────────────────────
interface Product {
  id: string;
  name: string;
  power: string;
  category: string;
  description: string;
}

// ── Data ───────────────────────────────────────────────────────────────────────
const products: Product[] = [
  { id: 'smart',   name: 'FavEco Smart',  power: '1kW – 5kW',   category: 'Residential', description: 'Best for modern homes & small apartments' },
  { id: 'active',  name: 'FavEco Active', power: '5kW – 10kW',  category: 'Residential', description: 'Ideal for mid-size homes & small businesses' },
  { id: 'grow',    name: 'FavEco Grow',   power: '10kW – 25kW', category: 'Residential', description: 'Premium power for large homes & estates' },
  { id: 'flow',    name: 'FavEco Flow',   power: '25kW+',       category: 'Commercial',  description: 'Enterprise-grade for large-scale needs' },
];

const nigerianStates = [
  'Abia','Adamawa','Akwa Ibom','Anambra','Bauchi','Bayelsa','Benue','Borno',
  'Cross River','Delta','Ebonyi','Edo','Ekiti','Enugu','FCT - Abuja','Gombe',
  'Imo','Jigawa','Kaduna','Kano','Katsina','Kebbi','Kogi','Kwara','Lagos',
  'Nasarawa','Niger','Ogun','Ondo','Osun','Oyo','Plateau','Rivers','Sokoto',
  'Taraba','Yobe','Zamfara',
];

const installationTypes = [
  'New Installation',
  'Upgrade / Expansion',
  'Replacement of Existing System',
  'Battery Backup Only',
  'Not Sure – Need Consultation',
];

const heardAboutUs = [
  'Google / Search Engine',
  'Social Media',
  'Word of Mouth / Referral',
  'Billboard / Outdoor Ad',
  'TV / Radio',
  'Exhibition / Event',
  'Other',
];

// ── Searchable Multi-Select Component ──────────────────────────────────────────
function ProductMultiSelect({
  selected,
  onChange,
  error,
}: {
  selected: string[];
  onChange: (ids: string[]) => void;
  error?: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filtered = products.filter(
    p =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.power.toLowerCase().includes(query.toLowerCase())
  );

  const toggle = (id: string) => {
    onChange(selected.includes(id) ? selected.filter(s => s !== id) : [...selected, id]);
  };

  const selectedProducts = products.filter(p => selected.includes(p.id));

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <div
        onClick={() => setOpen(v => !v)}
        className={`min-h-[48px] w-full flex flex-wrap items-center gap-2 px-4 py-3 rounded-xl border-2 cursor-pointer bg-white transition-colors ${
          error
            ? 'border-red-400'
            : open
            ? 'border-primary ring-2 ring-primary/20'
            : 'border-border hover:border-primary/50'
        }`}
      >
        {selectedProducts.length === 0 ? (
          <span className="text-sm text-foreground/40 select-none">Select one or more products…</span>
        ) : (
          selectedProducts.map(p => (
            <span
              key={p.id}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-lg border border-primary/20"
            >
              {p.name}
              <button
                type="button"
                onClick={e => { e.stopPropagation(); toggle(p.id); }}
                className="hover:text-primary/60 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))
        )}
        <ChevronDown
          className={`w-4 h-4 text-foreground/40 ml-auto flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-[999999] mt-2 w-full bg-white border-2 border-primary/20 rounded-xl shadow-xl overflow-hidden">
          {/* Search */}
          <div className="px-3 pt-3 pb-2 border-b border-border">
            <div className="flex items-center gap-2 px-3 py-2 bg-muted/40 rounded-lg">
              <Search className="w-4 h-4 text-foreground/40 flex-shrink-0" />
              <input
                autoFocus
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search by name, power or type…"
                className="w-full text-sm bg-transparent outline-none text-foreground placeholder:text-foreground/40"
              />
            </div>
          </div>

          {/* Options */}
          <ul className="py-1 max-h-64 overflow-y-auto">
            {filtered.length === 0 ? (
              <li className="px-4 py-6 text-center text-sm text-foreground/40">No products found</li>
            ) : (
              filtered.map(p => {
                const isSelected = selected.includes(p.id);
                return (
                  <li
                    key={p.id}
                    onClick={() => toggle(p.id)}
                    className={`flex items-start gap-3 px-4 py-3 cursor-pointer transition-colors ${
                      isSelected ? 'bg-primary/5' : 'hover:bg-muted/40'
                    }`}
                  >
                    <div
                      className={`mt-0.5 w-4 h-4 rounded flex-shrink-0 flex items-center justify-center border-2 transition-colors ${
                        isSelected ? 'bg-primary border-primary' : 'border-border'
                      }`}
                    >
                      {isSelected && <CheckCircle2 className="w-3 h-3 text-white fill-white" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-semibold text-foreground">{p.name}</span>
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{p.power}</span>
                        <span className="text-xs text-foreground/40 bg-muted px-2 py-0.5 rounded-full">{p.category}</span>
                      </div>
                      <p className="text-xs text-foreground/50 mt-0.5">{p.description}</p>
                    </div>
                  </li>
                );
              })
            )}
          </ul>

          {selected.length > 0 && (
            <div className="px-4 py-2 border-t border-border bg-muted/20">
              <button
                type="button"
                onClick={() => onChange([])}
                className="text-xs text-foreground/50 hover:text-red-500 transition-colors font-medium"
              >
                Clear all selections
              </button>
            </div>
          )}
        </div>
      )}

      {error && <p className="mt-1.5 text-xs text-red-500 font-medium">{error}</p>}
    </div>
  );
}

// ── Field Components ───────────────────────────────────────────────────────────
function FieldLabel({ label, required }: { label: string; required?: boolean }) {
  return (
    <label className="block text-sm font-semibold text-foreground mb-2">
      {label}
      {required && <span className="text-primary ml-1">*</span>}
    </label>
  );
}

function InputField({
  icon: Icon,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ElementType;
  error?: string;
}) {
  return (
    <div>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40 pointer-events-none" />
        )}
        <input
          {...props}
          className={`w-full h-12 ${Icon ? 'pl-10' : 'pl-4'} pr-4 rounded-xl border-2 bg-white text-sm text-foreground placeholder:text-foreground/40 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${
            error ? 'border-red-400' : 'border-border hover:border-primary/50'
          } ${props.className ?? ''}`}
        />
      </div>
      {error && <p className="mt-1.5 text-xs text-red-500 font-medium">{error}</p>}
    </div>
  );
}

function SelectField({
  children,
  error,
  icon: Icon,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  error?: string;
  icon?: React.ElementType;
}) {
  return (
    <div>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40 pointer-events-none z-10" />
        )}
        <select
          {...props}
          className={`w-full h-12 appearance-none ${Icon ? 'pl-10' : 'pl-4'} pr-10 rounded-xl border-2 bg-white text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 cursor-pointer ${
            error ? 'border-red-400' : 'border-border hover:border-primary/50'
          } ${props.className ?? ''}`}
        >
          {children}
        </select>
        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40 pointer-events-none" />
      </div>
      {error && <p className="mt-1.5 text-xs text-red-500 font-medium">{error}</p>}
    </div>
  );
}

// ── Form State ─────────────────────────────────────────────────────────────────
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  customerType: string;
  state: string;
  address: string;
  selectedProducts: string[];
  installationType: string;
  propertyType: string;
  monthlyBill: string;
  currentProvider: string;
  timeline: string;
  paymentPreference: string;
  additionalInfo: string;
  heardAbout: string;
  consent: boolean;
}

const emptyForm: FormData = {
  firstName: '', lastName: '', email: '', phone: '', company: '',
  customerType: '', state: '', address: '',
  selectedProducts: [],
  installationType: '', propertyType: '', monthlyBill: '', currentProvider: '',
  timeline: '', paymentPreference: '', additionalInfo: '', heardAbout: '',
  consent: false,
};

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function ShopPage() {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.type === 'checkbox'
      ? (e.target as HTMLInputElement).checked
      : e.target.value;
    setForm(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.firstName.trim()) e.firstName = 'First name is required';
    if (!form.lastName.trim()) e.lastName = 'Last name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Enter a valid email address';
    if (!form.phone.match(/^\+?[\d\s\-()]{7,15}$/)) e.phone = 'Enter a valid phone number';
    if (!form.customerType) e.customerType = 'Please select a customer type';
    if (!form.state) e.state = 'Please select your state';
    if (form.selectedProducts.length === 0) e.selectedProducts = 'Please select at least one product';
    if (!form.installationType) e.installationType = 'Please select an installation type';
    if (!form.propertyType) e.propertyType = 'Please select a property type';
    if (!form.paymentPreference) e.paymentPreference = 'Please select a payment preference';
    if (!form.consent) e.consent = 'You must agree to be contacted';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1800)); // simulate API call
    setSubmitting(false);
    setSubmitted(true);
  };

  // ── Success State ────────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <main className="overflow-hidden">
        <Navigation />
        <section className="min-h-[80vh] flex items-center justify-center px-4 py-32">
          <div className="text-center max-w-md mx-auto">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-3">Request Received!</h1>
            <p className="text-foreground/60 leading-relaxed mb-8">
              Thank you, <strong>{form.firstName}</strong>. Our solar consultants will review your request and get back to you within <strong>24–48 hours</strong>.
            </p>
            <div className="bg-muted/40 rounded-xl border border-border p-4 text-left mb-8 space-y-2">
              <p className="text-xs font-semibold text-foreground/50 uppercase tracking-widest mb-3">Your Selected Products</p>
              {products.filter(p => form.selectedProducts.includes(p.id)).map(p => (
                <div key={p.id} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="text-sm font-semibold text-foreground">{p.name}</span>
                  <span className="text-xs text-primary font-bold">({p.power})</span>
                </div>
              ))}
            </div>
            <Button
              onClick={() => { setSubmitted(false); setForm(emptyForm); }}
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold"
            >
              Submit Another Request
            </Button>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  // ── Form ─────────────────────────────────────────────────────────────────────
  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-3xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 mb-6 text-primary hover:text-primary/80 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">Product Request Form</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Request a Solar System
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">
            Fill in the details below and our team will reach out with a tailored proposal, pricing, and installation timeline for your property.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} noValidate className="space-y-10">

            {/* ── Section 1: Personal Info ──────────────────────────────── */}
            <div className="bg-white border-2 border-border rounded-2xl overflow-hidden">
              <div className="px-6 py-4 bg-muted/30 border-b border-border flex items-center gap-3">
                <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-foreground">Personal Information</h2>
                  <p className="text-xs text-foreground/50">Tell us about yourself</p>
                </div>
              </div>
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <FieldLabel label="First Name" required />
                  <InputField icon={User} placeholder="e.g. Emeka" value={form.firstName} onChange={set('firstName')} error={errors.firstName} />
                </div>
                <div>
                  <FieldLabel label="Last Name" required />
                  <InputField placeholder="e.g. Okafor" value={form.lastName} onChange={set('lastName')} error={errors.lastName} />
                </div>
                <div>
                  <FieldLabel label="Email Address" required />
                  <InputField icon={Mail} type="email" placeholder="you@example.com" value={form.email} onChange={set('email')} error={errors.email} />
                </div>
                <div>
                  <FieldLabel label="Phone Number" required />
                  <InputField icon={Phone} type="tel" placeholder="+234 800 000 0000" value={form.phone} onChange={set('phone')} error={errors.phone} />
                </div>
                <div>
                  <FieldLabel label="Company / Organisation" />
                  <InputField icon={Building2} placeholder="Optional — for business customers" value={form.company} onChange={set('company')} />
                </div>
                <div>
                  <FieldLabel label="Customer Type" required />
                  <SelectField icon={User} value={form.customerType} onChange={set('customerType')} error={errors.customerType}>
                    <option value="">Select type…</option>
                    <option>Individual / Homeowner</option>
                    <option>Business / SME</option>
                    <option>Corporate / Enterprise</option>
                    <option>Government / Institution</option>
                    <option>Property Developer</option>
                  </SelectField>
                </div>
              </div>
            </div>

            {/* ── Section 2: Location ───────────────────────────────────── */}
            <div className="bg-white border-2 border-border rounded-2xl overflow-hidden">
              <div className="px-6 py-4 bg-muted/30 border-b border-border flex items-center gap-3">
                <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-foreground">Installation Location</h2>
                  <p className="text-xs text-foreground/50">Where do you need the system installed?</p>
                </div>
              </div>
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <FieldLabel label="State" required />
                  <SelectField icon={MapPin} value={form.state} onChange={set('state')} error={errors.state}>
                    <option value="">Select state…</option>
                    {nigerianStates.map(s => <option key={s}>{s}</option>)}
                  </SelectField>
                </div>
                <div>
                  <FieldLabel label="Property Type" required />
                  <SelectField value={form.propertyType} onChange={set('propertyType')} error={errors.propertyType}>
                    <option value="">Select property type…</option>
                    <option>Apartment / Flat</option>
                    <option>Detached House</option>
                    <option>Semi-Detached House</option>
                    <option>Duplex</option>
                    <option>Bungalow</option>
                    <option>Office Building</option>
                    <option>Warehouse / Factory</option>
                    <option>Mixed Use</option>
                    <option>Other</option>
                  </SelectField>
                </div>
                <div className="sm:col-span-2">
                  <FieldLabel label="Property Address" />
                  <InputField icon={MapPin} placeholder="Street address, City (optional but helpful)" value={form.address} onChange={set('address')} />
                </div>
              </div>
            </div>

            {/* ── Section 3: Product Selection ──────────────────────────── */}
            <div className="bg-white border-2 border-border rounded-2xl overflow-hidden">
              <div className="px-6 py-4 bg-muted/30 border-b border-border flex items-center gap-3">
                <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-foreground">Product Selection</h2>
                  <p className="text-xs text-foreground/50">Search and select the systems you're interested in</p>
                </div>
              </div>
              <div className="p-6 space-y-5">
                <div>
                  <FieldLabel label="Interested Products" required />
                  <ProductMultiSelect
                    selected={form.selectedProducts}
                    onChange={ids => { setForm(prev => ({ ...prev, selectedProducts: ids })); setErrors(prev => ({ ...prev, selectedProducts: '' })); }}
                    error={errors.selectedProducts}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <FieldLabel label="Installation Type" required />
                    <SelectField value={form.installationType} onChange={set('installationType')} error={errors.installationType}>
                      <option value="">Select…</option>
                      {installationTypes.map(t => <option key={t}>{t}</option>)}
                    </SelectField>
                  </div>
                  <div>
                    <FieldLabel label="Preferred Timeline" />
                    <SelectField value={form.timeline} onChange={set('timeline')}>
                      <option value="">Select timeline…</option>
                      <option>As soon as possible</option>
                      <option>Within 1 month</option>
                      <option>1 – 3 months</option>
                      <option>3 – 6 months</option>
                      <option>6+ months (planning stage)</option>
                    </SelectField>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Section 4: Energy Details ─────────────────────────────── */}
            <div className="bg-white border-2 border-border rounded-2xl overflow-hidden">
              <div className="px-6 py-4 bg-muted/30 border-b border-border flex items-center gap-3">
                <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-foreground">Current Energy Usage</h2>
                  <p className="text-xs text-foreground/50">Helps us recommend the right system size</p>
                </div>
              </div>
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <FieldLabel label="Estimated Monthly Power Bill" />
                  <SelectField value={form.monthlyBill} onChange={set('monthlyBill')}>
                    <option value="">Select range…</option>
                    <option>Below ₦20,000</option>
                    <option>₦20,000 – ₦50,000</option>
                    <option>₦50,000 – ₦100,000</option>
                    <option>₦100,000 – ₦250,000</option>
                    <option>₦250,000 – ₦500,000</option>
                    <option>Above ₦500,000</option>
                    <option>I don't know</option>
                  </SelectField>
                </div>
                <div>
                  <FieldLabel label="Current Power Provider" />
                  <SelectField value={form.currentProvider} onChange={set('currentProvider')}>
                    <option value="">Select…</option>
                    <option>IKEDC (Ikeja Electric)</option>
                    <option>EKEDC (Eko Electric)</option>
                    <option>AEDC (Abuja Electric)</option>
                    <option>PHEDC (Port Harcourt Electric)</option>
                    <option>EEDC (Enugu Electric)</option>
                    <option>IBEDC (Ibadan Electric)</option>
                    <option>KAEDCO (Kaduna Electric)</option>
                    <option>Other DISCO</option>
                    <option>Generator Only</option>
                    <option>Off-Grid / No Current Supply</option>
                  </SelectField>
                </div>
                <div>
                  <FieldLabel label="Preferred Payment Plan" required />
                  <SelectField value={form.paymentPreference} onChange={set('paymentPreference')} error={errors.paymentPreference}>
                    <option value="">Select plan…</option>
                    <option>Full Outright Payment</option>
                    <option>Monthly Instalments</option>
                    <option>Quarterly Instalments</option>
                    <option>Lease / Pay-as-you-go</option>
                    <option>Open to Discussion</option>
                  </SelectField>
                </div>
                <div>
                  <FieldLabel label="How Did You Hear About Us?" />
                  <SelectField value={form.heardAbout} onChange={set('heardAbout')}>
                    <option value="">Select…</option>
                    {heardAboutUs.map(h => <option key={h}>{h}</option>)}
                  </SelectField>
                </div>
              </div>
            </div>

            {/* ── Section 5: Additional Notes ───────────────────────────── */}
            <div className="bg-white border-2 border-border rounded-2xl overflow-hidden">
              <div className="px-6 py-4 bg-muted/30 border-b border-border flex items-center gap-3">
                <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-foreground">Additional Notes</h2>
                  <p className="text-xs text-foreground/50">Any special requirements or questions?</p>
                </div>
              </div>
              <div className="p-6">
                <textarea
                  rows={4}
                  placeholder="Tell us about your specific energy needs, any existing equipment, site constraints, or questions you have for our team…"
                  value={form.additionalInfo}
                  onChange={set('additionalInfo')}
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-white text-sm text-foreground placeholder:text-foreground/40 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none hover:border-primary/50"
                />
              </div>
            </div>

            {/* ── Consent + Submit ──────────────────────────────────────── */}
            <div className="space-y-6">
              <label className={`flex items-start gap-3 cursor-pointer group ${errors.consent ? 'text-red-500' : ''}`}>
                <div className="relative mt-0.5 flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={e => { setForm(prev => ({ ...prev, consent: e.target.checked })); setErrors(prev => ({ ...prev, consent: '' })); }}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                    form.consent ? 'bg-primary border-primary' : errors.consent ? 'border-red-400' : 'border-border group-hover:border-primary/50'
                  }`}>
                    {form.consent && <CheckCircle2 className="w-3.5 h-3.5 text-white fill-white" />}
                  </div>
                </div>
                <span className={`text-sm leading-relaxed ${errors.consent ? 'text-red-500' : 'text-foreground/70'}`}>
                  I agree to be contacted by FavEco regarding this request. My information will be used solely to process this enquiry and will not be shared with third parties.
                  {errors.consent && <span className="block mt-1 font-medium">{errors.consent}</span>}
                </span>
              </label>

              <Button
                type="submit"
                disabled={submitting}
                size="lg"
                className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-base rounded-xl flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
              >
                {submitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting Request…
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Solar Request
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-foreground/40 leading-relaxed">
                Our team typically responds within 24–48 hours. For urgent enquiries call{' '}
                <a href="tel:+2348000000000" className="text-primary font-semibold hover:underline">+234 800 000 0000</a>.
              </p>
            </div>

          </form>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Free Consultation', desc: 'No obligation site assessment' },
              { title: 'Custom Proposals', desc: 'Tailored to your energy needs' },
              { title: 'Flexible Finance', desc: 'Monthly & quarterly plans' },
              { title: '24/7 Support', desc: "We're always here to help" },
            ].map((item, i) => (
              <div key={i} className="text-center p-4 bg-white rounded-xl border border-border">
                <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-primary font-bold text-xs">✓</span>
                </div>
                <h3 className="font-bold text-foreground text-xs mb-1">{item.title}</h3>
                <p className="text-xs text-foreground/50 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}