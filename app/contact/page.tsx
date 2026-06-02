import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { contactInfo } from "@/lib/data";
import { PageHeader } from "@/components/shared/page-header";
import { ContactForm } from "@/components/contact/contact-form";
import { FadeIn } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SMD Group. We are here to help with all your financial advisory needs.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="We are here to help with all your financial advisory needs"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-page">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Contact Info */}
            <div>
              <FadeIn>
                <span className="text-sm font-medium uppercase tracking-wider text-accent">
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
                  Have questions about our services? Want to discuss your financial
                  needs? We are here to help. Reach out to us and our team will
                  respond within 24 hours.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-10 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="mt-1 text-muted-foreground">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="mt-1 block text-muted-foreground hover:text-foreground"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="mt-1 block text-muted-foreground hover:text-foreground"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Business Hours</p>
                      <p className="mt-1 text-muted-foreground">
                        {contactInfo.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <FadeIn delay={0.2} direction="left">
              <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 md:p-8">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Send Us a Message
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill out the form below and we will get back to you shortly.
                </p>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-page">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-serif text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
                Visit Our Office
              </h2>
              <p className="mt-4 text-muted-foreground">
                Located in the heart of the Financial District
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-8 h-64 overflow-hidden rounded-2xl border border-border bg-card sm:mt-10 sm:h-80 md:mt-12 md:h-96">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto h-16 w-16 text-muted-foreground/30" />
                  <p className="mt-4 text-lg font-medium text-foreground">
                    123 Financial District, Suite 400
                  </p>
                  <p className="text-muted-foreground">New York, NY 10004</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
