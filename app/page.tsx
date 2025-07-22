import CertificationsSection from "@/components/about-sections/CertificationsSection";
import AboutSection from "@/components/home-sections/AboutSection";
import BlogsSection from "@/components/home-sections/BlogsSection";
import HeroSection from "@/components/home-sections/HeroSection";
import ChampionsSlider from "@/components/home-sections/MeetChampionsSection";
import BreedingPhilosophySection from "@/components/shared/BreedingPhilosophySection";
import GlareCTA from "@/components/shared/GlareCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CertificationsSection className="bg-gray-50 !my-0 py-16" />
      <ChampionsSlider />
      <section className="bg-gray-50 py-16 lg:py-28">
        <BreedingPhilosophySection />
      </section>
      <GlareCTA
        titleText="Ready for your "
        paragraph="Whether you’re seeking a show-ring superstar or an all-around family companion, our upcoming litters combine champion bloodlines with the very best of Maple Grove’s health and temperament standards. Browse today’s available puppies or join our waiting list to be among the first to welcome one of our next planned litters into your home."
        purpose="link"
        href="/litters"
        ctaText="Available Litters"
        titleAccentText="Own Champion?"
        overlayColor="rgba(255, 255, 255, 0.8)"
      />
      <BlogsSection/>
    </>
  );
}
