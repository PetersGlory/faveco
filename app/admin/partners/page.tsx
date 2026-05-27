'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Plus, Search, Filter, MoreVertical } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function PartnersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const partners = [
    {
      id: 1,
      name: 'Solar Solutions Nigeria',
      type: 'Distributor',
      tier: 'Platinum',
      region: 'Southwest',
      status: 'active',
      email: 'contact@solarnig.com',
      joinDate: '2023-06-15',
    },
    {
      id: 2,
      name: 'Green Energy Stores',
      type: 'Reseller',
      tier: 'Gold',
      region: 'Southeast',
      status: 'active',
      email: 'info@greenstores.com',
      joinDate: '2023-08-20',
    },
    {
      id: 3,
      name: 'Elite Installation Group',
      type: 'Installer',
      tier: 'Master',
      region: 'Southwest',
      status: 'active',
      email: 'ops@eliteinstall.com',
      joinDate: '2023-09-10',
    },
    {
      id: 4,
      name: 'Renewable Energy Pros',
      type: 'Distributor',
      tier: 'Gold',
      region: 'North-Central',
      status: 'pending',
      email: 'hello@renepros.com',
      joinDate: '2024-01-15',
    },
    {
      id: 5,
      name: 'PowerHub Retail',
      type: 'Reseller',
      tier: 'Silver',
      region: 'Southeast',
      status: 'active',
      email: 'sales@powerhub.com',
      joinDate: '2024-02-01',
    },
  ];

  const filteredPartners = partners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || partner.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'pending':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'inactive':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-border">
        <div className="px-6 sm:px-10 lg:px-16 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/admin" className="text-foreground/70 hover:text-foreground transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-xl font-bold text-foreground">Partner Management</h1>
            </div>
            <Link
              href="/admin/partners/new"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-4 py-2 rounded-lg transition-all"
            >
              <Plus className="w-4 h-4" />
              Add Partner
            </Link>
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
          {/* Filters */}
          <div className="bg-white border border-border rounded-lg p-6 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/40" />
                <input
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-foreground/40" />
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <p className="text-sm text-foreground/60">
              Showing {filteredPartners.length} of {partners.length} partners
            </p>
          </div>

          {/* Partners Table */}
          <div className="bg-white border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Company</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Tier</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Region</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Join Date</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredPartners.map((partner, i) => (
                    <motion.tr
                      key={partner.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="hover:bg-muted/30 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-medium text-foreground">{partner.name}</p>
                          <p className="text-xs text-foreground/60">{partner.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-foreground">{partner.type}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-primary">{partner.tier}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-foreground/70">{partner.region}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusColor(partner.status)}`}>
                          {partner.status.charAt(0).toUpperCase() + partner.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-foreground/70">{partner.joinDate}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                          <MoreVertical className="w-4 h-4 text-foreground/60" />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Empty State */}
          {filteredPartners.length === 0 && (
            <div className="text-center py-12 bg-white border border-border rounded-lg">
              <p className="text-foreground/70 mb-4">No partners found</p>
              <Link
                href="/admin/partners/new"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
              >
                <Plus className="w-4 h-4" />
                Add First Partner
              </Link>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
