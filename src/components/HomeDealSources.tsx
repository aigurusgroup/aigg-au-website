import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomeDealSources = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">For Brokers & Advisors</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
            Deal Sources & Partners
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-10">
            We welcome introductions from brokers, accountants, and advisors. Fast response, professional process, strict confidentiality.
          </p>
          <Link to="/deal-sources">
            <Button variant="premium" size="lg">
              Submit Opportunity <ArrowRight className="ml-1" size={14} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeDealSources;
