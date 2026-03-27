import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">About AIGG</p>
            <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">Who We Are</h1>
            <p className="text-muted-foreground leading-relaxed">
              AI Gurus Group Australia is an acquisition and growth platform. We acquire established, profitable
              service businesses and strengthen them with AI, automation, and modern operational systems.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-border" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-display font-bold tracking-tight mb-6">Founder Story</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>Lee Robinson founded AIGG with a clear thesis: Australia's service economy is filled with exceptional businesses run by founders approaching transition — and these businesses deserve better options than being absorbed by generic roll-ups or left to decline.</p>
                <p>With 20+ years across finance, operations, and acquisitions in both the UK and Australia, Lee has seen first-hand how AI and operational discipline can transform good businesses into great ones.</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold tracking-tight mb-6">Our Mission</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>To acquire promising service businesses and strengthen them through intelligent automation, modern systems, and customer-focused innovation — driving sustainable growth for founders, teams, and investors.</p>
                <p>We are not a typical acquisition firm. We are operators. We take ownership, invest in capability, and build long-term value.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-display font-bold tracking-tight mb-6">Why AI + Acquisitions</h2>
          <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
            <p>Most service businesses operate on systems built 10–15 years ago. Their processes work, but they're manual, slow, and expensive. AI isn't about replacing people — it's about removing friction, automating the mundane, and letting skilled professionals focus on what matters.</p>
            <p>When you combine this operational capability with disciplined acquisition, you create something powerful: a platform that gets better with every business it adds.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/50 mb-3">Long-Term Vision</p>
          <h2 className="text-2xl lg:text-3xl font-display font-bold tracking-tight mb-6 text-white">
            Building a multi-vertical, AI-enabled services platform — scaling nationally across core markets.
          </h2>
          <p className="text-white/50 text-sm leading-relaxed">
            We see a future where Australia's best service businesses are connected through shared technology, shared services, and a shared commitment to excellence.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
