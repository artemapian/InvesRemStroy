import { Button } from "./ui/button"
import { Application } from "./application"
import { memo } from "react";
export const TextTitleMainPage = memo(() => {
    return (
        <>
    <h1 className="font-bold">
            Аренда спецтехники в Саратове и Саратовской области
        </h1>
        <p className="main-page text-[17px] md:text-xl mt-2 sm:mt-4">
            Предоставляем услуги аренды строительной и грузовой техники с опытными операторами и доставку строительных материалов. Работаем с объектами любой сложности по всему Саратову и Энгельсу.
        </p>
        <div className="2xl:my-8 my-4 space-x-5 flex flex-wrap md:space-y-0 space-y-4">
            <Application 
            title="Заказать технику"
            className="bg-[#ec9f23] outline-none cursor-pointer  hover:bg-[#eba83c]  text-white md:text-xl flex w-full h-[46px] px-7  md:w-auto justify-center text-lg font-semibold"
            />
            <Button
                variant='link'
                onClick={() => {
                    const element = document.getElementById('spectehic');
                    if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    }
                }} 
                className="hover:text-[#ec9f23] flex md:w-auto w-full h-[46px] justify-center px-7 items-center rounded-md text-white border border-white hover:border-[#ec9f23] md:text-xl text-lg font-semibold hover:bg-transparent">
                Посмотреть каталог
            </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5 text-sm">
            <div className='bg-[rgba(0,0,0,0.4)] text-gray-100 font-semibold  sm:text-[16px] pr-15 rounded-md pl-5 p-2 sm:p-5'>
                <p className="mb-2 text-2xl md:text-[34px] font-bold text-[#ec9f23]">15+</p>
                лет опыта на рынке
            </div>
            <div className='bg-[rgba(0,0,0,0.4)] text-gray-100 font-semibold  sm:text-[16px] pr-15 rounded-md pl-5 p-2 sm:p-5'>
                <p className="mb-2 text-2xl md:text-[34px] font-bold text-[#ec9f23]">1190</p>
                сданных объектов
            </div>
            <div className='bg-[rgba(0,0,0,0.4)] text-gray-100 font-semibold  sm:text-[16px] pr-15 rounded-md pl-5 p-2 sm:p-5'>
                <p className="mb-2 text-2xl md:text-[34px] font-bold text-[#ec9f23]">24/7</p>
                подача спецтехники по Саратову и СО
            </div>
        </div>
    </>
    )
})

TextTitleMainPage.displayName = 'TextTitleMainPage'