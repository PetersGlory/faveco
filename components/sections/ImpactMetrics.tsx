import { Leaf, TrendingUp, Users, Zap } from 'lucide-react';

const metrics = [
  { icon: Users,      value: '5,000+',  label: 'Satisfied Customers', description: 'Homes and businesses with 24/7 power' },
  { icon: Zap,        value: '99.5%',   label: 'System Uptime',        description: 'Reliable 24/7 power availability' },
  { icon: Leaf,       value: '60–80%',  label: 'Cost Reduction',       description: 'Average reduction in energy expenses' },
  { icon: TrendingUp, value: '5–7 yrs', label: 'Payback Period',       description: 'Typical return on investment timeline' },
];

export default function ImpactMetrics() {
  return (
    <section id="impact" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14 lg:mb-20">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Impact</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight max-w-xl">
            Real impact, real results
          </h2>
          <div className="w-12 h-px bg-primary mt-5" />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-border p-8 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-all">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-foreground mb-1">{metric.value}</p>
                <p className="text-sm font-semibold text-foreground mb-1">{metric.label}</p>
                <p className="text-xs text-foreground/55 leading-relaxed">{metric.description}</p>
              </div>
            );
          })}
        </div>

        {/* Impact Call-out — Arnergy style: dark bg, left aligned text, white CTA buttons */}
        <div className="bg-foreground text-white rounded-xl overflow-hidden">
          <div className="p-10 sm:p-14 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-5 h-5 text-primary" />
                <p className="text-primary font-semibold text-sm uppercase tracking-wider">Energy Independence</p>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Your power in your hands
              </h3>
              <p className="text-white/65 leading-relaxed">
                With 24/7 reliable solar power and intelligent battery storage, you eliminate dependency on expensive generators. Over 25+ years, a typical FavEco system pays for itself many times over while providing complete energy security.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-start">
              <a href="/calculator" className="inline-flex items-center justify-center gap-2 bg-white text-foreground font-bold px-6 py-3 rounded-lg hover:bg-white/90 transition-all">
                Calculate Your Savings
              </a>
              <a href="/shop" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-all">
                Explore Solutions
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}