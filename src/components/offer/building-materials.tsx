import React from "react";
import { Card } from "../card"
import { materials } from "../constants";

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
            titleApplication="Заказать"
            comment={`Нужна доставка стройматериала: ${item.title}`}
            href={`/materials/${item.slug}`}
            key={item.id}
            title={item.title}
            img={item.img}
            renderDescription={
                <>
                <div className="flex justify-between">
                    <span>Фракция:</span>
                    <span className="font-bold text-[#f09605]">{item.fraction} мм.</span>
                </div>
                <div className="flex justify-between">
                    <span>Стоимость:</span>
                    <span dangerouslySetInnerHTML={{__html: item.price}} className="font-bold text-[#f09605]"/>
                </div>
                <div className="flex justify-between">
                    <span>Доставка:</span>
                    <span className="font-bold text-[#f09605]">от 2500 ₽</span>
                </div>
                </>
            }
            />
        ))}
            </div>
        </div> 
    )
})
BuildingMaterials.displayName = "TrustBanner";

export default BuildingMaterials;