'use client';

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
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Products</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-capitalize text-foreground leading-tight ">
              Solar Power For Every Need.
            </h2>
            <a
              href="/shop"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors shrink-0 group"
            >
              View all products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className={`rounded-xl overflow-hidden flex flex-col transition-all duration-300 group border ${
                product.popular
                  ? 'border-primary shadow-lg'
                  : 'border-border hover:border-primary/40 hover:shadow-lg'
              }`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.popular && (
                  <span className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow bg-white">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/15 w-fit mb-3">
                  <Zap className="w-3 h-3 text-primary" />
                  <span className="text-xs font-semibold text-primary">{product.power}</span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-1">{product.name}</h3>
                <p className="text-sm text-foreground/55 mb-4 leading-relaxed flex-grow">{product.description}</p>

                <ul className="space-y-1.5 mb-5">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-foreground/65">
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {product.price && (
                  <p className="text-xl font-bold text-primary mb-4">{product.price}</p>
                )}

                <a
                  href={product.link}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-foreground/60 mb-6 text-sm">
            Not sure which system is right for you? Our solar experts are ready to guide you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/calculator" className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-8 py-3 rounded-lg transition-all">
              Calculate Your Savings
            </a>
            <a href="/shop" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-all group">
              Shop All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}