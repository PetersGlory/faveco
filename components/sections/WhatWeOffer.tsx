import {
  Zap,
  Smartphone,
  Users,
  Shield,
  Wrench,
  TrendingUp
} from 'lucide-react';

const offerings = [
  {
    icon: Zap,
    title: '24/7 Reliable Power',
    description: 'Never worry about blackouts again. Our systems deliver continuous power day and night with intelligent battery backup.'
  },
  {
    icon: Smartphone,
    title: 'Smart Monitoring',
    description: 'Track your energy production and consumption in real-time through our intuitive mobile app and web dashboard.'
  },
  {
    icon: Users,
    title: 'Expert Installation',
    description: 'Our certified engineers handle everything. Professional installation with minimal disruption to your space.'
  },
  {
    icon: Shield,
    title: '25-30 Year Warranty',
    description: 'Industry-leading warranty coverage gives you peace of mind knowing your investment is protected for decades.'
  },
  {
    icon: Wrench,
    title: 'Lifetime Support',
    description: 'Our dedicated support team is here for maintenance, troubleshooting, and any questions you might have.'
  },
  {
    icon: TrendingUp,
    title: 'Flexible Payment Plans',
    description: 'Pay monthly, quarterly, or upfront. We offer solutions that fit your budget and financial situation.'
  }
];

export default function WhatWeOffer() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-18">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Complete Solar Solutions
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto text-balance leading-relaxed">
            We don't just sell solar panels—we deliver complete energy independence with expert support and flexible financing that works for you.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white rounded-xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4">
                  {offering.title}
                </h3>

                <p className="text-foreground/70 leading-relaxed">
                  {offering.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
