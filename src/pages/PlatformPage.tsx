import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pillars = [
  {
    title: "Acquisition Strategy",
    content: "We acquire a 'platform' business in each target vertical — a strong, well-run company that becomes the anchor. Subsequent bolt-on acquisitions are integrated into this platform, creating scale, cross-selling opportunities, and operational leverage.",
  },
  {
    title: "Operational Integration",
    content: "Centralised back-office functions (finance, HR, compliance, marketing) sit at the group level. Portfolio companies retain their brand, team, and customer relationships while benefiting from shared infrastructure and reduced overhead.",
  },
  {
    title: "AI-Enabled Systems",
    content: "Every portfolio company receives a structured AI implementation. This includes process automation, customer service AI, predictive analytics, and intelligent workflow management — all deployed within 90 days of acquisition.",
  },
  {
    title: "Platform Scaling",
    content: "Starting in Queensland with accountancy and legal adjacencies, AIGG scales nationally across target verticals. Each market entry follows the same disciplined playbook: anchor acquisition, bolt-ons, AI implementation, scale.",
  },
];

const stages = ["Acquire", "Integrate", "Optimise", "Scale"];

const PlatformPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Platform & Strategy</p>
            <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">How We Build</h1>
            <p className="text-muted-foreground leading-relaxed">
              Our platform model combines disciplined acquisition with AI-enabled operational excellence — creating compounding value across every business we add.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-border" />

      {/* Stages */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {stages.map((stage, i) => (
              <div key={stage} className="bg-card p-8 text-center">
                <span className="font-display text-muted-foreground/20 font-bold text-4xl block mb-2">0{i + 1}</span>
                <h3 className="font-display font-bold text-lg tracking-tight">{stage}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-0 divide-y divide-border">
            {pillars.map((section, i) => (
              <div key={i} className="grid lg:grid-cols-3 gap-8 py-12 first:pt-0 last:pb-0">
                <div>
                  <span className="font-display text-muted-foreground/30 font-bold text-3xl">0{i + 1}</span>
                  <h3 className="font-display font-bold text-lg mt-2 tracking-tight">{section.title}</h3>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-muted-foreground text-sm leading-relaxed">{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlatformPage;
