const Footer = () => {
  return (
    <footer className="bg-navy py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-sm">AI</span>
            </div>
            <span className="font-display font-bold text-primary-foreground">AI Gurus Group Australia</span>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#services" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Services</a>
            <a href="#about" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">About</a>
            <a href="#team" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Team</a>
            <a href="#contact" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Contact</a>
          </div>

          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} AI Gurus Group Australia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
