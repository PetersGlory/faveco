'use client';

import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Filter, Star, ArrowLeft, ArrowRight, Zap } from 'lucide-react';
import { useState } from 'react';

export default function ShopPage() {
  const [cart, setCart] = useState<string[]>([]);
  const [filter, setFilter] = useState('all');

  const products = [
    {
      id: 'smart',
      name: 'FavEco Smart',
      power: '1kW – 5kW',
      price: '',
      category: 'residential',
      rating: 4.8,
      reviews: 245,
      image: '/product-agen.jpg',
      description: 'Our most popular choice for modern homes',
      features: ['1,000W – 5,000W System', 'Mobile Solutions', '24/7 Backup Power'],
      inStock: true,
      popular: true,
    },
    {
      id: 'active',
      name: 'FavEco Active',
      power: '5kW – 10kW',
      price: '',
      category: 'residential',
      rating: 4.9,
      reviews: 512,
      image: '/product-elegance.jpg',
      description: 'Great choice for residential customers & businesses',
      features: ['5kW – 10kW Solar Power System', 'Smart Energy Monitoring', 'Reliable 24/7 Backup Power'],
      inStock: true,
    },
    {
      id: 'grow',
      name: 'FavEco Grow',
      power: '10kW – 25kW',
      price: '',
      category: 'residential',
      rating: 4.9,
      reviews: 178,
      image: '/product-opulence.jpg',
      description: 'Premium power for large homes and estates',
      features: ['15kW Solar Power System', 'Intelligent Power Management', 'Extended Backup (Up to 48 Hours)'],
      inStock: true,
    },
    {
      id: 'flow',
      name: 'FavEco Flow',
      power: '25kW+',
      price: '',
      category: 'commercial',
      rating: 4.7,
      reviews: 89,
      image: '/product-inaeko.jpg',
      description: 'Enterprise-grade power for large-scale needs',
      features: ['25kW Solar Power System', 'Advanced System Monitoring', 'Three-Phase Power Support'],
      inStock: true,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
  ];

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.category === filter);

  const toggleCart = (productId: string) => {
    setCart(prev =>
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 mb-6 text-primary hover:text-primary/80 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 mb-4">
                <Zap className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">Our Premium Range</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
                Solar Shop
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl text-balance leading-relaxed">
                Browse our complete range of solar systems and start your journey to clean, reliable energy today.
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-2 bg-white border border-border rounded-lg px-4 py-2 shadow-sm">
              <ShoppingCart className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">{cart.length}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Filters */}
          <div className="flex items-center gap-3 mb-12 flex-wrap">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-foreground/60" />
              <span className="text-sm font-semibold text-foreground">Filter by:</span>
            </div>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-lg border-2 text-sm font-semibold transition-all ${
                  filter === cat.id
                    ? 'border-primary bg-primary text-white'
                    : 'border-border text-foreground hover:border-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`rounded-xl overflow-hidden flex flex-col transition-all duration-300 ${
                  product.popular
                    ? 'border-2 border-primary shadow-xl hover:shadow-2xl bg-gradient-to-br from-primary/5 to-primary/10'
                    : 'border border-border bg-white shadow-md hover:shadow-xl hover:border-primary/50'
                }`}
              >
                {/* Image */}
                <div className="relative h-48 bg-muted overflow-hidden group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.popular && (
                    <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                      Most Popular
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-primary font-bold text-xs uppercase tracking-wide mb-1">{product.power}</p>
                  <h3 className="text-xl font-bold text-foreground mb-1">{product.name}</h3>
                  <p className="text-xs text-foreground/60 mb-3 leading-relaxed">{product.description}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.floor(product.rating)
                              ? 'fill-primary text-primary'
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-foreground/50">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-4 flex-grow">
                    {product.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-foreground/60">
                        <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Price + Buttons */}
                  <div className="pt-4 border-t border-border/50">
                    {product.price && (
                      <p className="text-2xl font-bold text-primary mb-3">{product.price}</p>
                    )}
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-border text-sm"
                        onClick={() => toggleCart(product.id)}
                      >
                        {cart.includes(product.id) ? '✓ Added' : 'Add'}
                      </Button>
                      <Button
                        size="sm"
                        className={`text-sm flex items-center justify-center gap-1 group ${
                          product.popular
                            ? 'bg-primary hover:bg-primary/90 text-white font-bold'
                            : 'bg-primary/10 text-primary hover:bg-primary hover:text-white font-semibold'
                        }`}
                      >
                        Details
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Buy from FavEco?</h2>
            <p className="text-foreground/60 max-w-xl mx-auto leading-relaxed">
              Every purchase comes with our commitment to quality, service, and long-term support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: 'Professional Installation', desc: 'Expert certified technicians on every job' },
              { title: 'Extended Warranty', desc: '20–30 year coverage as standard' },
              { title: 'Flexible Payments', desc: 'Monthly or quarterly plans available' },
              { title: '24/7 Support', desc: 'Our team is always here to help' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold text-sm">✓</span>
                </div>
                <h3 className="font-bold text-foreground mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-foreground/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            {cart.length > 0
              ? `Ready to proceed with ${cart.length} item${cart.length > 1 ? 's' : ''}?`
              : 'Ready to Go Solar?'}
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-xl mx-auto leading-relaxed">
            Choose your system, select a payment plan, and start enjoying clean reliable energy today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/payment-plans">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6">
                View Payment Plans
              </Button>
            </a>
            <a href="/calculator">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-8 py-6">
                Calculate Savings
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}