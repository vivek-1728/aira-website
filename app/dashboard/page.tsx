"use client";

import { useState } from "react";
import AnimateIn from "@/components/AnimateIn";
import GlassCard from "@/components/GlassCard";

const sidebarItems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    label: "Overview",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    label: "Project Status",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    label: "Invoices",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    label: "Support Tickets",
  },
];

const projects = [
  { name: "Mobile App Redesign", progress: 78, status: "In Progress", phase: "Development" },
  { name: "AI Chatbot Integration", progress: 45, status: "In Progress", phase: "Backend" },
  { name: "E-Commerce Platform", progress: 100, status: "Completed", phase: "Deployed" },
];

const updates = [
  { text: "Sprint 14 completed — 12 story points delivered", time: "2 hours ago", type: "success" },
  { text: "Design review for Dashboard v2 scheduled", time: "5 hours ago", type: "info" },
  { text: "New invoice #1047 generated — $4,200", time: "1 day ago", type: "invoice" },
  { text: "Bug fix deployed to staging environment", time: "2 days ago", type: "success" },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="pt-20 min-h-screen">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 min-h-[calc(100vh-5rem)] border-r border-border bg-surface/30 p-4">
          <div className="space-y-1 flex-1">
            {sidebarItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setActiveTab(item.label)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm rounded-xl transition-all duration-200 ${
                  activeTab === item.label
                    ? "bg-accent/10 text-accent-light font-medium"
                    : "text-muted hover:text-foreground hover:bg-white/[0.03]"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

          {/* Quick Contact */}
          <div className="glass rounded-xl p-4 mt-4 space-y-3">
            <p className="text-xs font-medium text-foreground">Project Manager</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
                <span className="text-xs font-bold text-white">JP</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Jordan Park</p>
                <p className="text-xs text-muted">Online</p>
              </div>
            </div>
            <button className="w-full py-2 text-xs font-medium text-accent-light border border-accent/20 rounded-lg hover:bg-accent/10 transition-colors">
              Send Message
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-6 lg:p-8 space-y-8">
          {/* Header */}
          <AnimateIn>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold font-heading text-foreground">
                  Dashboard
                </h1>
                <p className="text-sm text-muted mt-1">
                  Welcome back. Here&apos;s your project overview.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1.5 text-xs font-medium glass rounded-lg text-muted">
                  3 Active Projects
                </span>
                <span className="px-3 py-1.5 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded-lg">
                  All Systems Normal
                </span>
              </div>
            </div>
          </AnimateIn>

          {/* Mobile sidebar tabs */}
          <div className="lg:hidden flex gap-2 overflow-x-auto pb-2">
            {sidebarItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setActiveTab(item.label)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 text-xs rounded-lg transition-all ${
                  activeTab === item.label
                    ? "bg-accent/10 text-accent-light font-medium"
                    : "glass text-muted"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

          {/* Stats */}
          <AnimateIn delay={0.1}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Active Projects", value: "3", change: "+1 this month" },
                { label: "Tasks Completed", value: "47", change: "12 this sprint" },
                { label: "Hours Logged", value: "284", change: "38h this week" },
                { label: "Open Tickets", value: "2", change: "1 resolved today" },
              ].map((stat) => (
                <GlassCard key={stat.label} hover={false} className="!p-5">
                  <p className="text-xs text-muted">{stat.label}</p>
                  <p className="text-2xl font-bold font-heading text-foreground mt-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-accent-light mt-1">{stat.change}</p>
                </GlassCard>
              ))}
            </div>
          </AnimateIn>

          {/* Projects Progress */}
          <AnimateIn delay={0.2}>
            <GlassCard hover={false}>
              <h3 className="text-base font-semibold font-heading text-foreground mb-6">
                Project Progress
              </h3>
              <div className="space-y-6">
                {projects.map((project) => (
                  <div key={project.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {project.name}
                        </p>
                        <p className="text-xs text-muted">{project.phase}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                            project.status === "Completed"
                              ? "bg-emerald-500/10 text-emerald-400"
                              : "bg-accent/10 text-accent-light"
                          }`}
                        >
                          {project.status}
                        </span>
                        <span className="text-sm font-medium text-foreground w-10 text-right">
                          {project.progress}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-1.5 bg-surface-light rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          project.progress === 100
                            ? "bg-emerald-500"
                            : "bg-gradient-to-r from-accent to-accent-light"
                        }`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimateIn>

          {/* Recent Updates */}
          <AnimateIn delay={0.3}>
            <GlassCard hover={false}>
              <h3 className="text-base font-semibold font-heading text-foreground mb-6">
                Recent Updates
              </h3>
              <div className="space-y-4">
                {updates.map((update, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 py-3 border-b border-border last:border-0"
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                        update.type === "success"
                          ? "bg-emerald-400"
                          : update.type === "invoice"
                          ? "bg-amber-400"
                          : "bg-accent-light"
                      }`}
                    />
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{update.text}</p>
                      <p className="text-xs text-muted mt-1">{update.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimateIn>
        </div>
      </div>
    </div>
  );
}
