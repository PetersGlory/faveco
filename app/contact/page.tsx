'use client';

import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, Zap, Phone, Mail, MapPin, Clock, MessageSquare,
  Send, CheckCircle2, ChevronDown, Building2, User
} from 'lucide-react';
import { useState } from 'react';

const offices = [
  {
    city: 'Lagos (HQ)',
    address: '14 Adeola Odeku Street, Victoria Island, Lagos',
    phone: '+234 801 234 5678',
    email: 'lagos@faveco.ng',
    hours: 'Mon – Fri: 8am – 6pm\nSat: 9am – 2pm',
  },
  {
    city: 'Abuja',
    address: 'Plot 44 Gana Street, Maitama, Abuja',
    phone: '+234 802 345 6789',
    email: 'abuja@faveco.ng',
    hours: 'Mon – Fri: 8am – 6pm\nSat: 9am – 1pm',
  },
  {
    city: 'Port Harcourt',
    address: '7 Trans-Amadi Road, Port Harcourt, Rivers',
    phone: '+234 803 456 7890',
    email: 'ph@faveco.ng',
    hours: 'Mon – Fri: 8am – 5pm',
  },
];

const contactReasons = [
  'General Enquiry',
  'Product / System Information',
  'Request a Quote',
  'Installation Booking',
  'After-Sales & Support',
  'Payment & Finance Plans',
  'Partnership / Dealer Enquiry',
  'Media & Press',
  'Careers / Job Application',
  'Other',
];

const faqs = [
  {
    q: 'How long does installation take?',
    a: 'Most residential installations are completed within 1–2 days. Larger commercial projects typically take 3–7 working days depending on system size and site conditions.',
  },
  {
    q: 'Do you offer financing or payment plans?',
    a: 'Yes — we offer monthly and quarterly instalment plans, as well as outright purchase and lease options. Our sales team will walk you through what works best for your budget.',
  },
  {
    q: 'What warranty do your systems carry?',
    a: 'Solar panels carry a 20–25 year performance warranty. Inverters are covered for 5–10 years. All FavEco installations include a 12-month workmanship warranty.',
  },
  {
    q: 'Can I add battery storage to my existing solar system?',
    a: 'In most cases, yes. Our engineers will assess your existing setup and recommend compatible battery storage options. Contact us to arrange a site assessment.',
  },
  {
    q: 'Do you cover my state?',
    a: 'FavEco currently covers all 36 states plus the FCT. Our field teams operate out of major hubs with certified partner installers in other locations.',
  },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  consent: boolean;
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-border rounded-xl overflow-hidden bg-white cursor-pointer hover:border-primary/30 transition-colors"
      onClick={() => setOpen(v => !v)}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-4">
        <h3 className="text-sm font-semibold text-foreground leading-snug">{q}</h3>
        <ChevronDown className={`w-4 h-4 text-foreground/40 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </div>
      {open && (
        <div className="px-5 pb-4 border-t border-border/50 pt-3">
          <p className="text-sm text-foreground/70 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '', email: '', phone: '', company: '', subject: '', message: '', consent: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setForm(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Enter a valid email';
    if (!form.subject) e.subject = 'Please select a subject';
    if (!form.message.trim() || form.message.length < 20) e.message = 'Please write at least 20 characters';
    if (!form.consent) e.consent = 'Please agree to be contacted';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 mb-6 text-primary hover:text-primary/80 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 mb-5">
            <MessageSquare className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">Get in Touch</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-5 text-balance leading-tight">
                We'd Love to Hear from You
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
                Whether you have a question about our solar systems, need a quote, or want to explore a partnership — our team is ready to help.
              </p>
            </div>
            {/* Quick contact pills */}
            <div className="flex flex-wrap gap-3">
              <a href="tel:+2348012345678" className="inline-flex items-center gap-2.5 px-4 py-3 bg-white border-2 border-border rounded-xl hover:border-primary/40 transition-all group">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-foreground/50 font-medium">Call us</p>
                  <p className="text-sm font-bold text-foreground">+234 801 234 5678</p>
                </div>
              </a>
              <a href="mailto:hello@faveco.ng" className="inline-flex items-center gap-2.5 px-4 py-3 bg-white border-2 border-border rounded-xl hover:border-primary/40 transition-all group">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-foreground/50 font-medium">Email us</p>
                  <p className="text-sm font-bold text-foreground">hello@faveco.ng</p>
                </div>
              </a>
              <div className="inline-flex items-center gap-2.5 px-4 py-3 bg-white border-2 border-border rounded-xl">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-foreground/50 font-medium">Response time</p>
                  <p className="text-sm font-bold text-foreground">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content: Form + Offices */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Form — spans 3 cols */}
          <div className="lg:col-span-3">
            <div className="bg-white border-2 border-border rounded-2xl overflow-hidden">
              <div className="px-6 py-5 bg-muted/30 border-b border-border flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Send className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-foreground">Send Us a Message</h2>
                  <p className="text-xs text-foreground/50">We'll respond within 24 hours</p>
                </div>
              </div>

              {submitted ? (
                <div className="p-12 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-foreground/60 mb-6 leading-relaxed max-w-sm mx-auto">
                    Thanks, <strong>{form.name.split(' ')[0]}</strong>. We've received your message and will be in touch shortly.
                  </p>
                  <Button
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold"
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', subject: '', message: '', consent: false }); }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="p-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                        <input
                          value={form.name}
                          onChange={set('name')}
                          placeholder="Your full name"
                          className={`w-full h-12 pl-10 pr-4 rounded-xl border-2 bg-white text-sm placeholder:text-foreground/40 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.name ? 'border-red-400' : 'border-border hover:border-primary/50'}`}
                        />
                      </div>
                      {errors.name && <p className="mt-1 text-xs text-red-500 font-medium">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                        <input
                          type="email"
                          value={form.email}
                          onChange={set('email')}
                          placeholder="you@example.com"
                          className={`w-full h-12 pl-10 pr-4 rounded-xl border-2 bg-white text-sm placeholder:text-foreground/40 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.email ? 'border-red-400' : 'border-border hover:border-primary/50'}`}
                        />
                      </div>
                      {errors.email && <p className="mt-1 text-xs text-red-500 font-medium">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={set('phone')}
                          placeholder="+234 800 000 0000"
                          className="w-full h-12 pl-10 pr-4 rounded-xl border-2 border-border bg-white text-sm placeholder:text-foreground/40 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-primary/50 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Company / Organisation</label>
                      <div className="relative">
                        <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                        <input
                          value={form.company}
                          onChange={set('company')}
                          placeholder="Optional"
                          className="w-full h-12 pl-10 pr-4 rounded-xl border-2 border-border bg-white text-sm placeholder:text-foreground/40 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-primary/50 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Subject <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={form.subject}
                        onChange={set('subject')}
                        className={`w-full h-12 pl-4 pr-10 rounded-xl border-2 bg-white text-sm appearance-none outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 cursor-pointer ${errors.subject ? 'border-red-400' : 'border-border hover:border-primary/50'}`}
                      >
                        <option value="">Select a subject…</option>
                        {contactReasons.map(r => <option key={r}>{r}</option>)}
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40 pointer-events-none" />
                    </div>
                    {errors.subject && <p className="mt-1 text-xs text-red-500 font-medium">{errors.subject}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={set('message')}
                      placeholder="Tell us how we can help you…"
                      className={`w-full px-4 py-3 rounded-xl border-2 bg-white text-sm placeholder:text-foreground/40 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none ${errors.message ? 'border-red-400' : 'border-border hover:border-primary/50'}`}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500 font-medium">{errors.message}</p>}
                  </div>

                  <label className={`flex items-start gap-3 cursor-pointer`}>
                    <div className="relative mt-0.5 flex-shrink-0">
                      <input type="checkbox" checked={form.consent} onChange={e => { setForm(p => ({ ...p, consent: e.target.checked })); setErrors(p => ({ ...p, consent: '' })); }} className="sr-only" />
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${form.consent ? 'bg-primary border-primary' : errors.consent ? 'border-red-400' : 'border-border'}`}>
                        {form.consent && <CheckCircle2 className="w-3.5 h-3.5 text-white fill-white" />}
                      </div>
                    </div>
                    <span className={`text-sm leading-relaxed ${errors.consent ? 'text-red-500' : 'text-foreground/70'}`}>
                      I agree to be contacted by the FavEco team in response to this message.
                      {errors.consent && <span className="block mt-1 font-medium">{errors.consent}</span>}
                    </span>
                  </label>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full h-13 bg-primary hover:bg-primary/90 text-white font-bold flex items-center justify-center gap-2 rounded-xl disabled:opacity-70 disabled:cursor-not-allowed py-4"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Right col — 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            {/* Offices */}
            <div>
              <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Our Offices
              </h2>
              <div className="space-y-4">
                {offices.map(office => (
                  <div key={office.city} className="bg-white rounded-2xl border border-border p-5 hover:border-primary/30 hover:shadow-md transition-all">
                    <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {office.city}
                    </h3>
                    <div className="space-y-2 text-sm text-foreground/70">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                        <a href={`tel:${office.phone}`} className="hover:text-primary transition-colors font-medium">{office.phone}</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                        <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors font-medium">{office.email}</a>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="whitespace-pre-line leading-relaxed">{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support channels */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
              <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-widest text-primary">Quick Support</h3>
              <div className="space-y-3">
                {[
                  { label: 'General Enquiries', value: 'hello@faveco.ng', href: 'mailto:hello@faveco.ng', icon: Mail },
                  { label: 'Sales & Quotes', value: '+234 801 234 5678', href: 'tel:+2348012345678', icon: Phone },
                  { label: 'After-Sales Support', value: 'support@faveco.ng', href: 'mailto:support@faveco.ng', icon: MessageSquare },
                ].map(({ label, value, href, icon: Icon }) => (
                  <a key={label} href={href} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-border hover:border-primary/30 transition-all group">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50 font-medium">{label}</p>
                      <p className="text-sm font-bold text-foreground">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">FAQs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Common Questions</h2>
            <p className="text-foreground/60 leading-relaxed">Answers to what we get asked most often.</p>
          </div>
          <div className="space-y-3">
            {faqs.map(faq => <FAQItem key={faq.q} {...faq} />)}
          </div>
          <p className="text-center text-sm text-foreground/50 mt-8">
            Still have questions?{' '}
            <a href="mailto:hello@faveco.ng" className="text-primary font-semibold hover:underline">
              Email us directly
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}