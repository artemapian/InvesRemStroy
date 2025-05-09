'use client'
import { Application } from "@/components/application";
import { useIsMobile } from "@/components/hooks/useMobile";
import { materials } from "@/components/offer/building-materials"
import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
export default function Home() {
    const { id } = useParams<{id: string}>(); // получаем id из URL
    const material = materials.find(p => p.slug === id);
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
            <h3 className="font-bold text-center "><span className='relative underline-rounded'>{material?.title}</span></h3>
            <div className="flex flex-col text-lg  md:flex-row gap-6 font-semibold  md:space-y-0">
            <MotionImage 
                onLoad={() => setLoaded(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: loaded ? 1 : 0 }}
                transition={{ duration: 0.7 }}
                width={450} height={600} src={material!.img} alt={material!.title}  className="flex h-full md:min-w-[600px] max-h-[450px] md:max-w-[650px]"/>
                <div className="flex flex-col space-y-3 flex-1">
                    <h5 className="font-bold "><span className="font-extrabold text-[#f09605]">ИнвестРемСтрой</span> — лучший выбор для доставки {material?.descriptionType} для вашего бизнеса и частных объектов.</h5>
                    <ul className="list-disc pl-5">
                        <li><span className="font-bold text-[#f09605]">Чёткое соблюдение </span>сроков доставки</li>
                        <li><span className="font-bold text-[#f09605]">Доставка</span> прямо на строительный объект</li>
                        <li><span className="font-bold text-[#f09605]">Гарантия</span> сохранности груза в пути</li>
                        <li><span className="font-bold text-[#f09605]">Поддержка</span> на всех этапах заказа</li>
                    </ul>
                    <ul className="text-xl">
                        {material?.fraction && <li><span className="font-bold">Фракция:</span> {material?.fraction} мм.</li>}
                        <li><span  className="font-bold">Стоимость:</span> <span dangerouslySetInnerHTML={{__html: material!.price}}></span></li>
                        <li><span className="font-bold">Цена доставки:</span> от 2500 ₽</li>
                        
                    </ul>
                    <Application comment={`Нужна доставка стройматериалов: ${material?.title}`} title={'Заказать'} className="flex-1 max-h-11 mt-2 cursor-pointer h-10 text-[17px] text-white" />
                                        
                </div>
            </div>
        </MotionOrDiv>
        
    )
}