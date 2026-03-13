import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 sm:p-12 lg:p-16 text-white text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full -ml-20 -mb-20"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance leading-tight">
              Ready to Start Your Solar Journey?
            </h2>

            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
              Join thousands of families and businesses saving money and the planet. Get your free solar consultation today—no obligation, no pressure.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold flex items-center gap-2 group justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold flex items-center gap-2 justify-center"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/80 border-t border-white/20 pt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                <span>Free site assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                <span>Instant quote online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
