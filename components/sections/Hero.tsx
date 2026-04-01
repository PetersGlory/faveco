'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const plugin = useRef(Autoplay({ delay: 6000, stopOnInteraction: true }));

  const heroImages = [
    { src: '/hero-solar-1.jpg', alt: 'Solar panels on residential roof' },
    { src: '/hero-solar-2.jpg', alt: 'Commercial solar installation' },
  ];

  return (
    <section className="relative pt-20 overflow-hidden">
      <div className="relative h-[520px] sm:h-[680px] lg:h-screen max-h-[900px]">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full"
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.play()}
        >
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-6 bg-white/10 hover:bg-white/20 border border-white/20 text-white" />
          <CarouselNext className="right-6 bg-white/10 hover:bg-white/20 border border-white/20 text-white" />
        </Carousel>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />

        {/* Content — bottom-left aligned like Arnergy */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-20 lg:pb-28">
            <p className="text-white/60 text-sm font-medium uppercase tracking-widest mb-4">
              Africa's Clean Energy Leader
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-4 max-w-3xl">
              Energy that pays for itself
            </h1>
            <p className="text-white/70 text-lg sm:text-xl mb-8 max-w-lg leading-relaxed">
              Reliable systems, lower bills, and long-term value for homes and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/shop"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3.5 rounded-lg transition-all group"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-medium px-7 py-3.5 rounded-lg backdrop-blur-sm transition-all"
              >
                Contact Us
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap gap-6 text-white/55 text-sm">
              {['Expert Installation', '25-Year Warranty', 'Flexible Payment Plans'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}