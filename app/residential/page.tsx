import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home, Zap, Battery, Smartphone, TrendingUp, Leaf } from 'lucide-react';

export default function ResidentialPage() {
  const residentialPlans = [
    {
      name: 'AGEN',
      power: '5kW',
      price: '₦3,499,000',
      features: ['Battery Backup: 12 hours', 'Basic Monitoring', '20-Year Warranty', 'Professional Installation'],
      description: 'Perfect for small families and growing homes'
    },
    {
      name: 'Opulence',
      power: '10kW',
      price: '₦8,999,000',
      features: ['Battery Backup: 24 hours', 'Smart Monitoring', '25-Year Warranty', 'Priority Support'],
      description: 'Most popular for families',
      featured: true
    },
    {
      name: 'Elegance',
      power: '15kW',
      price: '₦12,999,000',
      features: ['Battery Backup: 48+ hours', 'AI-Powered Control', '30-Year Warranty', 'Home Integration'],
      description: 'Premium solution for large homes'
    }
  ];

  const benefits = [
    { icon: Zap, title: '24/7 Reliable Power', desc: 'Never experience a blackout again' },
    { icon: TrendingUp, title: '75% Cost Reduction', desc: 'Typical savings on energy bills' },
    { icon: Smartphone, title: 'Smart Control', desc: 'Monitor and manage from your phone' },
    { icon: Battery, title: 'Battery Storage', desc: 'Power available day and night' },
    { icon: Home, title: 'Home Integration', desc: 'Works with your smart devices' },
    { icon: Leaf, title: 'Clean Energy', desc: 'Zero emissions for your family' }
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
            Solar Solutions for Your Home
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mb-8 text-balance">
            24/7 reliable power with flexible payment plans. Choose the perfect system for your family's energy needs.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Go Solar?</h2>
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
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Residential Solar Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {residentialPlans.map((plan, i) => (
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
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-foreground/70 mb-4">{plan.description}</p>
                <p className="text-3xl font-bold text-primary mb-6">{plan.power}</p>
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
                    Learn More
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Simple Installation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Consultation', desc: 'Free assessment of your home' },
              { step: '2', title: 'Design', desc: 'Custom system design' },
              { step: '3', title: 'Installation', desc: 'Professional setup in 1-2 days' },
              { step: '4', title: 'Activation', desc: 'Enjoy 24/7 power!' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-3 mx-auto text-lg">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Power Your Home with Solar?</h2>
          <p className="text-lg text-foreground/70 mb-8">Get started today with flexible payment plans</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/calculator">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5">
                Calculate Savings
              </Button>
            </a>
            <a href="/shop">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Shop Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
