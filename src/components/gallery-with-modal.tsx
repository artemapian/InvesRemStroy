'use client'
import { useState } from "react";
import { SelectedImage } from "./selected-image";
import Gallery from "./gallery";
import TrustBanner from "./trust-us";

export const GalleryWithModal = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const handleImageClick = (imageName: string) => {
        setSelectedImage(imageName); // Открытие модального окна с выбранным изображением
        const newPadding = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${newPadding}px`;
      };
    return (
        <>
        <section className="md:pt-10 pt-3 md:pb-14 pb-7 md:space-y-4  mx-5 md:mx-20">
        <TrustBanner />
        <Gallery handleImageClick={handleImageClick} />
        </section>
        {selectedImage && <SelectedImage selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
        </>
    )
}