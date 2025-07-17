import PuppyCard from "@/components/puppies-sections/PuppyCard";
import { Container } from "@/components/shared/Container";
import PageIntro from "@/components/shared/PageIntro";
import { puppies } from "@/constants/puppiesData";

export default function PuppiesPage() {
  return (
    <>
    <PageIntro title="Available Puppies"/>
    <Container>
         <div className="grid my-16 lg:my-28 grid-cols-1 gap-6 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {puppies.map((puppy)=> (
                        <PuppyCard key={puppy.id} puppy={puppy}   />
                    ))}
                   
                  </div>
    </Container>
    </>
  );
  
}