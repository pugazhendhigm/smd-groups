"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

export function CTASection() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-page">
        <div className="text-center">
          <FadeIn>
            <h2 className="font-serif text-2xl font-bold text-primary-foreground sm:text-3xl lg:text-4xl">
              <span className="text-balance">
                Ready to Take Control of Your Finances?
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Schedule a free consultation with our experts today. Let us show you
              how we can help you achieve your financial goals.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="w-full sm:min-w-[180px] sm:w-auto"
              >
                <Link href="/client-intake">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:min-w-[180px] sm:w-auto"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
