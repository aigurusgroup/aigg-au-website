import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Buy-and-Build Model",
    content: "We acquire a 'platform' business in each target vertical — a strong, well-run company that becomes the anchor. Subsequent bolt-on acquisitions are integrated into this platform, creating scale, cross-selling opportunities, and operational leverage.",
  },
  {
    title: "AI Integration Layer",
    content: "Every portfolio company receives a structured AI implementation. This includes process automation, customer service AI, predictive analytics, and intelligent workflow management — all deployed within 90 days of acquisition.",
  },
  {
    title: "Operating Model",
    content: "Centralised back-office functions (finance, HR, compliance, marketing) sit at the group level. Portfolio companies retain their brand, team, and customer relationships while benefiting from shared infrastructure and reduced overhead.",
  },
  {
    title: "Expansion Strategy",
    content: "Starting in Queensland with accountancy and legal adjacencies, AIGG will expand nationally across target verticals. Each market entry follows the same disciplined playbook: anchor acquisition, bolt-ons, AI implementation, scale.",
  },
];

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

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-0 divide-y divide-border">
            {sections.map((section, i) => (
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
