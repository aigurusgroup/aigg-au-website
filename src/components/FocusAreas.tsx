const criteria = [
  "Recurring or repeat revenue",
  "Established customer base",
  "Operational inefficiencies",
  "Strong local presence",
];

const FocusAreas = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Investment Focus</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight text-foreground mb-6">Where We Focus</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            AIGG focuses on service-based businesses operating in fragmented markets with strong fundamentals and opportunities for operational improvement.
          </p>
          <ul className="space-y-3 mb-8">
            {criteria.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-sm leading-relaxed italic">
            Our focus evolves based on market opportunity and platform fit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
