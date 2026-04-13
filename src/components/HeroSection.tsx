import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 bg-card overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})`, opacity: 0.3 }}
      />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-foreground/70 mb-6 animate-fade-in">
            Acquisitions · AI · Platform
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.08] mb-6 animate-fade-in-up tracking-tight text-foreground">
            We Don't Just Buy Businesses. We Build on What You've Created.
          </h1>

          <p className="text-lg text-foreground/70 max-w-2xl mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
            Operator-led acquisitions designed to scale your business while protecting your people, clients, and legacy.
          </p>

          <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/sell">
              <Button variant="premium" size="lg">
                Sell Your Business <ArrowRight className="ml-1" size={14} />
              </Button>
            </Link>
            <Link to="/investors">
              <Button variant="premium-outline" size="lg">Partner With Us</Button>
            </Link>
            <Link to="/deal-sources">
              <Button variant="premium-outline" size="lg">Submit an Opportunity</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
};

export default HeroSection;
