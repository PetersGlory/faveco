import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Building2, BarChart3, Users, Clock, Lock, Zap } from 'lucide-react';

export default function CommercialPage() {
  const commercialPlans = [
    {
      name: 'Inaeko',
      power: '25kW',
      price: '₦24,999,000',
      features: ['Three-Phase Power', 'Enterprise Monitoring', '99.5% Uptime', 'Dedicated Support'],
      description: 'For growing businesses'
    },
    {
      name: 'Custom Enterprise',
      power: '50kW+',
      price: 'Custom Quote',
      features: ['Scalable Design', 'Full Integration', 'Premium SLA', '24/7 Support'],
      description: 'For large operations',
      featured: true
    }
  ];

  const benefits = [
    { icon: BarChart3, title: 'Reduce Operating Costs', desc: 'Cut energy expenses by up to 80%' },
    { icon: Zap, title: 'Zero Downtime', desc: '24/7 reliable power, never lose productivity' },
    { icon: Users, title: 'Employee Satisfaction', desc: 'Show commitment to sustainability' },
    { icon: Clock, title: 'Fast ROI', desc: 'Payback in 2-5 years typically' },
    { icon: Lock, title: 'Energy Independence', desc: 'Protect from rate increases' },
    { icon: Building2, title: 'Scalable Solution', desc: 'Grow as your business grows' }
  ];

  const industries = [
    'Retail & Shopping Centers',
    'Manufacturing Plants',
    'Office Buildings',
    'Hospitals & Clinics',
    'Data Centers',
    'Hotels & Hospitality',
    'Educational Institutions',
    'Agricultural Operations'
  ];

  return (
    <main className="overflow-hidden">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 mb-6 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Commercial Solar Solutions
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mb-8 text-balance">
            Enterprise-grade solar systems designed to power your business 24/7. Reduce costs, increase reliability, boost your brand.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Business Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="bg-white p-6 rounded-lg border border-border hover:border-primary/50 transition-all">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-foreground/70">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Commercial Solar Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {commercialPlans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-lg border-2 p-8 transition-all ${
                  plan.featured
                    ? 'border-primary bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg'
                    : 'border-border bg-white hover:border-primary/50'
                }`}
              >
                {plan.featured && (
                  <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-4">
                    MOST SCALABLE
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-foreground/70 mb-4">{plan.description}</p>
                <p className="text-3xl font-bold text-primary mb-2">{plan.power}</p>
                <p className="text-2xl font-bold text-foreground mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/shop" className="block">
                  <Button className={`w-full ${plan.featured ? 'bg-primary hover:bg-primary/90' : 'bg-primary/20 hover:bg-primary/30 text-primary'}`}>
                    Get Quote
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, i) => (
              <div key={i} className="bg-white p-4 rounded-lg border border-border text-center hover:border-primary/50 transition-all">
                <p className="font-semibold text-foreground">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Strong Return on Investment</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 text-center">
              <p className="text-4xl font-bold text-primary mb-2">2-5 yrs</p>
              <p className="text-sm text-foreground/70">Average Payback Period</p>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-8 text-center">
              <p className="text-4xl font-bold text-accent mb-2">80%</p>
              <p className="text-sm text-foreground/70">Energy Cost Reduction</p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 text-center">
              <p className="text-4xl font-bold text-primary mb-2">25+</p>
              <p className="text-sm text-foreground/70">Years System Life</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Transform Your Business</h2>
          <p className="text-lg text-foreground/70 mb-8">Get a custom solar solution designed for your specific business needs</p>
          <a href="/shop">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Get Commercial Quote
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
