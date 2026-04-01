'use client';

import { ArrowRight, Zap } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
  price: string;
  link: string;
  popular?: boolean;
  power: string;
}

export default function ProductsGrid() {
  const products: Product[] = [
    {
      id: 'smart',
      name: 'FavEco Smart',
      power: '1kW – 5kW',
      description: 'Our most popular choice for modern homes',
      features: ['1,000W – 5,000W System', 'Mobile Solutions', '24/7 Backup Power'],
      image: '/product-agen.jpg',
      price: '',
      link: '/shop#smart',
      popular: true,
    },
    {
      id: 'active',
      name: 'FavEco Active',
      power: '5kW – 10kW',
      description: 'Great choice for residential customers & businesses',
      features: ['5kW – 10kW Solar Power System', 'Smart Energy Monitoring', 'Reliable 24/7 Backup Power'],
      image: '/product-elegance.jpg',
      price: '',
      link: '/shop#active',
    },
    {
      id: 'grow',
      name: 'FavEco Grow',
      power: '10kW – 25kW',
      description: 'Premium power for large homes and estates',
      features: ['15kW Solar Power System', 'Intelligent Power Management', 'Extended Backup (Up to 48 Hours)'],
      image: '/product-opulence.jpg',
      price: '',
      link: '/shop#grow',
    },
    {
      id: 'flow',
      name: 'FavEco Flow',
      power: '25kW+',
      description: 'Enterprise-grade power for large-scale needs',
      features: ['25kW Solar Power System', 'Advanced System Monitoring', 'Three-Phase Power Support'],
      image: '/product-inaeko.jpg',
      price: '',
      link: '/shop#flow',
    },
  ];

  return (
    <>
      <style>{`

        .pg-root {
          font-family: 'DM Sans', sans-serif;
          color: rgba(255,255,255,0.85);
        }

        .pg-serif { font-family: 'Cormorant Garamond', serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .pg-card {
          background: #0d1510;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .pg-card:hover {
          transform: translateY(-6px);
          border-color: rgba(251,191,36,0.25);
          box-shadow: 0 20px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(251,191,36,0.1);
        }
        .pg-card.popular {
          border-color: rgba(251,191,36,0.45);
          box-shadow: 0 0 0 1px rgba(251,191,36,0.15), 0 16px 48px rgba(0,0,0,0.45);
          background: linear-gradient(160deg, #111a10 0%, #0d1510 60%);
        }
        .pg-card.popular:hover {
          border-color: rgba(251,191,36,0.65);
          box-shadow: 0 24px 56px rgba(0,0,0,0.55), 0 0 0 1px rgba(251,191,36,0.25);
        }

        .pg-img-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: #0a0f0a;
        }
        .pg-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.82;
          filter: saturate(0.8);
          transition: transform 0.5s ease, opacity 0.4s ease;
        }
        .pg-card:hover .pg-img-wrap img {
          transform: scale(1.06);
          opacity: 0.92;
        }
        .pg-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(7,12,9,0.75) 0%, transparent 55%);
        }

        .pg-popular-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: linear-gradient(135deg, #FBBF24, #D97706);
          color: #000;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 999px;
          z-index: 10;
        }

        .pg-power-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 3px 10px;
          border-radius: 999px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          background: rgba(251,191,36,0.1);
          border: 1px solid rgba(251,191,36,0.25);
          color: #FBBF24;
          margin-bottom: 8px;
        }

        .pg-divider {
          height: 1px;
          background: linear-gradient(to right, rgba(255,255,255,0.06), transparent);
          margin: 16px 0;
        }

        .pg-feature-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #FBBF24;
          opacity: 0.6;
          flex-shrink: 0;
          margin-top: 6px;
        }

        .pg-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          width: 100%;
          padding: 11px 0;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          transition: all 0.25s ease;
          cursor: pointer;
          text-decoration: none;
        }
        .pg-cta-default {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.7);
        }
        .pg-cta-default:hover {
          background: rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.95);
          border-color: rgba(255,255,255,0.18);
        }
        .pg-cta-popular {
          background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 60%, #D97706 100%);
          border: none;
          color: #000;
          font-weight: 700;
          box-shadow: 0 4px 16px rgba(251,191,36,0.25);
        }
        .pg-cta-popular:hover {
          box-shadow: 0 6px 24px rgba(251,191,36,0.38);
          transform: translateY(-1px);
        }
        .pg-cta .arrow {
          transition: transform 0.25s ease;
        }
        .pg-cta:hover .arrow {
          transform: translateX(3px);
        }

        .pg-bottom-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 14px 32px;
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 600;
          background: linear-gradient(135deg, #FBBF24, #D97706);
          color: #000;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 4px 20px rgba(251,191,36,0.25);
        }
        .pg-bottom-cta-primary:hover {
          box-shadow: 0 8px 28px rgba(251,191,36,0.38);
          transform: translateY(-2px);
        }
        .pg-bottom-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 13px 32px;
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 500;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.14);
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .pg-bottom-cta-secondary:hover {
          background: rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.95);
          transform: translateY(-2px);
        }
      `}</style>

      <section className="pg-root py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-primary">
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* ── HEADER ──────────────────────────────────── */}
          <div className="text-center mb-16 lg:mb-20">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
              style={{
                background: 'rgba(251,191,36,0.08)',
                border: '1px solid rgba(251,191,36,0.2)',
              }}
            >
              <Zap className="w-3.5 h-3.5" style={{ color: '#FBBF24' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FBBF24' }}>
                Our Premium Range
              </span>
            </div>

            <h2
              className="pg-serif text-balance mb-5"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 600, color: 'rgba(255,255,255,0.95)', lineHeight: 1.1 }}
            >
              Solar Systems for Every Need
            </h2>

            <div style={{ height: '1px', width: '48px', background: 'linear-gradient(to right, #FBBF24, rgba(251,191,36,0.1))', margin: '0 auto 20px' }} />

            <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '580px', margin: '0 auto', lineHeight: 1.75, fontSize: '0.95rem', fontWeight: 300 }}>
              From starter packages to enterprise-grade solutions — every system includes professional installation, remote monitoring, and long-term warranty coverage.
            </p>
          </div>

          {/* ── PRODUCTS GRID ──────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <div key={product.id} className={`pg-card${product.popular ? ' popular' : ''}`}>

                {/* Image */}
                <div className="pg-img-wrap">
                  <img src={product.image} alt={product.name} />
                  <div className="pg-img-overlay" />
                  {product.popular && (
                    <span className="pg-popular-badge">Most Popular</span>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span className="pg-power-tag">
                    <Zap style={{ width: '10px', height: '10px' }} />
                    {product.power}
                  </span>

                  <h3
                    className="pg-serif"
                    style={{ fontSize: '1.55rem', fontWeight: 600, color: 'rgba(255,255,255,0.92)', marginBottom: '6px', lineHeight: 1.1 }}
                  >
                    {product.name}
                  </h3>

                  <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.6, marginBottom: '14px', fontWeight: 300 }}>
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 auto', display: 'flex', flexDirection: 'column', gap: '7px', flexGrow: 1 }}>
                    {product.features.slice(0, 3).map((feature, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>
                        <span className="pg-feature-dot" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pg-divider" />

                  {/* Price + CTA */}
                  <div>
                    {product.price && (
                      <p
                        className="pg-serif"
                        style={{ fontSize: '1.55rem', fontWeight: 600, color: product.popular ? '#FBBF24' : 'rgba(255,255,255,0.85)', marginBottom: '12px' }}
                      >
                        {product.price}
                      </p>
                    )}
                    <a
                      href={product.link}
                      className={`pg-cta ${product.popular ? 'pg-cta-popular' : 'pg-cta-default'}`}
                    >
                      View Details
                      <ArrowRight className="arrow w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── BOTTOM CTA ──────────────────────────────── */}
          <div className="text-center mt-16 lg:mt-20">
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.9rem', marginBottom: '24px', fontWeight: 300 }}>
              Not sure which system is right for you? Our solar experts are ready to help.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              <a href="/shop" className="pg-bottom-cta-primary">
                Shop All Products
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/calculator" className="pg-bottom-cta-secondary">
                Calculate Your Savings
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}