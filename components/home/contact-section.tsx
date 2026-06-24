"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/data";
import { LocationMap } from "@/components/shared/location-map";
import { FadeIn } from "@/components/ui/motion";

const contactItems = [
  {
    icon: MapPin,
    label: "Address",
    value: contactInfo.address,
    href: undefined,
  },
  {
    icon: Phone,
    label: "Phone",
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: contactInfo.hours,
    href: undefined,
  },
];

export function ContactSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <FadeIn>
              <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                Get in Touch
              </span>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Let&apos;s Start a Conversation
              </h2>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="mt-4 max-w-lg text-muted-foreground">
                Have questions about our services? Reach out and our team will respond
                promptly with the guidance you need.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex h-full gap-4 rounded-2xl border border-border bg-secondary/30 p-5 transition-all hover:border-accent/25 hover:bg-white hover:shadow-[0_12px_30px_rgba(196,30,58,0.08)]">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-foreground">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a key={item.label} href={item.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>
            </FadeIn>

            <FadeIn delay={0.26}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="h-11 px-6">
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-11 border-accent/30 px-6 text-accent hover:bg-accent/10">
                  <Link href="/client-intake">Schedule Consultation</Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.16} direction="left">
            <LocationMap className="h-full min-h-[360px] lg:min-h-[480px]" showDirectionsLink />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
