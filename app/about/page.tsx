import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about SMD Group, our team, values, and commitment to financial excellence.",
};

export default function AboutPage() {
  redirect("/about/who-we-are");
}
