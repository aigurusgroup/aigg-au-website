import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <span className="font-display font-bold text-lg text-foreground tracking-tight">AIGG</span>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              Building Australia's leading AI-enabled business platform.
            </p>
          </div>

          <div>
            <h4 className="text-foreground/80 font-medium text-xs tracking-widest uppercase mb-4">Company</h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-muted-foreground hover:text-foreground text-sm transition-colors">About</Link>
              <Link to="/platform" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Platform</Link>
              <Link to="/investors" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Investors</Link>
            </div>
          </div>

          <div>
            <h4 className="text-foreground/80 font-medium text-xs tracking-widest uppercase mb-4">Opportunities</h4>
            <div className="flex flex-col gap-2">
              <Link to="/sell" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Sell Your Business</Link>
              <Link to="/deal-sources" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Deal Sources</Link>
            </div>
          </div>

          <div>
            <h4 className="text-foreground/80 font-medium text-xs tracking-widest uppercase mb-4">Contact</h4>
            <div className="flex flex-col gap-2">
              <span className="text-muted-foreground text-sm">Brisbane, Queensland</span>
              <span className="text-muted-foreground text-sm">Australia</span>
              <a href="mailto:info@aigg.com.au" className="text-muted-foreground hover:text-foreground text-sm transition-colors">info@aigg.com.au</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground/50 text-xs">
            © {new Date().getFullYear()} AI Gurus Group Australia Pty Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="text-muted-foreground/50 hover:text-muted-foreground transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground/50 hover:text-muted-foreground transition-colors">Terms</a>
            <a href="#" className="text-muted-foreground/50 hover:text-muted-foreground transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
