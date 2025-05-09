import React from "react";
import { Card } from "../card"
export const tehnix: { id: number; name: string; descriptionType: string; descriptionName?: string; img: string; loadcapacity: string; cost: string, description: string, slug: string }[] = [
    {
      id: 1,
      name: 'КАМАЗ',
      descriptionType: 'самосвала',
      descriptionName: 'КАМАЗ-55111',
      img: '/kamaz.webp',
      loadcapacity: '10 тонн',
      cost: 'Договорная',
      description: 'КАМАЗ отлично подходящий...',
      slug: 'kamaz'
    },
    {
      id: 2,
      name: 'Shacman',
      descriptionType: 'самосвала',
      descriptionName: 'Shacman (25 т)',
      img: '/shacman-25.webp',
      loadcapacity: '25 тонн',
      cost: 'Договорная',
      description: 'Shacman — современный тяжеловоз...',
      slug: 'shacman-25t'
    },
    {
      id: 3,
      name: 'Shacman',
      descriptionType: 'самосвала',
      descriptionName: 'Shacman (50 т)',
      img: '/shacman-40.webp',
      loadcapacity: '40 тонн',
      cost: 'Договорная',
      description: 'Shacman — мощный самосвал...',
      slug: 'shacman-50t'
    },
    {
      id: 4,
      name: 'Фронтальный погрузчик PowerCat PC.41',
      descriptionType: 'фронтального погрузчика',
      img: '/front-loader.webp',
      loadcapacity: '4 тонны',
      cost: 'от 3800 ₽/час',
      description: 'POWER CAT PC 41 — надёжный фронтальный погрузчик...',
      slug: 'front-loader'
    },
    {
      id: 5,
      name: 'Мини-погрузчик Bobcat S175',
      descriptionType: 'мини-погрузчика',
      img: '/bobcat.webp',
      loadcapacity: '1 тонна',
      cost: 'от 2600 ₽/час',
      description: 'Компактный и манёвренный мини-погрузчик...',
      slug: 'mini-pogruzchik'
    },
    {
      id: 6,
      name: 'Гидромолот Bobcat S175',
      descriptionType: 'гидромолота',
      img: '/hydro.webp',
      loadcapacity: '-',
      cost: 'от 3000 ₽/час',
      description: 'Гидромолот, установленный на мини-погрузчик...',
      slug: 'gidromolot'
    },
    {
      id: 7,
      name: 'Экскаватор Bobcat S175',
      descriptionType: 'эскаватора',
      img: '/bobcat-escavator.webp',
      loadcapacity: '0.6 тонн',
      cost: 'от 3000 ₽/час',
      description: 'Экскаватор BOBCAT S175 — это универсальная машина...',
      slug: 'ekskavator'
    },
    {
      id: 8,
      name: 'Виброкаток Ammann ARX 40K',
      descriptionType: 'виброкатка',
      img: '/katok.webp',
      loadcapacity: '-',
      cost: 'от 20000 ₽/смена',
      description: 'Виброкаток AMMANN ARX 40K — универсальная техника...',
      slug: 'vibrokatok'
    },
    {
      id: 9,
      name: 'Ямобур ISUZU elf',
      descriptionType: 'ямобура',
      img: '',
      loadcapacity: '3 тонны',
      cost: 'от 3000 ₽/час',
      description: 'Компактный и надёжный агрегат для бурения...',
      slug: 'yamobur'
    },
    {
      id: 10,
      name: 'Экскаватор-погрузчик Caterpillar',
      descriptionType: 'экскаватора-погрузчика',
      img: '',
      loadcapacity: '5 тонн',
      cost: 'от 3000 ₽/час',
      description: 'Многофункциональная техника...',
      slug: 'ekskavator-pogruzchik'
    },
    {
      id: 11,
      name: 'Автокран Ивановец',
      descriptionType: 'автокрана',
      img: '',
      loadcapacity: '16 тонн',
      cost: 'от 2700 ₽/час',
      description: 'Мощный и надёжный кран...',
      slug: 'avtokran'
    }
  ]
  
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
            loadcapacity={item.loadcapacity}
            cost={item.cost}
            href={`/rent/${item.slug}`}
            />
            ))}
        </div>
         </div> 
    )
})
SpecialEqiupment.displayName = "TrustBanner";

export default SpecialEqiupment;