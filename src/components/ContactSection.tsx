import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", business: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll be in touch shortly." });
    setFormData({ name: "", business: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Let's Transform Your Business</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Whether you're a business owner considering succession or an investor exploring opportunities, we'd love
            to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Form */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Name *"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <Input
                placeholder="Business Name *"
                required
                value={formData.business}
                onChange={(e) => setFormData({ ...formData, business: e.target.value })}
              />
              <Input
                type="email"
                placeholder="Email Address *"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <Textarea
                placeholder="Tell us about your business..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <Button variant="hero" size="lg" type="submit" className="w-full">
                Send Message
              </Button>
              <p className="text-xs text-muted-foreground">
                By submitting this form, you agree to our Privacy Policy.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="font-display font-bold text-xl mb-6">Contact Details</h3>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="text-primary" size={18} />
                <h4 className="font-display font-semibold">For Business Owners</h4>
              </div>
              <p className="text-muted-foreground text-sm mb-2">
                Explore strategic partnerships and acquisition opportunities
              </p>
              <a href="mailto:partnerships@aigurusgroup.com.au" className="text-primary text-sm font-medium hover:underline">
                partnerships@aigurusgroup.com.au
              </a>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="text-primary" size={18} />
                <h4 className="font-display font-semibold">For Investors</h4>
              </div>
              <p className="text-muted-foreground text-sm mb-2">
                Learn about our acquisition pipeline and investment opportunities
              </p>
              <a href="mailto:investors@aigurusgroup.com.au" className="text-primary text-sm font-medium hover:underline">
                investors@aigurusgroup.com.au
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
