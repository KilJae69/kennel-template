import CertificationsSection from "@/components/about-sections/CertificationsSection";
import AboutSection from "@/components/home-sections/AboutSection";
import HeroSection from "@/components/home-sections/HeroSection";
import ChampionsSlider from "@/components/home-sections/MeetChampionsSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection/>
      <CertificationsSection className="bg-gray-50 !my-0 py-16"/>
      <ChampionsSlider/>
    </>
  );
}
