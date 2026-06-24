"use client";

import Link from "next/link";
import { ArrowRight, Target, Eye, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

const highlights = [
  "Certified Public Accountants & Enrolled Agents",
  "Investment advisory licensed professionals",
  "Headquartered in Atlanta, USA",
];

export function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeIn>
              <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                Who We Are
              </span>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Built to Guide Financial Success with Clarity and Care
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
              <Button asChild className="mt-8 h-11 px-6">
                <Link href="/about/who-we-are">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>

          <div className="grid gap-4 sm:gap-5">
            <FadeIn delay={0.12} direction="left">
              <div className="group rounded-2xl border border-border bg-secondary/40 p-6 transition-shadow hover:shadow-[0_20px_40px_rgba(196,30,58,0.08)] sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white shadow-[0_8px_20px_rgba(196,30,58,0.25)]">
                    <Eye className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      Our Vision
                    </p>
                    <h3 className="mt-1 font-serif text-xl font-semibold text-foreground">
                      Client delight at scale
                    </h3>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  SMD Financial Group LLC will be known for having provided delight
                  for its more than a million customers in the area of financial
                  success in the next decade.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.18} direction="left">
              <div className="group rounded-2xl border border-accent/20 bg-accent/[0.04] p-6 transition-shadow hover:shadow-[0_20px_40px_rgba(196,30,58,0.1)] sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-white text-accent">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      Our Mission
                    </p>
                    <h3 className="mt-1 font-serif text-xl font-semibold text-foreground">
                      Decisions that matter
                    </h3>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  We help clients make the best possible financial decisions with
                  focused planning and execution through holistic, comprehensive
                  advisory services.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
