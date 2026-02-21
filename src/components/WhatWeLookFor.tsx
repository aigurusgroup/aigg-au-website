import { CheckCircle } from "lucide-react";

const acquireItems = [
  "Proven demand and established trading history",
  "Consistent profitability and healthy cash flow",
  "Strong reputation and loyal customers",
  "Repeat/recurring revenue or dependable demand",
];

const outcomes = [
  { title: "Full Exit", desc: "You step away completely" },
  { title: "Partial Exit", desc: "Take some chips off the table, stay involved" },
  { title: "Phased Buyout", desc: "Transition over time" },
  { title: "Succession Planning", desc: "Handover to a stronger future structure" },
];

const stats = [
  { value: "17+", label: "Successful Deals" },
  { value: "$156m", label: "Deals Completed" },
  { value: "🏆", label: "Customer Service Awards" },
  { value: "🤝", label: "Investors in People" },
];

const WhatWeLookFor = () => {
  return (
    <section id="what-we-look-for" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">What We Look For</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            If you're searching for a way to sell your business, exploring succession planning, or looking for an
            acquisition partner in Australia, you're in the right place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* We Acquire */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <h3 className="text-xl font-display font-bold mb-4">We Acquire</h3>
            <p className="text-muted-foreground text-sm mb-6">
              We're interested in SME acquisitions where the business has strong fundamentals.
            </p>
            <ul className="space-y-3">
              {acquireItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="text-primary shrink-0 mt-0.5" size={18} />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mt-6 italic">
              If you're unsure, still reach out — many great businesses aren't "perfect on paper".
            </p>
          </div>

          {/* Succession Planning */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <h3 className="text-xl font-display font-bold mb-4">Succession Planning & Flexible Outcomes</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Not every sale is the same. We regularly support:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {outcomes.map((o) => (
                <div key={o.title} className="bg-secondary rounded-lg p-4">
                  <p className="font-display font-semibold text-sm">{o.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center bg-card rounded-xl p-6 border border-border">
              <div className="text-3xl font-display font-bold text-primary">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeLookFor;
