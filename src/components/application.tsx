'use client'
import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { RequestDialogForm } from "./request-dialog-form";
import { Button } from "./ui/button";
import React, { useState } from "react";
import { Phone } from "lucide-react";
interface Props {
    iconName?: string
    title: string;
    className?: string;
    comment?: string
}
export function Application({comment, title, className, iconName}: Props) {
    const Icon = iconName ? Phone : null;
    const [open, setOpen] = useState(false);
    return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
        <Button className={className}>
            {Icon && <Icon />}
            {title}
        </Button>
        </DialogTrigger>
        <DialogContent className="w-auto fade-in h-auto data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out">
            <DialogHeader>
            <DialogTitle>
                <div className="flex gap-2 font-bold p-2 md:p-4 text-2xl md:text-4xl items-center justify-between">
                    <div className="p-1 bg-[#f09605] items-center justify-center text-white rounded-md">ИРС</div>
                    <p>
                        ИнвестРемСтрой
                    </p>
                </div>
                <div className="flex flex-col p-1 md:p-3 font-semibold text-center text-xl md:text-3xl">
                    <p>Заявка на бесплатную консультацию</p>
                    <div className="mt-3 font-normal text-[18px]">
                        <Link href="tel:+79603561830">{"8 (960) 356-18-30"}</Link> <span className="hidden md:inline">|</span> stroyka.sar2010@mail.ru
                    </div>
                </div>
            </DialogTitle>
            <DialogDescription asChild>
                <RequestDialogForm commentPaste={comment} setClose={() => setOpen(false)}/>
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
    )
}