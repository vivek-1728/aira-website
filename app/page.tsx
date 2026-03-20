import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

const clients = [
  "Stripe", "Vercel", "Linear", "Notion", "Figma",
  "Slack", "Discord", "Shopify", "Webflow", "Loom",
];

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Lightning Speed",
    description: "We move fast without breaking things. Agile sprints, rapid prototyping, and deployment in weeks — not months.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    title: "Infinite Scalability",
    description: "Architecture designed for growth. From your first 100 users to your first million, our systems scale effortlessly.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Flawless Design",
    description: "Every pixel is intentional. We obsess over design details to deliver interfaces that are beautiful and intuitive.",
  },
];

export default function Home() {
  return (
    <div className="bg-grid">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-accent-light/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          <AnimateIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs sm:text-sm text-muted mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Now accepting new projects for Q2 2026
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight leading-[1.1]">
              Building the Future
              <br />
              <span className="gradient-text">of Software</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              We craft cutting-edge digital products — from AI-powered platforms
              to pixel-perfect mobile apps — engineered for scale, designed for
              humans.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium rounded-full bg-gradient-to-r from-accent to-accent-light text-white hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:scale-[1.02]"
              >
                View Our Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium rounded-full border border-border-light text-foreground hover:bg-white/[0.03] hover:border-accent/30 transition-all duration-300"
              >
                Book a Consultation
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Social Proof Marquee */}
      <section className="py-16 border-y border-border overflow-hidden">
        <AnimateIn>
          <p className="text-center text-xs sm:text-sm text-muted mb-10 tracking-widest uppercase font-medium">
            Trusted by innovative companies
          </p>
        </AnimateIn>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee">
            {[...clients, ...clients].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-8 sm:mx-12 flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-lg bg-surface-light/60 flex items-center justify-center">
                  <span className="text-xs font-bold text-muted">{name[0]}</span>
                </div>
                <span className="text-sm sm:text-base font-medium text-muted/70 whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <SectionHeading
              title="Why Aira.ai?"
              subtitle="Three pillars that define every product we build — and every relationship we forge."
            />
          </AnimateIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <AnimateIn key={pillar.title} delay={0.1 * (index + 1)}>
                <GlassCard className="h-full">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent-light flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <h3 className="text-lg font-semibold font-heading text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </GlassCard>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <div className="glass rounded-3xl p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
              <div className="relative space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading gradient-text">
                  Ready to build something remarkable?
                </h2>
                <p className="text-muted text-sm sm:text-base max-w-lg mx-auto">
                  Let&apos;s turn your vision into a product that users love. Book a
                  free discovery call today.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium rounded-full bg-gradient-to-r from-accent to-accent-light text-white hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:scale-[1.02]"
                >
                  Start a Project
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
