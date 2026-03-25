import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ForOwners = () => {
  return (
    <section className="py-24 bg-slate-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">For Business Owners</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
            Considering a Sale?
          </h2>
          <div className="space-y-4 text-muted-foreground text-sm leading-relaxed mb-10">
            <p>We provide a confidential, respectful process designed for founders who have built something meaningful.</p>
            <ul className="space-y-2 text-left max-w-md mx-auto">
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-foreground flex-shrink-0" />
                Confidential discussions from day one
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-foreground flex-shrink-0" />
                Flexible deal structures — earnouts, partial exits, full exits
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-foreground flex-shrink-0" />
                Legacy protection for your team and customers
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-foreground flex-shrink-0" />
                Continued growth support post-acquisition
              </li>
            </ul>
          </div>
          <Link to="/sell">
            <Button variant="premium" size="lg">
              Submit Your Business <ArrowRight className="ml-1" size={14} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ForOwners;
