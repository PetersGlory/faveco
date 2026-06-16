'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { ArrowRight, Zap, Battery, Leaf, Shield } from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  power: string;
  price: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  specs: { label: string; value: string }[];
  image: string;
  recommended?: boolean;
  tier: 'entry' | 'mid' | 'premium' | 'enterprise';
}

export default function ProductsPage() {
  const products: Product[] = [
    {
      id: 'smart',
      name: 'FavEco Smart',
      power: '1kW – 5kW',
      price: 'Starting from ₦2.5M',
      description: 'Perfect for modern homes seeking reliable solar power',
      longDescription: 'The FavEco Smart system is engineered for residential customers who want dependable solar power without complexity. With capacities from 1kW to 5kW, it covers most household energy needs while maintaining affordability and ease of installation.',
      features: [
        'Modular 1kW – 5kW Solar Array',
        'Smart Energy Monitoring via Mobile App',
        '24/7 Battery Backup Power',
        'Professional Installation Included',
        '25-Year Performance Warranty',
      ],
      benefits: [
        'Reduces electricity bills by up to 80%',
        'Works during blackouts',
        'Expandable as needs grow',
        'Easy-to-use mobile app',
        'Qualified technician support',
      ],
      specs: [
        { label: 'Solar Power Range', value: '1kW – 5kW' },
        { label: 'Battery Capacity', value: '5kWh – 10kWh' },
        { label: 'Daily Runtime', value: '8-12 hours' },
        { label: 'Installation Time', value: '2-3 days' },
      ],
      image: '/product-agen.jpg',
      tier: 'entry',
      recommended: true,
    },
    {
      id: 'active',
      name: 'FavEco Active',
      power: '5kW – 10kW',
      price: 'Starting from ₦6.5M',
      description: 'Ideal for larger homes and small businesses',
      longDescription: 'The FavEco Active system bridges the gap between residential and commercial needs. With 5kW to 10kW capacity, it provides comprehensive power solutions for medium-sized homes or small commercial operations.',
      features: [
        'High-Capacity 5kW – 10kW Solar Array',
        'Intelligent Power Management System',
        'Reliable 24/7 Backup Power',
        'Three-Phase Option Available',
        'Advanced Energy Analytics Dashboard',
      ],
      benefits: [
        'Covers 90%+ of energy needs',
        'Suitable for home offices and small businesses',
        'Smart load management',
        'Real-time energy monitoring',
        'Future-proof expandability',
      ],
      specs: [
        { label: 'Solar Power Range', value: '5kW – 10kW' },
        { label: 'Battery Capacity', value: '15kWh – 25kWh' },
        { label: 'Daily Runtime', value: '16-20 hours' },
        { label: 'Installation Time', value: '3-5 days' },
      ],
      image: '/product-elegance.jpg',
      tier: 'mid',
    },
    {
      id: 'grow',
      name: 'FavEco Grow',
      power: '10kW – 25kW',
      price: 'Starting from ₦12M',
      description: 'Premium power for large homes and estates',
      longDescription: 'The FavEco Grow system is designed for large residential properties and growing businesses. With 10kW to 25kW capacity, it ensures energy independence for even the most demanding applications.',
      features: [
        'Premium 10kW – 25kW Solar Array',
        'Extended Battery Backup (Up to 48 Hours)',
        'Three-Phase Power Distribution',
        'Intelligent Load Balancing',
        'Commercial-Grade Monitoring',
      ],
      benefits: [
        'Complete energy independence',
        'Handles multiple high-load appliances',
        'Multi-day backup capability',
        'Commercial-grade reliability',
        'Scalable to suit growth',
      ],
      specs: [
        { label: 'Solar Power Range', value: '10kW – 25kW' },
        { label: 'Battery Capacity', value: '30kWh – 50kWh' },
        { label: 'Daily Runtime', value: '24-48 hours' },
        { label: 'Installation Time', value: '5-7 days' },
      ],
      image: '/product-opulence.jpg',
      tier: 'premium',
    },
    {
      id: 'flow',
      name: 'FavEco Flow',
      power: '25kW+',
      price: 'Custom Pricing',
      description: 'Enterprise-grade power for large-scale operations',
      longDescription: 'The FavEco Flow system represents the pinnacle of solar power technology. Designed for commercial operations, industrial facilities, and large estates, it delivers unlimited scalability and reliability.',
      features: [
        'Custom 25kW+ Solar Array Configuration',
        'Industrial-Grade Battery Systems',
        'Three-Phase Power with Load Management',
        'Advanced System Monitoring & Control',
        ' 24/7 Professional Monitoring Service',
      ],
      benefits: [
        'Unlimited power for any operation',
        'Industrial reliability standards',
        'Dedicated technical support',
        'Custom design for specific needs',
        'ROI in 3-5 years for businesses',
      ],
      specs: [
        { label: 'Solar Power Range', value: '25kW – 100kW+' },
        { label: 'Battery Capacity', value: '50kWh – 500kWh+' },
        { label: 'Daily Runtime', value: 'Configurable' },
        { label: 'Installation Time', value: 'Custom timeline' },
      ],
      image: '/product-inaeko.jpg',
      tier: 'enterprise',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <main className="overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pb-24 px-6 sm:px-10 lg:px-16 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] text-balance">
              Our Solar Product
              <span className="block text-primary">Portfolio</span>
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto text-pretty">
              From compact 1kW systems to enterprise 100kW+ solutions, we have the perfect solar system for your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className={`rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl ${
                  product.recommended
                    ? 'border-primary shadow-lg ring-2 ring-primary/20 md:col-span-2 lg:col-span-1'
                    : 'border-border'
                }`}
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.recommended && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-sm font-bold text-primary">{product.power}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{product.name}</h3>
                    <p className="text-primary text-lg font-semibold mt-2">{product.price}</p>
                  </div>

                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="space-y-2">
                    {product.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/65">
                        <Leaf className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/products/${product.id}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-sm group"
                  >
                    Explore System
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="py-16 lg:py-24 px-6 sm:px-10 lg:px-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Can't Decide Which System?
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Use our solar calculator to determine which system best fits your energy needs and budget.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-all group shadow-lg"
            >
              Calculate Savings
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-8 py-4 rounded-lg transition-all"
            >
              Talk to Experts
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
