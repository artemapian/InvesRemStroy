'use client'
import { Wrench, Clock, UserRoundCheck, Banknote, MapPin, Shield } from "lucide-react";
import { CardTradeOffer } from "./card-trade-offer";
import { useIsMobile } from "./hooks/useMobile";
import React from "react";

const tradeOffers = [
  {
    icon: Clock,
    title: 'Доставка вовремя',
    description: 'Техника прибудет на объект точно в оговорённое время',
  },
  {
    icon: Wrench,
    title: 'Исправная техника',
    description: 'Вся техника в отличном состоянии и регулярно проходит ТО',
  },
  {
    icon: UserRoundCheck,
    title: 'Опытные операторы',
    description: 'Квалифицированные специалисты с опытом от 5 лет',
  },
  {
    icon: Banknote,
    title: 'Прозрачные цены',
    description: 'Фиксированные тарифы без скрытых платежей и комиссий',
  },
  {
    icon: MapPin,
    title: 'Работаем везде',
    description: 'Предоставляем услуги по всей Саратовской области — в городах и ближайших районах',
  },
  {
    icon: Shield,
    title: 'Официальный договор',
    description: 'Полное документальное сопровождение услуг и страхование техники',
  },
];

const TradeOffer = React.memo(() => {
  const {MotionOrDiv, isMobile} = useIsMobile()
  return (
    <div className="flex flex-col text-[#3e4451] w-full space-y-6 sm:space-y-12">
      <div className="flex flex-col justify-center items-center space-y-4">
        <h3 className="text-center font-bold">Почему выбирают нас</h3>
        <p className="text-center text-[#64748b] text-lg max-w-[800px]">
          Более 15 лет мы предоставляем надежные услуги аренды спецтехники для строительных и промышленных компаний
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {tradeOffers.map((offer, index) => (
            <MotionOrDiv
            key={index}
            {...(!isMobile && {
                initial: { opacity: 0, y: 60 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.8, ease: "easeOut" },
                viewport: { once: true }
            })}>
          <CardTradeOffer
            icon={offer.icon}
            title={offer.title}
            description={offer.description}
          />
          </MotionOrDiv>
        ))}
      </div>
    </div>
  );
});
TradeOffer.displayName = "TrustBanner";

export default TradeOffer;
