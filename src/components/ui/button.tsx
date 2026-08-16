import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
type Props=React.ButtonHTMLAttributes<HTMLButtonElement>&{asChild?:boolean;variant?:"default"|"ghost"|"outline";size?:"default"|"sm"|"lg"|"icon"};
export const Button=React.forwardRef<HTMLButtonElement,Props>(({className,asChild,variant="default",size="default",...props},ref)=>{const Comp=asChild?Slot:"button";return <Comp ref={ref} className={cn("inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",variant==="default"&&"bg-amber-500 text-black hover:bg-amber-400",variant==="ghost"&&"hover:bg-zinc-800",variant==="outline"&&"border border-zinc-700 bg-transparent hover:bg-zinc-800",size==="default"&&"h-10 px-4",size==="sm"&&"h-9 px-3 text-sm",size==="lg"&&"h-11 px-8",size==="icon"&&"h-10 w-10",className)} {...props}/>});Button.displayName="Button";
