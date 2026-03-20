import AnimateIn from "@/components/AnimateIn";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Aira.ai",
  description:
    "Learn about our story, mission, and the team behind Aira.ai. We bridge beautiful aesthetics and robust engineering.",
};

const team = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "Ex-Google engineer with a passion for design-forward engineering.",
  },
  {
    name: "Maya Patel",
    role: "Head of Design",
    bio: "10+ years crafting award-winning digital experiences at top agencies.",
  },
  {
    name: "James Okafor",
    role: "Lead Engineer",
    bio: "Full-stack architect specializing in scalable distributed systems.",
  },
  {
    name: "Sarah Kim",
    role: "AI/ML Lead",
    bio: "PhD in ML from Stanford. Building AI that solves real problems.",
  },
];

const values = [
  {
    number: "01",
    title: "Craft Over Convention",
    description: "We don't default to templates. Every solution is thoughtfully designed from the ground up.",
  },
  {
    number: "02",
    title: "Radical Transparency",
    description: "No black boxes. You see every sprint, every decision, every line of code through our dashboard.",
  },
  {
    number: "03",
    title: "Ship Quality, Always",
    description: "We'd rather delay than ship something subpar. Quality is non-negotiable.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-grid">
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs sm:text-sm text-muted mb-6">
              Our Story
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionHeading
              title="Built by Engineers Who Care About Design"
              subtitle="Aira.ai was founded on a simple belief — the best software is both technically bulletproof and visually stunning."
            />
          </AnimateIn>
        </div>
      </section>

      {/* Story */}
      <section className="pb-24 lg:pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <div className="glass rounded-3xl p-8 lg:p-12 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold font-heading gradient-text-accent">
                Why We Exist
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-muted leading-relaxed">
                <p>
                  Too often, the software industry forces a choice: beautiful interfaces <em>or</em> robust architecture.
                  Agencies deliver gorgeous mockups that crumble under real-world load. Dev shops build bulletproof
                  backends wrapped in forgettable UIs.
                </p>
                <p>
                  We refused to accept that trade-off. Aira.ai was born to bridge the gap — a studio where
                  every designer thinks in systems, and every engineer has an eye for aesthetics. The result?
                  Products that perform <em>and</em> delight.
                </p>
                <p>
                  From our first project — a fintech dashboard handling 50K concurrent users with a design that
                  won an Awwwards nomination — we proved that craft and scale aren&apos;t mutually exclusive. Today, we
                  bring that same philosophy to every engagement.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Mission / Values */}
      <section className="pb-24 lg:pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <SectionHeading
              title="Our Values"
              subtitle="The principles that guide every decision we make."
            />
          </AnimateIn>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <AnimateIn key={value.number} delay={0.1 * (index + 1)}>
                <GlassCard className="h-full">
                  <div className="space-y-4">
                    <span className="text-3xl font-bold font-heading text-accent/30">
                      {value.number}
                    </span>
                    <h3 className="text-lg font-semibold font-heading text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </GlassCard>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="pb-24 lg:pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <SectionHeading
              title="The Team"
              subtitle="A small, senior team that punches above its weight."
            />
          </AnimateIn>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <AnimateIn key={member.name} delay={0.1 * (index + 1)}>
                <GlassCard className="text-center h-full">
                  <div className="space-y-4">
                    {/* B&W Headshot placeholder */}
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-surface-light to-surface flex items-center justify-center">
                      <span className="text-2xl font-bold text-muted/40 font-heading">
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold font-heading text-foreground">
                        {member.name}
                      </h4>
                      <p className="text-xs text-accent-light font-medium mt-1">
                        {member.role}
                      </p>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">{member.bio}</p>
                  </div>
                </GlassCard>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
