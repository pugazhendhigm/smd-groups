import { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { FadeIn } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Review the SMD Financial Group LLC privacy policy and how we collect, use, disclose, and protect information.",
};

const policySections = [
  {
    title: "1. Introduction",
    content: [
      "SMD Financial Group LLC (\"we,\" \"our,\" or \"us\") values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you engage our tax and accounting services or visit our website.",
      "We comply with applicable federal and state laws, including Internal Revenue Service (IRS) regulations and the Gramm-Leach-Bliley Act (GLBA).",
    ],
  },
  {
    title: "2. Information We Collect",
    content: [
      "We may collect the following types of information:",
      "Personal Identifiable Information (PII): name, address, email address, and phone number.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    content: [
      "We use your information to provide tax and accounting services.",
      "We use your information to prepare and file tax returns in compliance with IRS regulations.",
      "We use your information to communicate with you regarding services and compliance requirements.",
      "We use your information to maintain records as required by law.",
      "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.",
    ],
  },
  {
    title: "4. Sharing and Disclosure",
    content: [
      "We do not sell your personal information. We may share data only with government agencies for tax filing and compliance.",
      "We may share data with trusted service providers under strict confidentiality agreements.",
      "We may share data when required by law or to protect our legal rights.",
      "In accordance with GLBA, we limit sharing of nonpublic personal information to what is necessary for providing services.",
    ],
  },
  {
    title: "5. Data Security",
    content: [
      "We implement industry-standard security measures, including encryption of sensitive data, secure servers, restricted access, regular audits, and compliance with IRS Publication 4557 and the GLBA Safeguards Rule.",
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      "You have the right to access and review your personal information.",
      "You have the right to request corrections or updates.",
      "You have the right to withdraw consent where applicable.",
    ],
  },
  {
    title: "7. Data Retention",
    content: [
      "We retain your personal and financial information only as long as necessary to fulfill the purpose for which it was collected.",
      "We retain information as needed to comply with IRS recordkeeping requirements and other applicable laws.",
      "We retain information to support legitimate business needs such as audits and legal obligations.",
      "After the retention period, we securely dispose of or anonymize your data in accordance with IRS and GLBA guidelines.",
    ],
  },
  {
    title: "8. Client Consent",
    content: [
      "By engaging our services or providing your information, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.",
      "You also consent to electronic communications related to your tax and accounting matters.",
      "You may withdraw consent at any time, subject to legal and contractual restrictions, by contacting us using the details below.",
    ],
  },
  {
    title: "9. Policy Updates",
    content: [
      "We may update this Privacy Policy periodically. Changes will be posted on our website with the updated effective date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="How SMD Financial Group LLC collects, uses, discloses, and protects your information."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Privacy Policy", href: "/about/privacy-policy" },
        ]}
      />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm lg:p-10">
              <div className="flex flex-col gap-2 border-b border-border pb-6">
                <p className="text-sm font-medium text-muted-foreground">
                  Effective Date: 01/01/2026
                </p>
                <p className="text-sm font-medium text-muted-foreground">
                  Last Updated: 01/01/2026
                </p>
              </div>

              <div className="mt-8 space-y-8">
                {policySections.map((section) => (
                  <div key={section.title}>
                    <h2 className="font-serif text-2xl font-semibold text-foreground">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-3">
                      {section.content.map((paragraph) => (
                        <p key={paragraph} className="text-sm leading-7 text-muted-foreground lg:text-base">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}

                <div>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">
                    10. Contact Us
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground lg:text-base">
                    <p>If you have questions or concerns about this Privacy Policy, contact us at:</p>
                    <p>Email: info@smdgrp.com</p>
                    <p>Phone: 404-504-7056</p>
                    <p>Address: 1050 Crown Pointe Pkwy STE 500, Atlanta, GA 30338</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
