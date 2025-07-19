"use client";
import { AnimatePresence, m } from "framer-motion";
import { CheckCircle2, CircleDashed } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface StatusButtonProps {
  isSubmitting: boolean;
  isSubmitSuccessful: boolean;
  onReset?: () => void;
  className?: string;
}

export default function StatusButton({
  isSubmitting,
  isSubmitSuccessful,
  onReset,
  className,
}: StatusButtonProps) {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isSubmitSuccessful) {
      setShowSuccess(true);
      timer = setTimeout(() => {
        setShowSuccess(false);
        onReset?.();
      }, 1500); // Show success message for 1.5 seconds
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isSubmitSuccessful, onReset]);

  const getButtonStatus = () => {
    if (isSubmitting) return "loading";
    if (showSuccess) return "Message Sent";
    return "Send Message";
  };

  const status = getButtonStatus();

  return (
    <button
      type="submit"
      disabled={isSubmitting || showSuccess}
      className={cn(
        "group relative cursor-pointer h-12 w-full overflow-hidden rounded-md bg-primary-accent px-6 text-lg font-semibold text-white transition-colors duration-300 hover:bg-primary-accent/80 disabled:hover:bg-primary-accent",
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <m.span
          key={status}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.075 }}
          className={cn("flex items-center justify-center gap-1")}
        >
          {status === "Message Sent" && (
            <m.span
              className="h-fit w-fit"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.075, type: "spring" }}
            >
              <CheckCircle2 className="size-8 fill-white stroke-primary-accent group-hover:stroke-primary-accent/90" />
            </m.span>
          )}

          {status === "loading" ? (
            <CircleDashed className="size-8 animate-spin" />
          ) : (
            <span className="whitespace-nowrap">{status}</span>
          )}
        </m.span>
      </AnimatePresence>
    </button>
  );
}
