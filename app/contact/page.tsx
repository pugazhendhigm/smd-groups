import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Printer } from "lucide-react";
import { contactInfo } from "@/lib/data";
import { PageHeader } from "@/components/shared/page-header";
import { LocationMap } from "@/components/shared/location-map";
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
        description="We’d love to hear from you! Reach out to SMD Financial Group to discuss how we can support your financial and business goals."
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
                  We’d love to hear from you! Reach out to SMD Financial Group to discuss how we can support your financial and business goals.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-10 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-card">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="mt-1 text-muted-foreground">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-card">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a
                        href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`}
                        className="mt-1 block text-muted-foreground hover:text-foreground"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-card">
                      <Printer className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Fax</p>
                      <p className="mt-1 text-muted-foreground">{contactInfo.fax}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-card">
                      <Mail className="h-5 w-5 text-accent" />
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
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-card">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Business Hours</p>
                      <p className="mt-1 text-muted-foreground">
                        <span className="whitespace-pre-line">{contactInfo.hours}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <FadeIn delay={0.2} direction="left">
              <div className="luxury-card p-5 sm:p-6 md:p-8">
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

      <section className="pb-12">
        <div className="container-page text-center text-muted-foreground">
          <p><strong className="text-foreground">Ready to get started?</strong> Contact us today to schedule a consultation or learn more about our services.</p>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding section-surface-cream">
        <div className="container-page">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-serif text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
                Visit Our Office
              </h2>
              <p className="mt-4 text-muted-foreground">
                {contactInfo.mapLocation}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-8 sm:mt-10 md:mt-12">
              <LocationMap showDirectionsLink />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
