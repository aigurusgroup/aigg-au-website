import { CheckCircle, Award, Users, Cpu } from "lucide-react";

const metrics = [
  { value: "17+", label: "Transactions Led" },
  { value: "$290M+", label: "Transaction Value Delivered" },
  { value: "20+", label: "Years Operator Experience" },
];

const ownerBenefits = [
  "You're partnering with experienced operators - not first-time buyers",
  "We understand how to transition businesses without disruption",
  "Flexible deal structures tailored to your goals",
  "Protect your team, clients, and legacy",
  "Stay involved or step back - your choice",
];

const TrackRecord = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mb-16">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Track Record</p>
        <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
          A new platform. A proven team.
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Built by experienced operators with a track record of acquiring, scaling, and integrating service businesses across the UK and Australia.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-px bg-border mb-px">
        {metrics.map((m) => (
          <div key={m.label} className="bg-background p-10 text-center">
            <p className="font-display font-bold text-4xl tracking-tight mb-1">{m.value}</p>
            <p className="text-muted-foreground text-sm">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-px bg-border mb-px">
        {[
          { icon: Award, label: "Customer Service Awards" },
          { icon: Users, label: "Investors in People" },
          { icon: Cpu, label: "Best New Technology" },
        ].map((a) => (
          <div key={a.label} className="bg-background p-8 flex flex-col items-center text-center">
            <a.icon className="text-primary mb-4" size={28} />
            <p className="font-display font-bold text-sm tracking-tight">{a.label}</p>
          </div>
        ))}
      </div>

      <div className="py-10 text-center">
        <p className="text-foreground leading-relaxed max-w-3xl mx-auto italic text-lg">
          "We combine hands-on operational experience with disciplined acquisition strategy - giving business owners confidence that their business is in the right hands."
        </p>
      </div>

      <div className="h-px bg-border my-16" />

      <div className="max-w-2xl">
        <h3 className="text-2xl font-display font-bold tracking-tight mb-8">
          What this means for business owners
        </h3>
        <ul className="space-y-4">
          {ownerBenefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <CheckCircle className="text-primary mt-0.5 shrink-0" size={20} />
              <span className="text-muted-foreground leading-relaxed">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default TrackRecord;
