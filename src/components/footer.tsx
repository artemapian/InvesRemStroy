import { Application } from "./application";
import { FooterButtonNavigate } from "./footer-button-navigate";
const equipmentRentals = [
    "Аренда Самосвалов",
    "Аренда Фронтальных погрузчиков",
    "Аренда Минипогрузчиков",
    "Аренда Гидромолотов",
    "Аренда Экскаватора",
    "Аренда Виброкатков",
    "Аренда Ямобуров",
    "Аренда Экскаваторов-погрузчиков",
    "Аренда Эвакуаторов",
    "Аренда Автокранов"
  ];
  const services = [
    "Уборка и вывоз строительного мусора",
    "Уборка и вывоз снега",
    "Дорожно-строительные работы",
    "Земляные работы",
    "Прокладка коммуникаций",
    "Демонтажные работы"
  ];
  const materials = [
    "Щебень",
    "Песок",
    "Кирпич",
    "Чернозем",
    "Асфальт",
    "Асфальтная крошка",
    "Керамзит",
    "Грунт",
    "Лес",
    "ЖБК-конструкции"
  ];
export const Footer = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between md:space-y-0 gap-4">
            <div className="flex max-w-100 font-semibold flex-col text-white space-y-5">
                <div className="flex gap-2 font-bold text-3xl items-center ">
                    <h4 className="p-1 bg-[#f09605] items-center justify-center rounded-md">ИРС</h4>
                    <h4>
                        ИнвестРемСтрой
                    </h4>
                </div>
                <div className="items-center justify-center text-[16px] -mt-3 text-gray-200">
                    Профессиональные услуги спецтехники для строительства, земляных работ и перевозки грузов. Работаем по всей Саратовской области.
                </div>
                <div className="flex flex-col text-gray-100 text-[15px]">
                    <p>ООО {"ИнвестРемСтрой"}</p>
                    <p>ИНН 645301001, ОГРН 1106441000060</p>
                </div>
                <Application
                title="Заказать спецетхнику"
                className="bg-[#ec9f23] flex outline-none cursor-pointer hover:bg-[#eba83c] px-9 py-6 text-white text-[18px] font-semibold"
                />
            </div>
            <div className="text-gray-100 flex flex-col">
                <div className="font-bold">Спецтехника</div>
                {equipmentRentals.map((item, index) => (
                    <FooterButtonNavigate key={index} href="spectehic" title={item}/>
                ))}
            </div>
            <div className="text-gray-100 flex flex-col">
                <div className="font-bold">Услуги спецтехники</div>
                {services.map((item, index) => (
                    <FooterButtonNavigate key={index} href="uslugi" title={item}/>
                ))}
            </div>
            <div className="text-gray-100 flex flex-col">
                <div className="font-bold">Доставка строительных материалов</div>
                {materials.map((item, index) => (
                    <FooterButtonNavigate key={index} href="materials" title={item}/>
                ))}
            </div>
            
        </div>
         
    )
}