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
import { ArrowRight, ChevronRight, Zap } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const plugin = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  const heroImages = [
    { src: '/hero-solar-1.jpg', alt: 'Solar panels on residential roof' },
    { src: '/hero-solar-2.jpg', alt: 'Commercial solar installation' },
  ];

  const stats = [
    { value: '5,000+', label: 'Installations', sub: 'Across Africa' },
    { value: '25 Yr', label: 'Warranty', sub: 'Industry-leading coverage' },
    { value: '24/7', label: 'Uptime', sub: 'Zero blackout guarantee' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .hero-root {
          font-family: 'DM Sans', sans-serif;
        }

        .hero-headline {
          font-family: 'Cormorant Garamond', serif;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-16px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(251, 191, 36, 0); }
          50%       { box-shadow: 0 0 24px 4px rgba(251, 191, 36, 0.18); }
        }

        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @keyframes lineSweep {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        .animate-fadeup-1 { animation: fadeUp 0.8s ease forwards; animation-delay: 0.1s; opacity: 0; }
        .animate-fadeup-2 { animation: fadeUp 0.8s ease forwards; animation-delay: 0.3s; opacity: 0; }
        .animate-fadeup-3 { animation: fadeUp 0.8s ease forwards; animation-delay: 0.5s; opacity: 0; }
        .animate-fadeup-4 { animation: fadeUp 0.8s ease forwards; animation-delay: 0.7s; opacity: 0; }
        .animate-fadeup-5 { animation: fadeUp 0.8s ease forwards; animation-delay: 0.9s; opacity: 0; }

        .badge-glow { animation: glowPulse 3s ease-in-out infinite; }
        .icon-rotate { animation: rotateSlow 20s linear infinite; }

        .line-sweep {
          transform-origin: left;
          animation: lineSweep 1s ease forwards;
          animation-delay: 0.6s;
          transform: scaleX(0);
        }

        .stat-card {
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .stat-card:hover {
          transform: translateY(-4px);
        }

        .cta-primary {
          transition: all 0.25s ease;
        }
        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.25);
        }
        .cta-primary:hover .arrow-icon {
          transform: translateX(4px);
        }
        .arrow-icon {
          transition: transform 0.25s ease;
        }

        .cta-secondary {
          transition: all 0.25s ease;
        }
        .cta-secondary:hover {
          background: rgba(255,255,255,0.12);
          transform: translateY(-2px);
        }

        .trust-pill {
          transition: background 0.2s ease;
        }
        .trust-pill:hover {
          background: rgba(255,255,255,0.15);
        }

        /* Carousel nav buttons */
        .hero-carousel-prev,
        .hero-carousel-next {
          background: rgba(255,255,255,0.08) !important;
          border: 1px solid rgba(255,255,255,0.2) !important;
          backdrop-filter: blur(8px);
          color: white !important;
          transition: background 0.2s ease !important;
          width: 44px !important;
          height: 44px !important;
        }
        .hero-carousel-prev:hover,
        .hero-carousel-next:hover {
          background: rgba(255,255,255,0.18) !important;
        }

        /* Slide counter dots */
        .slide-counter {
          display: flex;
          gap: 6px;
          align-items: center;
        }
        .slide-dot {
          width: 24px;
          height: 2px;
          background: rgba(255,255,255,0.35);
          border-radius: 999px;
          transition: all 0.3s ease;
        }
        .slide-dot.active {
          width: 36px;
          background: rgba(255,255,255,0.9);
        }
      `}</style>

      <section className="hero-root relative pt-20 overflow-hidden bg-transparent">

        {/* ── CAROUSEL ─────────────────────────────────────── */}
        <div className="relative h-[520px] sm:h-[620px] lg:h-screen max-h-[780px]">
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
                    className="w-full h-full object-cover opacity-75"
                    style={{ filter: 'saturate(0.85)' }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hero-carousel-prev left-6" />
            <CarouselNext   className="hero-carousel-next right-6" />
          </Carousel>

          {/* Multi-layer overlay for depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.15) 100%)',
            }}
          />
          {/* Side vignette */}
          <div
            className="absolute inset-0 pointer-events-none hidden lg:block"
            style={{
              background:
                'linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.3) 100%)',
            }}
          />

          {/* ── HERO CONTENT ──────────────────────────────── */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 text-center">

              {/* Eyebrow badge */}
              <div className="animate-fadeup-1 flex justify-center mb-7">
                <span
                  className="badge-glow inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(251,191,36,0.4)',
                    color: 'rgba(253,224,120,0.95)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Zap className="icon-rotate w-3.5 h-3.5 text-yellow-300" />
                  Africa's Clean Energy Leader
                </span>
              </div>

              {/* Headline */}
              <h1
                className="hero-headline animate-fadeup-2 text-white leading-[1.05] text-balance mb-2"
                style={{ fontSize: 'clamp(2.6rem, 6vw, 5.5rem)', fontWeight: 600, letterSpacing: '-0.01em' }}
              >
                24/7 Reliable Solar Power
              </h1>

              {/* Accent line + sub-headline */}
              <div className="animate-fadeup-3 flex justify-center mb-3">
                <span
                  className="line-sweep block h-px w-24 mt-1 mb-4"
                  style={{ background: 'linear-gradient(to right, rgba(251,191,36,0.8), rgba(251,191,36,0.15))' }}
                />
              </div>

              <p
                className="hero-headline animate-fadeup-3 text-balance"
                style={{
                  fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
                  fontWeight: 400,
                  color: 'rgba(253,224,120,0.85)',
                  fontStyle: 'italic',
                  letterSpacing: '0.01em',
                  marginBottom: '1.5rem',
                }}
              >
                For Homes &amp; Businesses
              </p>

              {/* Body copy */}
              <p
                className="animate-fadeup-3 mx-auto mb-10 text-balance"
                style={{
                  maxWidth: '680px',
                  fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                  color: 'rgba(255,255,255,0.68)',
                  lineHeight: 1.75,
                  fontWeight: 300,
                }}
              >
                Say goodbye to unreliable generators and costly diesel. FavEco delivers intelligent solar energy with battery storage that keeps the lights on — day and night. Join 5,000+ homes and businesses across Africa.
              </p>

              {/* CTA Buttons */}
              <div className="animate-fadeup-4 flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
                <a href="/shop" className="w-full sm:w-auto">
                  <button
                    className="cta-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-black"
                    style={{
                      background: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 60%, #D97706 100%)',
                      boxShadow: '0 4px 20px rgba(251,191,36,0.3)',
                    }}
                  >
                    Shop Now
                    <ArrowRight className="arrow-icon w-4 h-4" />
                  </button>
                </a>

                <button
                  className="cta-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-base text-white"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.22)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  View Our Solutions
                  <ChevronRight className="w-4 h-4 opacity-60" />
                </button>
              </div>

              {/* Trust indicators */}
              <div className="animate-fadeup-5 flex flex-wrap justify-center items-center gap-2 sm:gap-3">
                {['Expert Installation', '25-Year Warranty', 'Flexible Payment Plans'].map((item) => (
                  <span
                    key={item}
                    className="trust-pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: 'rgba(255,255,255,0.65)',
                    }}
                  >
                    <span style={{ color: '#86EFAC' }}>✓</span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom slide indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 slide-counter z-10">
            {heroImages.map((_, i) => (
              <div key={i} className={`slide-dot ${i === 0 ? 'active' : ''}`} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}