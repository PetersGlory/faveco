'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { ArrowRight, CheckCircle, Zap, TrendingUp, Award, Users } from 'lucide-react';
import Link from 'next/link';

export default function ResellerPage() {
  const tiers = [
    {
      name: 'Silver',
      description: 'Perfect for retail partners',
      margin: '12-15%',
      minOrder: '₦2M',
      benefits: [
        'Margin: 12-15% on orders',
        'Access to product catalog',
        'Basic marketing materials',
        'Monthly training sessions',
        'Email support',
        'Co-branding rights',
        'Demo unit access',
      ],
      recommended: false,
    },
    {
      name: 'Gold',
      description: 'For established retailers',
      margin: '15-18%',
      minOrder: '₦5M',
      benefits: [
        'Margin: 15-18% on orders',
        'Priority customer support',
        'Comprehensive marketing toolkit',
        'Weekly training programs',
        'Dedicated support team',
        'Co-investment in marketing',
        'Quarterly business reviews',
        'Exclusive product previews',
      ],
      recommended: true,
    },
  ];

  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pb-24 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-bold text-primary">Reseller Program</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] text-balance">
              Become a FavEco
              <span className="block text-primary">Reseller Partner</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl">
              Expand your retail portfolio with premium solar systems. Competitive margins, proven demand, and full training to help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#tiers"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-all group shadow-lg"
              >
                View Reseller Tiers
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-8 py-4 rounded-lg transition-all"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Why Become a Reseller</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Competitive margins, proven market demand, and comprehensive support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: '12-18%', subtitle: 'Margins', desc: 'Competitive margins on every sale' },
                { title: 'Proven', subtitle: 'Market Demand', desc: 'High customer interest in solar' },
                { title: 'Full', subtitle: 'Training', desc: 'Complete product knowledge & sales training' },
                { title: 'Marketing', subtitle: 'Support', desc: 'Ready-made promotional materials' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center p-8 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/30 transition-colors"
                >
                  <p className="text-3xl font-bold text-primary mb-1">{item.title}</p>
                  <p className="text-sm font-semibold text-foreground mb-3">{item.subtitle}</p>
                  <p className="text-sm text-foreground/60">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reseller Tiers */}
      <section id="tiers" className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Reseller Tiers</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Start small and scale with us
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {tiers.map((tier, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col ${
                    tier.recommended
                      ? 'border-primary shadow-2xl ring-2 ring-primary/20 md:col-span-2 lg:col-span-1'
                      : 'border-border hover:border-primary/40 hover:shadow-lg'
                  }`}
                >
                  {/* Recommended Badge */}
                  {tier.recommended && (
                    <div className="bg-primary text-white py-2 text-center text-sm font-bold">
                      Most Popular
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-3xl font-bold text-foreground mb-2">{tier.name}</h3>
                    <p className="text-sm text-foreground/60 mb-6">{tier.description}</p>

                    <div className="mb-6 space-y-3 py-6 border-y border-border">
                      <div>
                        <p className="text-xs text-foreground/60 mb-1">Margin</p>
                        <p className="text-2xl font-bold text-primary">{tier.margin}</p>
                      </div>
                      <div>
                        <p className="text-xs text-foreground/60 mb-1">Minimum Order</p>
                        <p className="text-lg font-bold text-foreground">{tier.minOrder}</p>
                      </div>
                    </div>

                    <ul className="space-y-3 flex-grow mb-8">
                      {tier.benefits.map((benefit, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/70">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="/contact"
                      className={`inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-lg transition-all ${
                        tier.recommended
                          ? 'bg-primary hover:bg-primary/90 text-white shadow-lg'
                          : 'border-2 border-primary text-primary hover:bg-primary/5'
                      }`}
                    >
                      Apply for {tier.name}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Ready to Add Solar to Your Portfolio?</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Join FavEco&apos;s network of retail partners selling premium solar solutions.
            </p>
          </motion.div>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg group"
          >
            Start Application
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
