import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Zap, Lock, DollarSign } from 'lucide-react';

export default function PaymentPlansPage() {
  const plans = [
    {
      name: 'Monthly Payments',
      period: 'Pay Monthly',
      description: 'Flexible monthly payments over 5-7 years',
      features: ['Lowest monthly amount', 'Full system ownership after final payment', 'No interest with approved credit', 'Start enjoying solar immediately'],
      cta: 'Get Monthly Plan'
    },
    {
      name: 'Quarterly Payments',
      period: 'Pay Quarterly',
      description: 'Balanced payment option over 5-7 years',
      features: ['Quarterly payment schedule', 'Reduced total interest', 'Full system ownership included', 'Faster payoff option'],
      cta: 'Get Quarterly Plan',
      featured: true
    }
  ];

  const features = [
    {
      icon: DollarSign,
      title: 'Accessible',
      description: 'Solar plans that fit any budget. No hidden fees or surprise charges.'
    },
    {
      icon: Zap,
      title: 'Flexible',
      description: 'Choose monthly or quarterly payments. Switch anytime with no penalty.'
    },
    {
      icon: Lock,
      title: 'Transparent',
      description: 'Clear terms, fixed rates, and full disclosure. Know exactly what you\'re paying.'
    }
  ];

  const faq = [
    {
      q: 'Do I need excellent credit to qualify?',
      a: 'No. We work with customers across various credit profiles. We have options for everyone.'
    },
    {
      q: 'What if I want to pay it off early?',
      a: 'You can pay off your system early without any penalties. We\'ll recalculate based on remaining balance.'
    },
    {
      q: 'What happens if I sell my home/business?',
      a: 'You can transfer the system to the new owner or pay off the remaining balance. We\'ll guide you through the process.'
    },
    {
      q: 'Are there any upfront costs?',
      a: 'We offer options with minimal upfront costs. Some plans allow you to start with just a small deposit.'
    },
    {
      q: 'How long are the payment terms?',
      a: 'Typical terms are 5-7 years, but we offer flexible options to match your preference.'
    },
    {
      q: 'Is there a down payment required?',
      a: 'It depends on the plan you choose. Some plans require 10-20% down, others allow 0% down.'
    }
  ];

  return (
    <main className="overflow-hidden">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 mb-6 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Solar Payment Plans
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mb-8 text-balance">
            Accessible, flexible, and transparent payment options designed for your budget.
          </p>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="bg-white p-8 rounded-lg border border-border hover:border-primary/50 transition-all text-center">
                  <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Plans */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Choose Your Payment Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-lg border-2 p-8 transition-all ${
                  plan.featured
                    ? 'border-primary bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg'
                    : 'border-border bg-white hover:border-primary/50'
                }`}
              >
                {plan.featured && (
                  <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-4">
                    MOST POPULAR
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-foreground/70 mb-4">{plan.period}</p>
                <p className="text-foreground/70 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/70">{f}</span>
                    </li>
                  ))}
                </ul>

                <a href="/shop" className="block">
                  <Button className={`w-full ${plan.featured ? 'bg-primary hover:bg-primary/90' : 'bg-primary/20 hover:bg-primary/30 text-primary'}`}>
                    {plan.cta}
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Comparison */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Payment Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Monthly</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Quarterly</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-muted/50">
                  <td className="py-4 px-4 text-foreground">Payment Frequency</td>
                  <td className="text-center py-4 px-4">Every month (12/year)</td>
                  <td className="text-center py-4 px-4">Every 3 months (4/year)</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50">
                  <td className="py-4 px-4 text-foreground">Typical Monthly Cost</td>
                  <td className="text-center py-4 px-4">₦150,000 - 250,000</td>
                  <td className="text-center py-4 px-4">₦450,000 - 750,000</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50">
                  <td className="py-4 px-4 text-foreground">Total Interest</td>
                  <td className="text-center py-4 px-4">Medium</td>
                  <td className="text-center py-4 px-4">Lower</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50">
                  <td className="py-4 px-4 text-foreground">Payment Term</td>
                  <td className="text-center py-4 px-4">5-7 years</td>
                  <td className="text-center py-4 px-4">5-7 years</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="py-4 px-4 text-foreground">System Ownership</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-primary inline" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-primary inline" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faq.map((item, i) => (
              <div key={i} className="border-b border-border pb-6 last:border-b-0">
                <h3 className="font-bold text-foreground mb-3 text-lg">{item.q}</h3>
                <p className="text-foreground/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Go Solar?</h2>
          <p className="text-lg text-foreground/70 mb-8">Choose a payment plan that works for your budget and start saving on energy costs today.</p>
          <a href="/shop">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Explore Solar Systems
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
