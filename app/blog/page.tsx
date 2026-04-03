'use client';

import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Zap, Search, ArrowRight, Clock, User, Tag } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { id: 'all', label: 'All Posts' },
  { id: 'solar-tips', label: 'Solar Tips' },
  { id: 'industry', label: 'Industry News' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'energy-savings', label: 'Energy Savings' },
  { id: 'company', label: 'Company News' },
];

const posts = [
  {
    id: 1,
    title: 'How Much Can a 5kW Solar System Save You in Nigeria?',
    excerpt: 'We break down the real numbers — electricity bill savings, generator fuel savings, and payback period for a typical Nigerian household on a 5kW system.',
    category: 'energy-savings',
    categoryLabel: 'Energy Savings',
    author: 'Emeka Obi',
    date: 'March 18, 2025',
    readTime: '6 min read',
    featured: true,
    tag: 'Popular',
  },
  {
    id: 2,
    title: 'FavEco Completes 100-Home Solar Project in Enugu',
    excerpt: 'Our largest residential project to date — working with a property developer to deliver pre-installed solar to 100 new homes in the Garden City estate.',
    category: 'case-studies',
    categoryLabel: 'Case Study',
    author: 'Adaeze Nwosu',
    date: 'February 28, 2025',
    readTime: '5 min read',
    featured: true,
    tag: 'Case Study',
  },
  {
    id: 3,
    title: "Nigeria's Grid Crisis: What It Means for Solar Adoption in 2025",
    excerpt: "Nigeria's electricity grid generates a fraction of its installed capacity. We look at how this is accelerating solar uptake and what policy changes are needed.",
    category: 'industry',
    categoryLabel: 'Industry News',
    author: 'Fatima Al-Hassan',
    date: 'February 14, 2025',
    readTime: '8 min read',
    featured: true,
    tag: null,
  },
  {
    id: 4,
    title: '7 Signs Your Home is Ready for Solar',
    excerpt: 'From rising electricity bills to generator overuse — here are the clearest signs that switching to solar now makes financial and practical sense.',
    category: 'solar-tips',
    categoryLabel: 'Solar Tips',
    author: 'Tunde Alabi',
    date: 'January 30, 2025',
    readTime: '4 min read',
    featured: false,
    tag: null,
  },
  {
    id: 5,
    title: "Monocrystalline vs Polycrystalline Panels: What's Best for Nigeria?",
    excerpt: "Both panel types work — but the Nigerian climate, roof space constraints, and budget all point in a clear direction. Here\'s our engineering take.",
    category: 'solar-tips',
    categoryLabel: 'Solar Tips',
    author: 'Emeka Obi',
    date: 'January 12, 2025',
    readTime: '7 min read',
    featured: false,
    tag: null,
  },
  {
    id: 6,
    title: 'FavEco Joins the African Solar Energy Association',
    excerpt: "We're proud to announce our membership in the ASEA, joining leading voices in the continent's renewable energy push.",
    category: 'company',
    categoryLabel: 'Company News',
    author: 'Adaeze Nwosu',
    date: 'December 20, 2024',
    readTime: '2 min read',
    featured: false,
    tag: 'New',
  },
  {
    id: 7,
    title: 'How a Lagos Restaurant Slashed Its Electricity Bill by 80%',
    excerpt: 'A Lekki restaurant replaced its diesel generator with a FavEco Active system. Twelve months later, the numbers are remarkable.',
    category: 'case-studies',
    categoryLabel: 'Case Study',
    author: 'Tunde Alabi',
    date: 'December 5, 2024',
    readTime: '5 min read',
    featured: false,
    tag: null,
  },
  {
    id: 8,
    title: "Understanding Solar Battery Storage: A Beginner's Guide",
    excerpt: "Batteries are transforming what solar can do for your home. We explain the options, costs, and benefits in plain language.",
    category: 'solar-tips',
    categoryLabel: 'Solar Tips',
    author: 'Emeka Obi',
    date: 'November 18, 2024',
    readTime: '9 min read',
    featured: false,
    tag: null,
  },
];

const categoryColors: Record<string, string> = {
  'energy-savings': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'case-studies': 'bg-blue-50 text-blue-700 border-blue-200',
  'industry': 'bg-orange-50 text-orange-700 border-orange-200',
  'solar-tips': 'bg-primary/10 text-primary border-primary/20',
  'company': 'bg-purple-50 text-purple-700 border-purple-200',
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');

  const filtered = posts.filter(p => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const matchQuery = !query || p.title.toLowerCase().includes(query.toLowerCase()) || p.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  const featured = filtered.filter(p => p.featured).slice(0, 3);
  const rest = filtered.filter(p => !p.featured || filtered.filter(x => x.featured).indexOf(p) >= 3);

  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 mb-6 text-primary hover:text-primary/80 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 mb-5">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">Insights & News</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance">The FavEco Blog</h1>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
                Solar guides, industry news, case studies, and energy tips — written by our team of engineers and energy experts.
              </p>
            </div>
            {/* Search */}
            <div className="relative w-full lg:w-72 flex-shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search articles…"
                className="w-full h-11 pl-10 pr-4 rounded-xl border-2 border-border bg-white text-sm text-foreground placeholder:text-foreground/40 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
              />
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg border-2 text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'border-primary bg-primary text-white'
                    : 'border-border text-foreground hover:border-primary bg-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featured.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-sm font-bold text-foreground/50 uppercase tracking-widest mb-6">Featured</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {featured.map((post, i) => (
                <article
                  key={post.id}
                  className={`group rounded-2xl border overflow-hidden transition-all hover:shadow-xl cursor-pointer ${
                    i === 0
                      ? 'lg:col-span-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 border-2'
                      : 'border-border bg-white hover:border-primary/30'
                  }`}
                >
                  {/* Placeholder image area */}
                  <div className={`relative overflow-hidden ${i === 0 ? 'h-52' : 'h-40'} bg-gradient-to-br from-primary/20 to-muted flex items-center justify-center`}>
                    <Zap className="w-12 h-12 text-primary/20" />
                    {post.tag && (
                      <span className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        {post.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[post.category]}`}>
                        {post.categoryLabel}
                      </span>
                    </div>
                    <h3 className={`font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors ${i === 0 ? 'text-xl' : 'text-base'}`}>
                      {post.title}
                    </h3>
                    <p className="text-sm text-foreground/60 leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-foreground/50">
                        <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      {rest.length > 0 && (
        <section className="py-8 pb-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            {filtered.some(p => p.featured) && (
              <h2 className="text-sm font-bold text-foreground/50 uppercase tracking-widest mb-6">More Articles</h2>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(featured.length > 0 ? rest : filtered).map(post => (
                <article
                  key={post.id}
                  className="group bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all overflow-hidden cursor-pointer"
                >
                  <div className="h-36 bg-gradient-to-br from-primary/10 to-muted flex items-center justify-center">
                    <Zap className="w-8 h-8 text-primary/20" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[post.category]}`}>
                        {post.categoryLabel}
                      </span>
                      <span className="text-xs text-foreground/40">{post.date}</span>
                    </div>
                    <h3 className="font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-foreground/60 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-border/50">
                      <div className="flex items-center gap-3 text-xs text-foreground/50">
                        <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-24">
                <Search className="w-10 h-10 text-foreground/20 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground/40 mb-2">No articles found</h3>
                <p className="text-sm text-foreground/30">Try a different search term or category</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 mb-5">
            <Tag className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">Newsletter</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Stay in the Loop</h2>
          <p className="text-foreground/70 leading-relaxed mb-8">
            Get the latest solar tips, industry news, and FavEco updates delivered to your inbox — no spam, ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 h-12 px-4 rounded-xl border-2 border-border bg-white text-sm outline-none focus:border-primary transition-colors"
            />
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 h-12 rounded-xl flex-shrink-0">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-foreground/40 mt-3">Join 4,200+ subscribers. Unsubscribe anytime.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}