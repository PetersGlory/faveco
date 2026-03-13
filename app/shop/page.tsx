'use client';

import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Filter, Star, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function ShopPage() {
  const [cart, setCart] = useState<string[]>([]);
  const [filter, setFilter] = useState('all');

  const products = [
    {
      id: 'agen',
      name: 'AGEN Solar System',
      power: '5kW',
      price: '₦3,499,000',
      category: 'residential',
      rating: 4.8,
      reviews: 245,
      image: '/product-agen.jpg',
      description: 'Perfect for small families and growing homes',
      features: ['5kW capacity', '12-hour battery backup', 'Smart monitoring', '20-year warranty'],
      inStock: true
    },
    {
      id: 'opulence',
      name: 'Opulence Solar System',
      power: '10kW',
      price: '₦8,999,000',
      category: 'residential',
      rating: 4.9,
      reviews: 512,
      image: '/product-opulence.jpg',
      description: 'Most popular for families',
      features: ['10kW capacity', '24-hour battery backup', 'AI monitoring', '25-year warranty'],
      inStock: true,
      popular: true
    },
    {
      id: 'inaeko',
      name: 'Inaeko Commercial System',
      power: '25kW',
      price: '₦24,999,000',
      category: 'commercial',
      rating: 4.7,
      reviews: 89,
      image: '/product-inaeko.jpg',
      description: 'For growing businesses',
      features: ['25kW capacity', 'Three-phase power', 'Enterprise monitoring', '25-year warranty'],
      inStock: true
    },
    {
      id: 'elegance',
      name: 'Elegance Premium System',
      power: '15kW',
      price: '₦12,999,000',
      category: 'residential',
      rating: 4.9,
      reviews: 178,
      image: '/product-elegance.jpg',
      description: 'Premium solution for large homes',
      features: ['15kW capacity', '48-hour battery backup', 'Smart home integration', '30-year warranty'],
      inStock: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' }
  ];

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  const toggleCart = (productId: string) => {
    if (cart.includes(productId)) {
      setCart(cart.filter(id => id !== productId));
    } else {
      setCart([...cart, productId]);
    }
  };

  return (
    <main className="overflow-hidden">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 mb-6 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
                Solar Shop
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl mb-8 text-balance">
                Browse our complete range of solar systems and start your journey to clean energy today.
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-2 bg-white border border-border rounded-lg px-4 py-2">
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
          <div className="flex items-center gap-4 mb-12 flex-wrap">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-foreground/60" />
              <span className="font-semibold text-foreground">Filter by:</span>
            </div>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-lg border-2 transition-all ${
                  filter === cat.id
                    ? 'border-primary bg-primary text-white'
                    : 'border-border hover:border-primary text-foreground'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 bg-muted overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                  {product.popular && (
                    <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                      Popular
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-bold text-foreground mb-1">{product.name}</h3>
                  <p className="text-sm text-foreground/70 mb-3">{product.description}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-primary text-primary'
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-foreground/60">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-1 mb-4 flex-grow text-xs text-foreground/70">
                    {product.features.slice(0, 2).map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>

                  {/* Price and CTA */}
                  <div className="border-t border-border pt-4">
                    <p className="text-2xl font-bold text-primary mb-3">{product.price}</p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-border"
                        onClick={() => toggleCart(product.id)}
                      >
                        {cart.includes(product.id) ? 'Remove' : 'Add'}
                      </Button>
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-white"
                        onClick={() => {/* Go to product detail */}}
                      >
                        View Details
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
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Buy from FavEco?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: 'Professional Installation', desc: 'Expert certified technicians' },
              { title: 'Extended Warranty', desc: '20-30 year coverage' },
              { title: 'Flexible Payments', desc: 'Monthly or quarterly' },
              { title: '24/7 Support', desc: 'Always here to help' }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-lg border border-border">
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {cart.length > 0 
              ? `Ready to proceed with ${cart.length} item${cart.length > 1 ? 's' : ''}?`
              : 'Ready to Go Solar?'}
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Choose your system, select your payment plan, and start enjoying clean energy today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/payment-plans">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                View Payment Plans
              </Button>
            </a>
            <a href="/calculator">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5">
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
