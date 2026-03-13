import { Leaf, TrendingUp, Users, Zap } from 'lucide-react';

const metrics = [
  {
    icon: Users,
    label: 'Satisfied Customers',
    value: '5,000+',
    description: 'Homes and businesses with 24/7 power'
  },
  {
    icon: Zap,
    label: 'System Uptime',
    value: '99.5%',
    description: 'Reliable 24/7 power availability'
  },
  {
    icon: Leaf,
    label: 'Cost Reduction',
    value: '60-80%',
    description: 'Average reduction in energy expenses'
  },
  {
    icon: TrendingUp,
    label: 'Payback Period',
    value: '5-7 yrs',
    description: 'Typical return on investment timeline'
  }
];

export default function ImpactMetrics() {
  return (
    <section id="impact" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-18">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Real Impact, Real Results
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto text-balance leading-relaxed">
            Join thousands of Africans transforming their energy independence. See the numbers behind FavEco's impact.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white rounded-xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-primary/10 transition-all mx-auto">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-4 lg:text-5xl font-bold text-primary mb-2 leading-tight">
                  {metric.value}
                </h3>

                <p className="text-sm font-semibold text-foreground mb-2">
                  {metric.label}
                </p>

                <p className="text-xs text-foreground/70">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Impact Call-out */}
        <div className="bg-gradient-to-r from-primary via-green-500 to-primary text-white rounded-xl p-12 shadow-xl border border-primary/20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="w-6 h-6" />
              <p className="font-semibold text-sm uppercase tracking-wider">Energy Independence</p>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Your Power in Your Hands
            </h3>
            <p className="text-lg text-white/95 mb-6 leading-relaxed">
              Our customers experience immediate and long-term value. With 24/7 reliable solar power and intelligent battery storage, you eliminate dependency on expensive generators and unreliable grids. Over 25+ years, a typical FavEco system pays for itself many times over while providing complete energy security for your family or business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/calculator" className="inline-block">
                <button className="bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-white/90 transition-all">
                  Calculate Your Savings
                </button>
              </a>
              <a href="/shop" className="inline-block">
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-all">
                  Explore Solutions
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
