'use client';

import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  const footerLinks = {
    'Products':  ['Residential', 'Commercial', 'Distributors', 'Shop'],
    'Solutions': ['Energy Monitoring', 'Support', 'Calculator'],
    // 'Solutions': ['Payment Plans', 'Energy Monitoring', 'Support', 'Calculator'],
    'Company':   ['About Us', 'Blog', 'Careers', 'Contact'],
    'Legal':     ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Compliance'],
  };

  const socialLinks = [
    { icon: Facebook,  url: '#', label: 'Facebook' },
    { icon: Twitter,   url: '#', label: 'Twitter' },
    { icon: Linkedin,  url: '#', label: 'LinkedIn' },
    { icon: Instagram, url: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">☀️</span>
              </div>
              <span className="font-bold text-lg">FavEco</span>
            </div>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">
              Reliable solar solutions for homes and businesses. Empowering Africa's energy future with clean, affordable solar power.
            </p>

            {/* Newsletter */}
            <form onSubmit={handleNewsletterSubmit} className="mb-6">
              <label className="text-xs font-semibold text-white/70 block mb-2">
                Subscribe to our newsletter
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 bg-white/8 border border-white/15 rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-primary/50"
                  required
                />
                <Button type="submit" size="sm" className="bg-primary hover:bg-primary/90 text-white shrink-0">
                  Subscribe
                </Button>
              </div>
            </form>

            {/* Social */}
            <div className="flex gap-2">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a key={s.label} href={s.url} aria-label={s.label}
                    className="w-9 h-9 bg-white/8 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href={`/${link.toLowerCase().replace(/ /g, '-')}`}
                      className="text-white/45 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-y border-white/8">
          {[
            { Icon: Phone,  label: 'Support Hotline',  value: '+234 (0) 700 SOLAR 1' },
            { Icon: Mail,   label: 'Email Us',          value: 'info@faveco.com' },
            { Icon: MapPin, label: 'Office Location',   value: '12 Osho Street, Lagos, Nigeria' },
          ].map(({ Icon, label, value }) => (
            <div key={label} className="flex gap-3 items-start">
              <Icon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-white/45 mb-0.5">{label}</p>
                <p className="text-white text-sm font-medium">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © 2026 FavEco. All rights reserved. Powering Africa's energy future.
          </p>
          <div className="flex items-center gap-1 text-xs text-white/30">
            <span>Powered by clean</span>
            <span className="text-primary">☀️</span>
            <span>energy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}