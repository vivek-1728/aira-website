import AnimateIn from "@/components/AnimateIn";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Aira.ai",
  description:
    "Web Development, Mobile Apps, Custom AI Solutions, and UI/UX Design. Explore our full range of software development services.",
};

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Web Development",
    description:
      "High-performance, responsive web applications built with modern frameworks. From complex SaaS platforms to beautiful marketing sites, we deliver pixel-perfect results.",
    tags: ["Next.js", "React", "Node.js", "TypeScript"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile experiences that feel fast, smooth, and intuitive. We build apps that users reach for every day.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" /><path d="M8 6a4 4 0 0 1 8 0" /><path d="M12 18v-8" /><circle cx="12" cy="20" r="2" /><path d="M2 12h4" /><path d="M18 12h4" />
      </svg>
    ),
    title: "Custom AI Solutions",
    description:
      "Intelligent systems powered by machine learning and LLMs. From chatbots to predictive analytics, we integrate AI that drives real business outcomes.",
    tags: ["OpenAI", "TensorFlow", "LangChain", "Python"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "UI/UX Design",
    description:
      "Research-driven design that converts. We create design systems, prototypes, and user flows grounded in user empathy and business strategy.",
    tags: ["Figma", "Prototyping", "User Research", "Design Systems"],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-grid">
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs sm:text-sm text-muted mb-6">
              Our Expertise
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionHeading
              title="Services We Offer"
              subtitle="End-to-end digital solutions designed to accelerate your business. Every service backed by obsessive attention to craft."
            />
          </AnimateIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 lg:pb-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <AnimateIn key={service.title} delay={0.1 * (index + 1)}>
              <GlassCard className="h-full group">
                <div className="space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent-light flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold font-heading text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium text-accent-light bg-accent/10 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-light hover:text-white transition-colors group/link"
                  >
                    Learn More
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover/link:translate-x-1 transition-transform"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </GlassCard>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 lg:pb-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <div className="glass rounded-3xl p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
              <div className="relative space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading gradient-text">
                  Have a project in mind?
                </h2>
                <p className="text-muted text-sm sm:text-base max-w-lg mx-auto">
                  Tell us about your idea and we&apos;ll craft a tailored plan to
                  bring it to life.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium rounded-full bg-gradient-to-r from-accent to-accent-light text-white hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:scale-[1.02]"
                >
                  Get in Touch
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
