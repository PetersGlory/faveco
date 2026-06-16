'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Users, Package, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function AnalyticsPage() {
  const metrics = [
    {
      title: 'Monthly Revenue',
      value: '₦45.2M',
      change: '+12%',
      icon: DollarSign,
      color: 'from-green-500/10 to-green-600/10',
    },
    {
      title: 'New Users',
      value: '2,340',
      change: '+8%',
      icon: Users,
      color: 'from-blue-500/10 to-blue-600/10',
    },
    {
      title: 'Total Orders',
      value: '1,234',
      change: '+15%',
      icon: Package,
      color: 'from-purple-500/10 to-purple-600/10',
    },
    {
      title: 'Growth Rate',
      value: '23%',
      change: '+5%',
      icon: TrendingUp,
      color: 'from-primary/10 to-primary/5',
    },
  ];

  const charts = [
    {
      title: 'Monthly Sales Trend',
      description: 'Revenue generated over the last 6 months',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      values: ['₦32M', '₦38M', '₦41M', '₦39M', '₦45M', '₦52M'],
    },
    {
      title: 'Product Performance',
      description: 'Top selling products by revenue',
      products: [
        { name: 'FavEco Smart', revenue: '₦15.4M', percentage: 34 },
        { name: 'FavEco Active', revenue: '₦14.2M', percentage: 31 },
        { name: 'FavEco Grow', revenue: '₦12.8M', percentage: 28 },
        { name: 'FavEco Flow', revenue: '₦2.8M', percentage: 7 },
      ],
    },
    {
      title: 'Customer Distribution',
      description: 'Breakdown by customer type',
      categories: [
        { name: 'Residential', count: 6800, percentage: 65 },
        { name: 'Commercial', count: 2200, percentage: 21 },
        { name: 'Enterprise', count: 1200, percentage: 14 },
      ],
    },
    {
      title: 'Regional Performance',
      description: 'Revenue by region',
      regions: [
        { name: 'Southwest Nigeria', revenue: '₦22.3M', percentage: 49 },
        { name: 'Southeast Nigeria', revenue: '₦12.5M', percentage: 28 },
        { name: 'Other Regions', revenue: '₦10.4M', percentage: 23 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-border">
        <div className="px-6 sm:px-10 lg:px-16 py-4">
          <div className="flex items-center gap-3">
            <Link href="/admin" className="text-foreground/70 hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-bold text-foreground">Analytics</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 sm:px-10 lg:px-16 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Key Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, i) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-gradient-to-br ${metric.color} border border-border rounded-xl p-6`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-8 h-8 text-foreground/60" />
                    <span className="text-sm font-semibold text-green-600">{metric.change}</span>
                  </div>
                  <p className="text-sm text-foreground/70 mb-1">{metric.title}</p>
                  <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Charts Grid */}
          <div className="space-y-6">
            {/* Sales Trend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-border rounded-xl p-8"
            >
              <h3 className="text-lg font-bold text-foreground mb-2">{charts[0].title}</h3>
              <p className="text-sm text-foreground/60 mb-6">{charts[0].description}</p>
              <div className="space-y-4">
                {charts[0].data.map((month, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="w-12 text-sm font-medium text-foreground">{month}</span>
                    <div className="flex-1 bg-muted h-8 rounded-lg relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: ['40%', '45%', '48%', '46%', '52%', '60%'][i] }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        className="bg-primary h-full rounded-lg"
                      />
                    </div>
                    <span className="w-16 text-right text-sm font-medium text-foreground">{charts[0].values[i]}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Product Performance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white border border-border rounded-xl p-8"
            >
              <h3 className="text-lg font-bold text-foreground mb-2">{charts[1].title}</h3>
              <p className="text-sm text-foreground/60 mb-6">{charts[1].description}</p>
              <div className="space-y-4">
                {charts[1].products.map((product, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{product.name}</span>
                      <span className="text-sm font-bold text-primary">{product.revenue}</span>
                    </div>
                    <div className="bg-muted h-2 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${product.percentage}%` }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                        className="bg-primary h-full"
                      />
                    </div>
                    <span className="text-xs text-foreground/60">{product.percentage}% of revenue</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Customer & Regional Data */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Customer Distribution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white border border-border rounded-xl p-8"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{charts[2].title}</h3>
                <p className="text-sm text-foreground/60 mb-6">{charts[2].description}</p>
                <div className="space-y-4">
                  {charts[2].categories.map((category, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{category.name}</span>
                        <span className="text-sm font-bold text-foreground/70">{category.count.toLocaleString()}</span>
                      </div>
                      <div className="bg-muted h-2 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${category.percentage}%` }}
                          transition={{ delay: 0.5 + i * 0.05 }}
                          className="bg-primary h-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Regional Performance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="bg-white border border-border rounded-xl p-8"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{charts[3].title}</h3>
                <p className="text-sm text-foreground/60 mb-6">{charts[3].description}</p>
                <div className="space-y-4">
                  {charts[3].regions.map((region, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{region.name}</span>
                        <span className="text-sm font-bold text-primary">{region.revenue}</span>
                      </div>
                      <div className="bg-muted h-2 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${region.percentage}%` }}
                          transition={{ delay: 0.5 + i * 0.05 }}
                          className="bg-primary h-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
