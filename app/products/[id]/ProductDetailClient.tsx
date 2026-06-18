'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { ArrowRight, Zap, Leaf, Check } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PRODUCTS } from './products-data';

export default function ProductDetailClient() {
  const params = useParams();
  const productId = params.id as string;
  const product = PRODUCTS[productId as keyof typeof PRODUCTS];

  if (!product) {
    return (
      <main>
        <Navigation />
        <section className="py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link href="/products" className="text-primary hover:text-primary/80 font-semibold">
            Back to Products
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="overflow-hidden">
      <Navigation />

      <section className="pt-32 pb-16 lg:pb-0 px-6 sm:px-10 lg:px-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="relative h-80 lg:h-full min-h-96 rounded-2xl overflow-hidden bg-muted shadow-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold text-primary">{product.power}</span>
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-[1.1]">
                  {product.name}
                </h1>
                <p className="text-xl text-primary font-bold">{product.price}</p>
              </div>

              <p className="text-lg text-foreground/70 leading-relaxed">
                {product.longDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg group">
                  Get a Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-8 py-4 rounded-lg transition-all">
                  Schedule Demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-16"
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-2">Key Features</h2>
                <p className="text-foreground/60">Built for performance and reliability</p>
              </div>
              <ul className="space-y-4">
                {product.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-foreground/80">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-2">Why Choose This System</h2>
                <p className="text-foreground/60">Benefits designed for your needs</p>
              </div>
              <ul className="space-y-4">
                {product.benefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/20 transition-colors"
                  >
                    <Leaf className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2">Technical Specifications</h2>
              <p className="text-foreground/60">Complete system details</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.specs.map((spec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-white border border-border hover:border-primary/40 transition-colors"
                >
                  <p className="text-sm text-foreground/60 font-medium mb-2">{spec.label}</p>
                  <p className="text-2xl font-bold text-foreground">{spec.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Ready to Go Solar?</h2>
            <p className="text-lg text-foreground/70">
              Get started with {product.name} today and join thousands of satisfied customers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg group">
              Get a Custom Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-8 py-4 rounded-lg transition-all"
            >
              Compare Systems
            </Link>
          </div>

          <p className="text-sm text-foreground/60 pt-4">
            Need help choosing? <Link href="/calculator" className="text-primary hover:text-primary/80 font-semibold">Use our solar calculator</Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
