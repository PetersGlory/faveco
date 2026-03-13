'use client';

import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, TrendingUp, Users, Award } from 'lucide-react';
import { useState } from 'react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const products = [
    {
      name: 'AGEN',
      power: '5kW',
      wholesale: '₦2,800,000',
      margin: '20%',
      description: 'Entry-level residential system'
    },
    {
      name: 'Opulence',
      power: '10kW',
      wholesale: '₦7,200,000',
      margin: '20%',
      description: 'Mid-range residential system'
    },
    {
      name: 'Inaeko',
      power: '25kW',
      wholesale: '₦20,000,000',
      margin: '20%',
      description: 'Commercial-grade system'
    },
    {
      name: 'Elegance',
      power: '15kW',
      wholesale: '₦10,400,000',
      margin: '20%',
      description: 'Premium residential system'
    }
  ];

  const benefits = [
    { icon: TrendingUp, title: 'Attractive Margins', desc: 'Competitive wholesale pricing' },
    { icon: Users, title: 'Dedicated Support', desc: 'Sales and technical team backing' },
    { icon: Award, title: 'Training Programs', desc: 'Full certification and training' },
    { icon: MapPin, title: 'Territory Rights', desc: 'Exclusive regional opportunities' }
  ];

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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Become a FavEco Distributor
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mb-8 text-balance">
            Partner with Africa's leading solar energy provider. Grow your business while bringing clean energy to your community.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Partner with FavEco?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="bg-white p-6 rounded-lg border border-border hover:border-primary/50 transition-all">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-foreground/70">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Product Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <div key={i} className="bg-muted/30 border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-sm text-foreground/70 mb-4">{product.description}</p>
                <div className="space-y-2 mb-4">
                  <div>
                    <p className="text-xs text-foreground/60">Power Output</p>
                    <p className="font-bold text-foreground">{product.power}</p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60">Wholesale Price</p>
                    <p className="font-bold text-primary">{product.wholesale}</p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60">Distributor Margin</p>
                    <p className="font-bold text-primary">{product.margin}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Apply to Become a Distributor</h2>
          <p className="text-foreground/70 text-center mb-12">Fill out the form below and our partnership team will contact you within 48 hours.</p>
          
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="+234..."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Region of Interest *</label>
                <select
                  required
                  value={formData.region}
                  onChange={(e) => setFormData({...formData, region: e.target.value})}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select region</option>
                  <option value="southwest">Southwest Nigeria</option>
                  <option value="southeast">Southeast Nigeria</option>
                  <option value="northcentral">North-Central Nigeria</option>
                  <option value="northeast">Northeast Nigeria</option>
                  <option value="northwest">Northwest Nigeria</option>
                  <option value="ghana">Ghana</option>
                  <option value="kenya">Kenya</option>
                  <option value="other">Other (Specify in message)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Years in Energy Business *</label>
                <select
                  required
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select experience</option>
                  <option value="0-2">0-2 years</option>
                  <option value="2-5">2-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10plus">10+ years</option>
                </select>
              </div>
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Questions About Distribution?</h2>
          <p className="text-lg text-foreground/70 mb-8">Contact our partnership team for more information.</p>
          <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5">
            Contact Us
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
