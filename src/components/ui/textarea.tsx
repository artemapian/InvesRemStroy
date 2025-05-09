import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "max-w-full resize-none focus:border-[#ec9f23] ring-[#ec9f23] selection:bg-[#ec9f23] selection:text-white placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-[#ec9f23]/20 dark:aria-invalid:ring-[#ec9f23]/40 aria-invalid:border-[#ec9f23] dark:bg-input/30 flex min-h-16 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[1px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
