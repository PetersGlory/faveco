import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function StoriesPage() {
  const stories = [
    {
      title: 'From Generator to Silence',
      author: 'Chioma Okafor',
      location: 'Lagos, Nigeria',
      savings: '₦150,000/month',
      duration: '4 months ROI',
      story: 'Chioma was spending over ₦150,000 monthly on diesel for her generator. After installing a FavEco Opulence system, she now enjoys silent, uninterrupted power while saving money for her growing family.'
    },
    {
      title: 'Powering Business Growth',
      author: 'David Mensah',
      location: 'Accra, Ghana',
      savings: '$2,500/month',
      duration: '2 years ROI',
      story: 'David\'s retail business needed reliable power. With FavEco\'s commercial system, he eliminated blackouts, improved customer experience, and reduced operational costs by 70%.'
    },
    {
      title: 'Clean Energy for Education',
      author: 'Professor Amara Diallo',
      location: 'Dakar, Senegal',
      savings: '90% energy reduction',
      duration: '5 year warranty',
      story: 'The community school now powers its classrooms, computer lab, and administration building with solar energy. Students have uninterrupted power for learning while the institution saves thousands monthly.'
    }
  ];

  return (
    <main className="overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <a href="/" className="inline-flex items-center gap-2 mb-6 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Customer Success Stories
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            Real transformations from real people who switched to solar with FavEco
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">{story.title}</h2>
                  <p className="text-sm text-foreground/60">{story.author} • {story.location}</p>
                </div>
                <div className="flex gap-4 text-right">
                  <div>
                    <p className="text-2xl font-bold text-primary">{story.savings}</p>
                    <p className="text-xs text-foreground/60">Monthly Savings</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{story.duration}</p>
                    <p className="text-xs text-foreground/60">ROI</p>
                  </div>
                </div>
              </div>
              <p className="text-foreground/70 leading-relaxed">{story.story}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Write Your Solar Story?</h2>
          <p className="text-lg text-foreground/70 mb-8">Join thousands of satisfied customers powering their lives with clean, reliable solar energy.</p>
          <a href="/shop">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Get Started Today
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
