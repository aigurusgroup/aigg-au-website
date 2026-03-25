import { Building2, Cpu, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Building2,
    title: "Acquire",
    description: "We acquire high-quality service businesses with strong fundamentals, loyal customers, and proven cash flows.",
  },
  {
    icon: Cpu,
    title: "Optimise",
    description: "We deploy AI and modern operational systems to drive efficiency, reduce cost, and improve customer outcomes.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description: "We scale through platform integration, centralised operations, and disciplined buy-and-build execution.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">What We Do</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Acquire · Optimise · Scale</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div key={i} className="group">
              <div className="w-12 h-12 flex items-center justify-center border border-border mb-6">
                <pillar.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-display font-bold text-xl mb-3 tracking-tight">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
