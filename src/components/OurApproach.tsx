import { Check } from "lucide-react";

const approaches = [
  "Buy-and-build strategy across target verticals",
  "AI-enabled systems for operational uplift",
  "Centralised operations and shared services",
  "Performance optimisation across the portfolio",
];

const OurApproach = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Our Approach</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
              Disciplined Execution
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We combine institutional acquisition discipline with modern technology execution.
              Every acquisition is assessed, structured, and integrated through a repeatable platform model.
            </p>
          </div>

          <div className="space-y-5">
            {approaches.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={12} className="text-primary" />
                </div>
                <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
