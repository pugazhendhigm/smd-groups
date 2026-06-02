"use client";

import { CheckCircle2, Users, Award, Clock, Shield, Headphones } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const reasons = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team includes CPAs, tax attorneys, and business consultants with decades of combined experience.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "We have helped hundreds of clients save millions in taxes and grow their businesses successfully.",
  },
  {
    icon: Clock,
    title: "Timely Service",
    description: "We understand deadlines matter. Our team delivers accurate work on time, every time.",
  },
  {
    icon: Shield,
    title: "Trusted Advisors",
    description: "We build long-term relationships based on trust, integrity, and a genuine commitment to your success.",
  },
  {
    icon: Headphones,
    title: "Personalized Support",
    description: "Every client receives dedicated attention and solutions tailored to their unique situation.",
  },
  {
    icon: CheckCircle2,
    title: "Comprehensive Solutions",
    description: "From tax planning to CFO services, we offer everything you need under one roof.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FadeIn>
            <span className="text-sm font-medium uppercase tracking-wider text-accent">
              Why Choose Us
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground lg:text-4xl">
              <span className="text-balance">
                The SMD Group Difference
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We go beyond traditional financial services to become true partners
              in your success.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <StaggerItem key={index}>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <reason.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
