'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { ArrowRight, CheckCircle, Zap, TrendingUp, Award, Users } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function DistributorPage() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    region: '',
    experience: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*New Distributor Application*\n\n*Company:* ${formData.company}\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Region:* ${formData.region}\n*Experience:* ${formData.experience}\n*Message:* ${formData.message || 'None'}`;

    try {
      await fetch('https://formspree.io/f/mpqeelyy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'Distributor Application',
          company: formData.company,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          region: formData.region,
          experience: formData.experience,
          message: formData.message,
        }),
      });
    } catch (_err) {
      // Fallback to WhatsApp if Formspree fails
    }

    const whatsappUrl = `https://wa.me/2348022688291?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
  };

  const tiers = [
    {
      name: 'Platinum',
      description: 'For established large distributors',
      margin: '18-22%',
      minOrder: '₦15M',
      benefits: [
        'Margin: 18-22% on bulk orders',
        'Exclusive regional territory',
        'Comprehensive marketing support',
        'Priority customer support',
        'Dedicated B2B portal access',
        'Monthly performance bonuses',
        'Partner conference invitations',
        'Co-investment opportunities',
      ],
      recommended: true,
    },
    {
      name: 'Diamond',
      description: 'For premium wholesale partners',
      margin: '20-25%',
      minOrder: '₦30M+',
      benefits: [
        'Margin: 20-25% on bulk orders',
        'Exclusive national distribution',
        'Custom marketing campaigns',
        'VIP customer support (24/7)',
        'Advanced analytics dashboard',
        'Quarterly business reviews',
        'Strategic partnership planning',
        'Revenue sharing opportunities',
      ],
      recommended: false,
    },
  ];

  const requirements = [
    {
      icon: Award,
      title: 'Business Registration',
      description: 'Valid business license and tax ID',
    },
    {
      icon: Users,
      title: 'Sales Team',
      description: 'Dedicated solar sales professionals',
    },
    {
      icon: Zap,
      title: 'Technical Support',
      description: 'Qualified installation or support staff',
    },
    {
      icon: TrendingUp,
      title: 'Market Presence',
      description: 'Established customer base or territory',
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
              <span className="text-sm font-bold text-primary">Distributor Program</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] text-balance">
              Become a FavEco
              <span className="block text-primary">Master Distributor</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl">
              Join Africa&apos;s fastest-growing solar platform. Get wholesale rates, exclusive territories, and comprehensive support to build a thriving distribution business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#tiers"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-all group shadow-lg"
              >
                View Partnership Tiers
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

      {/* Why Partner Section */}
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
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Why Partner With FavEco</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Access industry-leading margins, exclusive support, and unlimited growth potential
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: '15-25%', subtitle: 'Wholesale Margins', desc: 'Industry-leading margins on bulk orders' },
                { title: 'Exclusive', subtitle: 'Territory Rights', desc: 'Protected regional distribution areas' },
                { title: '24/7', subtitle: 'Support', desc: 'Dedicated account managers & tech support' },
                { title: '100%', subtitle: 'Marketing Support', desc: 'Co-branded materials & campaigns' },
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

      {/* Partnership Tiers */}
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
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Partnership Tiers</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Choose the tier that matches your business scale and growth ambitions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {tiers.map((tier, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col ${
                    tier.recommended
                      ? 'border-primary shadow-2xl ring-2 ring-primary/20 md:scale-105'
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

      {/* Application Form */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Apply to Become a Distributor</h2>
          <p className="text-foreground/70 text-center mb-12">Fill out the form below and our partnership team will contact you within 48 hours.</p>
          
          {submitted ? (
            <div className="bg-white border border-border rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-primary font-bold text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Application Submitted!</h3>
              <p className="text-foreground/60 mb-4 leading-relaxed max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. Your distributor application has been sent to our partnership team.
              </p>
              <p className="text-xs text-foreground/50 mb-6">
                Or email us at{' '}
                <a href="mailto:request@favecopower.com" className="text-primary font-semibold hover:underline">request@favecopower.com</a>
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="default"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold"
                  onClick={() => window.open('https://wa.me/2348022688291', '_blank')}
                >
                  Chat on WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold"
                  onClick={() => { setSubmitted(false); setFormData({ company: '', name: '', email: '', phone: '', region: '', experience: '', message: '' }); }}
                >
                  Submit Another
                </Button>
              </div>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-border rounded-lg p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Company Name *</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {requirements.map((req, i) => {
                const Icon = req.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-6 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-colors text-center"
                  >
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-foreground mb-2">{req.title}</h3>
                    <p className="text-sm text-foreground/60">{req.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Additional Information</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                rows={4}
                placeholder="Tell us about your business and why you want to partner with FavEco..."
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
              Submit Application
            </Button>

            <p className="text-xs text-foreground/60 text-center">
              We'll review your application and contact you within 48 hours to discuss partnership opportunities.
            </p>
          </form>
          )}
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Ready to Scale Your Business?</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Apply for the FavEco Distributor Program and join our partner network across Africa.
            </p>
          </motion.div>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg group"
          >
            Submit Application
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
