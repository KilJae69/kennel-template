import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

export default function PageIntro({title}:{title:string}) {
  return (
   <section className="bg-primary-accent text-white py-12 paper-ripped-edge  mt-32">
           <Container>
             <FadeIn>
               <div className="flex items-center justify-center w-full">
                 <h1 className="text-h1 font-semibold tracking-wider">{title}</h1>
               </div>
             </FadeIn>
           </Container>
         </section>
  );
  
}