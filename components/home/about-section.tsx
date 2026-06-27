"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Briefcase, UserCheck, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

const highlights = [
  "Certified Public Accountants & Enrolled Agents",
  "Investment advisory licensed professionals",
  "Headquartered in Atlanta, USA",
];

const targetAudience = [
  {
    title: "Business Owners",
    description: "Helping entrepreneurs manage growth, profitability, and financial decisions.",
    icon: Briefcase,
    colorStyles: "bg-accent text-white shadow-[0_8px_20px_rgba(196,30,58,0.2)]",
  },
  {
    title: "Professionals & Executives",
    description: "Personal tax planning and wealth-focused strategies.",
    icon: UserCheck,
    colorStyles: "border border-accent/20 bg-white text-accent",
  },
  {
    title: "Nonprofit Organizations",
    description: "Compliance guidance and financial support.",
    icon: ShieldCheck,
    colorStyles: "border border-accent/20 bg-white text-accent",
  },
  {
    title: "Growing Companies",
    description: "Accounting infrastructure and CFO-level guidance.",
    icon: TrendingUp,
    colorStyles: "bg-accent text-white shadow-[0_8px_20px_rgba(196,30,58,0.2)]",
  },
];

export function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="w-full">
            <FadeIn>
              <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                Who We Serve
              </span>
            </FadeIn>
            
            <FadeIn delay={0.08}>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Serving Clients Who Think Beyond Today
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.14}>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                SMD Financial Group LLC is a tax and accounting company headquartered
                in Atlanta, USA. Our experienced team delivers best-in-class solutions
                through professional service, practical insight, and thoughtful innovation.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <ul className="mt-6 space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground sm:text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.26}>
              <Button asChild className="mt-8 h-11 px-6 rounded-xl shadow-sm transition-transform hover:-translate-y-0.5">
                <Link href="/about/who-we-are">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: Interactive Audience Cards Grid */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 w-full">
            {targetAudience.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <FadeIn key={audience.title} delay={0.12 + index * 0.06} direction="left">
                  <div className="group h-full flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_16px_40px_rgba(196,30,58,0.06)]">
                    <div>
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${audience.colorStyles}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 font-serif text-lg font-bold text-foreground">
                        {audience.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {audience.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}