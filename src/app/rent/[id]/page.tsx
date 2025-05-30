'use client'
import { Application } from "@/components/application";
import { useIsMobile } from "@/components/hooks/useMobile";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { tehnix } from "@/components/constants";
export default function Home() {
    const { id } = useParams<{id: string}>(); // получаем id из URL
    const tehnic = tehnix.find(p => p.slug === id);
    const {MotionOrDiv, isMobile} = useIsMobile()
    const MotionImage = motion(Image)
    const [loaded, setLoaded] = useState(false);
    return (
        <MotionOrDiv
        {...(!isMobile && {
          initial: { opacity: 0, y: -30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, ease: "easeOut" },
        })} className="mx-5 mt-15 md:mt-0 md:mx-20 pt-2 md:pt-6 space-y-5 md:space-y-7 text-[#3e4451]">
            <h3 className="font-bold text-center "><span className='relative underline-rounded'>{tehnic?.descriptionName ? tehnic?.descriptionName : tehnic?.name}</span></h3>
            <div className="flex flex-col text-lg  md:flex-row gap-6 font-semibold  md:space-y-0">
            <MotionImage 
                onLoad={() => setLoaded(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: loaded ? 1 : 0 }}
                transition={{ duration: 0.7 }}
                width={450} height={600} src={tehnic?.img} alt={tehnic?.name}  className="flex h-full md:min-w-[600px] max-h-[450px] md:max-w-[650px]"/>
                <div className="flex flex-col space-y-3 flex-1">
                    <h5 className="font-bold ">Аренда {tehnic?.descriptionType} от <span className="font-extrabold text-[#f09605]">ИнвестРемСтрой</span> — надёжное решение для любых задач.<p>Посмотрите <Link href='/#proects' className="text-[#f09605] hover:underline hover:underline-offset-7">примеры выполненных работ</Link> и убедитесь в эффективности нашей техники.</p></h5>
                    <div>{tehnic?.description}</div>
                    <ul className="list-disc pl-5">
                        <li><span className="font-bold text-[#f09605]">Опытные операторы</span> с профессиональной подготовкой</li>
                        <li><span className="font-bold text-[#f09605]">Индивидуальный подход</span> к каждому клиенту</li>
                        <li><span className="font-bold text-[#f09605]">Только надёжная техника,</span> регулярно проходящая обслуживание</li>
                    </ul>
                    <ul className="text-xl">
                        <li><span className="font-bold">Стоимость аренды:</span> {tehnic?.cost}</li>
                        {tehnic?.loadcapacity !== '-' && <li><span className="font-bold">Грузоподъемность:</span> {tehnic?.loadcapacity}</li>}
                        <li><span className="font-bold">Минимальное время выезда:</span> 3 часа</li>
                    </ul>
                    <Application comment={`Нужна техника: ${tehnic?.name}`} title={'Арендовать'} className="flex-1 max-h-11 mt-2 cursor-pointer h-10 text-[17px] text-white" />
                                        
                </div>
            </div>
        </MotionOrDiv>
        
    )
}