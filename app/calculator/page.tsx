'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function CalculatorPage() {
  const [monthlyBill, setMonthlyBill] = useState(150);
  const [systemType, setSystemType] = useState('residential');

  const calculateSavings = () => {
    const annualBill = monthlyBill * 12;
    const systemCost = systemType === 'residential' ? 8999 : 24999;
    const yearlySavings = annualBill * 0.75; // 75% reduction
    const paybackPeriod = (systemCost / yearlySavings).toFixed(1);
    const tenYearSavings = yearlySavings * 10 - systemCost;

    return {
      annualBill,
      systemCost,
      yearlySavings: yearlySavings.toFixed(0),
      paybackPeriod,
      tenYearSavings: tenYearSavings.toFixed(0),
      monthlyAfterSolar: (monthlyBill * 0.25).toFixed(0)
    };
  };

  const results = calculateSavings();

  return (
    <main className="overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pb-24 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance">
              Solar Savings
              <span className="block text-primary">Calculator</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
              Discover how much you could save with FavEco solar systems
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Input Section */}
            <div className="bg-white border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-8">Your Information</h2>
              
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-4">
                    Monthly Electricity Bill
                  </label>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-4 p-4 bg-primary/10 rounded-lg border border-primary/20"
                  >
                    <p className="text-3xl font-bold text-primary">₦{monthlyBill.toLocaleString()}</p>
                  </motion.div>
                  <input
                    type="range"
                    min="50"
                    max="500"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-foreground/60 mt-3">
                    <span>₦50</span>
                    <span>₦500</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Installation Type
                  </label>
                  <select
                    value={systemType}
                    onChange={(e) => setSystemType(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground font-medium"
                  >
                    <option value="residential">Residential (5-10kW)</option>
                    <option value="commercial">Commercial (15-25kW+)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-gradient-to-br from-primary/15 to-primary/5 border-2 border-primary/30 rounded-2xl p-8 shadow-lg"
              >
                <p className="text-sm text-foreground/60 mb-2 font-medium">Annual Savings</p>
                <p className="text-5xl font-bold text-primary">₦{Number(results.yearlySavings).toLocaleString()}</p>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <p className="text-xs text-foreground/60 mb-2 font-medium">Monthly After Solar</p>
                  <p className="text-2xl font-bold text-foreground">₦{results.monthlyAfterSolar}</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <p className="text-xs text-foreground/60 mb-2 font-medium">Payback Period</p>
                  <p className="text-2xl font-bold text-primary">{results.paybackPeriod} yrs</p>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="text-xs text-foreground/60 mb-2 font-medium">System Cost</p>
                <p className="text-2xl font-bold text-foreground">₦{results.systemCost.toLocaleString()}</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent/30 rounded-xl p-6 shadow-md"
              >
                <p className="text-sm text-foreground/70 mb-2 font-medium">10-Year Savings After Investment</p>
                <p className="text-3xl font-bold text-accent">₦{Number(results.tenYearSavings).toLocaleString()}</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 p-6 bg-muted/50 border border-border rounded-xl"
          >
            <p className="text-sm text-foreground/70">
              <span className="font-semibold text-foreground">Note:</span> These calculations are estimates based on average 75% energy reduction and current electricity rates. Actual savings may vary based on your location, usage patterns, weather conditions, and system efficiency. Contact our team for a personalized assessment.
            </p>
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
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Ready to Go Solar?</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Contact our sales team for a custom quote tailored to your specific needs.
            </p>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg group"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-8 py-4 rounded-lg transition-all"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
