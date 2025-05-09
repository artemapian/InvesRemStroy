'use client'
import { Application } from "@/components/application";
import { useIsMobile } from "@/components/hooks/useMobile";
import { services } from "@/components/offer/equimpent-services"
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
export default function Home() {
    const { id } = useParams<{id: string}>(); // получаем id из URL
    const service = services.find(p => p.slug === id);
    const {MotionOrDiv, isMobile} = useIsMobile()
    const MotionImage = motion(Image)
    const [loaded, setLoaded] = useState(false);
    return (
        <MotionOrDiv
        {...(!isMobile && {
          initial: { opacity: 0, y: -30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, ease: "easeOut" },
        })} className="mx-5 mt-20 md:mt-0 md:mx-20 pt-2 md:pt-6 space-y-5 md:space-y-7 text-[#3e4451]">
            <h3 className="font-bold text-center "><span className='relative underline-rounded'>{service?.title}</span></h3>
            <div className="flex flex-col text-lg  md:flex-row gap-6 font-semibold  md:space-y-0">
            <MotionImage 
                onLoad={() => setLoaded(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: loaded ? 1 : 0 }}
                transition={{ duration: 0.7 }}
                width={450} height={600} src={service?.img} alt={service?.title}  className="flex h-full md:min-w-[600px] max-h-[450px] md:max-w-[650px]"/>
                <div className="flex flex-col space-y-3 flex-1">
                    <h5 className="font-bold "><span className="font-extrabold text-[#f09605]">ИнвестРемСтрой</span> — комплексные строительные услуги для объектов любого уровня сложности.<p>Посмотрите <Link href='/#proects' className="text-[#f09605] hover:underline hover:underline-offset-7">примеры выполненных работ</Link> и убедитесь в эффективности наших услуг.</p></h5>
                    <div dangerouslySetInnerHTML={{__html: service!.description}}></div> 
                    <ul className="list-disc pl-5">
                        <li><span className="font-bold text-[#f09605]">Оптимизируем</span> затраты без потери качества</li>
                        <li>Гарантируем <span className="font-bold text-[#f09605]">качество</span> и <span className="font-bold text-[#f09605]">прозрачность</span> на каждом этапе</li>
                        <li>Выполнение работ <span className="font-bold text-[#f09605]">точно в срок</span></li>
                    </ul>
                    
                    {!service?.descriptionWithPrice && <div className="text-xl"><span  className="font-bold">Стоимость:</span> <span dangerouslySetInnerHTML={{__html: service!.cost}} /></div>}
                    <Application comment={`Нужна услуга: ${service?.title}`} title={'Заказать'} className="flex-1 max-h-11 mt-2 cursor-pointer h-10 text-[17px] text-white" />
                </div>
            </div>
            {service?.title === 'Дорожно-строительные работы' && (
                <ul className="grid md:grid-cols-4 gap-5 text-[17px] font-bold">
                <li className="service">
                    <div>Укладка асфальтного покрытия 
                        <ul className="pl-5 font-semibold">
                            <li>Эмульсия битумная.</li>
                            <li>Асфальт - 4 см.</li>
                        </ul>
                    </div>
                    <div className="text-[#f09605] text-xl">От 1700 ₽/м<sup>2</sup></div>
                </li>
                <li className="service">
                    <div>Укладка асфальтного покрытия 
                        <ul className="pl-5 font-semibold">
                            <li>Песок - 5 см.</li>
                            <li>Щебень - 15 см.</li>
                            <li>Асфальт - 5 см.</li>
                        </ul>
                    </div>
                    <div className="text-[#f09605] text-xl">от 1850 ₽/м<sup>2</sup></div>
                </li>
                <li className="service">
                    <div>Укладка асфальтного покрытия 
                        <ul className="pl-5 font-semibold">
                            <li>Щебень - 20 см.</li>
                            <li>Асфальт (первый слой) - 5 см.</li>
                            <li>Асфальт (второй слой) - 5 см.</li>
                        </ul>
                    </div>
                    <div className="text-[#f09605] text-xl">от 3200 ₽/м<sup>2</sup></div>
                </li>
                <li className="service">
                    <div>Устройство дорожек и отмосток стороений 
                        <ul className="pl-5 font-semibold">
                            <li>Щебень - 10 см.</li>
                            <li>Асфальт - 4 см.</li>
                        </ul>
                    </div>
                    <div className="text-[#f09605] text-xl">от 1750 ₽/м<sup>2</sup>/мп</div>
                </li>
                <li className="service">
                    <div>Укладка дороги из асфальтной крошки
                        <ul className="pl-5 font-semibold">
                            <li>Асфальтная крошка - 5-15 см.</li>
                        </ul>
                    </div>
                    <div className="text-[#f09605] text-xl">от 700 ₽/м<sup>2</sup></div>
                </li>
                <li className="service">
                    <div>Ямочный ремонт дорог</div>
                    <div className="text-[#f09605] text-xl">от 1750 ₽/м<sup>2</sup></div>
                </li>
                <li className="service">
                    <div>Установка дорожного бордюра</div>
                    <div className="text-[#f09605] text-xl">от 1400 ₽/шт.</div>
                </li>
                <li className="service">
                    <div>Установка тротуарного бордюра</div>
                    <div className="text-[#f09605] text-xl">от 800 ₽/шт.</div>
                </li>
            </ul>
            )}
            {service?.title === 'Земляные работы' && (
                <ul className="grid md:grid-cols-3 gap-5 font-bold">
                    <li className="service">
                        <div>Разработка котлованов и траншей</div>
                        <div className="text-[#f09605] text-xl">от 150 ₽/м<sup>3</sup></div>
                    </li>
                    <li className="service">
                        <div>Планировка территории</div>
                        <div className="text-[#f09605] text-xl">от 100 ₽/м<sup>3</sup></div>
                    </li>
                    <li className="service">
                        <div>Погрузка и вывоз грунта с мусором</div>
                        <div className="text-[#f09605] text-xl">от 300 ₽/м<sup>3</sup></div>
                    </li>
                </ul>
            )}
        </MotionOrDiv>
        
    )
}