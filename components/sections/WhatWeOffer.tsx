import { Zap, Smartphone, Users, Shield, Wrench, TrendingUp } from 'lucide-react';

const offerings = [
  { icon: Zap,         title: '24/7 Reliable Power',      description: 'Never worry about blackouts again. Our systems deliver continuous power day and night with intelligent battery backup.' },
  { icon: Smartphone,  title: 'Smart Monitoring',          description: 'Track your energy production and consumption in real-time through our intuitive mobile app and web dashboard.' },
  { icon: Users,       title: 'Expert Installation',       description: 'Our certified engineers handle everything — professional installation with minimal disruption to your space.' },
  { icon: Shield,      title: '25–30 Year Warranty',       description: 'Industry-leading warranty coverage gives you peace of mind knowing your investment is protected for decades.' },
  { icon: Wrench,      title: 'Lifetime Support',          description: 'Our dedicated support team is here for maintenance, troubleshooting, and any questions you might have.' },
  { icon: TrendingUp,  title: 'Flexible Payment Plans',    description: 'Pay monthly, quarterly, or upfront. We offer solutions that fit your budget and financial situation.' },
];

export default function WhatWeOffer() {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14 lg:mb-20">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight max-w-xl">
              Complete solar solutions
            </h2>
            <p className="text-foreground/55 max-w-sm text-sm leading-relaxed">
              We don't just sell panels — we deliver complete energy independence with expert support and flexible financing.
            </p>
          </div>
          <div className="w-12 h-px bg-primary mt-6" />
        </div>

        {/* Offerings — Arnergy-style: image on left, checklist on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: product GIF / image placeholder */}
          <div className="bg-muted rounded-xl overflow-hidden aspect-square lg:aspect-auto lg:h-[480px] flex items-center justify-center">
            <img
              src="/what-we-offer.jpg"
              alt="FavEco solar system"
              className="w-full h-full object-cover"
            />
            <span className="text-foreground/30 text-sm absolute">Product image</span>
          </div>

          {/* Right: checklist */}
          <div className="flex flex-col justify-center gap-0">
            {offerings.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-4 py-5 border-b border-border/60 last:border-b-0 group hover:bg-muted/30 -mx-4 px-4 transition-colors rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/15 transition-all">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-0.5">{item.title}</h3>
                    <p className="text-sm text-foreground/55 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}