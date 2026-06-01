import Hero from "@/components/sections/Hero";
import TabletStats from "@/components/sections/TabletStats";
import Services from "@/components/sections/Services";
import AboutTeaser from "@/components/sections/AboutTeaser";
import WhyUs from "@/components/sections/WhyUs";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TabletStats />
      <Services />
      <AboutTeaser />
      <WhyUs />
      <CTABanner />
    </>
  );
}
