"use client";

import Link from "next/link";
import { ArrowRight, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

export function AboutSection() {
  return (
    <section className="section-padding section-surface-cream">
      <div className="container-page">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <FadeIn>
              <span className="luxury-label">
                Who We Are
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-3 font-serif text-2xl font-bold text-foreground sm:mt-4 sm:text-3xl lg:text-4xl">
                <span className="text-balance">
                  Built to Guide Financial Success with Clarity and Care
                </span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                SMD Financial Group LLC is a tax and accounting company
                headquartered in Atlanta, USA. Our experienced staff includes
                Certified Public Accountants, Enrolled Agents, and other
                professionals with investment advisory licenses.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our team is ideally equipped to provide best-in-class solutions
                for our clients. We aim to drive exceptional value through
                professional service, practical insight, and thoughtful
                innovation that helps clients make better financial decisions.
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
              <div className="luxury-card p-5 sm:p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/12">
                    <Eye className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    Our Vision
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  SMD Financial Group LLC will be known for having provided
                  delight for its more than a million customers in the area of
                  financial success in the next decade.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} direction="left">
              <div className="luxury-card-dark p-5 sm:p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-accent">
                    Our Mission
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-white/72">
                  Our mission is to help our clients make the best possible
                  financial decisions with focused planning and execution. We
                  accomplish this by offering holistic, comprehensive advisory
                  services that help clients prioritize and attain their life
                  goals.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
