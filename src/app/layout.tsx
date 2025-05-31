import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header";
import { Footer } from "@/components/footer";
import { Map } from "@/components/map";

// Мета-данные для страницы
export const metadata: Metadata = {
  title: "Аренда спецтехники Саратов | «ИнвестРемСтрой»",
  description: "Компания «ИнвестРемСтрой» предоставляет услуги аренды спецтехники в Саратове и Саратовской области: экскаваторы, погрузчики, автокраны и другая техника для строительства и ремонта и доставку строительных материалов. Выгодные условия, быстрая подача, качественное оборудование с гарантией.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />
        <link rel="preload" as="image" href="/main-page.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
      </head>
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
