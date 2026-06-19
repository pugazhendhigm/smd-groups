"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";
import cpaImage from "@/assets/cpaimg.png";

export function HeroSection() {
  return (
    <section className="luxury-section-bg-1 section-surface-dark overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-24 md:pt-32 md:pb-28 lg:pb-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/55 to-transparent" />
      <div className="pointer-events-none absolute -right-20 top-16 h-72 w-72 rounded-full bg-accent/15 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-60 w-60 rounded-full bg-primary/15 blur-3xl sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[radial-gradient(circle_at_center,rgba(215,166,78,0.16),transparent_68%)]" />

      <div className="container-page relative">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-accent/25 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.28em] text-accent sm:px-4 sm:py-2 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_rgba(215,166,78,0.7)]" />
              Trusted Financial Advisory Since 1998
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-6 font-serif text-3xl font-bold leading-tight tracking-tight text-white sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-balance">
                Strategic Wealth Guidance Built for Growth, Legacy, and Trust
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.42em] text-accent/85 sm:text-sm">
              Premium Advisory • Tax Strategy • Financial Leadership
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/72 sm:mt-6 sm:text-lg">
              We provide comprehensive tax advisory, accounting, and business
              development solutions to help individuals and businesses achieve their
              financial goals with confidence and clarity.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
              <Button asChild size="lg" className="w-full border border-accent/40 bg-accent text-black shadow-[0_16px_30px_rgba(215,166,78,0.25)] hover:bg-accent/90 sm:min-w-[180px] sm:w-auto">
                <Link href="/client-intake">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full border-accent/35 bg-white/5 text-white hover:bg-accent/10 hover:text-accent sm:min-w-[180px] sm:w-auto">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Hero Image/Visual */}
        <FadeIn delay={0.4}>
          <div className="mt-6 flex justify-center sm:mt-8">
            <div className="relative w-full max-w-4xl">
              <div className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-accent/20 bg-black/30 shadow-[0_32px_80px_rgba(0,0,0,0.55)]">
                <Image
                  src={cpaImage}
                  alt="CPA professional working at a desk"
                  className="h-auto w-full opacity-[0.88]"
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
                      className="rounded-[1.4rem] border border-accent/15 bg-white/6 p-4 text-center shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-sm lg:p-6"
                    >
                      <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent/75 lg:text-sm">
                        {item.label}
                      </p>
                      <p className="mt-2 font-serif text-sm font-semibold text-white lg:text-lg">
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

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-20 bg-gradient-to-b from-transparent via-[#0d0b09]/80 to-[#0d0b09]" />
    </section>
  );
}
