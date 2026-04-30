import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | Future Technologies",
  description:
    "Learn about Future Technologies — our story, mission, values, and the team behind Mindanao's trusted IT solutions provider.",
};

export default function AboutPage() {
  return <AboutContent />;
}
