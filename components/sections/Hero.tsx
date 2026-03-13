'use client';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowRight, Sun } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const heroImages = [
    { src: '/hero-solar-1.jpg', alt: 'Solar panels on residential roof' },
    { src: '/hero-solar-2.jpg', alt: 'Commercial solar installation' },
  ];

  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Carousel Slider */}
      <div className="relative h-96 sm:h-[500px] lg:h-screen max-h-[600px] lg:max-h-screen mb-8 lg:mb-0">
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
          <CarouselPrevious className="left-4 bg-white/80 hover:bg-white text-foreground" />
          <CarouselNext className="right-4 bg-white/80 hover:bg-white text-foreground" />
        </Carousel>

        {/* Overlay with content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 flex items-center justify-center">
          <div className="relative max-w-4xl mx-auto text-center z-10 px-4 sm:px-6">
            {/* Badge with animation */}
            <div className="mb-8 flex justify-center animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/25 backdrop-blur-md rounded-full border border-white/40 shadow-lg">
                <Sun className="w-5 h-5 text-white animate-spin" style={{animationDuration: '20s'}} />
                <span className="text-sm font-semibold text-white tracking-wide">Powering Africa's Clean Energy Future</span>
              </div>
            </div>

            {/* Main Headline with enhanced styling */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance drop-shadow-lg">
              24/7 Reliable Solar Power
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-300 to-yellow-200 mt-2">For Homes & Businesses</span>
            </h1>

            {/* Subheading with better contrast */}
            <p className="text-lg sm:text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed text-balance drop-shadow-md">
              Say goodbye to unreliable generators and expensive diesel. FavEco delivers dependable solar energy with intelligent battery storage, keeping your power on—day and night. Join 5,000+ satisfied customers across Africa.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/shop" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-green-500 hover:from-primary/90 hover:to-green-600 text-white font-bold px-8 py-6 text-lg shadow-xl flex items-center justify-center gap-2 group transform hover:scale-105 transition-all"
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Button
                size="lg"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/20 font-bold px-8 py-6 text-lg backdrop-blur-sm transition-all"
              >
                View Our Solution
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-400 font-bold">✓</span> Expert Installation
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 font-bold">✓</span> 25+ Year Warranty
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 font-bold">✓</span> Flexible Payment Plans
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section Below Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 text-center border-2 border-primary/20 hover:border-primary/50 shadow-md hover:shadow-lg transition-all">
            <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">24/7</p>
            <p className="text-sm font-semibold text-foreground/80">Reliable Power</p>
            <p className="text-xs text-foreground/60 mt-2">Never experience blackouts</p>
          </div>
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-8 text-center border-2 border-accent/20 hover:border-accent/50 shadow-md hover:shadow-lg transition-all">
            <p className="text-3xl sm:text-4xl font-bold text-accent mb-2">Smart</p>
            <p className="text-sm font-semibold text-foreground/80">Battery Storage</p>
            <p className="text-xs text-foreground/60 mt-2">Automatic energy management</p>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 text-center border-2 border-primary/20 hover:border-primary/50 shadow-md hover:shadow-lg transition-all">
            <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">25+</p>
            <p className="text-sm font-semibold text-foreground/80">Years Warranty</p>
            <p className="text-xs text-foreground/60 mt-2">Industry-leading coverage</p>
          </div>
        </div>
      </div>
    </section>
  );
}
