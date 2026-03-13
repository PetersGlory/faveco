import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Okoye',
    role: 'Homeowner',
    company: 'Lagos, Nigeria',
    quote: 'FavEco made the transition to solar seamless. Within 3 months of installation, I eliminated my generator costs. The team was professional, transparent, and always available to help.',
    rating: 5
  },
  {
    name: 'James Adeyemi',
    role: 'Business Owner',
    company: 'Abuja, Nigeria',
    quote: 'We installed solar panels for our retail business and it\'s one of the best investments we\'ve made. Beyond the cost savings, our customers appreciate the reliable 24/7 power.',
    rating: 5
  },
  {
    name: 'Emma Mensah',
    role: 'Facility Manager',
    company: 'Accra, Ghana',
    quote: 'FavEco\'s support team is exceptional. They helped us design the perfect system for our office. The installation was fast, efficient, and minimal disruption to operations.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Loved by Our Community
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            See what our satisfied customers have to say about their FavEco experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-white hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/70 mb-6 flex-1 leading-relaxed">
                {`"${testimonial.quote}"`}
              </p>

              {/* Author */}
              <div className="border-t border-border pt-6">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-foreground/60">
                  {testimonial.role}
                </p>
                <p className="text-xs text-foreground/50 mt-1">
                  {testimonial.company}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-lg border border-border">
            <p className="text-3xl font-bold text-primary">4.9/5</p>
            <p className="text-sm text-foreground/60 mt-2">Average Rating</p>
            <p className="text-xs text-foreground/40 mt-1">Based on 5000+ reviews</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg border border-border">
            <p className="text-3xl font-bold text-primary">98%</p>
            <p className="text-sm text-foreground/60 mt-2">Customer Satisfaction</p>
            <p className="text-xs text-foreground/40 mt-1">Among active customers</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg border border-border">
            <p className="text-3xl font-bold text-primary">10+ yrs</p>
            <p className="text-sm text-foreground/60 mt-2">Industry Experience</p>
            <p className="text-xs text-foreground/40 mt-1">Trusted since day one</p>
          </div>
        </div>
      </div>
    </section>
  );
}
