const operators = [
  {
    name: "Chris Robinson",
    expertise: ["AI & Automation", "Strategy", "Operations"],
    description:
      "Serial entrepreneur with 17 successful ventures across software, AI, and customer-experience technology. Combines deep operational expertise with cutting-edge AI innovation to drive platform-wide transformation.",
    linkedin: "https://www.linkedin.com/in/chris-robinson-979940b/",
  },
  {
    name: "Geouffrey Erasmus",
    expertise: ["AI", "Engineering", "Data"],
    description:
      "Technology expert with 20+ years in enterprise software, AI-driven automation, and data engineering. Drives product innovation and technical excellence across platform infrastructure and delivery.",
    linkedin: undefined,
  },
  {
    name: "Lee Robinson",
    expertise: ["Finance", "Operations", "M&A"],
    description:
      "Over 20 years across finance, operations, and business acquisitions spanning the UK and Australia. Deep expertise in buy-and-build execution and roll-up strategy.",
    linkedin: undefined,
  },
  {
    name: "Loretto Burke",
    expertise: ["Finance", "Governance", "Due Diligence"],
    description:
      "Finance executive with 20+ years establishing financial control, governance, and reporting across complex organisations. Ensures disciplined financial execution across the portfolio.",
    linkedin: undefined,
  },
  {
    name: "Michael Bradley",
    expertise: ["Operations", "Strategy", "Acquisitions"],
    description:
      "Operator, investor, and business builder with 45+ years across construction, property services, and multi-model operations. Brings deep judgement to acquisition and scaling decisions.",
    linkedin: undefined,
  },
];

const expertiseColors: Record<string, string> = {
  AI: "border-accent-blue/40 text-accent-blue",
  "AI & Automation": "border-accent-blue/40 text-accent-blue",
  Engineering: "border-accent-blue/40 text-accent-blue",
  Data: "border-accent-blue/40 text-accent-blue",
  Finance: "border-primary/40 text-primary",
  Governance: "border-primary/40 text-primary",
  "Due Diligence": "border-primary/40 text-primary",
  Operations: "border-muted-foreground/40 text-muted-foreground",
  Strategy: "border-muted-foreground/40 text-muted-foreground",
  "M&A": "border-primary/40 text-primary",
  Acquisitions: "border-primary/40 text-primary",
};

const PlatformOperators = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-6">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Network
          </p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">
            Platform Operators & Contributors
          </h2>
        </div>
        <p className="text-muted-foreground max-w-3xl mb-16 leading-relaxed">
          AIGG brings together a network of operators, strategists, and
          technologists who contribute to platform development, execution, and
          insights across markets.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {operators.map((op) => (
            <div
              key={op.name}
              className="border border-border bg-background p-8 flex flex-col"
            >
              <h3 className="font-display font-bold text-lg tracking-tight mb-3">
                {op.name}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {op.expertise.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[10px] font-medium tracking-wide uppercase border px-2.5 py-1 ${expertiseColors[tag] ?? "border-border text-muted-foreground"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {op.description}
              </p>
              {op.linkedin && (
                <a
                  href={op.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 text-xs font-medium tracking-wide uppercase text-accent-blue hover:underline"
                >
                  LinkedIn →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformOperators;
