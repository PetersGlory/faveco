'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
  price: string;
  link: string;
  popular?: boolean;
  power: string;
}

export default function ProductsGrid() {
  const products: Product[] = [
    {
      id: 'smart',
      name: 'FavEco Smart',
      power: '1kW – 5kW',
      description: 'Our most popular choice for modern homes',
      features: ['1,000W – 5,000W System', 'Mobile Solutions', '24/7 Backup Power'],
      image: '/product-agen.jpg',
      price: '',
      link: '/shop#smart',
      popular: true,
    },
    {
      id: 'active',
      name: 'FavEco Active',
      power: '5kW – 10kW',
      description: 'Great choice for residential customers & businesses',
      features: ['5kW – 10kW Solar Power System', 'Smart Energy Monitoring', 'Reliable 24/7 Backup Power'],
      image: '/product-elegance.jpg',
      price: '',
      link: '/shop#active',
    },
    {
      id: 'grow',
      name: 'FavEco Grow',
      power: '10kW – 25kW',
      description: 'Premium power for large homes and estates',
      features: ['15kW Solar Power System', 'Intelligent Power Management', 'Extended Backup (Up to 48 Hours)'],
      image: '/product-opulence.jpg',
      price: '',
      link: '/shop#grow',
    },
    {
      id: 'flow',
      name: 'FavEco Flow',
      power: '25kW+',
      description: 'Enterprise-grade power for large-scale needs',
      features: ['25kW Solar Power System', 'Advanced System Monitoring', 'Three-Phase Power Support'],
      image: '/product-inaeko.jpg',
      price: '',
      link: '/shop#flow',
    },
  ];

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-muted/20">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Premium Range</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Solar Systems for Every Need
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-5" />
          <p className="text-base text-foreground/60 max-w-2xl mx-auto text-balance leading-relaxed">
            From starter packages to enterprise-grade solutions — every system includes professional installation, remote monitoring, and long-term warranty coverage.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className={`rounded-xl overflow-hidden flex flex-col transition-all duration-300 group ${
                product.popular
                  ? 'bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary shadow-xl hover:shadow-2xl'
                  : 'bg-white border border-border shadow-md hover:shadow-xl hover:border-primary/40'
              }`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {product.popular && (
                  <span className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Power tag */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit mb-3">
                  <Zap className="w-3 h-3 text-primary" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">{product.power}</span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-1">{product.name}</h3>
                <p className="text-xs text-foreground/60 mb-4 leading-relaxed">{product.description}</p>

                {/* Features */}
                <ul className="space-y-1.5 mb-4 flex-grow">
                  {product.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-foreground/70">
                      <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="pt-4 border-t border-border/50">
                  {product.price && (
                    <p className="text-2xl font-bold text-primary mb-3">{product.price}</p>
                  )}
                  <a href={product.link}>
                    <Button
                      className={`w-full flex items-center justify-center gap-2 group/btn transition-all ${
                        product.popular
                          ? 'bg-primary hover:bg-primary/90 text-white font-bold'
                          : 'bg-primary/10 text-primary hover:bg-primary hover:text-white font-semibold'
                      }`}
                    >
                      View Details
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <p className="text-base text-foreground/60 mb-8">
            Not sure which system is right for you? Our solar experts are ready to guide you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/calculator">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-8 py-6">
                Calculate Your Savings
              </Button>
            </a>
            <a href="/shop">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 flex items-center gap-2 group">
                Shop All Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}