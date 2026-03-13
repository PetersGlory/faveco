import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Calculator } from 'lucide-react';

export default function DualCTASection() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Ready to Go Solar?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            Explore real-world success stories or calculate your potential savings
          </p>
        </div>

        {/* Dual CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Stories Card */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 rounded-lg p-8 lg:p-10 hover:border-primary/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BookOpen className="w-7 h-7 text-white" />
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Customer Stories
            </h3>

            <p className="text-foreground/70 mb-6 leading-relaxed">
              Discover how families and businesses across Africa have transformed their energy future with FavEco. Read inspiring success stories and learn how much our customers save.
            </p>

            <a href="/stories" className="inline-block">
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold flex items-center gap-2 group/btn">
                Read Stories
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Calculator Card */}
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/20 rounded-lg p-8 lg:p-10 hover:border-accent/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Calculator className="w-7 h-7 text-white" />
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Solar Savings Calculator
            </h3>

            <p className="text-foreground/70 mb-6 leading-relaxed">
              See how much you can save on energy costs with a custom FavEco system. Get an instant estimate based on your current usage and location.
            </p>

            <a href="/calculator" className="inline-block">
              <Button className="bg-accent hover:bg-accent/90 text-white font-semibold flex items-center gap-2 group/btn">
                Calculate Savings
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-foreground/70 mb-6">
            Or start your journey to clean energy today
          </p>
          <a href="/shop">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              Explore Our Products
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
