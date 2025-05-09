'use client'
import React, { useRef, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const IMAGES_PER_ROW = 3;
const INITIAL_ROWS = 2;
const INITIAL_COUNT = IMAGES_PER_ROW * INITIAL_ROWS;
const imageList = Array.from({ length: 56 }, (_, i) => `gallery (${i + 1}).webp`);

const Gallery = React.memo(({handleImageClick} : {handleImageClick: (imageName: string) => void}) => {
  const [loadedStates, setLoadedStates] = useState<{[key: number]: boolean}>({});

  const handleImageLoad = (index: number) => {
    setLoadedStates((prev) => ({ ...prev, [index]: true }));
  };
    const [visibleImages, setVisibleImages] = useState<string[]>(imageList.slice(0, INITIAL_COUNT));
    const galleryRef = useRef<HTMLDivElement>(null);
    const nextImages = imageList.slice(0, Math.min(visibleImages.length + IMAGES_PER_ROW, imageList.length));
    return (
      <div id = 'proects' ref={galleryRef} className="scroll-mt-[50px] md:scroll-mt-[110px] 2xl:scroll-mt-[80px] flex flex-col space-y-6 md:space-y-10 pt-4 md:pt-6 ">
      <h3 className="gallery text-center font-bold text-[#3e4451] ">Наша техника в работе</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleImages.map((src, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-[200px] md:h-[240px] transition-opacity duration-700 overflow-hidden"
          >
            <Image
              height={150}
              width={300}
              src={`/gallery/${src}`}
              alt={`img-${index}`}
              loading="lazy"
              className={`max-h-full w-auto object-contain rounded-sm transition-opacity duration-700 ${
                loadedStates[index] ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => handleImageLoad(index)}
              onClick={() => handleImageClick(src)}
            />
          </div>
        ))}
      </div>
      <div className="flex p-1 space-x-2 justify-center items-center">
        {
          visibleImages.length !== imageList.length && (
            <Button onClick={() => {
              setVisibleImages(nextImages);
            }} className="flex fade-right bg-[#ec9f23] max-w-60 outline-none cursor-pointer border-2 border-[#eba83c] hover:bg-[#eba83c] px-5 md:px-7 md:py-6 py-5 text-white text-lg md:text-xl font-semibold">
              Показать еще
            </Button>
          )
        }
        {
          visibleImages.length > IMAGES_PER_ROW * INITIAL_ROWS && (
            <Button onClick={() => {
              setVisibleImages(imageList.slice(0, INITIAL_COUNT));
              setTimeout(() => {
                galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
              }}
              className="flex fade-left bg-white max-w-60 outline-none cursor-pointer border-2 border-[#eba83c] hover:bg-[#eba83c]/20 px-5 md:px-7 md:py-6 py-5 text-[#eba83c] text-lg md:text-xl font-semibold">
              Скрыть
            </Button>
          )
        }
      </div>
      </div>
  )
})
Gallery.displayName = "TrustBanner";

export default Gallery;