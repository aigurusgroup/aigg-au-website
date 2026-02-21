import { Building2, Bot, Settings, TrendingUp } from "lucide-react";

const capabilities = [
  {
    icon: Building2,
    title: "Acquisitions",
    desc: "We acquire businesses with strong fundamentals and clear upside.",
    items: [
      "Target identification & assessment",
      "Due diligence (commercial, financial, operational)",
      "Deal structuring (flexible outcomes)",
      "Integration planning and transition support",
    ],
  },
  {
    icon: Bot,
    title: "AI & Automation",
    desc: "We implement AI where it drives real outcomes.",
    items: [
      "Workflow automation & operational optimisation",
      "Intelligent reporting and decision support",
      "AI-enabled customer and team tools",
      "Data foundations (clean inputs → reliable outputs)",
    ],
  },
  {
    icon: Settings,
    title: "Operational Transformation",
    desc: "We upgrade the operating system of the business.",
    items: [
      "Process redesign & standardisation",
      "KPI dashboards & performance cadence",
      "Role clarity, accountability, and training",
      "Scalable systems and documentation",
    ],
  },
  {
    icon: TrendingUp,
    title: "Value Creation & Growth",
    desc: "We grow value through disciplined execution.",
    items: [
      "Revenue improvement and conversion uplift",
      "Cost-to-serve reduction",
      "Customer experience enhancements",
      "Long-term growth plan (and optional exit planning)",
    ],
  },
];

const Capabilities = () => {
  return (
    <section id="services" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-2">Our Capabilities</h2>
          <p className="text-xl text-muted-foreground font-display">Acquire. Improve. Scale.</p>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-3 text-sm">
            We combine strategic acquisition with systematic AI integration to unlock efficiency, customer experience
            improvements, and sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="group bg-card rounded-xl p-8 border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <c.icon className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">{c.title}</h3>
                  <p className="text-muted-foreground text-sm">{c.desc}</p>
                </div>
              </div>
              <ul className="space-y-2 ml-1">
                {c.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
