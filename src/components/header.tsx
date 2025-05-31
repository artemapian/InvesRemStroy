'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import React from 'react';
import { Application } from './application';

const nameWithHref = [
  { name: 'Аренда спецтехники', href: 'spectehic' },
  { name: 'Услуги спецтехники', href: 'uslugi' },
  { name: 'Доставка стройматериалов', href: 'materials' },
  { name: 'Выполненные проекты', href: 'proects' },
  { name: 'О компании', href: 'about' },
];

const Header = React.memo(() => {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const MotionOrHeader = isMobile ? 'header' : motion.header;
  const menuJustClosedRef = useRef<HTMLDivElement>(null);
  const isAnotherPage = pathname !== '/';
    const menuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        setTimeout(() => {
          if (menuRef.current && !menuRef.current.contains(event.target as Node) && !menuJustClosedRef) {
            setMenuOpen(false);
          }
          if(menuJustClosedRef && menuRef.current!.contains(event.target as Node) && menuRef.current ){
            return
          }
        }, 10); // подождать завершения клика
      };
      
      const handleScroll = () => {
        setMenuOpen(false);
        
      };
    
      if (menuOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("scroll", handleScroll);
      }
    
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        window.removeEventListener("scroll", handleScroll);
      };
    }, [menuOpen]);
  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return null;

  const scrollOrNavigate = (href: string) => {
    setMenuOpen(false); // сначала закрыть меню
  
    if (!isAnotherPage) {
      setTimeout(() => {
        const element = document.getElementById(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // задержка, чтобы успел свернуться бургер
    } else {
      router.push(`/#${href}`);
    }
  };
  return (
    <MotionOrHeader
  {...(!isMobile && {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 },
  })}
    className="fixed md:sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="flex items-center justify-between px-5 md:px-20 py-2 2xl:py-4">
        {/* Логотип */}
        <Button
          variant="link"
          onClick={() => {
            if (!isAnotherPage) {
              const element = document.getElementById('main');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            } else {
              router.push('/');
            }
          }}
          className="flex gap-2 p-0 font-bold text-lg 2xl:text-xl items-center"
        >
          <div className="p-1 bg-[#f09605] text-white rounded-md">ИРС</div>
          <p>ИнвестРемСтрой</p>
        </Button>

        {/* Десктоп меню */}
        {!isMobile ? (
          <>
          <div className="flex flex-wrap xl:flex-nowrap items-center space-x-5 px-3 justify-center xl:justify-between 2xl:justify-center">
            {nameWithHref.map(({ name, href }) => (
              <Button
                key={href}
                variant="link"
                onClick={() => scrollOrNavigate(href)}
                className="hover:text-[#f09605] text-[13px] 2xl:text-sm px-0 whitespace-normal"
              >
                {name}
              </Button>
            ))}
            </div>
            <div className='flex flex-wrap items-center justify-end gap-3'>
              <div className="flex flex-col items-end ml-2">
                <Link href="tel:+79603561830" className="text-[16px] font-semibold">
                  8 (960) 356-18-30
                </Link>
                <p className="text-xs text-[#637288]">Ежедневно, круглосуточно</p>
              </div>
            <Application
              title="Заказать звонок"
              className="cursor-pointer gap-2 h-10 2xl:text-sm text-white"
              iconName="Phone"
            />
          </div>
          </>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            value="Навигация | Заказать звонок"
            onClick={() => {
              setMenuOpen(menuOpen ? false : true);
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        )}
      </div>

      {/* Мобильное меню */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
          ref={menuRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden px-5 pb-4 md:hidden bg-white border-t border-gray-200 z-50"
          >
            <div className="flex flex-col mt-3 space-y-3">
              {nameWithHref.map(({ name, href }) => (
                <Button
                  key={href}
                  variant="link"
                  onClick={() => scrollOrNavigate(href)}
                  className="justify-start w-full text-left text-[17px] text-[#3e4451]"
                >
                  {name}
                </Button>
              ))}
              <div className="flex flex-col">
                <Link href="tel:+79603561830" className="text-[17px] font-semibold">
                  8 (960) 356-18-30
                </Link>
                <p className="text-[15px] text-[#637288]">Ежедневно, круглосуточно</p>
                <div ref={menuJustClosedRef} className='flex mt-4 h-10'>
                  <Application
                    title="Заказать звонок"
                    className="cursor-pointer gap-2 w-full h-full text-[15px] text-white"
                    iconName="Phone"
                  />
                </div>
                
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionOrHeader>
  );
});
Header.displayName = "TrustBanner";

export default Header;
