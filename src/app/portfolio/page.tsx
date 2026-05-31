import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio | Future Technologies",
  description:
    "Browse past projects and deployments by Future Technologies, including networking, surveillance, server installations, and more.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
