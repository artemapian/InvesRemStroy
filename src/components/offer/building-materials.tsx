import React from "react";
import { Card } from "../card"
export const materials: {id: number, descriptionType: string, title: string; img: string; price: string; fraction?: string, slug: string}[] = [
    { id: 1, descriptionType:'щебеня', title: 'Щебень М800', img: '/materials/m800-5-20.webp', price: '2200 ₽/м<sup>3</sup>', fraction: '5/20', slug: 'shcheben-m800-5-20' },
    { id: 2, descriptionType:'щебеня', title: 'Щебень М800', img: '/materials/m800-20-40.webp', price: '2000 ₽/м<sup>3</sup>', fraction: '20/40', slug: 'shcheben-m800-20-40' },
    { id: 3, descriptionType:'щебеня', title: 'Щебень М800', img: '/materials/m800-40-70.webp', price: '2000 ₽/м<sup>3</sup>', fraction: '40/70', slug: 'shcheben-m800-40-70' },
    { id: 4, descriptionType:'щебеня', title: 'Щебень М600', img: '/materials/m800-5-20.webp', price: '2200 ₽/м<sup>3</sup>', fraction: '5/20', slug: 'shcheben-m600-5-20' },
    { id: 5, descriptionType:'щебеня', title: 'Щебень М600', img: '/materials/m800-20-40.webp', price: '2000 ₽/м<sup>3</sup>', fraction: '20/40', slug: 'shcheben-m600-20-40' },
    { id: 6, descriptionType:'щебеня', title: 'Щебень М600', img: '/materials/m800-40-70.webp', price: '2000 ₽/м<sup>3</sup>', fraction: '40/70', slug: 'shcheben-m600-40-70' },
    { id: 7, descriptionType:'речного песка', title: 'Песок речной', img: '/materials/pesok-rechnoy.webp', price: '320 ₽/м<sup>3</sup>', slug: 'pesok-rechnoy' },
    { id: 8, descriptionType:'горного песка', title: 'Песок горный', img: '/materials/pesok-gorniy.webp', price: '100 ₽/м<sup>3</sup>', slug: 'pesok-gornyy' },
    { id: 9, descriptionType:'кирпича', title: 'Кирпич', img: '/materials/kirpich.webp', price: 'Договорная', slug: 'kirpich' },
    { id: 10, descriptionType:'чернозема', title: 'Чернозем', img: '/materials/chernozem.webp', price: 'Договорная', slug: 'chernozem' },
    { id: 11, descriptionType:'асфальта', title: 'Асфальт', img: '/materials/asfalt.webp', price: '3200 ₽/м<sup>3</sup>', slug: 'asfalt' },
    { id: 12, descriptionType:'асфальтной крошки', title: 'Асфальтная крошка', img: '/materials/asfalt-kroshka.webp', price: '800 ₽/м<sup>3</sup>', slug: 'asfaltnaya-kroshka' },
    { id: 13, descriptionType:'керамзита', title: 'Керамзит', img: '/materials/keramzit.webp', price: 'Договорная', slug: 'keramzit' },
    { id: 14, descriptionType:'грунта', title: 'Грунт', img: '/materials/grunt.webp', price: 'Договорная', slug: 'grunt' },
    { id: 15, descriptionType:'леса', title: 'Лес', img: '/materials/les.webp', price: 'Договорная', slug: 'les' },
    { id: 16, descriptionType:'жбк-конструкций', title: 'ЖБК-конструкции', img: '/materials/jbk.webp', price: 'Договорная', slug: 'zhbk-konstruktsii' }
  ]
const BuildingMaterials = React.memo(() => {
    return (
        <div id = 'materials' className="flex flex-col scroll-mt-[70px] lg:scroll-mt-[120px] 2xl:scroll-mt-[110px] text-[#3e4451] w-full space-y-12">
            <div className="flex flex-col justify-center items-center space-y-4">
                <h2  className="text-center font-bold ">Ассортимент строительных материалов</h2>
                <p className="text-center text-[#64748b] text-xl max-w-[810px]">Предлагаем широкий ассортимент строительных материалов для любых этапов работ. Только надёжная продукция от проверенных производителей по честным и доступным ценам.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((item) => (
            <Card
            comment={`Нужна доставка стройматериала: ${item.title}`}
            href={`/materials/${item.slug}`}
            key={item.id}
            title={item.title}
            img={item.img}
            price={item.price}
            fraction={item.fraction}
            />
        ))}
            </div>
        </div> 
    )
})
BuildingMaterials.displayName = "TrustBanner";

export default BuildingMaterials;