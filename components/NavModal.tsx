"use client";
import React from "react";

// import { FloatingDock } from "../ui/floating-dock";

import { FaXmark } from "react-icons/fa6";





// import { useRouter } from "next/navigation";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger, useModal } from "./ui/animated-modal";
import { MdMenu } from "react-icons/md";

// import { Button } from "../ui/button";

function ModalHeader() {
  const { setOpen } = useModal();
  return (
    <div className=" flex py-4 px-4 justify-between border-b border-gray-300 h-[80px] items-center bg-white ">
      <h3 id="modal-title" className="font-semibold tracking-wider">
        Shopping Cart
      </h3>

      <FaXmark
        onClick={() => setOpen(false)}
        className="size-6 cursor-pointer"
      />
    </div>
  );
}

function ModalFooterMain() {
  // const { setOpen } = useModal();
  // const router = useRouter();

  // const navigate = (url: string) => {
  //   setOpen(false); // close modal
  //   setTimeout(() => router.push(url), 100); // small delay ensures close anim completes
  // };
  return (
    <div className="mt-auto">
      <ModalFooter className="flex flex-col py-8 gap-2">
        Modal Footer
        
      </ModalFooter>
    </div>
  );
}

export default function NavModal() {
  //  const t = useTranslations("Header");
 

  
  return (
    <Modal>
      <ModalTrigger className="flex items-center gap-2">
        <MdMenu className="group-hover:scale-90 transition-all size-8 md:size-10" />
      
      </ModalTrigger>

      <ModalBody side="right" className="size-full bg-white ">
        <ModalHeader />
        <ModalContent className="flex p-5">
         Modal content
        </ModalContent>
        <ModalFooterMain  />
      </ModalBody>
    </Modal>
  );
}
