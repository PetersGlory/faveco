import { Card } from '@/components/ui/card';

const investors = [
  {
    name: 'GreenEnergy Ventures',
    category: 'Venture Capital',
    description: 'Leading sustainable technology investment firm'
  },
  {
    name: 'African Solar Fund',
    category: 'Impact Investing',
    description: 'Supporting clean energy across Africa'
  },
  {
    name: 'Climate Impact Fund',
    category: 'ESG Investment',
    description: 'Investing in climate solutions'
  },
  {
    name: 'Development Finance',
    category: 'Infrastructure',
    description: 'Supporting energy infrastructure projects'
  },
  {
    name: 'Tech for Good',
    category: 'Innovation',
    description: 'Backing transformative technology'
  },
  {
    name: 'Future Energy Partners',
    category: 'Strategic',
    description: 'Building the energy future'
  }
];

export default function InvestorsSection() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            A Glimpse of Our Investors
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            Trusted by leading global investors and impact funds committed to sustainable energy
          </p>
        </div>

        {/* Investors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {investors.map((investor, index) => (
            <Card
              key={index}
              className="p-6 bg-white hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                  {investor.category}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {investor.name}
                </h3>
                <p className="text-sm text-foreground/70">
                  {investor.description}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground/50">INVESTOR</span>
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">→</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Our investors represent over <span className="font-bold text-primary">$500M+ in committed capital</span> dedicated to making clean, affordable solar energy accessible across Africa and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}
