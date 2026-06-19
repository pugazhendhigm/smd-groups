import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Instagram, Star, Mail, Phone, MapPin } from "lucide-react";
import { navigationItems, services, contactInfo, socialLinks } from "@/lib/data";
import appLogo from "@/assets/appimg.png";

export function Footer() {
  return (
    <footer className="border-t border-accent/15 bg-[#0d0b09] text-white">
      <div className="container-page py-12 sm:py-14 md:py-16 lg:py-16">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                <Image
                  src={appLogo}
                  alt="SMD Group logo"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <span className="font-serif text-xl font-semibold text-accent">
                SMD Group
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/66">
              Providing exceptional financial advisory services to help individuals
              and businesses achieve their goals with integrity and expertise.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/20 bg-white/5 text-white/70 transition-colors hover:bg-accent hover:text-black"
                  aria-label={social.name}
                >
                  {social.icon === "linkedin" && <Linkedin className="h-4 w-4" />}
                  {social.icon === "facebook" && <Facebook className="h-4 w-4" />}
                  {social.icon === "instagram" && <Instagram className="h-4 w-4" />}
                  {social.icon === "yelp" && <Star className="h-4 w-4" />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-accent">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/66 transition-colors hover:text-accent"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/client-intake"
                  className="text-sm text-white/66 transition-colors hover:text-accent"
                >
                  Client Intake
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-accent">Our Services</h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-sm text-white/66 transition-colors hover:text-accent"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-accent">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-accent/80" />
                <span className="text-sm text-white/66">
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent/80" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-sm text-white/66 transition-colors hover:text-accent"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-accent/80" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-white/66 transition-colors hover:text-accent"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:mt-12 md:flex-row md:text-left">
          <p className="text-sm text-white/55">
            &copy; {new Date().getFullYear()} SMD Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/about/privacy-policy"
              className="text-sm text-white/55 transition-colors hover:text-accent"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white/55 transition-colors hover:text-accent"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
