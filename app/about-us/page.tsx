'use client';

import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, Zap, Sun, Users, Globe, Award, TrendingUp,
  CheckCircle2, ArrowRight, Leaf, Shield, Clock
} from 'lucide-react';

const stats = [
  { value: '12+', label: 'Years of Experience', icon: Clock },
  { value: '8,400+', label: 'Installations Completed', icon: Sun },
  { value: '34', label: 'States Covered', icon: Globe },
  { value: '99.2%', label: 'Customer Satisfaction', icon: Award },
];

const values = [
  {
    icon: Leaf,
    title: 'Sustainability First',
    desc: 'Every system we install reduces carbon emissions and dependence on fossil fuels. We measure our impact in tonnes of CO₂ avoided every year.',
  },
  {
    icon: Shield,
    title: 'Uncompromising Quality',
    desc: 'We only partner with globally certified manufacturers. Every installation is backed by our in-house quality assurance team before sign-off.',
  },
  {
    icon: Users,
    title: 'People Over Profit',
    desc: 'From our engineers to our customers, we invest in relationships. Long-term support and honest advice define how we do business.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation Driven',
    desc: 'We track the latest in solar, storage, and smart energy tech so our customers always get cutting-edge, future-proof solutions.',
  },
];

const team = [
  {
    name: 'Adaeze Nwosu',
    role: 'Chief Executive Officer',
    bio: '15 years in renewable energy policy and project finance across West Africa.',
    initials: 'AN',
  },
  {
    name: 'Emeka Obi',
    role: 'Head of Engineering',
    bio: 'Led 3,000+ residential and commercial solar installations across Nigeria.',
    initials: 'EO',
  },
  {
    name: 'Fatima Al-Hassan',
    role: 'Chief Operations Officer',
    bio: 'Operations and supply chain expert with a background in energy logistics.',
    initials: 'FA',
  },
  {
    name: 'Tunde Alabi',
    role: 'Director of Sales',
    bio: "Built FavEco's national distribution and dealer network from the ground up.",
    initials: 'TA',
  },
];

const milestones = [
  { year: '2012', event: 'FavEco founded in Lagos with a team of 6 engineers and a mission to democratise clean energy.' },
  { year: '2015', event: 'First 1,000 residential installations completed. Expanded to Abuja and Port Harcourt.' },
  { year: '2018', event: 'Launched commercial & industrial division. Signed first enterprise contracts.' },
  { year: '2020', event: 'Hit 5,000 installations. Introduced FavEco Active and FavEco Grow product lines.' },
  { year: '2022', event: 'Expanded coverage to all 36 states + FCT. Launched the FavEco Flow enterprise system.' },
  { year: '2024', event: 'Over 8,400 installations. Launched flexible payment plans and 24/7 remote monitoring.' },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 mb-6 text-primary hover:text-primary/80 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 mb-5">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">Our Story</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
                Powering Nigeria's Clean Energy Future
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed mb-8 max-w-xl">
                Since 2012, FavEco has been on a single mission: make reliable, affordable solar energy accessible to every Nigerian home and business. We've built a reputation on honest advice, quality systems, and long-term partnerships.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/shop">
                  <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-5 flex items-center gap-2">
                    Get a System <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <a href="/contact">
                  <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-6 py-5">
                    Talk to Us
                  </Button>
                </a>
              </div>
            </div>
            {/* Visual block */}
            <div className="relative hidden lg:block">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex flex-col gap-3 p-6 opacity-10">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="flex gap-2">
                      {[...Array(6)].map((_, j) => (
                        <div key={j} className="flex-1 h-8 bg-primary rounded" style={{ opacity: 0.3 + Math.random() * 0.7 }} />
                      ))}
                    </div>
                  ))}
                </div>
                <Sun className="w-24 h-24 text-primary opacity-30" />
              </div>
              {/* floating stat */}
              <div className="absolute -bottom-6 -left-6 bg-white border-2 border-primary/20 rounded-xl p-4 shadow-xl">
                <p className="text-3xl font-bold text-primary">8,400+</p>
                <p className="text-xs text-foreground/60 font-medium">Installations Nationwide</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-primary text-white rounded-xl p-4 shadow-xl">
                <p className="text-2xl font-bold">12+</p>
                <p className="text-xs font-medium opacity-90">Years in Solar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all bg-white group">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-4xl font-bold text-primary mb-1">{value}</p>
                <p className="text-sm text-foreground/60 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 mb-5">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">Our Mission</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
              Clean, Reliable Energy Should Not Be a Luxury
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-6">
              Nigeria's energy challenges are well documented — but too often the solutions are priced out of reach or poorly supported. FavEco was built to change that. We design accessible, scalable solar systems backed by genuine after-sales support.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Whether you're a homeowner tired of NEPA failures, a business owner protecting your operations, or a developer building smarter estates — we have a system, a plan, and a team ready for you.
            </p>
            <ul className="space-y-3">
              {[
                'Certified engineers on every installation',
                'Systems designed for Nigerian climate and grid conditions',
                'Transparent pricing with no hidden charges',
                'Post-installation monitoring and maintenance',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-5 bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all">
                <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-sm mb-2">{title}</h3>
                <p className="text-xs text-foreground/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">Our Journey</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground">From Startup to National Leader</h2>
          </div>
          <div className="relative">
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8">
              {milestones.map(({ year, event }) => (
                <div key={year} className="flex gap-6 items-start">
                  <div className="w-[72px] flex-shrink-0 flex items-center justify-end pr-4">
                    <span className="text-sm font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-lg border border-primary/20">{year}</span>
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="w-3 h-3 bg-primary rounded-full -ml-1.5 mt-1 border-2 border-white shadow mb-3" />
                    <p className="text-sm text-foreground/70 leading-relaxed">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <Users className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">Leadership</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">The Team Behind FavEco</h2>
            <p className="text-foreground/60 max-w-xl mx-auto leading-relaxed">
              Our leadership team brings decades of combined experience in energy, engineering, finance, and operations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, bio, initials }) => (
              <div key={name} className="bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all p-6 text-center group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors border-2 border-primary/20">
                  <span className="text-primary font-bold text-lg">{initials}</span>
                </div>
                <h3 className="font-bold text-foreground mb-1">{name}</h3>
                <p className="text-xs text-primary font-semibold mb-3">{role}</p>
                <p className="text-xs text-foreground/60 leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Join the FavEco Family?</h2>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            Over 8,400 Nigerians have made the switch to clean, reliable solar. Your turn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/shop">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6">
                Request a System
              </Button>
            </a>
            <a href="/careers">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-8 py-6">
                Join Our Team
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}