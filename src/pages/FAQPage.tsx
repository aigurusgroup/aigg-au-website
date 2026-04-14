import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  Search,
  Briefcase,
  TrendingUp,
  Layers,
  ArrowRight,
  Shield,
  Users,
  BarChart3,
  Target,
  Building2,
  Handshake,
  Clock,
  Heart,
  DollarSign,
  LineChart,
  GitBranch,
  AlertTriangle,
  Info,
  Settings,
} from "lucide-react";

type Audience = "all" | "owner" | "investor";

interface FAQItem {
  q: string;
  a: string;
  related?: { label: string; href: string };
}

interface FAQCategory {
  title: string;
  icon: React.ReactNode;
  audience: "owner" | "investor" | "platform";
  items: FAQItem[];
}

const popularQuestions: FAQItem[] = [
  {
    q: "How does AIGG differ from a traditional private equity firm?",
    a: "AIGG operates as an operator-led acquisition platform. Rather than purely financial engineering, we embed experienced operators into each business post-acquisition to drive sustainable growth and value creation.",
    related: { label: "Our Platform Model", href: "/platform" },
  },
  {
    q: "Is the process confidential?",
    a: "Absolutely. Confidentiality is foundational to our approach. All discussions are conducted under strict NDA, and we limit information sharing to essential decision-makers only.",
    related: { label: "Sell Your Business", href: "/sell" },
  },
  {
    q: "What size businesses does AIGG acquire?",
    a: "We focus on businesses generating $2M-$20M in annual revenue, typically with strong recurring revenue models and established market positions in our target sectors.",
    related: { label: "Our Markets", href: "/markets" },
  },
  {
    q: "What returns can investors expect?",
    a: "We target risk-adjusted returns through a combination of operational improvement and strategic growth. Specific return profiles are shared with qualified investors during the onboarding process.",
    related: { label: "For Investors", href: "/investors" },
  },
  {
    q: "What happens to my team after acquisition?",
    a: "We are committed to retaining and developing existing teams. Our model is built on empowering the people who built the business, not replacing them. Leadership continuity is a core principle.",
  },
  {
    q: "How long does the acquisition process take?",
    a: "A typical acquisition process takes 3-6 months from initial conversation to completion, depending on complexity. We aim to be thorough yet efficient, respecting your time and business operations.",
  },
];

const faqCategories: FAQCategory[] = [
  {
    title: "Process",
    icon: <Settings size={18} />,
    audience: "owner",
    items: [
      {
        q: "What does the initial conversation look like?",
        a: "We begin with a confidential, no-obligation discussion to understand your business, motivations, and goals. There is no pressure - this is about exploring fit.",
      },
      {
        q: "What information will I need to provide?",
        a: "Initially, high-level financial and operational information. Detailed due diligence materials are only requested once both parties agree to proceed.",
      },
      {
        q: "Can I continue running the business during the process?",
        a: "Yes. We structure the process to minimise disruption. Most owners continue operating normally throughout, with our team managing the transaction workstream.",
      },
    ],
  },
  {
    title: "Deal Structure",
    icon: <Handshake size={18} />,
    audience: "owner",
    items: [
      {
        q: "How are deals typically structured?",
        a: "We offer flexible structures including full acquisitions, majority stakes, and earn-out arrangements. Each deal is tailored to the owner's objectives and timeline.",
      },
      {
        q: "Will I receive all cash at completion?",
        a: "Deal consideration can include upfront cash, deferred payments, and equity rollovers. We work with you to find a structure that balances certainty with value optimisation.",
      },
    ],
  },
  {
    title: "Legacy & Team",
    icon: <Heart size={18} />,
    audience: "owner",
    items: [
      {
        q: "Will you change the company name or brand?",
        a: "We typically retain existing brands and identities. The reputation and goodwill you have built are valuable assets we seek to preserve and strengthen.",
      },
      {
        q: "How do you handle staff retention?",
        a: "Team retention is a priority. We invest in professional development, create clear career pathways, and ensure stability throughout the transition period.",
      },
    ],
  },
  {
    title: "Valuation",
    icon: <DollarSign size={18} />,
    audience: "owner",
    items: [
      {
        q: "How do you determine business value?",
        a: "We use a combination of earnings multiples, DCF analysis, and strategic value assessment. Our valuations reflect both current performance and growth potential under our platform.",
      },
      {
        q: "Do I need a formal valuation before approaching AIGG?",
        a: "No. We conduct our own assessment. However, if you have an existing valuation or advisory engagement, we are happy to work alongside your advisors.",
      },
    ],
  },
  {
    title: "Strategy",
    icon: <Target size={18} />,
    audience: "investor",
    items: [
      {
        q: "What is AIGG's investment thesis?",
        a: "We acquire quality SMEs in resilient sectors, embed operational expertise, and create value through systematic improvement and strategic growth initiatives.",
        related: { label: "Our Approach", href: "/platform" },
      },
      {
        q: "What sectors do you focus on?",
        a: "We target technology-enabled services, professional services, and digital businesses with strong recurring revenue and defensible market positions.",
        related: { label: "Our Markets", href: "/markets" },
      },
    ],
  },
  {
    title: "Returns",
    icon: <LineChart size={18} />,
    audience: "investor",
    items: [
      {
        q: "What is the expected hold period?",
        a: "Our platform model supports flexible hold periods. We focus on long-term value creation rather than arbitrary exit timelines, typically 5-7 years per acquisition.",
      },
      {
        q: "How is value created post-acquisition?",
        a: "Through a combination of revenue growth, margin improvement, operational efficiency, and strategic positioning - all driven by embedded operating partners.",
      },
    ],
  },
  {
    title: "Deal Flow",
    icon: <GitBranch size={18} />,
    audience: "investor",
    items: [
      {
        q: "How does AIGG source acquisitions?",
        a: "Through proprietary networks, advisor relationships, and direct outreach. The majority of our deal flow is off-market, providing access to opportunities not broadly marketed.",
        related: { label: "Deal Sources", href: "/deal-sources" },
      },
      {
        q: "How many acquisitions does AIGG target per year?",
        a: "We prioritise quality over volume. Our target is 3-5 strategic acquisitions per year, each meeting strict criteria for quality, culture, and growth potential.",
      },
    ],
  },
  {
    title: "Risk",
    icon: <AlertTriangle size={18} />,
    audience: "investor",
    items: [
      {
        q: "How is downside risk managed?",
        a: "Through rigorous due diligence, conservative leverage, diversified portfolio construction, and active operational management. We prioritise capital preservation.",
      },
      {
        q: "What governance structures are in place?",
        a: "Each portfolio company has a formal board, regular reporting cadences, and clear KPI frameworks. Investors receive quarterly performance reports and annual reviews.",
      },
    ],
  },
  {
    title: "What is AIGG",
    icon: <Building2 size={18} />,
    audience: "platform",
    items: [
      {
        q: "What does AIGG stand for?",
        a: "AI Gurus Group - an operator-led acquisition platform focused on acquiring, growing, and scaling quality businesses across Australia and the United Kingdom.",
      },
      {
        q: "Is AIGG a fund or a company?",
        a: "AIGG is a platform - combining elements of a holding company and a private equity structure. We acquire businesses to hold and grow, supported by strategic capital partners.",
      },
    ],
  },
  {
    title: "How It Works",
    icon: <Info size={18} />,
    audience: "platform",
    items: [
      {
        q: "What happens after AIGG acquires a business?",
        a: "We embed experienced operators, implement proven growth frameworks, and provide access to shared services and resources across the portfolio.",
        related: { label: "Platform Overview", href: "/platform" },
      },
      {
        q: "Does AIGG operate internationally?",
        a: "Yes. We currently operate across Australia and the United Kingdom, with plans to expand into additional markets as the platform scales.",
        related: { label: "Our Markets", href: "/markets" },
      },
    ],
  },
];

const conversionFAQs: FAQItem[] = [
  {
    q: "Is the initial conversation confidential?",
    a: "Yes. Every conversation is protected by a strict NDA from the outset. Your privacy is non-negotiable.",
  },
  {
    q: "Am I under any obligation?",
    a: "None whatsoever. Our initial discussions are exploratory and entirely without obligation. You are free to step away at any point.",
  },
  {
    q: "What happens after I make contact?",
    a: "A senior member of our team will respond personally to schedule a confidential introductory call at your convenience.",
  },
  {
    q: "How quickly will I hear back?",
    a: "We respond to all enquiries within one business day. Most receive a response within a few hours.",
  },
];

const audienceLabels: { key: Audience; label: string; icon: React.ReactNode }[] = [
  { key: "all", label: "All", icon: <Layers size={16} /> },
  { key: "owner", label: "Business Owner", icon: <Briefcase size={16} /> },
  { key: "investor", label: "Investor", icon: <TrendingUp size={16} /> },
];

const categoryIcons: Record<string, React.ReactNode> = {
  owner: <Briefcase size={20} className="text-primary" />,
  investor: <BarChart3 size={20} className="text-primary" />,
  platform: <Building2 size={20} className="text-primary" />,
};

const FAQPage = () => {
  const [audience, setAudience] = useState<Audience>("all");
  const [search, setSearch] = useState("");

  const filteredCategories = useMemo(() => {
    return faqCategories
      .filter((cat) => {
        if (audience === "owner") return cat.audience === "owner";
        if (audience === "investor") return cat.audience === "investor";
        return true;
      })
      .map((cat) => ({
        ...cat,
        items: search
          ? cat.items.filter(
              (item) =>
                item.q.toLowerCase().includes(search.toLowerCase()) ||
                item.a.toLowerCase().includes(search.toLowerCase())
            )
          : cat.items,
      }))
      .filter((cat) => cat.items.length > 0);
  }, [audience, search]);

  const filteredPopular = useMemo(() => {
    if (!search) return popularQuestions;
    return popularQuestions.filter(
      (item) =>
        item.q.toLowerCase().includes(search.toLowerCase()) ||
        item.a.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            Answers to the questions that matter
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Whether you are a business owner exploring a sale or an investor seeking structured exposure,
            find clear answers to the questions that matter most.
          </p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto mb-8">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              placeholder="Ask a question…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 h-14 text-base rounded-sm border-border bg-background shadow-sm focus-visible:ring-primary"
            />
          </div>

          {/* Audience Toggle */}
          <div className="flex items-center justify-center gap-2">
            {audienceLabels.map(({ key, label, icon }) => (
              <Button
                key={key}
                variant={audience === key ? "default" : "outline"}
                size="sm"
                onClick={() => setAudience(key)}
                className="gap-2"
              >
                {icon}
                {label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky search on scroll */}
      <div className="sticky top-16 z-40 bg-card/95 backdrop-blur-md border-b border-border py-3 lg:hidden">
        <div className="container mx-auto px-4">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              placeholder="Search questions…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 h-10 text-sm rounded-sm border-border bg-background"
            />
          </div>
        </div>
      </div>

      {/* Popular Questions */}
      {!search && audience === "all" && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <Shield size={20} className="text-primary" />
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Popular Questions
              </h2>
            </div>
            <Accordion type="multiple" defaultValue={popularQuestions.map((_, i) => `pop-${i}`)}>
              {filteredPopular.map((item, i) => (
                <AccordionItem key={i} value={`pop-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-foreground hover:no-underline font-medium text-base py-5">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {item.a}
                    {item.related && (
                      <Link
                        to={item.related.href}
                        className="flex items-center gap-1.5 text-primary text-sm font-medium mt-3 hover:underline"
                      >
                        {item.related.label}
                        <ArrowRight size={14} />
                      </Link>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* Categorised FAQs */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          {/* Category group headers */}
          {(audience === "all" ? ["owner", "investor", "platform"] as const : [audience === "owner" ? "owner" : "investor"] as const).map(
            (group) => {
              const cats = filteredCategories.filter((c) =>
                group === "platform" ? c.audience === "platform" : c.audience === group
              );
              if (cats.length === 0) return null;

              const groupLabel =
                group === "owner"
                  ? "For Business Owners"
                  : group === "investor"
                  ? "For Investors"
                  : "Platform";

              return (
                <div key={group} className="mb-14 last:mb-0">
                  <div className="flex items-center gap-3 mb-6">
                    {categoryIcons[group]}
                    <h2 className="font-display text-xl font-semibold text-foreground">
                      {groupLabel}
                    </h2>
                  </div>

                  {cats.map((cat, ci) => (
                    <div key={ci} className="mb-8 last:mb-0">
                      <div className="flex items-center gap-2 mb-3 pl-1">
                        <span className="text-muted-foreground">{cat.icon}</span>
                        <h3 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
                          {cat.title}
                        </h3>
                      </div>
                      <Accordion type="single" collapsible>
                        {cat.items.map((item, ii) => (
                          <AccordionItem
                            key={ii}
                            value={`${group}-${ci}-${ii}`}
                            className="border-border"
                          >
                            <AccordionTrigger className="text-left text-foreground hover:no-underline font-medium text-[15px] py-4">
                              {item.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                              {item.a}
                              {item.related && (
                                <Link
                                  to={item.related.href}
                                  className="flex items-center gap-1.5 text-primary text-sm font-medium mt-3 hover:underline"
                                >
                                  {item.related.label}
                                  <ArrowRight size={14} />
                                </Link>
                              )}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  ))}
                </div>
              );
            }
          )}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No questions match your search. Try a different term.</p>
            </div>
          )}
        </div>
      </section>

      {/* Conversion FAQ Block */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="flex items-center gap-3 mb-2">
            <Clock size={20} className="text-primary" />
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Before You Reach Out
            </h2>
          </div>
          <p className="text-muted-foreground mb-8">
            Common questions about getting started.
          </p>
          <Accordion type="multiple" defaultValue={conversionFAQs.map((_, i) => `conv-${i}`)}>
            {conversionFAQs.map((item, i) => (
              <AccordionItem key={i} value={`conv-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:no-underline font-medium text-base py-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Ready to start a conversation?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Whether you are exploring a sale or considering an investment, our team is available for a
            confidential, no-obligation discussion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/sell">
              <Button variant="premium" size="lg" className="gap-2">
                Sell Your Business
                <ArrowRight size={14} />
              </Button>
            </Link>
            <Link to="/investors">
              <Button variant="premium-outline" size="lg" className="gap-2">
                Investor Enquiry
                <ArrowRight size={14} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
