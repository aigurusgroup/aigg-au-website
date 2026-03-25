const Leadership = () => {
  return (
    <section className="py-24 bg-slate-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Leadership</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
              Lee Robinson
            </h2>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-6">Founder & CEO</p>
          </div>

          <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
            <p>
              Lee brings over 20 years of experience across finance, operations, and business acquisitions.
              His career spans both the UK and Australia, with deep expertise in buy-and-build strategies
              that create lasting value.
            </p>
            <p>
              Prior to founding AIGG, Lee gained significant exposure to roll-up execution, including
              experience with National Optical Care — an optical services consolidation platform.
            </p>
            <p>
              His approach combines institutional discipline with entrepreneurial execution, ensuring
              every acquisition is positioned for sustainable, technology-enabled growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
