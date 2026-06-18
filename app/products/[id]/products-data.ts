export interface ProductSpec {
  label: string
  value: string
}

export interface ProductData {
  name: string
  power: string
  price: string
  description: string
  longDescription: string
  image: string
  features: string[]
  benefits: string[]
  specs: ProductSpec[]
}

export const PRODUCTS: Record<string, ProductData> = {
  smart: {
    name: 'FavEco Smart',
    power: '1kW – 5kW',
    price: 'Starting from ₦2.5M',
    description: 'Perfect for modern homes seeking reliable solar power',
    longDescription: 'The FavEco Smart system is engineered for residential customers who want dependable solar power without complexity. With capacities from 1kW to 5kW, it covers most household energy needs while maintaining affordability and ease of installation.',
    image: '/product-agen.jpg',
    features: [
      'Modular 1kW – 5kW Solar Array',
      'Smart Energy Monitoring via Mobile App',
      '24/7 Battery Backup Power',
      'Professional Installation Included',
      '25-Year Performance Warranty',
    ],
    benefits: [
      'Reduces electricity bills by up to 80%',
      'Works during blackouts',
      'Expandable as needs grow',
      'Easy-to-use mobile app',
      'Qualified technician support',
    ],
    specs: [
      { label: 'Solar Power Range', value: '1kW – 5kW' },
      { label: 'Battery Capacity', value: '5kWh – 10kWh' },
      { label: 'Daily Runtime', value: '8-12 hours' },
      { label: 'Installation Time', value: '2-3 days' },
      { label: 'Warranty', value: '25 years' },
      { label: 'Monitoring', value: 'Cloud-based App' },
    ],
  },
  active: {
    name: 'FavEco Active',
    power: '5kW – 10kW',
    price: 'Starting from ₦6.5M',
    description: 'Ideal for larger homes and small businesses',
    longDescription: 'The FavEco Active system bridges the gap between residential and commercial needs. With 5kW to 10kW capacity, it provides comprehensive power solutions for medium-sized homes or small commercial operations.',
    image: '/product-elegance.jpg',
    features: [
      'High-Capacity 5kW – 10kW Solar Array',
      'Intelligent Power Management System',
      'Reliable 24/7 Backup Power',
      'Three-Phase Option Available',
      'Advanced Energy Analytics Dashboard',
    ],
    benefits: [
      'Covers 90%+ of energy needs',
      'Suitable for home offices and small businesses',
      'Smart load management',
      'Real-time energy monitoring',
      'Future-proof expandability',
    ],
    specs: [
      { label: 'Solar Power Range', value: '5kW – 10kW' },
      { label: 'Battery Capacity', value: '15kWh – 25kWh' },
      { label: 'Daily Runtime', value: '16-20 hours' },
      { label: 'Installation Time', value: '3-5 days' },
      { label: 'Warranty', value: '25 years' },
      { label: 'Phases', value: 'Single or Three' },
    ],
  },
  grow: {
    name: 'FavEco Grow',
    power: '10kW – 25kW',
    price: 'Starting from ₦12M',
    description: 'Premium power for large homes and estates',
    longDescription: 'The FavEco Grow system is designed for large residential properties and growing businesses. With 10kW to 25kW capacity, it ensures energy independence for even the most demanding applications.',
    image: '/product-opulence.jpg',
    features: [
      'Premium 10kW – 25kW Solar Array',
      'Extended Battery Backup (Up to 48 Hours)',
      'Three-Phase Power Distribution',
      'Intelligent Load Balancing',
      'Commercial-Grade Monitoring',
    ],
    benefits: [
      'Complete energy independence',
      'Handles multiple high-load appliances',
      'Multi-day backup capability',
      'Commercial-grade reliability',
      'Scalable to suit growth',
    ],
    specs: [
      { label: 'Solar Power Range', value: '10kW – 25kW' },
      { label: 'Battery Capacity', value: '30kWh – 50kWh' },
      { label: 'Daily Runtime', value: '24-48 hours' },
      { label: 'Installation Time', value: '5-7 days' },
      { label: 'Warranty', value: '25 years' },
      { label: 'Monitoring', value: 'Advanced Analytics' },
    ],
  },
  flow: {
    name: 'FavEco Flow',
    power: '25kW+',
    price: 'Custom Pricing',
    description: 'Enterprise-grade power for large-scale operations',
    longDescription: 'The FavEco Flow system represents the pinnacle of solar power technology. Designed for commercial operations, industrial facilities, and large estates, it delivers unlimited scalability and reliability.',
    image: '/product-inaeko.jpg',
    features: [
      'Custom 25kW+ Solar Array Configuration',
      'Industrial-Grade Battery Systems',
      'Three-Phase Power with Load Management',
      'Advanced System Monitoring & Control',
      '24/7 Professional Monitoring Service',
    ],
    benefits: [
      'Unlimited power for any operation',
      'Industrial reliability standards',
      'Dedicated technical support',
      'Custom design for specific needs',
      'ROI in 3-5 years for businesses',
    ],
    specs: [
      { label: 'Solar Power Range', value: '25kW – 100kW+' },
      { label: 'Battery Capacity', value: '50kWh – 500kWh+' },
      { label: 'Daily Runtime', value: 'Configurable' },
      { label: 'Installation Time', value: 'Custom timeline' },
      { label: 'Warranty', value: '25 years + SLA' },
      { label: 'Support', value: '24/7 Dedicated' },
    ],
  },
}
