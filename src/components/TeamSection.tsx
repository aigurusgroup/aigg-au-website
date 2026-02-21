import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Chris Robinson",
    role: "Founder & CEO",
    image: "https://www.aigurusgroup.com/assets/chris-robinson-CIsEQVEZ.jpg",
    bio: "Entrepreneur, founder, and investor with a track record of building, scaling, and exiting technology-driven businesses. With 17 successful ventures across software, AI, and customer-experience technology.",
    expertise: ["Technology Ventures & Exits", "AI & Automation Strategy", "Business Acquisition", "Operational Transformation"],
    linkedin: "https://www.linkedin.com/in/chris-robinson-979940b/",
    email: "chris@aigurusgroup.com",
  },
  {
    name: "Geouffrey Erasmus",
    role: "Founder & CTO",
    image: "https://www.aigurusgroup.com/assets/geouffrey-erasmus-DfgvsKOW.jpg",
    bio: "Technology expert with over 20 years of experience in software development, leading technical teams, and delivering enterprise solutions.",
    expertise: ["Enterprise Software Architecture", "AI & Business Intelligence", "Technical Team Leadership", "Data Engineering"],
    linkedin: "#",
    email: "geouffrey@aigurusgroup.com",
  },
  {
    name: "Loretto Burke",
    role: "Co-Founder & Head of Finance",
    image: "https://www.aigurusgroup.com/assets/loretto-burke-XCZk9Yqr.jpg",
    bio: "Finance executive with 20+ years' experience establishing financial control, governance, and reporting across complex organisations.",
    expertise: ["Financial Control", "Due Diligence & Deal Support", "Treasury & Risk", "Board Reporting"],
    linkedin: "#",
    email: "loretto@aigurusgroup.com",
  },
  {
    name: "Michael Bradley",
    role: "Co-Founder & Director",
    image: "https://www.aigurusgroup.com/assets/michael-bradley-CG71qrAG.png",
    bio: "Operator, investor, and business builder with a track record spanning more than 45 years across construction, home-improvement, and property services.",
    expertise: ["Construction & Property", "Operator-Led Scaling", "Acquisition Judgement", "Multi-Model Operations"],
    linkedin: "#",
    email: "mike@aigurusgroup.com",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-2">Our Team</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Founder-led acquisition. Operator-led transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((t) => (
            <div key={t.name} className="bg-card rounded-xl p-6 border border-border flex flex-col sm:flex-row gap-6">
              <img
                src={t.image}
                alt={t.name}
                className="w-28 h-28 rounded-xl object-cover shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-lg">{t.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{t.role}</p>
                <p className="text-muted-foreground text-xs mb-3">{t.bio}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {t.expertise.map((e) => (
                    <span key={e} className="text-[10px] bg-secondary px-2 py-0.5 rounded-full text-muted-foreground">
                      {e}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin size={16} />
                  </a>
                  <a href={`mailto:${t.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
