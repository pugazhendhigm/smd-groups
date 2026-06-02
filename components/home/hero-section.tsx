"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";
import cpaImage from "@/assets/cpaimg.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Trusted Financial Advisory Since 1998
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-8 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance">
                Expert Financial Guidance for Your Success
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We provide comprehensive tax advisory, accounting, and business
              development solutions to help individuals and businesses achieve their
              financial goals with confidence and clarity.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="min-w-[180px]">
                <Link href="/client-intake">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[180px]">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Hero Image/Visual */}
        <FadeIn delay={0.4}>
          <div className="mt-8 flex justify-center">
            <div className="relative w-full max-w-4xl">
              <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
                <Image
                  src={cpaImage}
                  alt="CPA professional working at a desk"
                  className="h-auto w-full"
                  sizes="(min-width: 1024px) 48rem, (min-width: 768px) 42rem, 100vw"
                  priority
                />
              </div>

              <div className="mx-auto mt-6 max-w-3xl">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:gap-5">
                  {[
                    { label: "Tax Advisory", value: "Strategic Planning" },
                    { label: "Accounting", value: "Accurate Records" },
                    { label: "CFO Services", value: "Financial Leadership" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-border bg-card p-4 text-center shadow-sm lg:p-6"
                    >
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground lg:text-sm">
                        {item.label}
                      </p>
                      <p className="mt-2 font-serif text-sm font-semibold text-foreground lg:text-lg">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
