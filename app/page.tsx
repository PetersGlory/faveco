import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import ProductsGrid from '@/components/sections/ProductsGrid';
import ImpactMetrics from '@/components/sections/ImpactMetrics';
import WhatWeOffer from '@/components/sections/WhatWeOffer';
import Testimonials from '@/components/sections/Testimonials';
import InvestorsSection from '@/components/sections/InvestorsSection';
import DualCTASection from '@/components/sections/DualCTASection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <Hero />
      <ProductsGrid />
      <ImpactMetrics />
      <WhatWeOffer />
      <Testimonials />
      <InvestorsSection />
      <DualCTASection />
      <Footer />
    </main>
  );
}
