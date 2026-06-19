"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { contactInfo } from "@/lib/data";
import { LocationMap } from "@/components/shared/location-map";
import { FadeIn } from "@/components/ui/motion";

export function ContactSection() {
  return (
    <section className="section-padding section-surface-cream">
      <div className="container-page">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Contact Info */}
          <div>
            <FadeIn>
              <span className="luxury-label">
                Get in Touch
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-3 font-serif text-2xl font-bold text-foreground sm:mt-4 sm:text-3xl lg:text-4xl">
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
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-card">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-card">
                    <Phone className="h-5 w-5 text-accent" />
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
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-card">
                    <Mail className="h-5 w-5 text-accent" />
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
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-card">
                    <Clock className="h-5 w-5 text-accent" />
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

          <FadeIn delay={0.2} direction="left">
            <LocationMap className="h-full" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
