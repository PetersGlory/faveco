'use client';

import { motion } from 'framer-motion';
import { BarChart3, Users, TrendingUp, Package, AlertCircle, Settings } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const stats = [
    {
      label: 'Total Orders',
      value: '1,234',
      change: '+12%',
      icon: Package,
      color: 'from-blue-500/10 to-blue-600/10',
      borderColor: 'border-blue-200',
    },
    {
      label: 'Active Users',
      value: '8,456',
      change: '+5%',
      icon: Users,
      color: 'from-green-500/10 to-green-600/10',
      borderColor: 'border-green-200',
    },
    {
      label: 'Revenue',
      value: '₦45.2M',
      change: '+8%',
      icon: TrendingUp,
      color: 'from-primary/10 to-primary/5',
      borderColor: 'border-primary/20',
    },
    {
      label: 'Pending Issues',
      value: '23',
      change: '-3%',
      icon: AlertCircle,
      color: 'from-amber-500/10 to-amber-600/10',
      borderColor: 'border-amber-200',
    },
  ];

  const menuItems = [
    {
      title: 'Partner Management',
      description: 'Manage distributors, resellers, and installers',
      icon: Users,
      href: '/admin/partners',
      color: 'from-primary/10 to-primary/5',
    },
    {
      title: 'Orders & Sales',
      description: 'View and manage customer orders',
      icon: Package,
      href: '/admin/orders',
      color: 'from-blue-500/10 to-blue-600/10',
    },
    {
      title: 'Analytics',
      description: 'View detailed performance metrics',
      icon: BarChart3,
      href: '/admin/analytics',
      color: 'from-green-500/10 to-green-600/10',
    },
    {
      title: 'Settings',
      description: 'Configure system settings and preferences',
      icon: Settings,
      href: '/admin/settings',
      color: 'from-purple-500/10 to-purple-600/10',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-border">
        <div className="px-6 sm:px-10 lg:px-16 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">☀️</span>
              </div>
              <h1 className="text-xl font-bold text-foreground">FavEco Admin</h1>
            </div>
            <Link
              href="/"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Back to Site
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 sm:px-10 lg:px-16 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Welcome Section */}
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-foreground">Welcome to Admin Dashboard</h2>
            <p className="text-foreground/70">Manage your FavEco platform and oversee all operations</p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`bg-gradient-to-br ${stat.color} border ${stat.borderColor} rounded-xl p-6`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-8 h-8 text-foreground/60" />
                    <span className="text-sm font-semibold text-green-600">{stat.change}</span>
                  </div>
                  <p className="text-sm text-foreground/70 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Menu Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Management Sections</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link href={item.href}>
                      <div className={`bg-gradient-to-br ${item.color} border border-border rounded-xl p-6 h-full hover:shadow-lg transition-shadow cursor-pointer`}>
                        <Icon className="w-10 h-10 text-primary mb-4" />
                        <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-foreground/60">{item.description}</p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white border border-border rounded-xl p-8 space-y-6">
            <h3 className="text-xl font-bold text-foreground">Quick Actions</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/admin/partners"
                className="block p-4 border-2 border-primary rounded-lg hover:bg-primary/5 transition-colors text-center font-medium text-primary"
              >
                Add New Partner
              </Link>
              <Link
                href="/admin/analytics"
                className="block p-4 border-2 border-foreground/20 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-center font-medium text-foreground/70 hover:text-primary"
              >
                View Analytics
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
