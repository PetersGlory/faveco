'use client';

import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

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
      <section className="pt-32 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <a href="/" className="inline-flex items-center gap-2 mb-6 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Solar Savings Calculator
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            Discover how much you could save with FavEco
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Input Section */}
            <div className="bg-white border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Your Information</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Monthly Electricity Bill: ₦{monthlyBill.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="500"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-foreground/60 mt-2">
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
                    className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground"
                  >
                    <option value="residential">Residential (5-10kW)</option>
                    <option value="commercial">Commercial (15-25kW+)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 rounded-lg p-8">
                <p className="text-sm text-foreground/60 mb-2">Annual Savings</p>
                <p className="text-4xl font-bold text-primary">₦{Number(results.yearlySavings).toLocaleString()}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-border rounded-lg p-6">
                  <p className="text-xs text-foreground/60 mb-2">Monthly After Solar</p>
                  <p className="text-2xl font-bold text-foreground">₦{results.monthlyAfterSolar}</p>
                </div>
                <div className="bg-white border border-border rounded-lg p-6">
                  <p className="text-xs text-foreground/60 mb-2">Payback Period</p>
                  <p className="text-2xl font-bold text-primary">{results.paybackPeriod} years</p>
                </div>
              </div>

              <div className="bg-white border border-border rounded-lg p-6">
                <p className="text-xs text-foreground/60 mb-2">System Cost</p>
                <p className="text-2xl font-bold text-foreground">₦{results.systemCost.toLocaleString()}</p>
              </div>

              <div className="bg-accent/20 border-2 border-accent/30 rounded-lg p-6">
                <p className="text-sm text-foreground/70 mb-2">10-Year Savings After Investment</p>
                <p className="text-3xl font-bold text-accent">₦{Number(results.tenYearSavings).toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="mt-12 p-6 bg-muted/50 border border-border rounded-lg">
            <p className="text-sm text-foreground/70">
              <span className="font-semibold text-foreground">Note:</span> These calculations are estimates based on average 75% energy reduction and current electricity rates. Actual savings may vary based on your location, usage patterns, weather conditions, and system efficiency. Contact our team for a personalized assessment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Start Saving?</h2>
          <p className="text-lg text-foreground/70 mb-8">Contact our sales team for a custom quote tailored to your needs.</p>
          <a href="/shop">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Get Your Custom Quote
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
