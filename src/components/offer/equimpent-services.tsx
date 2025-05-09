import React from "react";
import { Card } from "../card"
export const services: {id: number; title: string; img: string, cost: string, description: string, descriptionWithPrice?: boolean | false, slug: string}[] = [
    {
      id: 1,
      title: 'Уборка и вывоз снега',
      img: '/uslugi/sneg.webp',
      cost: 'от 600 ₽/м<sup>3</sup>',
      description: 'Зимой своевременная уборка снега — не просто вопрос комфорта, но и безопасности. Мы предлагаем профессиональные услуги по уборке и вывозу снега с придомовых территорий, дорог, парковок, крыш и других объектов. Работы выполняются с использованием специализированной техники и ручного труда — в зависимости от объема и специфики объекта.',
      slug: 'uborka-snega'
    },
    {
      id: 2,
      title: 'Дорожно-строительные работы',
      img: '/uslugi/rem.webp',
      cost: 'от 700 ₽/м<sup>3</sup>',
      descriptionWithPrice: true,
      description: 'Предлагаем комплексные услуги по устройству, ремонту и обслуживанию дорог различного назначения. Мы выполняем дорожные работы "под ключ" — от подготовки основания до укладки асфальта и благоустройства прилегающей территории.',
      slug: 'dorozhno-stroitelnye-raboty'
    },
    {
      id: 3,
      title: 'Земляные работы',
      img: '/uslugi/zem.webp',
      cost: 'от 100 ₽/м<sup>3</sup>',
      descriptionWithPrice: true,
      description: 'Выполняем полный спектр земляных работ для строительства, ландшафтного благоустройства и инженерных коммуникаций. Используем современную спецтехнику и обеспечиваем точность, безопасность и соблюдение всех технологических норм на каждом этапе.',
      slug: 'zemlyanye-raboty'
    },
    {
      id: 4,
      title: 'Планировка и благоустройство прудов',
      img: '/uslugi/prudi.webp',
      cost: 'Договорная',
      description: 'Создание декоративных и функциональных водоемов — это сочетание инженерной точности и эстетики. Мы выполняем полный комплекс работ по планировке, устройству и благоустройству прудов на частных, коммерческих и общественных территориях.',
      slug: 'blagoustroystvo-prudov'
    },
    {
      id: 5,
      title: 'Прокладка коммуникаций',
      img: '/uslugi/kom.webp',
      cost: 'Договорная',
      description: 'Профессионально выполняем работы по прокладке наружных и внутренних инженерных коммуникаций для частных, коммерческих и муниципальных объектов. <ul class="dash-list"><li>Прокладка трубопроводов для водоснабжения, водотведения, электрических кабелей, слаботочных сетей, канализаций</li><li>Монтаж трубопроводов, электрических кабелей, труб канализации</li><li>Cварка полиэтиленовых труб</li><li>Установка колодцев (на любой глубине)</li></ul>',
      slug: 'prokladka-kommunikatsiy'
    },
    {
      id: 6,
      title: 'Демонтажные работы',
      img: '/uslugi/demontaz.webp',
      cost: 'Договорная',
      description: 'Проводим демонтажные работы любой сложности — от разборки малых архитектурных форм до сноса капитальных зданий и сооружений. Обеспечиваем безопасность, точность и строгое соблюдение нормативных требований.',
      slug: 'demontazhnye-raboty'
    },
    {
      id: 7,
      title: 'Уборка и вывоз строительного мусора',
      img: '/uslugi/musor.webp',
      cost: 'от 600 ₽/м<sup>3</sup>',
      description: 'После строительства, ремонта или демонтажных работ остается значительное количество отходов, которые требуют правильной и своевременной утилизации. Мы предоставляем комплексную услугу по уборке и вывозу строительного мусора с любых объектов — от частных участков до крупных строительных площадок.',
      slug: 'uborka-stroitelnogo-musora'
    }
  ]
  
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
                img={item.img}
                cost={item.cost}
                href={`/services/${item.slug}`}
                />
            ))}

            </div>
        </div> 
    )
})
EquipmentServises.displayName = "TrustBanner";

export default EquipmentServises;