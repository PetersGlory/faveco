import { Card } from '@/components/ui/card';
import { CheckCircle2, Zap, Shield, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Zap,
      title: 'Reliable Power',
      description: 'We eliminate the uncertainty of generators and unreliable grids with consistent, 24/7 solar power backed by intelligent battery storage.'
    },
    {
      icon: Shield,
      title: 'Built to Last',
      description: 'Industry-grade components with 25+ year warranties. Our systems are engineered for durability in any climate.'
    },
    {
      icon: Users,
      title: 'Local Support',
      description: 'Professional installation and ongoing technical support from local teams who understand your region\'s energy needs.'
    },
    {
      icon: CheckCircle2,
      title: 'Proven Results',
      description: 'Thousands of satisfied customers across homes and businesses experiencing real energy independence and cost savings.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose Faveco
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            We're committed to delivering reliable, sustainable energy solutions that free you from the limitations of traditional power sources.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-md transition-shadow border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-foreground/60 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Faveco empowers homes and businesses to achieve energy independence with reliable, intelligent solar solutions. We eliminate dependency on expensive diesel generators and unreliable grids, making clean energy accessible, affordable, and dependable for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}
