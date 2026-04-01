import { ArrowRight, BookOpen, Calculator } from 'lucide-react';

export default function DualCTASection() {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Get Started</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight max-w-lg">
            Ready to go solar?
          </h2>
          <div className="w-12 h-px bg-primary mt-5" />
        </div>

        {/* Arnergy-style: two large image cards side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Stories card */}
          <div className="relative rounded-xl overflow-hidden min-h-[340px] flex flex-col justify-end group">
            <img
              src="/stories-cover.jpg"
              alt="FavEco in the real world"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Fallback gradient bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-green-700/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 p-8 sm:p-10">
              <div className="w-12 h-12 bg-white/15 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">FavEco in the real world</h3>
              <p className="text-white/70 text-sm mb-5 leading-relaxed max-w-xs">
                Real stories, real impact — discover how families and businesses across Africa have transformed their energy future.
              </p>
              <a
                href="/stories"
                className="inline-flex items-center gap-2 bg-white text-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-white/90 transition-all group/btn"
              >
                Learn more
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Calculator card */}
          <div className="relative rounded-xl overflow-hidden min-h-[340px] flex flex-col justify-end group">
            <img
              src="/calculator-cover.jpg"
              alt="Solar calculator"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Fallback gradient bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-foreground to-foreground/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 p-8 sm:p-10">
              <div className="w-12 h-12 bg-white/15 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Solar calculator</h3>
              <p className="text-white/70 text-sm mb-5 leading-relaxed max-w-xs">
                Find the perfect solar setup for your needs — get an instant estimate based on your current usage and location.
              </p>
              <a
                href="/calculator"
                className="inline-flex items-center gap-2 bg-white text-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-white/90 transition-all group/btn"
              >
                Learn more
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-foreground/55 mb-5 text-sm">Or start your journey to clean energy today</p>
          <a
            href="/shop"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 rounded-lg transition-all group"
          >
            Explore Our Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}