import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--teal-light)/0.3),transparent_50%),radial-gradient(circle_at_80%_20%,hsl(var(--teal-light)/0.2),transparent_50%)]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 animate-fade-in-up">
            Acquisition. Investment.{" "}
            <br />
            Innovation.{" "}
            <span className="text-gradient">Growth.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mb-4 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            AI Gurus Group Australia is an acquisition and transformation partner. We acquire established, profitable
            SMEs and strengthen them with{" "}
            <strong className="text-foreground">AI, automation, modern operating systems and digital marketing</strong>{" "}
            — while protecting{" "}
            <strong className="text-foreground">legacy, continuity and certainty</strong>.
          </p>

          <div className="flex flex-wrap gap-3 mt-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a href="#contact">
              <Button variant="hero" size="lg">
                Get in Touch <ArrowRight className="ml-1" size={18} />
              </Button>
            </a>
            <a href="#what-we-look-for">
              <Button variant="hero-outline" size="lg">What We Look For</Button>
            </a>
            <a href="#why-us">
              <Button variant="hero-outline" size="lg">Why Choose Us</Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#what-we-look-for">
          <ChevronDown className="text-primary" size={28} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
