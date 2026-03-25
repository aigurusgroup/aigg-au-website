import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const whySell = [
  "Confidential and respectful process from first contact",
  "Flexible structures — full exit, partial exit, or earnout",
  "Legacy protection for staff and customers",
  "AI-enabled growth post-acquisition",
  "Fast, professional, no time-wasters",
];

const steps = [
  { num: "01", title: "Confidential Discussion", desc: "We learn about your business, your goals, and your timeline." },
  { num: "02", title: "Valuation & Structure", desc: "We assess fit and propose a deal structure that works for all parties." },
  { num: "03", title: "Completion & Transition", desc: "Smooth handover with continuity planning and growth support." },
];

const revenueOptions = ["Under $1M", "$1M – $3M", "$3M – $5M", "$5M – $10M", "$10M+"];
const ebitdaOptions = ["Under $250K", "$250K – $500K", "$500K – $1M", "$1M – $2M", "$2M+"];
const timeframeOptions = ["Immediately", "3–6 months", "6–12 months", "12+ months", "Just exploring"];

const SellPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", businessName: "", industry: "",
    revenue: "", ebitda: "", location: "", ownership: "", timeframe: "", notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Submission received", description: "We'll be in touch within 48 hours for a confidential discussion." });
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">For Business Owners</p>
            <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">Sell Your Business</h1>
            <p className="text-muted-foreground leading-relaxed">
              If you've built a quality service business and you're considering your options, we'd like to have a confidential conversation.
              No pressure, no obligation — just a professional discussion about what's possible.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-border" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-display font-bold tracking-tight mb-6">Why Sell to AIGG</h2>
              <div className="space-y-4">
                {whySell.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={10} className="text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold tracking-tight mb-6">Our Process</h2>
              <div className="space-y-8">
                {steps.map((step) => (
                  <div key={step.num} className="flex items-start gap-4">
                    <span className="font-display font-bold text-muted-foreground/30 text-2xl">{step.num}</span>
                    <div>
                      <h3 className="font-display font-semibold text-sm mb-1">{step.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-display font-bold tracking-tight mb-2">Start a Confidential Discussion</h2>
            <p className="text-muted-foreground text-sm mb-10">All enquiries are treated with strict confidentiality.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Name *</Label>
                  <Input className="mt-1.5" required value={formData.name} onChange={e => updateField("name", e.target.value)} />
                </div>
                <div>
                  <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Email *</Label>
                  <Input className="mt-1.5" type="email" required value={formData.email} onChange={e => updateField("email", e.target.value)} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Business Name</Label>
                  <Input className="mt-1.5" value={formData.businessName} onChange={e => updateField("businessName", e.target.value)} />
                </div>
                <div>
                  <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Industry</Label>
                  <Input className="mt-1.5" value={formData.industry} onChange={e => updateField("industry", e.target.value)} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Revenue Range</Label>
                  <select className="mt-1.5 w-full h-10 rounded-md border border-input bg-card px-3 text-sm text-foreground" value={formData.revenue} onChange={e => updateField("revenue", e.target.value)}>
                    <option value="">Select...</option>
                    {revenueOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">EBITDA Range</Label>
                  <select className="mt-1.5 w-full h-10 rounded-md border border-input bg-card px-3 text-sm text-foreground" value={formData.ebitda} onChange={e => updateField("ebitda", e.target.value)}>
                    <option value="">Select...</option>
                    {ebitdaOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Location</Label>
                  <Input className="mt-1.5" value={formData.location} onChange={e => updateField("location", e.target.value)} />
                </div>
                <div>
                  <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Ownership % Available</Label>
                  <Input className="mt-1.5" value={formData.ownership} onChange={e => updateField("ownership", e.target.value)} />
                </div>
              </div>

              <div>
                <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Timeline to Sell</Label>
                <select className="mt-1.5 w-full h-10 rounded-md border border-input bg-card px-3 text-sm text-foreground" value={formData.timeframe} onChange={e => updateField("timeframe", e.target.value)}>
                  <option value="">Select...</option>
                  {timeframeOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <div>
                <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Notes</Label>
                <Textarea className="mt-1.5" rows={4} placeholder="Anything else you'd like us to know..." value={formData.notes} onChange={e => updateField("notes", e.target.value)} />
              </div>

              <Button variant="premium" size="lg" type="submit" className="w-full sm:w-auto">
                Submit Confidentially <ArrowRight className="ml-1" size={14} />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SellPage;
