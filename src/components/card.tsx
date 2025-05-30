'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useIsMobile } from "./hooks/useMobile";
import { Application } from "./application";

interface Props {
    comment?: string;
    img: string;
    title: string;
    titleApplication: string;
    renderDescription: React.ReactNode;
    href: string
}
export const Card: React.FC<Props> = ({ comment, img, title, renderDescription, href, titleApplication }) => {
    const {MotionOrDiv, isMobile} = useIsMobile()
    const MotionImage = motion(Image)
    
    const [loaded, setLoaded] = useState(false);
    return (
        <MotionOrDiv
        {...(!isMobile && {
            initial: { opacity: 0, y: 60 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8, ease: "easeOut" },
            viewport: { once: true }
        })}>
        <div className="flex flex-col h-full justify-between bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
            <div className= 'h-48'>
                <MotionImage 
                onLoad={() => setLoaded(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: loaded ? 1 : 0 }}
                transition={{ duration: 0.7 }}
                loading='lazy' width={500} height={192} src={img} alt={title} className="h-48 w-full object-cover"/>
            </div>
            <div className="flex h-full flex-col p-4 space-y-2">
                <div className="flex h-full items-center"><h6 className="flex flex-wrap font-bold text-[#3e4451]">{title}</h6></div>
                <div className="text-[17px] text-muted-foreground mb-4">
                    {renderDescription}
                </div>
                <div className="flex gap-2 ">
                    <Application comment={comment} title={titleApplication} className="flex-1 cursor-pointer h-10 text-[17px] text-white" />
                    <Link href={href} className="flex font-semibold items-center cursor-pointer h-10 px-3 rounded-md bg-white text-[16px] hover:bg-[#f09605]/10 border-1 border-[#f09605] text-[#f09605]">
                        Подробнее
                    </Link>
                </div>
            </div>
        </div>
        </MotionOrDiv>
    )
}