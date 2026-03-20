"use client";

import { useState } from "react";
import AnimateIn from "@/components/AnimateIn";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import FAQAccordion from "@/components/FAQAccordion";

// ──────────────────────────────────────────────
// FAQ Data
// ──────────────────────────────────────────────
const faqItems = [
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary based on scope. A marketing website typically takes 4-6 weeks, a mobile app 8-12 weeks, and a complex SaaS platform 12-20 weeks. We provide a detailed timeline during our discovery phase.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer both fixed-price and time-and-materials engagements. Most projects fall between $15K-$150K depending on complexity. We provide transparent, detailed estimates after our initial discovery call.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Absolutely. We offer flexible maintenance and support packages — from basic bug fixes to full ongoing development partnerships. Every project includes 30 days of complimentary support post-launch.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "Our core stack includes React/Next.js, React Native, Node.js, Python, and major cloud platforms (AWS, GCP, Vercel). We choose the best tools for each project rather than forcing a one-size-fits-all approach.",
  },
  {
    question: "How do you handle communication and project updates?",
    answer:
      "Every client gets access to our real-time dashboard where you can track progress, review deliverables, and communicate with your dedicated project manager. We also hold weekly sync calls and provide Sprint reports.",
  },
];

// ──────────────────────────────────────────────
// Form submission states
// ──────────────────────────────────────────────
type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  // ────────────────────────────────────────────
  // Handle form submission → server API route
  // ────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Server responded with an error");
      }

      // ✅ Success — clear the form
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      // ❌ Error — let the user know
      console.error("Submission error:", error);
      setSubmitStatus("error");
    }
  };

  // Derived UI states
  const isLoading = submitStatus === "loading";
  const isSuccess = submitStatus === "success";
  const isError = submitStatus === "error";

  return (
    <div className="bg-grid">
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs sm:text-sm text-muted mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Typically respond within 24 hours
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionHeading
              title="Let's Build Something Great"
              subtitle="Tell us about your project and we'll put together a custom proposal. No commitment, just a conversation."
            />
          </AnimateIn>
        </div>
      </section>

      {/* Form + FAQ */}
      <section className="pb-24 lg:pb-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ──────────────── Lead Capture Form ──────────────── */}
          <AnimateIn>
            <GlassCard hover={false} className="!p-8 lg:!p-10">
              <h3 className="text-xl font-semibold font-heading text-foreground mb-8">
                Start Your Project
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-foreground"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    disabled={isLoading}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all disabled:opacity-50"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-foreground"
                  >
                    Work Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    disabled={isLoading}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all disabled:opacity-50"
                  />
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-project-type"
                    className="block text-sm font-medium text-foreground"
                  >
                    Project Type
                  </label>
                  <select
                    id="contact-project-type"
                    required
                    disabled={isLoading}
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all disabled:opacity-50"
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="ai">Custom AI Solution</option>
                    <option value="design">UI/UX Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-budget"
                    className="block text-sm font-medium text-foreground"
                  >
                    Budget Range
                  </label>
                  <select
                    id="contact-budget"
                    required
                    disabled={isLoading}
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all disabled:opacity-50"
                  >
                    <option value="" disabled>
                      Select a budget range
                    </option>
                    <option value="10-25k">$10,000 — $25,000</option>
                    <option value="25-50k">$25,000 — $50,000</option>
                    <option value="50k+">$50,000+</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-foreground"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    disabled={isLoading}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your vision, goals, and timeline..."
                    className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all resize-none disabled:opacity-50"
                  />
                </div>

                {/* Submit Button — with loading state */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3.5 text-sm font-medium rounded-xl text-white transition-all duration-300 ${
                    isLoading
                      ? "bg-accent/60 cursor-not-allowed opacity-70"
                      : "bg-gradient-to-r from-accent to-accent-light hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.01]"
                  }`}
                >
                  {isLoading ? (
                    <span className="inline-flex items-center gap-2">
                      <svg
                        className="w-4 h-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {/* ✅ Success Message */}
                {isSuccess && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <svg
                      className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <p className="text-sm text-emerald-300 leading-relaxed">
                      Message received. Aira.ai will be in touch shortly.
                    </p>
                  </div>
                )}

                {/* ❌ Error Message */}
                {isError && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                    <svg
                      className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="15" y1="9" x2="9" y2="15" />
                      <line x1="9" y1="9" x2="15" y2="15" />
                    </svg>
                    <p className="text-sm text-red-300 leading-relaxed">
                      Something went wrong. Please try again or email us
                      directly at{" "}
                      <a
                        href="mailto:hello@aira.ai"
                        className="underline hover:text-red-200 transition-colors"
                      >
                        hello@aira.ai
                      </a>
                      .
                    </p>
                  </div>
                )}
              </form>
            </GlassCard>
          </AnimateIn>

          {/* ──────────────── FAQ ──────────────── */}
          <AnimateIn delay={0.2}>
            <div className="space-y-8">
              <h3 className="text-xl font-semibold font-heading text-foreground">
                Frequently Asked Questions
              </h3>
              <FAQAccordion items={faqItems} />

              {/* Contact Info */}
              <GlassCard hover={false} className="!p-6">
                <div className="space-y-4">
                  <p className="text-sm font-medium text-foreground">
                    Prefer to email directly?
                  </p>
                  <a
                    href="mailto:hello@aira.ai"
                    className="text-accent-light hover:text-white text-sm transition-colors"
                  >
                    hello@aira.ai
                  </a>
                  <p className="text-xs text-muted">
                    Based in San Francisco, CA. Working with clients globally.
                  </p>
                </div>
              </GlassCard>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
