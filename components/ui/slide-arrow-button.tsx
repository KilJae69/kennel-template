import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface SlideArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  primaryColor?: string;
}

export default function SlideArrowButton({
  text = "Get Started",
  primaryColor = "#E26A2C",
  className = "",
  ...props
}: SlideArrowButtonProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className={`group relative rounded-full border border-transparent cursor-pointer bg-transparent p-2 text-xl font-semibold ${className}`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
      {...props}
    >
      <div
        className="absolute left-0 top-0 flex h-full size-11 items-center justify-end rounded-full transition-all duration-200 ease-in-out"
        style={{
          width: isActive ? '100%' : '44px',
          backgroundColor: primaryColor
        }}
      >
        <span className="mr-3 text-white transition-all duration-200 ease-in-out">
          <ArrowRight size={20} />
        </span>
      </div>
      <span 
        className="relative left-4 z-10 whitespace-nowrap px-8 font-semibold transition-all duration-200 ease-in-out"
        style={{
          color: isActive ? 'white' : 'black',
          left: isActive ? '-12px' : '16px'
        }}
      >
        {text}
      </span>
    </button>
  );
}