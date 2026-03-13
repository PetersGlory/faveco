import { Card } from '@/components/ui/card';
import { Sun, Home, Building2, Leaf } from 'lucide-react';

const solutions = [
  {
    icon: Home,
    title: 'Residential Solar',
    description: 'Complete solar systems with intelligent battery storage. Get 24/7 power backup, reduce diesel dependency, and lower energy costs.',
    features: ['24/7 power availability', 'Smart battery storage', 'Professional installation']
  },
  {
    icon: Building2,
    title: 'Commercial Solutions',
    description: 'ROI-focused solar and energy storage for businesses. Scale reliably without interruptions or generator maintenance.',
    features: ['Predictable ROI', 'Minimal downtime', 'Energy independence']
  },
  {
    icon: Sun,
    title: 'Energy Storage Systems',
    description: 'Advanced lithium battery storage that works with solar. Store power when the sun shines, use it day and night.',
    features: ['Backup power', 'Peak shaving', 'Instant switching']
  },
  {
    icon: Leaf,
    title: 'Energy Monitoring',
    description: 'Real-time tracking of your energy production and consumption. Optimize your system for maximum efficiency.',
    features: ['Live dashboard', 'Usage insights', 'Mobile app access']
  }
];

export default function SolutionsGrid() {
  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Reliable Energy Solutions
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Complete solar and storage systems designed for consistent, 24/7 power supply
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50 bg-white"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {solution.title}
                </h3>

                <p className="text-sm text-foreground/60 mb-4">
                  {solution.description}
                </p>

                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-foreground/50 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
