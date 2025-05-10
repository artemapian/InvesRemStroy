'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { motion } from 'framer-motion';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import React, { useState } from 'react';
const logos = [
  '/logo/koroldivanov.webp',
  '/logo/metro.webp',
  '/logo/tehnikol.svg',
  '/logo/pochta.svg',
  '/logo/oblgaz.webp',
  '/logo/kombinat.webp',
  '/logo/aeroport.webp',
  '/logo/molagrotorg.webp',
  // добавь свои пути к изображениям
];

const TrustBanner = React.memo(() => {
  const MotionImage = motion(Image)
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="space-y-6 md:space-y-10 bg-white">
    <h3 className="text-center text-[#3e4451] font-bold">Нам <span id='trust' className='text-[#f09605] relative underline-rounded'>доверяют</span></h3>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 600, disableOnInteraction: false }}
        breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
        }}
      >
        {logos.map((src, index) => (
          <SwiperSlide key={index}>
            <MotionImage
              width={200} 
              height={110}
              loading='lazy'
              onLoad={() => setIsLoaded(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }} 
              src={src} alt={`Логотип ${index}`} 
              className="mx-auto max-w-60 h-24 md:h-27 md:max-w-50 2xl:max-w-60 rounded-sm object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
})
TrustBanner.displayName = "TrustBanner";

export default TrustBanner;
