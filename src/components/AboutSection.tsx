const values = [
  { letter: "F", word: "Fun", desc: "Love the work, and love who you do it with." },
  { letter: "A", word: "Agility", desc: "Embrace change and adapt fast." },
  { letter: "B", word: "Best", desc: "Bring your best every day." },
  { letter: "R", word: "Responsibility", desc: "Own it. Work as one team and deliver." },
  { letter: "I", word: "Integrity", desc: "Do what you say you'll do." },
  { letter: "C", word: "Curiosity", desc: "Improve continuously. Challenge the status quo." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">Who We Are</h2>
          <p className="text-muted-foreground mb-4">
            AI Gurus Group Australia acquires and grows established businesses. We specialise in identifying strong
            companies with untapped potential, acquiring them with discipline, and implementing AI-driven improvements
            to unlock efficiency and scalable growth.
          </p>
          <p className="text-muted-foreground">
            We are not a typical acquisition firm. We are operators — we take ownership, invest in capability, and
            build long-term value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="font-display font-bold text-xl mb-3 text-primary">Vision</h3>
            <p className="text-muted-foreground text-sm">
              To be the trusted catalyst for business transformation through strategic acquisition and practical AI
              integration — setting new standards for operational excellence and value creation across Australia.
            </p>
          </div>
          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="font-display font-bold text-xl mb-3 text-primary">Mission</h3>
            <p className="text-muted-foreground text-sm">
              To acquire promising businesses and strengthen them through intelligent automation, modern systems, and
              customer-focused innovation — driving sustainable growth for founders, teams, and stakeholders.
            </p>
          </div>
        </div>

        {/* Values - FABRIC */}
        <div className="text-center mb-8">
          <h3 className="font-display font-bold text-2xl mb-2">Our Values</h3>
          <p className="text-muted-foreground text-sm">
            FABRIC is our operating system — how we lead, how we partner, and how we scale.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {values.map((v) => (
            <div key={v.letter} className="bg-card rounded-xl p-5 border border-border text-center hover:border-primary/40 transition-colors">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-display font-bold text-lg">{v.letter}</span>
              </div>
              <h4 className="font-display font-semibold text-sm mb-1">{v.word}</h4>
              <p className="text-muted-foreground text-xs">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
