import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services | Future Technologies",
  description:
    "Explore the full range of IT services offered by Future Technologies — workstations, servers, CCTV, networking, gadgets, and technical support.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
