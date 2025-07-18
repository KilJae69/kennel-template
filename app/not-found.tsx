import { Container } from "@/components/shared/Container";
import { FadeIn, FadeInStagger } from "@/components/shared/FadeIn";
import RippleLinkButton from "@/components/shared/RippleLinkButton";


export default function NotFound() {
  return (
    <section className="relative py-12 mt-42 lg:pb-24 ">
    
      <Container className="h-full">
        <FadeInStagger className="flex flex-col size-full justify-center items-center">
          <FadeIn>
            <h1 className="flex text-h2 text-center py-2 leading-[1.5] flex-col gap-2">
              <span className="text-primary-accent text-h1 font-extrabold">
                404
              </span>
              <span className="text-gradient leading-[1.5]">
                Page Not Found
              </span>
            </h1>
          </FadeIn>
          <FadeIn>
            <p className="text-paragraph">
              The page you are looking for doesn&apos;t exist or has been moved.
            </p>
          </FadeIn>
          <FadeIn>
            <RippleLinkButton className="mt-6" href="/">
              Back to Home
            </RippleLinkButton>
          </FadeIn>
        </FadeInStagger>
      </Container>
    </section>
  );
}
