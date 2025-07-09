"use client";
import { useCallback, useRef, useState } from "react";

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function RippleButton({ children, ...props }: RippleButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleRef = useRef<HTMLSpanElement>(null);
  const [isActive, setIsActive] = useState(false);

  const createRipple = useCallback(
    (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
      if (!buttonRef.current || !rippleRef.current) return;
      setIsActive(true);

      const button = buttonRef.current;
      const ripple = rippleRef.current;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      
      // Handle both mouse and touch events
      const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
      const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
      
      const x = clientX - rect.left - size / 2;
      const y = clientY - rect.top - size / 2;

      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      ripple.classList.remove("ripple-leave");
      ripple.classList.add("ripple-enter");
    },
    []
  );

  const removeRipple = useCallback(() => {
    if (!buttonRef.current || !rippleRef.current) return;
    setIsActive(false);

    const ripple = rippleRef.current;
    ripple.classList.remove("ripple-enter");
    ripple.classList.add("ripple-leave");

    const handleAnimationEnd = () => {
      ripple.classList.remove("ripple-leave");
      ripple.removeEventListener("animationend", handleAnimationEnd);
    };

    ripple.addEventListener("animationend", handleAnimationEnd);
  }, []);

  const handleMove = useCallback(
    (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
      if (!buttonRef.current || !rippleRef.current || !isActive) return;

      const button = buttonRef.current;
      const ripple = rippleRef.current;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      
      const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
      const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
      
      const x = clientX - rect.left - size / 2;
      const y = clientY - rect.top - size / 2;

      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
    },
    [isActive]
  );

  return (
    <button
      ref={buttonRef}
      className="duration-[600ms] cursor-pointer shadow-md relative text-primary-accent flex items-center justify-center overflow-hidden rounded-3xl bg-primary-accent-light px-6 py-3 text-[1.2rem] font-semibold border border-primary-accent transition hover:text-white active:text-white"
      onMouseEnter={createRipple}
      onMouseLeave={removeRipple}
      onMouseMove={handleMove}
      onTouchStart={createRipple}
      onTouchEnd={removeRipple}
      onTouchMove={handleMove}
      {...props}
    >
      <span className="relative z-[2]">{children}</span>
      <span ref={rippleRef} className="ripple" />
      <style>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          background-color: #E26A2C;
          z-index: 1;
          opacity: 0;
          transition: transform 50ms linear;
        }
        .ripple-enter {
          animation: ripple-enter 600ms ease-out forwards;
        }
        .ripple-leave {
          animation: ripple-leave 600ms ease-out forwards;
        }
        @keyframes ripple-enter {
          from { transform: scale(0); opacity: 1; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes ripple-leave {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(0); opacity: 1; }
        }
      `}</style>
    </button>
  );
}