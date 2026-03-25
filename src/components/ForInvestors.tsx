import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ForInvestors = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">For Investors</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
            Partner With AIGG
          </h2>
          <div className="space-y-4 text-muted-foreground text-sm leading-relaxed mb-10">
            <p>Access structured investment exposure to AI-enhanced service businesses across Australia.</p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8 text-left">
              <div className="border border-border p-6">
                <h4 className="font-display font-semibold text-foreground text-sm mb-2">Off-Market Access</h4>
                <p className="text-xs leading-relaxed">Proprietary deal flow through direct sourcing and broker networks.</p>
              </div>
              <div className="border border-border p-6">
                <h4 className="font-display font-semibold text-foreground text-sm mb-2">AI Value Creation</h4>
                <p className="text-xs leading-relaxed">Technology-driven operational uplift across every portfolio company.</p>
              </div>
              <div className="border border-border p-6">
                <h4 className="font-display font-semibold text-foreground text-sm mb-2">Structured Exposure</h4>
                <p className="text-xs leading-relaxed">Disciplined capital deployment with clear return frameworks.</p>
              </div>
            </div>
          </div>
          <Link to="/investors">
            <Button variant="premium" size="lg">
              Request Investor Pack <ArrowRight className="ml-1" size={14} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ForInvestors;
