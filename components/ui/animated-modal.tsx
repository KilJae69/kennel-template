"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, m } from "motion/react";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

interface ModalContextType {
  open: boolean;
  setOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  return (
    <ModalContext.Provider value={{ open, setOpen, triggerRef }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export function Modal({ children }: { children: ReactNode }) {
  return <ModalProvider>{children}</ModalProvider>;
}

// ModalTrigger now accepts custom icon as children, falling back to menu icon
export const ModalTrigger = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  const { open, setOpen, triggerRef } = useModal();

  useEffect(() => {
    const button = triggerRef.current;
    if (button) {
      button.setAttribute("data-state", open ? "opened" : "closed");
      button.setAttribute("aria-expanded", open ? "true" : "false");
    }
  }, [open, triggerRef]);

  useEffect(() => {
  if (open) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }

  return () => {
    document.body.classList.remove("modal-open");
  };
}, [open]);

  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      ref={triggerRef}
      className={`cursor-pointer relative group ${className}`}
    >
      {children ?? (
        <HiOutlineMenuAlt3 className="size-8 md:size-10 group-hover:scale-90 transition-all" />
      )}
      <span className="sr-only">{open ? "Close modal" : "Open modal"}</span>
    </button>
  );
};

export const ModalBody = ({
  children,
  className,
  side = "left",
  widthClass = "w-full max-w-[380px]",
}: {
  children: ReactNode;
  className?: string;
  side?: "left" | "right";
  widthClass?: string;
}) => {
  const { open, setOpen, triggerRef } = useModal();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const modalRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
  useOutsideClick(modalRef, () => setOpen(false), triggerRef);

  if (!isClient) return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  // Determine the initial and exit offset based on side
  const offsetX = side === "left" ? "-100%" : "100%";
  const positionClass = side === "left" ? "left-0" : "right-0";

  return ReactDOM.createPortal(
    <AnimatePresence>
      {open && (
        <m.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          initial={{ x: offsetX }}
          animate={{ x: "0" }}
          exit={{ x: offsetX }}
          transition={{ type: "tween", duration: 0.2 }}
          className={cn(
            `fixed top-0 bottom-0 ${positionClass} z-[5000] flex items-center justify-center overflow-hidden shadow-2xl`,
            widthClass
          )}
          
        >
          <div
            ref={modalRef}
            className={cn(
              "relative z-50 flex flex-col flex-1 overflow-y-auto overflow-x-hidden",
              className
            )}
          >
            {children}
          </div>
        </m.div>
      )}
    </AnimatePresence>,
    modalRoot
  );
};

export const ModalContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col flex-1", className)}>{children}</div>
  );
};

export const ModalFooter = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex justify-end p-4 bg-gray-100", className)}>
      {children}
    </div>
  );
};

// Hook to detect clicks outside of a component.
export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: (event: MouseEvent | TouchEvent) => void,
  excludeRef?: React.RefObject<HTMLElement | null>
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (
        excludeRef?.current &&
        excludeRef.current.contains(event.target as Node)
      ) {
        return;
      }
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback, excludeRef]);
};
