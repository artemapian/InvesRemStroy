import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header";
import { Footer } from "@/components/footer";
import { Map } from "@/components/map";

// Мета-данные для страницы
export const metadata: Metadata = {
  title: "Аренда спецтехники Саратов | «ИнвестРемСтрой»",
  description: "Компания «ИнвестРемСтрой» предоставляет услуги аренды спецтехники в Саратове и Саратовской области: экскаваторы, погрузчики, автокраны и другая техника для строительства и ремонта и доставку строительных материалов. Выгодные условия, быстрая подача, качественное оборудование с гарантией.",
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head />
      <body>
        <Header />
        <main>{children}</main>
        <Map />
        <footer className="md:pt-10 pt-6 space-y-4 md:space-y-10 md:pb-3 pb-2 bg-[#3e4451]">
          <div className="mx-10 md:mx-20">
            <Footer />
          </div>
          <div className="relative">
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-500/20" />
          </div>
          <div className="flex md:pb-0 pt-3 pb-2 text-sm justify-center text-gray-300/70 text-center">
            © 2025 ИнвестРемСтрой. Все права защищены.
          </div>
        </footer>
      </body>
    </html>
  );
}
