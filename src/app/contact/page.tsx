import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Future Technologies",
  description:
    "Get in touch with Future Technologies for IT inquiries, quotes, and support. Based in Tandag, Surigao del Sur.",
};

export default function ContactPage() {
  return <ContactContent />;
}
