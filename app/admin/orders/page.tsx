'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const orders = [
    {
      id: 'ORD-001',
      customer: 'Kunle Adeyemi',
      product: 'FavEco Smart 5kW',
      amount: '₦8,999',
      status: 'completed',
      date: '2024-01-15',
    },
    {
      id: 'ORD-002',
      customer: 'Fatima Hassan',
      product: 'FavEco Active 10kW',
      amount: '₦18,500',
      status: 'processing',
      date: '2024-01-18',
    },
    {
      id: 'ORD-003',
      customer: 'Chike Okoye',
      product: 'FavEco Grow 25kW',
      amount: '₦52,000',
      status: 'completed',
      date: '2024-01-10',
    },
    {
      id: 'ORD-004',
      customer: 'Grace Mensah',
      product: 'FavEco Flow 50kW',
      amount: '₦120,000',
      status: 'pending',
      date: '2024-01-20',
    },
    {
      id: 'ORD-005',
      customer: 'Ahmed Ibrahim',
      product: 'FavEco Smart 5kW',
      amount: '₦8,999',
      status: 'completed',
      date: '2024-01-19',
    },
  ];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || order.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'processing':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'pending':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-border">
        <div className="px-6 sm:px-10 lg:px-16 py-4">
          <div className="flex items-center gap-3">
            <Link href="/admin" className="text-foreground/70 hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-bold text-foreground">Orders & Sales</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 sm:px-10 lg:px-16 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: 'Total Orders', value: '1,234' },
              { label: 'This Month', value: '234' },
              { label: 'Total Revenue', value: '₦45.2M' },
              { label: 'Avg Order Value', value: '₦36.7K' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-border rounded-lg p-6"
              >
                <p className="text-sm text-foreground/60 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Filters */}
          <div className="bg-white border border-border rounded-lg p-6 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/40" />
                <input
                  type="text"
                  placeholder="Search by order ID or customer..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-foreground/40" />
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="completed">Completed</option>
                  <option value="processing">Processing</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
            </div>
          </div>

          {/* Orders Table */}
          <div className="bg-white border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Order ID</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Customer</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Product</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredOrders.map((order, i) => (
                    <motion.tr
                      key={order.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="hover:bg-muted/30 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-foreground">{order.id}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-foreground">{order.customer}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-foreground/70">{order.product}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-primary">{order.amount}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusColor(order.status)}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-foreground/70">{order.date}</span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
