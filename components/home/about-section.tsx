"use client";

import Link from "next/link";
import { ArrowRight, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

export function AboutSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <FadeIn>
              <span className="text-sm font-medium uppercase tracking-wider text-accent">
                Who We Are
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground lg:text-4xl">
                <span className="text-balance">
                  Your Trusted Partner in Financial Excellence
                </span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                For over 25 years, SMD Group has been at the forefront of financial
                advisory services. We combine deep expertise with personalized
                attention to deliver solutions that make a real difference in our
                clients&apos; lives and businesses.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our team of seasoned professionals brings together diverse
                backgrounds in tax law, accounting, and business strategy to
                provide comprehensive support for all your financial needs.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Button asChild variant="outline" className="mt-8">
                <Link href="/about/who-we-are">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>

          {/* Vision & Mission Cards */}
          <div className="space-y-6">
            <FadeIn delay={0.2} direction="left">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Eye className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    Our Vision
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  To be the most trusted financial advisory firm, known for
                  transforming complex financial challenges into opportunities
                  for growth and prosperity.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} direction="left">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    Our Mission
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  To provide exceptional, personalized financial services that
                  empower our clients to achieve their goals while maintaining
                  the highest standards of integrity and excellence.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
