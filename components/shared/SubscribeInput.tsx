"use client";

import toast from "react-hot-toast";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";


export default function SubscribeInput() {
 const placeholders = [
  "you@corgilovers.com",              // email cue
  "Puppy socialization tips",         // content tease
  "Upcoming litter announcements",    // FOMO for new litters
  "Show ring training guide",         // competition angle
  "Health & hip-score insights",      // breeding/health angle
  "Join our waiting list",            // direct invite
  "Exclusive behind-the-scenes",      // VIP tease
  "Daily dose of corgi cuteness",     // lifestyle angle
];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("🐶 You’re on the list." )
    console.log("submitted");
  };
  return (
    <div className="">
      
      <PlaceholdersAndVanishInput
      inputAria = "Email address"
      buttonAria = "Subscribe to newsletter"
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
