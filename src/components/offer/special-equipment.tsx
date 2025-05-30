import React from "react";
import { Card } from "../card"
import { tehnix } from "../constants";

const SpecialEqiupment = React.memo(() => {
    return (
        <div id="spectehic" className="flex scroll-mt-[70px] lg:scroll-mt-[120px] 2xl:scroll-mt-[110px] flex-col text-[#3e4451] w-full space-y-12">
            <div  className="flex flex-col justify-center items-center space-y-4">
                <h2 className="text-center font-bold ">Наша спецтехника</h2>
                <p className="text-center text-[#64748b] text-xl max-w-[800px]">Широкий выбор строительной и грузовой техники для решения задач любой сложности. Вся техника проходит регулярное техническое обслуживание.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tehnix.map((item) => (
            <Card
            comment={`Нужна техника: ${item.name}`}
            key={item.id}
            title={item.name}
            img={item.img}
            titleApplication="Арендовать"
            renderDescription={
              <>
              <div className="flex justify-between mb-2">
                <span>Грузоподъемность:</span>
                <span className="font-medium text-[#3e4451]">{item.loadcapacity}</span>
              </div> 
              <div className="flex justify-between">
                  <span>Стоимость:</span>
                  <span dangerouslySetInnerHTML={{__html: item.cost}} className="font-bold text-[#f09605]"/>
              </div>
              </>              
            }
            href={`/rent/${item.slug}`}
            />
            ))}
        </div>
         </div> 
    )
})
SpecialEqiupment.displayName = "TrustBanner";

export default SpecialEqiupment;