'use client';

import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  const footerLinks = {
    'Products': ['Residential', 'Commercial', 'Distributors', 'Shop'],
    'Solutions': ['Payment Plans', 'Energy Monitoring', 'Support', 'Calculator'],
    'Company': ['About Us', 'Blog', 'Careers', 'Contact'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Compliance']
  };

  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
    { icon: Instagram, url: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">☀️</span>
              </div>
              <span className="font-bold text-lg">FavEco</span>
            </div>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Reliable solar solutions for homes and businesses. We're empowering Africa's energy future with clean, affordable solar power.
            </p>

            {/* Newsletter */}
            <form onSubmit={handleNewsletterSubmit} className="mb-6">
              <label className="text-xs font-semibold text-white/80 block mb-2">
                Subscribe to our newsletter
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-primary/50"
                  required
                />
                <Button
                  type="submit"
                  size="sm"
                  className="bg-primary hover:bg-primary/90"
                >
                  Subscribe
                </Button>
              </div>
            </form>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4 text-sm">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={link.toLowerCase() || "#"}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-y border-white/10">
          <div className="flex gap-4 items-start">
            <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-white/60 mb-1">Support Hotline</p>
              <p className="text-white font-semibold">+234 (0) 700 SOLAR 1</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-white/60 mb-1">Email Us</p>
              <p className="text-white font-semibold">info@FavEco.com</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-white/60 mb-1">Office Location</p>
              <p className="text-white font-semibold">Ikoyi, Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-xs text-center sm:text-left">
            © 2026 FavEco. All rights reserved. Powering Africa's energy future.
          </p>
          <div className="flex gap-1 text-xs text-white/40">
            <span>Powered by clean</span>
            <span className="text-primary">☀️</span>
            <span>energy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
