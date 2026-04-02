'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Residential', href: '/residential' },
    { label: 'Commercial', href: '/commercial' },
    { label: 'Become a Distributor', href: '/distributor' },
    // { label: 'Payment Plans', href: '/payment-plans' },
    { label: 'Shop', href: '/shop' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-base">☀️</span>
          </div>
          <span className={`font-bold text-lg hidden sm:inline transition-colors ${isScrolled ? 'text-foreground' : 'text-foreground'}`}>
            FavEco
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground/70' : 'text-foreground/70'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a href="/shop">
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
              Shop Now
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'hover:bg-muted' : 'hover:bg-white/10'}`}
        >
          {isMobileMenuOpen
            ? <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            : <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
          }
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-foreground/70 hover:text-primary text-sm font-medium py-2.5 border-b border-border/50 last:border-b-0 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a href="/shop">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Shop Now</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}