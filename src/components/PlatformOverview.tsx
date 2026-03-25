const markets = [
  { name: "Australia", location: "Brisbane, QLD", status: "Core Market" },
  { name: "United Kingdom", location: "London, UK", status: "Core Market" },
];

const PlatformOverview = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">The AIGG Platform</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">A Multi-Market Acquisition Platform</h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            AIGG operates as a multi-market platform where each region functions as a core market with independent capability and localised intellectual property.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {markets.map((market) => (
            <div key={market.name} className="bg-card p-10">
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground">{market.status}</span>
              <h3 className="font-display font-bold text-2xl mt-2 mb-1 tracking-tight">{market.name}</h3>
              <p className="text-muted-foreground text-sm">{market.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
