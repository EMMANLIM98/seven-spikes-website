import FaqLandingPage from "@/components/sections/faq-landing-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Seven Spikes Group, our services, projects, and how to work with us.",
};

export default function FaqPage() {
  return <FaqLandingPage />;
}
