import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input selection:bg-primary-accent-light placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-primary-accent/50 aria-invalid:ring-destructive/20  aria-invalid:border-destructive  flex field-sizing-content min-h-16 w-full rounded-md border border-primary-accent bg-transparent px-3 py-2  shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 text-lg",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
