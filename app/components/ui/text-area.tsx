import { cn } from "@/app/lib/utils";
import React from "react";

export default function TextArea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      {...props}
      className={cn(
        `
    w-full p-3 bg-background-secondary text-white placeholder:text-content-placeholder 
    rounded-xl border-transparent hover:border-border-secondary hover:text-content-body 
    active:border-b-border-tertiary
    `,
        props.className
      )}
    />
  );
}
