import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import React from "react"
import { Application } from "./application"

const AboutCompany = React.memo(() => {
    return (
        <div id='about' className="flex fade-in flex-col scroll-mt-[65px] lg:scroll-mt-[100px] 2xl:scroll-mt-[70px] text-white space-y-5 px-7 md:px-12 py-8 ">
            <div className="relative space-y-7 ">
                <h3 className="font-bold">О компании <span className="text-[#ffa617] relative underline-rounded">ИнвестРемСтрой</span></h3>
                <ul className="dash-list text-xl text-gray-100 font-semibold space-y-3 mb-8">
                    <li>Одна из крупнейших компаний в Саратове по предоставлению услуг аренды строительной и дорожной спецтехники.</li>
                    <li>Работаем с 2010 года и за это время получили множество благодарностей от частных компаний и государственных организаций.</li>
                    <li>Наши клиенты получают спецтехнику в кратчайшие сроки и по одним из самых выгодных цен на рынке аренды.</li>
                    <li>Обеспечиваем надёжную спецтехнику и квалифицированных специалистов, гарантируя исключительное качество на объекте.</li>
                    <li>Предлагаем комфортные условия оплаты: безналичный расчёт с НДС и без НДС.</li>
                    <li>Предоставляем услуги спецтехники в круглосуточном режиме.</li>
                </ul>
                <div className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-[#ffa617]"></div>
            </div>
            
            <div className="space-y-6">
                <h3 className="font-bold mb-3">Нужна спецтехника?</h3>
                <p className="dash-list text-lg text-gray-200 font-semibold space-y-3 max-w-[800px]">Оставьте заявку, и наш менеджер поможет подобрать оптимальное решение для ваших задач. Мы перезвоним вам в течение 15 минут.</p>
                <div className="space-y-6">
                    <Application
                    title="Оставить заявку"
                    className="bg-[#ec9f23] outline-none cursor-pointer hover:bg-[#eba83c] px-7 py-6 text-white text-[22px] font-semibold"
                    />
                    <div className="flex-col space-y-1 font-medium">
                        <p className="text-lg text-white">Или свяжитесь с нами:</p>
                        <div className="flex flex-wrap space-y-2">
                            <div className="flex space-x-2">
                                <Phone size={26} color="#ffa617"/>
                                <Link className="text-[17px] mr-3" href="tel:+79027100101">{"8 (902) 710-01-01"}</Link>
                            </div>
                            <div className="flex space-x-2">
                                <Mail size={26} color="#ffa617"/>
                                <p className="text-[17px]  text-white">stroyka.sar2010@mail.ru</p>
                            </div>
                            
                        </div>
                    </div>

                    
                </div>
            </div>
            
        </div>
    )
})
AboutCompany.displayName = "TrustBanner";

export default AboutCompany;
