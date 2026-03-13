import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Energy Assessment',
    description: 'We analyze your energy needs, property, and power goals. Understand your consumption patterns and reliability requirements.'
  },
  {
    number: '02',
    title: 'Customized Solution Design',
    description: 'Receive a detailed plan with solar capacity and battery storage sizing. Transparent costs, timeline, and expected uptime.'
  },
  {
    number: '03',
    title: 'Professional Installation',
    description: 'Certified technicians install and commission your system. Minimal disruption with complete training and documentation.'
  },
  {
    number: '04',
    title: '24/7 Monitoring & Support',
    description: 'Real-time system monitoring and round-the-clock technical support. Proactive maintenance to maximize reliability and performance.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            How It Works
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            A simple, streamlined process from consultation to installation
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="flex flex-col h-full">
                {/* Number Badge */}
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-foreground/60 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Connector Line - hide on last */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-primary/30"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-background rounded-xl p-8 border border-border">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Why Choose Faveco?
              </h4>
              <ul className="space-y-2 text-foreground/60 text-sm">
                <li>• Industry-leading 25+ year equipment warranties</li>
                <li>• Federal tax credits and state incentives handled for you</li>
                <li>• Average payback period: 5-7 years</li>
                <li>• 30+ years of combined expertise in renewable energy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
