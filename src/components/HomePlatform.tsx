import { Building2, Layers, Cpu, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Building2,
    title: "Acquisition Strategy",
    description: "We acquire anchor 'platform' businesses in target verticals — strong, well-run companies that become the foundation for disciplined buy-and-build growth.",
  },
  {
    icon: Layers,
    title: "Operational Integration",
    description: "Centralised back-office functions sit at group level. Portfolio companies retain their brand, team, and customers while benefiting from shared infrastructure.",
  },
  {
    icon: Cpu,
    title: "AI-Enabled Systems",
    description: "Every portfolio company receives a structured AI implementation — process automation, predictive analytics, and intelligent workflows deployed within 90 days.",
  },
  {
    icon: TrendingUp,
    title: "Platform Scaling",
    description: "Each market entry follows the same disciplined playbook: anchor acquisition, bolt-ons, AI implementation, and scale across target verticals.",
  },
];

const HomePlatform = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">
            The AIGG Platform
          </p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight text-foreground mb-4">
            The AIGG Platform
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A structured approach to acquiring, integrating, and scaling businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-card p-8">
              <div className="w-11 h-11 flex items-center justify-center border border-border mb-5">
                <pillar.icon className="text-primary" size={20} />
              </div>
              <h3 className="font-display font-bold text-lg mb-3 tracking-tight text-foreground">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-border text-center">
          <p className="font-display text-xl lg:text-2xl font-bold tracking-tight text-foreground">
            "We don't sell AI — we use AI to build better businesses."
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomePlatform;
