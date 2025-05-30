import React from "react";
import { Card } from "../card"
import { services } from "../constants";

  
const EquipmentServises = React.memo(() => {
    return (
        <div id="uslugi" className="flex flex-col scroll-mt-[70px] lg:scroll-mt-[120px] 2xl:scroll-mt-[110px] text-[#3e4451] w-full space-y-12">
            <div  className="flex flex-col justify-center items-center space-y-4">
                <h2  className="text-center font-bold">Наши услуги</h2>
                <p className="text-center text-[#64748b] text-xl max-w-[800px]">Оказываем широкий спектр услуг с применением спецтехники. Выполняем заказы любой сложности — оперативно, качественно и с соблюдением всех норм безопасности.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item) => (
                <Card
                comment={`Нужна услуга: ${item.title}`}
                key={item.id}
                title={item.title}
                titleApplication="Заказать"
                img={item.img}
                renderDescription={
                  <div className="flex justify-between">
                      <span>Стоимость:</span>
                      <span dangerouslySetInnerHTML={{__html: item.cost}} className="font-bold text-[#f09605]"/>
                  </div>
                }
                href={`/services/${item.slug}`}
                />
            ))}
            </div>
        </div> 
    )
})
EquipmentServises.displayName = "TrustBanner";

export default EquipmentServises;