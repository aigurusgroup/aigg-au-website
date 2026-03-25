const CoreMarkets = () => {
  return (
    <section className="py-24 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/50 mb-3">Core Markets</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
            A Platform Built Across Markets
          </h2>
          <p className="text-primary-foreground/60 leading-relaxed">
            Each market develops and retains its own intellectual property and operating expertise,
            while benefiting from shared platform capabilities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-px max-w-2xl mx-auto">
          <div className="bg-navy-mid p-10 text-center">
            <h3 className="font-display font-bold text-2xl mb-1 tracking-tight">Australia</h3>
            <p className="text-primary-foreground/50 text-sm">Brisbane, Queensland</p>
          </div>
          <div className="bg-navy-mid p-10 text-center">
            <h3 className="font-display font-bold text-2xl mb-1 tracking-tight">United Kingdom</h3>
            <p className="text-primary-foreground/50 text-sm">London, England</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreMarkets;
