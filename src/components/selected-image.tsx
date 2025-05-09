'use client'
import { motion } from "framer-motion"
import Image from "next/image";
import React, { useState } from "react";
import { useIsMobile } from "./hooks/useMobile";
interface Props {
    selectedImage: string;
    setSelectedImage: (value: string | null) => void
}
export const SelectedImage:React.FC<Props> = ({selectedImage, setSelectedImage}) => {
    const {MotionOrDiv, isMobile} = useIsMobile()
    const [loaded, setLoaded] = useState<boolean>(false)
    const MotionImage = motion(Image)
    const handleCloseModal = () => {
            setSelectedImage(null); // Закрытие модального окна
            document.body.style.overflow = "";
            document.body.style.paddingRight = "0";
          };
    const handleModalClick = (e: React.MouseEvent) => {
      // Закрыть модальное окно, если клик был за пределами изображения
      if (e.target === e.currentTarget) {
        handleCloseModal();
      }
    };
    return (
      <MotionOrDiv
      className="fixed inset-0 bg-[#0000007c] flex justify-center items-center z-50"
      onClick={handleModalClick}
      {...(!isMobile && {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      })}
        >
         <MotionOrDiv
        className="relative"
        {...(!isMobile && {
          initial: { y: -50, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 0.4, ease: "easeOut" },
        })}
      >
          <div className="relative inline-block items-center min-w-[300px] min-h-[200px] max-w-[90vw] max-h-[90vh]">
            <MotionImage
              loading="lazy"
              onLoad={() => setLoaded(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: loaded ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              src={`/gallery/${selectedImage}`}
              alt={selectedImage}
              width={800}
              height={100}
              className="w-auto h-auto object-contain"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 z-10 pb-1 md:pb-0.5 text-black text-2xl font-bold bg-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer shadow-md"
            >
              &times;
            </button>
          </div>
        </MotionOrDiv>


       </MotionOrDiv>

    )
}