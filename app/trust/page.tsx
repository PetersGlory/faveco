'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Award, Shield, Zap, Users, Globe, TrendingUp } from 'lucide-react';
import { Star } from 'lucide-react';

export default function TrustPage() {
  const stats = [
    { number: '50,000+', label: 'Happy Customers', icon: Users },
    { number: '15 Years', label: 'Industry Experience', icon: TrendingUp },
    { number: '99.8%', label: 'System Uptime', icon: Zap },
    { number: '25+', label: 'Countries Served', icon: Globe },
  ];

  const testimonials = [
    {
      name: 'Kunle Adeyemi',
      location: 'Lagos, Nigeria',
      role: 'Business Owner',
      text: 'FavEco solar panels have reduced my electricity bills by 80%. The installation was seamless and the customer support is outstanding. Best investment I\'ve made for my business.',
      rating: 5,
      image: '👨‍💼',
    },
    {
      name: 'Fatima Hassan',
      location: 'Kano, Nigeria',
      role: 'Homeowner',
      text: 'Three years with FavEco and I haven\'t looked back. My family enjoys 24/7 power while protecting the environment. The maintenance-free system is exactly what we needed.',
      rating: 5,
      image: '👩‍🦰',
    },
    {
      name: 'Chike Okoye',
      location: 'Port Harcourt, Nigeria',
      role: 'Factory Manager',
      text: 'We switched our entire factory operation to FavEco systems. The reliability and efficiency improvements are remarkable. Production costs have dropped significantly.',
      rating: 5,
      image: '👨‍💼',
    },
    {
      name: 'Grace Mensah',
      location: 'Accra, Ghana',
      role: 'Healthcare Provider',
      text: 'Running a clinic requires consistent power supply. FavEco has been a game-changer for our hospital. Patients receive better care with reliable electricity.',
      rating: 5,
      image: '👩‍⚕️',
    },
  ];

  const certifications = [
    {
      title: 'ISO 9001:2015',
      description: 'Quality Management System',
      icon: Award,
    },
    {
      title: 'ISO 14001:2015',
      description: 'Environmental Management',
      icon: Globe,
    },
    {
      title: 'IEC 61215',
      description: 'Solar Module Safety',
      icon: Zap,
    },
    {
      title: 'CE Mark',
      description: 'European Compliance',
      icon: Shield,
    },
  ];

  const guarantees = [
    {
      title: '10-Year Performance',
      description: 'Solar panels guaranteed to operate at 90% efficiency for 10 years',
    },
    {
      title: '25-Year Warranty',
      description: 'Extended coverage ensures long-term system reliability',
    },
    {
      title: 'Free Support',
      description: '24/7 customer support and technical assistance',
    },
    {
      title: 'Maintenance Free',
      description: 'No moving parts mean minimal maintenance requirements',
    },
  ];

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
              Trusted by
              <span className="block text-primary">50,000+ Customers</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
              Industry-leading certifications, warranties, and customer satisfaction
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center p-8 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/30 transition-colors"
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-4xl font-bold text-primary mb-1">{stat.number}</p>
                  <p className="text-sm text-foreground/70">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">What Our Customers Say</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Real stories from real customers who switched to solar
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-foreground/70 mb-4 line-clamp-4">{testimonial.text}</p>

                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-foreground/60">{testimonial.role}</p>
                    <p className="text-xs text-primary font-medium">{testimonial.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
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
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Certifications & Standards</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                We meet and exceed international quality and safety standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, i) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
                  >
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-foreground mb-2">{cert.title}</h3>
                    <p className="text-sm text-foreground/60">{cert.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Our Guarantees</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Peace of mind with comprehensive protection and support
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {guarantees.map((guarantee, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 p-6 rounded-xl bg-white border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <Shield className="w-8 h-8 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{guarantee.title}</h3>
                    <p className="text-sm text-foreground/70">{guarantee.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Join Our Community</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Be part of the 50,000+ customers already enjoying clean, reliable solar energy.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg"
            >
              Explore Products
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-8 py-4 rounded-lg transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
