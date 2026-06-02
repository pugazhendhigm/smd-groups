"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { contactInfo } from "@/lib/data";
import { FadeIn } from "@/components/ui/motion";

export function ContactSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Info */}
          <div>
            <FadeIn>
              <span className="text-sm font-medium uppercase tracking-wider text-accent">
                Get in Touch
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground lg:text-4xl">
                <span className="text-balance">
                  Let&apos;s Start a Conversation
                </span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-4 text-muted-foreground">
                Have questions about our services? We&apos;re here to help. Reach out
                to us and our team will respond promptly.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="mt-1 text-sm text-muted-foreground hover:text-foreground"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="mt-1 text-sm text-muted-foreground hover:text-foreground"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Business Hours</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {contactInfo.hours}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Map Placeholder */}
          <FadeIn delay={0.2} direction="left">
            <div className="h-full min-h-[400px] overflow-hidden rounded-2xl border border-border bg-secondary">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <p className="mt-4 text-sm text-muted-foreground">
                    123 Financial District, Suite 400
                  </p>
                  <p className="text-sm text-muted-foreground">
                    New York, NY 10004
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
