
import { cn } from "@/lib/utils";

import { LucideIcon } from "lucide-react";
import React from "react"


interface Props {
    className?: string;
    icon: LucideIcon
    title: string;
    description: string
}
export const CardTradeOffer:React.FC<Props> = ({className, icon: Icon, title, description}) => {
    return(
        <div
            className={cn("sm:space-y-2 h-full p-3 pr-6 sm:p-6 items-center transition-shadow hover:shadow-md bg-[#f1f5f9] rounded-lg", className)}>
            <Icon className="text-[#f09605] mb-2 sm:mb-5" size={40}/>
            <h5 className="sm:text-xl text-sm font-semibold">{title}</h5>
            <p className="text-[#64748b]">{description}</p>
        </div>
    )
}