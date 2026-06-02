import Link from "next/link";
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { navigationItems, services, contactInfo, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="font-serif text-xl font-bold text-primary-foreground">
                  S
                </span>
              </div>
              <span className="font-serif text-xl font-semibold text-foreground">
                SMD Group
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Providing exceptional financial advisory services to help individuals
              and businesses achieve their goals with integrity and expertise.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.name}
                >
                  {social.icon === "linkedin" && <Linkedin className="h-4 w-4" />}
                  {social.icon === "twitter" && <Twitter className="h-4 w-4" />}
                  {social.icon === "facebook" && <Facebook className="h-4 w-4" />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/client-intake"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Client Intake
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground">Our Services</h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-muted-foreground" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-muted-foreground" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SMD Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
