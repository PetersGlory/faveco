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
      id: 'agen',
      name: 'AGEN',
      power: '5kW',
      description: 'Perfect for small families and growing homes',
      features: ['5kW System', 'Basic Monitoring', '12-Hour Backup', '20-Year Warranty'],
      image: '/product-agen.jpg',
      price: '₦3,499,000',
      link: '/shop#agen',
    },
    {
      id: 'opulence',
      name: 'Opulence',
      power: '10kW',
      description: 'Most popular choice for residential customers',
      features: ['10kW System', 'Smart Monitoring', '24/7 Backup Power', '25-Year Warranty'],
      image: '/product-opulence.jpg',
      price: '₦8,999,000',
      link: '/shop#opulence',
      popular: true
    },
    {
      id: 'elegance',
      name: 'Elegance',
      power: '15kW',
      description: 'Premium solution for large homes and estates',
      features: ['15kW System', 'AI-Powered Control', '48+ Hour Backup', '30-Year Warranty'],
      image: '/product-elegance.jpg',
      price: '₦12,999,000',
      link: '/shop#elegance',
    },
    {
      id: 'inaeko',
      name: 'Inaeko',
      power: '25kW',
      description: 'Enterprise-grade system for businesses',
      features: ['25kW System', 'Enterprise Monitoring', 'Three-Phase Power', '25-Year Warranty'],
      image: '/product-inaeko.jpg',
      price: '₦24,999,000',
      link: '/shop#inaeko',
    },
  ];

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-20">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Premium Range</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Solar Systems for Every Need
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-balance leading-relaxed">
            From starter packages to enterprise solutions, FavEco has the perfect solar system for you. All systems include professional installation, monitoring, and 20-30 year warranties.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className={`rounded-xl overflow-hidden transition-all duration-300 flex flex-col h-full ${
                product.popular
                  ? 'bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary shadow-xl hover:shadow-2xl scale-105 md:scale-100'
                  : 'bg-white border border-border shadow-md hover:shadow-xl hover:border-primary/50'
              }`}
            >
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute top-3 left-3 z-10 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                  MOST POPULAR
                </div>
              )}

              {/* Product Image */}
              <div className="relative h-56 overflow-hidden bg-muted group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="mb-2">
                  <p className="text-primary font-bold text-sm mb-1">{product.power}</p>
                  <h3 className="text-xl font-bold text-foreground">
                    {product.name}
                  </h3>
                </div>
                <p className="text-foreground/70 text-xs mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Features List */}
                <ul className="space-y-1.5 mb-4 flex-grow text-xs">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-foreground/70">
                      <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></span>
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price and CTA */}
                <div className="pt-4 border-t border-border/50">
                  <p className="text-2xl font-bold text-primary mb-3">{product.price}</p>
                  <a href={product.link} className="block">
                    <Button className={`w-full flex items-center justify-center gap-2 group transition-all ${
                      product.popular
                        ? 'bg-primary hover:bg-primary/90 text-white font-bold'
                        : 'bg-primary/10 text-primary hover:bg-primary hover:text-white font-semibold'
                    }`}>
                      View Details
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-foreground/70 mb-8">
              Need help choosing? Our solar experts are ready to guide you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/calculator">
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-8 py-6">
                  Calculate Your Savings
                </Button>
              </a>
              <a href="/shop">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6">
                  Shop All Products
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
