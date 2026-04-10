import { Award, Users, Cpu } from "lucide-react";

const stats = [
  { value: "17+", label: "Deals Completed" },
  { value: "£152M", label: "Total Deal Value" },
];

const awards = [
  { icon: Award, title: "Customer Service Awards" },
  { icon: Users, title: "Investors in People" },
  { icon: Cpu, title: "Best New Technology" },
];

const TrackRecord = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Track Record
          </p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
            Proven Platform Performance
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Credentials earned across the AI Gurus platform — reflecting our
            commitment to disciplined acquisition, operational excellence, and
            innovation.
          </p>
        </div>

        {/* Metrics Bar */}
        <div className="grid sm:grid-cols-2 gap-px bg-border mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background p-10 text-center">
              <p className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Awards Strip */}
        <div className="grid sm:grid-cols-3 gap-px bg-border">
          {awards.map((award) => (
            <div
              key={award.title}
              className="bg-background p-8 flex flex-col items-center text-center"
            >
              <award.icon className="h-6 w-6 text-muted-foreground mb-4" />
              <p className="font-display font-semibold text-sm tracking-tight text-foreground">
                {award.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
