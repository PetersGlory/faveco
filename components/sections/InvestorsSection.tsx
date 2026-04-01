export default function InvestorsSection() {
  // Investor names displayed as logo placeholders
  const investors = [
    'GreenEnergy Ventures',
    'African Solar Fund',
    'Climate Impact Fund',
    'Development Finance',
    'Tech for Good',
    'Future Energy Partners',
  ];

  return (
    <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Investors</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            A glimpse of our investors
          </h2>
          <p className="text-foreground/55 max-w-xl mx-auto text-sm leading-relaxed">
            The people who believe in our mission to deliver clean, reliable, and affordable solar energy across Africa.
          </p>
        </div>

        {/* Scrolling ticker — like Arnergy */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-[scroll_20s_linear_infinite] w-max">
            {[...investors, ...investors].map((name, i) => (
              <div
                key={i}
                className="flex items-center justify-center bg-muted/50 border border-border rounded-lg px-8 py-4 min-w-[180px] h-16 shrink-0 hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <span className="text-sm font-semibold text-foreground/60 text-center leading-tight">{name}</span>
              </div>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>

        <style>{`
          @keyframes scroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        `}</style>

        {/* Trust statement */}
        <p className="text-center text-foreground/55 text-sm mt-10 max-w-2xl mx-auto">
          Our investors represent over{' '}
          <span className="font-bold text-primary">$500M+ in committed capital</span>{' '}
          dedicated to making clean, affordable solar energy accessible across Africa.
        </p>
      </div>
    </section>
  );
}