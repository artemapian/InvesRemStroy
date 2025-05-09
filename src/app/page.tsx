import TradeOffer from "@/components/trade-offer";
import MainPage from "../components/main-page";
import EquipmentServises from "@/components/offer/equimpent-services";
import BuildingMaterials from "@/components/offer/building-materials";
import AboutCompany from "@/components/about-company";
import { GalleryWithModal } from "@/components/gallery-with-modal";
import { ToastContainer } from "react-toastify";
import SpecialEqiupment from "@/components/offer/special-equipment";

export default function Home() {
  return (
    <>
      <ToastContainer progressClassName='bg-[#ec9f23]' />
      <MainPage />
      <section className="md:pt-12 pt-6 md:pb-16 pb-8 mx-5 md:mx-20">
        <TradeOffer />
      </section>
      <section className="md:pt-12 pt-4 md:pb-14 pb-7 bg-gray-50 ">
        <div className="mx-5 md:space-y-12 space-y-6 md:mx-20">
          <SpecialEqiupment />
          <EquipmentServises />
          <BuildingMaterials />
        </div>
      </section>
      <GalleryWithModal />
      <section className="md:pt-16 pt-8 bg-[#ffedd6]">
        <div className="mx-5 md:mx-20 rounded-xl bg-[#3e4451]">
          <AboutCompany />
        </div>
      </section>
    </>
    
  );
}
