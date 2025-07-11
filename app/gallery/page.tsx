import Gallery from "@/components/gallery/Gallery";
import { Container } from "@/components/shared/Container";
import PageIntro from "@/components/shared/PageIntro";
import { galleryData } from "@/constants/galleryData";
import Image from "next/image";
import { Suspense } from "react";

function Fallback(){
  return (
    <div className="flex items-center relative justify-center min-h-screen">
         <Image
           src="/bouncing-circles.svg"
           width={300}
           height={300}
           alt="Loading"
         />
       </div>
  )
}

export default function GalleryPage() {
  return (
    <>
    <PageIntro title="Gallery"/>
    <Container>
        <Suspense fallback={<Fallback/>}>
            <Gallery galleryData={galleryData} />
          </Suspense>
    </Container>
    </>
  );
  
}