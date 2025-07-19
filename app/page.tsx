import HeroSection from "@/components/home-sections/HeroSection";
import { Container } from "@/components/shared/Container";
import PuppyApplicationForm from "@/components/shared/PuppyApplicationForm";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Container>
        <PuppyApplicationForm />
      </Container>
    </>
  );
}
