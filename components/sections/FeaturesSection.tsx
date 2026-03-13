import { Shield, Zap, BarChart3, Smartphone, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Industry-Grade Components',
    description: 'Premium solar panels and battery systems built for reliability. Tested to perform in extreme conditions with minimal degradation.'
  },
  {
    icon: Shield,
    title: '25+ Year Warranty',
    description: 'Comprehensive warranty covering panels, inverters, and batteries. Proven durability with support from local certified technicians.'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Energy Tracking',
    description: 'Live dashboard showing production, consumption, and savings. Understand exactly how your system performs every day.'
  },
  {
    icon: Smartphone,
    title: 'Modular System Design',
    description: 'Start small and scale up as your needs grow. Add battery storage or solar capacity anytime without replacement.'
  },
  {
    icon: Users,
    title: 'Professional Installation',
    description: 'Certified local installers who understand regional requirements. System commissioning and training included in every installation.'
  },
  {
    icon: Clock,
    title: 'Ongoing Technical Support',
    description: 'Dedicated support team available to help with maintenance, troubleshooting, and system optimization.'
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            What Makes Faveco Different
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Built for reliability, backed by quality components, and supported by local expertise
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
