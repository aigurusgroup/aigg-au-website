import { Check } from "lucide-react";

const edges = [
  "AI-led operational uplift across every acquisition",
  "Centralised platform model for shared services and scale",
  "Disciplined buy-and-build execution capability",
  "Deep finance and M&A expertise across UK and Australia",
];

const OurEdge = () => {
  return (
    <section className="py-24 bg-navy">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/50 mb-3">Our Edge</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6 text-white">
              Why AIGG
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              We don't sell AI — we use AI to build better businesses. Our competitive advantage lies in combining
              institutional acquisition discipline with modern technology execution.
            </p>
          </div>

          <div className="space-y-5">
            {edges.map((edge, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={12} className="text-accent-blue" />
                </div>
                <span className="text-white/70 text-sm leading-relaxed">{edge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurEdge;
