"use client";



import dynamic from "next/dynamic";



import Image from "next/image";
import { GalleryItem } from "@/constants/galleryData";

const DesktopGallery = dynamic(() => import("./DesktopGallery"), {
  loading: () => <Fallback />,
});


export default function Gallery({galleryData}:{galleryData:GalleryItem[]}) {

 
  return (
    <>
        <DesktopGallery galleryData={galleryData} /> 
    </>
  );
}

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