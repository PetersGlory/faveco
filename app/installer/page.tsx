'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { ArrowRight, CheckCircle, Zap, Award, Users, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function InstallerPage() {
  const certLevels = [
    {
      level: 'Certified Technician',
      description: 'Foundation-level installation expertise',
      requirements: [
        'High school diploma or equivalent',
        'Electrical safety certification',
        'Complete FavEco training program (2 weeks)',
        'Pass competency assessment',
        'Work shadowing (5+ installations)',
      ],
      benefits: [
        'Access to job opportunities',
        'Commission on installations',
        'Ongoing technical support',
        'Insurance coverage',
        'Safety equipment provided',
      ],
      commission: '₦50K - ₦100K per system',
    },
    {
      level: 'Master Installer',
      description: 'Advanced installation & leadership',
      requirements: [
        'Certified Technician status',
        '100+ successful installations',
        'Advanced FavEco certification (4 weeks)',
        'Project management training',
        'Team leadership certification',
      ],
      benefits: [
        'Higher commission rates (₦150K - ₦250K)',
        'Lead technician responsibilities',
        'Training other installers',
        'Priority project selection',
        'Partnership revenue share',
        'Direct FavEco account manager',
      ],
      commission: '₦150K - ₦250K per system',
      recommended: true,
    },
    {
      level: 'Installation Partner',
      description: 'Full-service installation company',
      requirements: [
        'Registered company/business',
        'Master Installer on staff',
        'Fleet of 5+ technicians minimum',
        'Project management systems',
        'Insurance & bonding',
      ],
      benefits: [
        'Wholesale rates on all systems',
        'Exclusive territory rights',
        'Co-branded materials',
        'Marketing support',
        'Equipment financing options',
        'Priority customer assignment',
        'Quarterly business reviews',
      ],
      commission: '15-20% on project contracts',
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
              <span className="text-sm font-bold text-primary">Installer Network</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] text-balance">
              Join FavEco
              <span className="block text-primary">Installer Network</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl">
              Build a profitable solar installation business. Get certified, access projects, and earn competitive commissions while helping Africa transition to clean energy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#levels"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-all group shadow-lg"
              >
                View Certification Levels
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

      {/* Why Join Section */}
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
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Why Join Our Network</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Build a sustainable career with steady project flow and growth opportunities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Zap, title: 'Steady Work', desc: 'Consistent project assignments' },
                { icon: Award, title: 'Professional Certification', desc: 'Recognized credentials' },
                { icon: Users, title: 'Community', desc: 'Network with other installers' },
                { icon: BookOpen, title: 'Training', desc: 'Continuous skill development' },
              ].map((item, i) => {
                const Icon = item.icon;
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
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground/60">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certification Levels */}
      <section id="levels" className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Certification Levels</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Progress through our certification program and grow your earning potential
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {certLevels.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col ${
                    cert.recommended
                      ? 'border-primary shadow-2xl ring-2 ring-primary/20'
                      : 'border-border hover:border-primary/40 hover:shadow-lg'
                  }`}
                >
                  {/* Recommended Badge */}
                  {cert.recommended && (
                    <div className="bg-primary text-white py-2 text-center text-sm font-bold">
                      Most Popular
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{cert.level}</h3>
                    <p className="text-sm text-foreground/60 mb-6">{cert.description}</p>

                    <div className="mb-6 pb-6 border-b border-border">
                      <p className="text-xs text-foreground/60 mb-2">Commission</p>
                      <p className="text-2xl font-bold text-primary">{cert.commission}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-foreground mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {cert.requirements.map((req, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-foreground/70">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-foreground mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {cert.benefits.map((benefit, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-foreground/70">
                            <Zap className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="/contact"
                      className={`inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-lg transition-all ${
                        cert.recommended
                          ? 'bg-primary hover:bg-primary/90 text-white shadow-lg'
                          : 'border-2 border-primary text-primary hover:bg-primary/5'
                      }`}
                    >
                      Apply for {cert.level}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Comprehensive Training</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                We provide world-class training to ensure your success
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Technical Skills',
                  items: ['Solar panel installation', 'Battery systems', 'Electrical safety', 'Troubleshooting'],
                },
                {
                  title: 'Safety Training',
                  items: ['Workplace safety', 'Electrical hazards', 'Fall protection', 'Emergency protocols'],
                },
                {
                  title: 'Business Skills',
                  items: ['Customer service', 'Project management', 'Tools & equipment', 'Quality assurance'],
                },
              ].map((program, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/30 transition-colors"
                >
                  <h3 className="text-lg font-bold text-foreground mb-4">{program.title}</h3>
                  <ul className="space-y-2">
                    {program.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-foreground/70">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
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
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Ready to Start Your Solar Career?</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Apply now and begin your journey as a certified FavEco installer.
            </p>
          </motion.div>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg group"
          >
            Apply Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
