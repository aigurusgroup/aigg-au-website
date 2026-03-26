const leaders = [
  {
    name: "Lee Robinson",
    title: "Founder & CEO — Australia",
    bio: "Lee brings over 20 years of experience across finance, operations, and business acquisitions. His career spans both the UK and Australia, with deep expertise in buy-and-build strategies. Prior to founding AIGG Australia, Lee gained significant exposure to roll-up execution, including experience with National Optical Care.",
    expertise: ["Finance & Operations", "Buy-and-Build Strategy", "M&A Execution", "Portfolio Management"],
  },
  {
    name: "Chris Robinson",
    title: "Founder & CEO — United Kingdom",
    bio: "Entrepreneur, founder, and investor with a track record of building, scaling, and exiting technology-driven businesses. With 17 successful ventures across software, AI, and customer-experience technology, Chris combines deep operational expertise with cutting-edge AI innovation.",
    expertise: ["Technology Ventures & Exits", "AI & Automation Strategy", "Business Acquisition", "Operational Transformation"],
  },
  {
    name: "Geoffrey Erasmus",
    title: "Founder & CTO",
    bio: "Technology expert with over 20 years of experience in software development, leading technical teams, and delivering enterprise solutions. Deep expertise in business intelligence, data warehousing, and AI-driven automation.",
    expertise: ["Enterprise Software Architecture", "AI & Business Intelligence", "Technical Leadership", "Data Engineering"],
  },
  {
    name: "Loretto Burke",
    title: "Co-Founder & Head of Finance",
    bio: "Finance executive with 20+ years' experience establishing financial control, governance, and reporting across complex organisations. Responsible for accounting, treasury, and financial governance across the portfolio.",
    expertise: ["Financial Control", "Due Diligence & Deal Support", "Treasury & Risk", "Statutory Reporting"],
  },
  {
    name: "Michael Bradley",
    title: "Co-Founder & Director",
    bio: "Operator, investor, and business builder with a track record spanning more than 45 years across construction, home-improvement, and property services sectors.",
    expertise: ["Property Services", "Operator-Led Scaling", "Acquisition Judgement", "Multi-Model Operations"],
  },
];

const LeaderCard = ({ leader }: { leader: typeof leaders[0] }) => (
  <div className="border border-border bg-card p-8">
    <h3 className="font-display font-bold text-lg tracking-tight mb-1">{leader.name}</h3>
    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">{leader.title}</p>
    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{leader.bio}</p>
    <div className="flex flex-wrap gap-2">
      {leader.expertise.map((e) => (
        <span key={e} className="text-[10px] font-medium tracking-wide uppercase text-muted-foreground border border-border px-2.5 py-1">{e}</span>
      ))}
    </div>
  </div>
);

const Leadership = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Platform Leadership</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Leadership</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {leaders.map((l) => <LeaderCard key={l.name} leader={l} />)}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
