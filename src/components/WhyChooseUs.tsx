import { Shield, Users, Cpu, Phone, UserCheck, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: Shield,
    title: "Legacy-First",
    desc: "We protect what you've built — brand, culture, customers.",
  },
  {
    icon: Users,
    title: "People Matter",
    desc: "Continuity for teams, investment in skills and leadership stability.",
  },
  {
    icon: Cpu,
    title: "Tech Uplift",
    desc: "AI + automation applied to real operations.",
  },
];

const steps = [
  { num: "01", icon: Phone, title: "Meet and Talk", desc: "Phone conversation" },
  { num: "02", icon: UserCheck, title: "Face to Face", desc: "High-level review & fit" },
  { num: "03", icon: FileText, title: "Indicative Offer", desc: "Structure options" },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Why AI Gurus Group</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Sellers work with us when they want a fair deal, a smooth quick process, and a buyer who will invest in
            the business.
          </p>
        </div>

        {/* Reasons */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {reasons.map((r) => (
            <div key={r.title} className="text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <r.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Next Steps */}
        <div className="bg-navy rounded-2xl p-8 lg:p-12">
          <h3 className="text-center font-display font-bold text-2xl text-primary-foreground mb-10">Next Steps</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="text-primary font-display font-bold text-sm mb-3">{s.num}</div>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <s.icon className="text-primary" size={20} />
                </div>
                <h4 className="text-primary-foreground font-display font-semibold mb-1">{s.title}</h4>
                <p className="text-primary-foreground/60 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#contact">
              <Button variant="hero" size="lg">Let's Talk</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
