import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const pillars = [
  { title: "Disciplined Acquisition", desc: "We target service businesses with $1M–$10M revenue, strong margins, and embedded customer relationships." },
  { title: "AI Value Creation", desc: "Every portfolio company receives a tailored AI and automation implementation to drive efficiency and margin expansion." },
  { title: "Platform Integration", desc: "Centralised back-office, shared services, and cross-selling across verticals create compounding scale advantages." },
  { title: "Capital Efficiency", desc: "Structured deal-making with earnouts and vendor financing reduces upfront capital requirements." },
];

const InvestorsPage = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [firm, setFirm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Request received", description: "Our investor relations team will be in touch shortly." });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Investors</p>
            <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">Partner With AIGG</h1>
            <p className="text-muted-foreground leading-relaxed">
              Access structured investment exposure to AI-enhanced service businesses across Australia. 
              We partner with aligned capital to build long-term value through disciplined acquisition and operational excellence.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-border" />

      <section className="py-20 bg-slate-section">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-display font-bold tracking-tight mb-12">Investment Philosophy</h2>
          <div className="grid sm:grid-cols-2 gap-px bg-border">
            {pillars.map((p, i) => (
              <div key={i} className="bg-background p-10">
                <h3 className="font-display font-semibold text-base mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-display font-bold tracking-tight mb-2">Request Investor Pack</h2>
            <p className="text-muted-foreground text-sm mb-8">Receive our investment overview and schedule a call with our team.</p>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Name *</Label>
                <Input className="mt-1.5" required value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div>
                <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Email *</Label>
                <Input className="mt-1.5" type="email" required value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div>
                <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Firm / Entity</Label>
                <Input className="mt-1.5" value={firm} onChange={e => setFirm(e.target.value)} />
              </div>
              <Button variant="premium" size="lg" type="submit" className="w-full">
                Request Investor Pack <ArrowRight className="ml-1" size={14} />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestorsPage;
