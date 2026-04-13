import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

type Article = {
  title: string;
  excerpt: string;
  author: string;
  market: "Australia" | "United Kingdom";
  topic: string;
  date: string;
};

const articles: Article[] = [
  { title: "Why AI Matters for Service Business Acquisitions", excerpt: "How artificial intelligence is reshaping the economics of buy-and-build strategies in professional services.", author: "Lee Robinson", market: "Australia", topic: "AI Strategy", date: "March 2026" },
  { title: "The Buy-and-Build Playbook for Australian SMEs", excerpt: "Lessons from executing a disciplined acquisition strategy across fragmented service sectors.", author: "Lee Robinson", market: "Australia", topic: "Acquisitions", date: "February 2026" },
  { title: "Scaling Through Operational Excellence", excerpt: "How centralised operations and shared services create compounding value across a portfolio.", author: "Chris Robinson", market: "United Kingdom", topic: "Operations", date: "March 2026" },
  { title: "AI-Driven Due Diligence: Beyond the Spreadsheet", excerpt: "Integrating AI tools into the acquisition assessment process for faster, deeper insight.", author: "Geoffrey Erasmus", market: "United Kingdom", topic: "AI Strategy", date: "January 2026" },
  { title: "Financial Governance in a Multi-Entity Portfolio", excerpt: "Building scalable financial controls as the platform grows across markets and verticals.", author: "Loretto Burke", market: "United Kingdom", topic: "Operations", date: "February 2026" },
  { title: "Market Commentary: Australian Professional Services", excerpt: "An overview of valuation trends and acquisition opportunities in Australian accountancy and legal services.", author: "Lee Robinson", market: "Australia", topic: "Market", date: "January 2026" },
  { title: "Operator-Led Scaling in Property Services", excerpt: "How hands-on operational experience drives better acquisition outcomes and integration success.", author: "Michael Bradley", market: "United Kingdom", topic: "Operations", date: "March 2026" },
];

const allMarkets = ["All", "Australia", "United Kingdom"] as const;
const allTopics = ["All", "AI Strategy", "Acquisitions", "Operations", "Market"] as const;
const allAuthors = ["All", "Lee Robinson", "Chris Robinson", "Geoffrey Erasmus", "Loretto Burke", "Michael Bradley"] as const;

const PerspectivesPage = () => {
  const [market, setMarket] = useState<string>("All");
  const [topic, setTopic] = useState<string>("All");
  const [author, setAuthor] = useState<string>("All");

  const filtered = articles.filter((a) => {
    if (market !== "All" && a.market !== market) return false;
    if (topic !== "All" && a.topic !== topic) return false;
    if (author !== "All" && a.author !== author) return false;
    return true;
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Knowledge Centre</p>
            <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">Insights From the Platform</h1>
            <p className="text-muted-foreground leading-relaxed">
              Thought leadership and market commentary from operators, strategists, and technologists across the AIGG platform.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-border" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-6 mb-12">
            <FilterGroup label="Market" options={allMarkets} value={market} onChange={setMarket} />
            <FilterGroup label="Topic" options={allTopics} value={topic} onChange={setTopic} />
            <FilterGroup label="Author" options={allAuthors} value={author} onChange={setAuthor} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {filtered.map((article, i) => (
              <div key={i} className="bg-card p-8 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground">{article.market}</span>
                  <span className="text-muted-foreground/30">·</span>
                  <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground">{article.topic}</span>
                </div>
                <h3 className="font-display font-semibold text-base tracking-tight mb-2">{article.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{article.author}</span>
                  <span className="text-xs text-muted-foreground/50">{article.date}</span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground text-sm py-16">No articles match the selected filters.</p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

const FilterGroup = ({ label, options, value, onChange }: { label: string; options: readonly string[]; value: string; onChange: (v: string) => void }) => (
  <div>
    <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground block mb-2">{label}</span>
    <div className="flex flex-wrap gap-1.5">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`text-xs px-3 py-1.5 border transition-colors ${
            value === opt
              ? "border-primary bg-primary text-white"
              : "border-border text-muted-foreground hover:border-primary/40"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
);

export default PerspectivesPage;
