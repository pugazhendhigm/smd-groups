import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { AboutSection } from "@/components/home/about-section";
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section";
import { CTASection } from "@/components/home/cta-section";
import { ContactSection } from "@/components/home/contact-section";
import { StatsSection } from "@/components/home/stats-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
