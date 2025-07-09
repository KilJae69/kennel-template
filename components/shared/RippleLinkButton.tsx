"use client";

import { useCallback, useRef, useState } from "react";
import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";

interface RippleLinkButtonProps extends Omit<LinkProps, "ref"> {
  href: string;
  children: React.ReactNode;
  invert?: boolean;
}

export default function RippleLinkButton({
  href,
  invert = false,
  children,
  ...props
}: RippleLinkButtonProps) {
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const rippleRef = useRef<HTMLSpanElement>(null);
  const [isRippling, setIsRippling] = useState(false);

  const createRipple = useCallback(
    (event: React.PointerEvent<HTMLAnchorElement>) => {
      // On hover (mouse) or click (any primary pointer)
      if (event.pointerType === "mouse" || event.type === "pointerdown") {
        const btn = anchorRef.current;
        const ripple = rippleRef.current;
        if (!btn || !ripple) return;
        setIsRippling(true);

        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 2;
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        ripple.classList.remove("ripple-leave");
        ripple.classList.add("ripple-enter");
      }
    },
    []
  );

  const removeRipple = useCallback(() => {
    const ripple = rippleRef.current;
    if (!ripple) return;
    setIsRippling(false);

    ripple.classList.remove("ripple-enter");
    ripple.classList.add("ripple-leave");

    const handleAnimationEnd = () => {
      ripple.classList.remove("ripple-leave");
      ripple.removeEventListener("animationend", handleAnimationEnd);
    };
    ripple.addEventListener("animationend", handleAnimationEnd);
  }, []);

  const handleMove = useCallback(
    (event: React.PointerEvent<HTMLAnchorElement>) => {
      if (!isRippling || event.pointerType !== "mouse") return;
      const btn = anchorRef.current;
      const ripple = rippleRef.current;
      if (!btn || !ripple) return;

      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
    },
    [isRippling]
  );

  return (
    <Link
      href={href}
      ref={anchorRef}
      onPointerEnter={createRipple}
      onPointerDown={createRipple}
      onPointerMove={handleMove}
      onPointerUp={removeRipple}
      onPointerLeave={removeRipple}
      
      className={cn(`duration-[600ms] cursor-pointer shadow-md relative text-primary-accent flex items-center justify-center overflow-hidden rounded-3xl  px-6 py-3 text-[1.2rem] font-semibold border  transition hover:text-white active:text-white`, invert ? "bg-white border-white" :"bg-primary-accent-light border-primary-accent")}
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
    </Link>
  );
}
