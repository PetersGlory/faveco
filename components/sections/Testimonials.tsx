import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Okoye',
    role: 'Homeowner',
    company: 'Lagos, Nigeria',
    quote: 'FavEco made the transition to solar seamless. Within 3 months of installation, I eliminated my generator costs. The team was professional, transparent, and always available to help.',
    rating: 5,
  },
  {
    name: 'James Adeyemi',
    role: 'Business Owner',
    company: 'Abuja, Nigeria',
    quote: "We installed solar panels for our retail business and it's one of the best investments we've made. Beyond the cost savings, our customers appreciate the reliable 24/7 power.",
    rating: 5,
  },
  {
    name: 'Emma Mensah',
    role: 'Facility Manager',
    company: 'Accra, Ghana',
    quote: "FavEco's support team is exceptional. They helped us design the perfect system for our office. The installation was fast, efficient, and caused minimal disruption to operations.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14 lg:mb-20">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight max-w-lg">
              Loved by our community
            </h2>
            <p className="text-foreground/55 max-w-xs text-sm leading-relaxed">
              See what our satisfied customers have to say about their FavEco experience.
            </p>
          </div>
          <div className="w-12 h-px bg-primary mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-white border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/65 mb-6 flex-1 leading-relaxed text-sm">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-5">
                <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                <p className="text-xs text-foreground/55 mt-0.5">{testimonial.role} · {testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {[
            { value: '4.9/5', label: 'Average Rating', sub: 'Based on 5,000+ reviews' },
            { value: '98%', label: 'Customer Satisfaction', sub: 'Among active customers' },
            { value: '10+ yrs', label: 'Industry Experience', sub: 'Trusted since day one' },
          ].map((stat, i) => (
            <div key={i} className="bg-white text-center p-8">
              <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm font-semibold text-foreground">{stat.label}</p>
              <p className="text-xs text-foreground/45 mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}