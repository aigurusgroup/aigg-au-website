import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Acquire",
    description: "Identify and acquire high-quality service businesses with strong fundamentals, loyal customers, and proven cash flows.",
  },
  {
    number: "02",
    title: "Integrate",
    description: "Centralise back-office operations, align governance, and embed the business into the AIGG platform infrastructure.",
  },
  {
    number: "03",
    title: "Optimise",
    description: "Deploy AI systems and modern operational tools to drive efficiency, reduce cost, and improve customer outcomes.",
  },
  {
    number: "04",
    title: "Scale",
    description: "Expand through bolt-on acquisitions, cross-selling, and platform leverage to compound value across the portfolio.",
  },
];

const HowPlatformWorks = () => {
  return (
    <section className="py-24 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/50 mb-3">
            Operating Model
          </p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4">
            How the Platform Works
          </h2>
          <p className="text-primary-foreground/60 leading-relaxed">
            A repeatable, scalable system applied across every acquisition and market.
          </p>
        </div>

        {/* Flow indicator */}
        <div className="hidden lg:flex items-center justify-center gap-4 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="font-display font-bold text-lg tracking-tight">{step.title}</span>
              {i < steps.length - 1 && <ArrowRight size={18} className="text-primary" />}
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10">
          {steps.map((step) => (
            <div key={step.number} className="bg-navy-mid p-8">
              <span className="font-display text-primary-foreground/15 font-bold text-4xl block mb-3">
                {step.number}
              </span>
              <h3 className="font-display font-bold text-xl mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statement */}
        <div className="mt-16 pt-12 border-t border-primary-foreground/10 text-center">
          <p className="font-display text-xl lg:text-2xl font-bold tracking-tight text-primary-foreground/90">
            "We don't sell AI — we use AI to build better businesses."
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowPlatformWorks;
