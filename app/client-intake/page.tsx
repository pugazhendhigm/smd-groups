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

      <section className="section-padding">
        <div className="container-narrow">
          <ClientIntakeForm />
        </div>
      </section>
    </>
  );
}
