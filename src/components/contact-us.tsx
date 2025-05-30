import { MapPin, Phone } from "lucide-react"
import Link from "next/link"

export const ContactUs = () => {
    return(
        <div className="md:absolute fade-in mb-8 z-11 mx-5 md:ml-50 lg:px-20 px-10 p-5 space-y-5 rounded-xl top-3 text-white bg-[#3e4451] ">
        <h3 className="flex font-bold justify-center">Контакты</h3>
        <div className="relative flex">
          <div className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-[#ffa617]"></div>
        </div>
        <div className="md:pt-0 pt-4 space-y-4">
            <div className="flex font-semibold space-x-4 items-center text-xl md:text-2xl">
                <Phone className="md:w-8 md:h-8 w-7 h-7" />
                <div className="flex flex-col space-y-2">
                    <Link href="tel:+79027100101">{"8 (902) 710-01-01"}</Link>
                    <Link href="tel:+78452491830">{"8 (8452) 49-18-30"}</Link>
                </div>
            </div>
            <div className="flex space-x-4 ">  
                <div>
                    <MapPin className="md:w-8 md:h-8 w-7 h-7"/>
                </div>
                <div className="font-semibold text-[16px] md:text-xl">
                    <p>пр-т Строителей, д. 60, оф 201{"б"}</p>
                    <div className="relative"><div className="absolute top-3 left-0 w-full h-0.5 rounded-full bg-gray-600" /></div>
                    <div className="mt-6 space-y-1">
                        <p>Работаем круглосуточно</p>
                        <p>stroyka.sar2010@mail.ru</p>
                    </div>
                </div>
                
            </div>
            
        </div>
      </div>
    )
}