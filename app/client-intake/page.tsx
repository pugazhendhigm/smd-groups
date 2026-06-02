import { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ClientIntakeForm } from "@/components/client-intake/client-intake-form";

export const metadata: Metadata = {
  title: "Client Intake",
  description: "Complete our client intake form to get started with SMD Group's financial advisory services.",
};

export default function ClientIntakePage() {
  return (
    <>
      <PageHeader
        title="Client Intake"
        description="Complete this form to get started with our services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Client Intake", href: "/client-intake" },
        ]}
      />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ClientIntakeForm />
        </div>
      </section>
    </>
  );
}
