const sectors = [
  { name: "Accountancy", description: "Established practices with recurring revenue and embedded client relationships." },
  { name: "Conveyancing & Legal Adjacencies", description: "High-volume, process-driven legal services ripe for automation." },
  { name: "Surveying", description: "Technical service businesses with infrastructure-linked demand." },
  { name: "RTO / Education", description: "Registered training organisations with scalable delivery models." },
];

const FocusAreas = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Focus Areas</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Target Sectors</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {sectors.map((sector, i) => (
            <div key={i} className="bg-secondary p-10">
              <h3 className="font-display font-semibold text-lg mb-2 tracking-tight">{sector.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{sector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
