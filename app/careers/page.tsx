'use client';

import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, Zap, Search, MapPin, Clock, ChevronDown,
  ArrowRight, Users, TrendingUp, Heart, Lightbulb, Briefcase
} from 'lucide-react';
import { useState } from 'react';

const perks = [
  { icon: TrendingUp, title: 'Career Growth', desc: 'Clear progression paths, annual performance reviews, and learning allowances for every team member.' },
  { icon: Heart, title: 'Health & Wellbeing', desc: 'Comprehensive HMO for you and your immediate family. Mental health support included.' },
  { icon: Users, title: 'Collaborative Culture', desc: "Flat hierarchy, open-door policy, and a team that genuinely celebrates each other's wins." },
  { icon: Lightbulb, title: 'Meaningful Work', desc: "You're not just selling solar — you're helping solve one of Nigeria's biggest challenges." },
  { icon: Zap, title: 'Competitive Pay', desc: 'Market-rate salaries benchmarked annually, plus performance bonuses and profit sharing.' },
  { icon: Briefcase, title: 'Flexible Working', desc: 'Hybrid options for office roles. Flexible hours wherever the job allows.' },
];

const openRoles = [
  {
    id: 1,
    title: 'Solar Installation Engineer',
    department: 'Engineering',
    location: 'Lagos',
    type: 'Full-time',
    level: 'Mid-level',
    description: 'Design, install, and commission residential and commercial solar PV systems. Work directly with clients on-site and lead a crew of junior technicians.',
    requirements: ['3+ years solar PV installation experience', 'C&G or equivalent electrical certification', 'Experience with inverter commissioning', 'Driver\'s licence'],
  },
  {
    id: 2,
    title: 'Solar Sales Consultant',
    department: 'Sales',
    location: 'Lagos / Abuja',
    type: 'Full-time',
    level: 'Mid-level',
    description: 'Identify, qualify, and close residential and SME solar customers. Conduct site assessments and prepare tailored proposals using our system sizing tools.',
    requirements: ['2+ years B2C or B2B sales experience', 'Understanding of solar energy basics', 'Strong interpersonal and presentation skills', 'Target-driven mindset'],
  },
  {
    id: 3,
    title: 'Energy Systems Designer',
    department: 'Engineering',
    location: 'Lagos',
    type: 'Full-time',
    level: 'Senior',
    description: 'Design and optimise commercial-scale solar and storage systems. Produce technical drawings, load assessments, and project specifications for the engineering team.',
    requirements: ['5+ years in electrical / renewable energy design', 'Proficiency in AutoCAD or PVsyst', 'Experience with three-phase commercial systems', 'Strong project management skills'],
  },
  {
    id: 4,
    title: 'Customer Success Manager',
    department: 'Operations',
    location: 'Lagos',
    type: 'Full-time',
    level: 'Mid-level',
    description: 'Own the post-installation customer journey. Manage service requests, monitor system performance remotely, and build long-term relationships with our growing customer base.',
    requirements: ['3+ years in customer success or account management', 'Tech-savvy with CRM tools', 'Problem-solving mindset', 'Excellent written and verbal communication'],
  },
  {
    id: 5,
    title: 'Frontend Engineer',
    department: 'Technology',
    location: 'Remote',
    type: 'Full-time',
    level: 'Mid-level',
    description: "Build and maintain FavEco's web platforms — customer portal, monitoring dashboard, and marketing site. Work closely with design and product to ship high-quality user experiences.",
    requirements: ['3+ years with React / Next.js', 'Strong TypeScript skills', 'Experience with Tailwind CSS and design systems', 'A portfolio of shipped products'],
  },
  {
    id: 6,
    title: 'Regional Sales Manager — South-East',
    department: 'Sales',
    location: 'Enugu / Anambra',
    type: 'Full-time',
    level: 'Senior',
    description: "Lead and grow a team of solar sales consultants across the South-East region. Own the territory's revenue targets, dealer relationships, and market expansion strategy.",
    requirements: ['5+ years in field sales with team leadership experience', 'Strong network in South-East Nigeria', 'Renewable energy or telco background preferred', 'Proven track record of hitting revenue targets'],
  },
];

const departments = ['All Departments', 'Engineering', 'Sales', 'Operations', 'Technology'];
const locations = ['All Locations', 'Lagos', 'Abuja', 'Enugu / Anambra', 'Remote'];

const levelColors: Record<string, string> = {
  'Mid-level': 'bg-blue-50 text-blue-700 border-blue-200',
  'Senior': 'bg-purple-50 text-purple-700 border-purple-200',
  'Junior': 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

const deptColors: Record<string, string> = {
  'Engineering': 'bg-primary/10 text-primary border-primary/20',
  'Sales': 'bg-orange-50 text-orange-700 border-orange-200',
  'Operations': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Technology': 'bg-indigo-50 text-indigo-700 border-indigo-200',
};

function RoleCard({ role }: { role: typeof openRoles[0] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-border hover:border-primary/30 transition-all overflow-hidden">
      <div
        className="p-6 cursor-pointer"
        onClick={() => setExpanded(v => !v)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${deptColors[role.department]}`}>
                {role.department}
              </span>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${levelColors[role.level]}`}>
                {role.level}
              </span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">{role.title}</h3>
            <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/50">
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{role.location}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{role.type}</span>
            </div>
          </div>
          <ChevronDown className={`w-5 h-5 text-foreground/40 flex-shrink-0 mt-1 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </div>
      </div>

      {expanded && (
        <div className="px-6 pb-6 border-t border-border pt-5">
          <p className="text-sm text-foreground/70 leading-relaxed mb-5">{role.description}</p>
          <div className="mb-6">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-3">Requirements</h4>
            <ul className="space-y-2">
              {role.requirements.map(req => (
                <li key={req} className="flex items-start gap-2.5 text-sm text-foreground/70">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-1.5" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
          <a href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold flex items-center gap-2 h-10 px-5 text-sm">
              Apply for This Role
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      )}
    </div>
  );
}

export default function CareersPage() {
  const [query, setQuery] = useState('');
  const [dept, setDept] = useState('All Departments');
  const [loc, setLoc] = useState('All Locations');

  const filtered = openRoles.filter(role => {
    const matchQuery = !query || role.title.toLowerCase().includes(query.toLowerCase()) || role.department.toLowerCase().includes(query.toLowerCase());
    const matchDept = dept === 'All Departments' || role.department === dept;
    const matchLoc = loc === 'All Locations' || role.location.includes(loc.split(' /')[0]);
    return matchQuery && matchDept && matchLoc;
  });

  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 mb-6 text-primary hover:text-primary/80 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 mb-5">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">We're Hiring</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
                Build the Future of Energy in Nigeria
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6 max-w-xl">
                Join a team of engineers, consultants, and builders working on one of the most important problems in Africa — reliable, clean, affordable energy for all.
              </p>
              <p className="text-foreground/60 text-base leading-relaxed max-w-xl mb-8">
                We're growing fast and looking for people who want to do meaningful work in a culture built on trust, ambition, and genuine care.
              </p>
              <a href="#open-roles">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 flex items-center gap-2">
                  See Open Roles <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '120+', label: 'Team Members' },
                { value: '34', label: 'States We Operate In' },
                { value: '4.8★', label: 'Glassdoor Rating' },
                { value: '92%', label: 'Staff Retention Rate' },
              ].map(s => (
                <div key={s.label} className="bg-white rounded-2xl border border-border p-6 text-center">
                  <p className="text-3xl font-bold text-primary mb-1">{s.value}</p>
                  <p className="text-xs text-foreground/60 font-medium leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Why Work at FavEco?</h2>
            <p className="text-foreground/60 max-w-xl mx-auto leading-relaxed">We invest in our people the same way we invest in quality solar systems — for the long term.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all bg-white group">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Open Positions</h2>
            <p className="text-foreground/60 leading-relaxed">{openRoles.length} roles available across Nigeria</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search roles…"
                className="w-full h-11 pl-10 pr-4 rounded-xl border-2 border-border bg-white text-sm outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="relative">
              <select
                value={dept}
                onChange={e => setDept(e.target.value)}
                className="h-11 pl-4 pr-9 rounded-xl border-2 border-border bg-white text-sm outline-none focus:border-primary transition-colors appearance-none cursor-pointer font-medium"
              >
                {departments.map(d => <option key={d}>{d}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40 pointer-events-none" />
            </div>
            <div className="relative">
              <select
                value={loc}
                onChange={e => setLoc(e.target.value)}
                className="h-11 pl-4 pr-9 rounded-xl border-2 border-border bg-white text-sm outline-none focus:border-primary transition-colors appearance-none cursor-pointer font-medium"
              >
                {locations.map(l => <option key={l}>{l}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40 pointer-events-none" />
            </div>
          </div>

          {/* Role list */}
          {filtered.length > 0 ? (
            <div className="space-y-4">
              {filtered.map(role => <RoleCard key={role.id} role={role} />)}
            </div>
          ) : (
            <div className="text-center py-24 bg-white rounded-2xl border border-border">
              <Briefcase className="w-10 h-10 text-foreground/20 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground/40 mb-2">No roles found</h3>
              <p className="text-sm text-foreground/30">Try adjusting your filters or search term</p>
            </div>
          )}
        </div>
      </section>

      {/* Speculative */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Don't See Your Role?</h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-8 max-w-xl mx-auto">
            We're always open to hearing from talented people. Send us your CV and tell us how you'd contribute to FavEco's mission.
          </p>
          <a href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6">
              Send a Speculative Application
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}