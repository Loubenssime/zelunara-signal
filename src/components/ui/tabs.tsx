import * as React from "react";import * as P from "@radix-ui/react-tabs";import { cn } from "@/lib/utils";
export const Tabs=P.Root;
export const TabsList=({className,...props}:React.ComponentPropsWithoutRef<typeof P.List>)=><P.List className={cn("inline-flex rounded-lg bg-zinc-900 p-1",className)} {...props}/>;
export const TabsTrigger=({className,...props}:React.ComponentPropsWithoutRef<typeof P.Trigger>)=><P.Trigger className={cn("rounded-md px-3 py-1.5 text-sm text-zinc-400 data-[state=active]:bg-zinc-800 data-[state=active]:text-amber-400",className)} {...props}/>;
