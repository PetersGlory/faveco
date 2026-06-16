'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Leaf, TrendingUp } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const stats = [
    { icon: Zap, label: '100+ MW', value: 'Installed Capacity' },
    { icon: Leaf, label: '500K+', value: 'Happy Customers' },
    { icon: TrendingUp, label: '25 yr', value: 'Warranty Coverage' },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 bg-background overflow-hidden">
      {/* Animated background gradient circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.3, 0.4]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                className="inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  Clean Energy for Africa
                </span>
              </motion.div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] text-balance">
                Premium Solar
                <span className="block text-primary">Solutions</span>
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-lg text-pretty">
                Enterprise-grade solar systems designed for African homes and businesses. Reliable, efficient, and built to last.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-all group shadow-lg hover:shadow-xl"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/calculator"
                className="inline-flex items-center justify-center gap-2 bg-card hover:bg-muted text-foreground font-semibold px-8 py-4 rounded-lg border border-border transition-all"
              >
                Calculate Savings
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex gap-6 pt-4 flex-wrap"
            >
              {[
                { icon: '⚡', text: 'Expert Installation' },
                { icon: '🛡️', text: '25-Year Warranty' },
                { icon: '💰', text: 'Flexible Payments' },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-2 text-sm text-foreground/70 font-medium">
                  <span>{item.icon}</span>
                  {item.text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: `${idx * 0.5}s` }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg transition-shadow group"
                >
                  <motion.div
                    className="mb-4 p-3 bg-primary/10 rounded-lg inline-block group-hover:bg-primary/20 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-foreground/60">{stat.value}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
