'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ContactUs } from './contact-us';
import { usePathname } from 'next/navigation';
import ymaps from 'yandex-maps';

declare global {
  interface Window {
    mapInstance?: ymaps.Map;
    ymaps?: typeof ymaps;
  }
}
interface YandexMapFeature {
  id: number;
  type: 'Feature';
  geometry: {
    type: 'Point';
    coordinates: [number, number];
  };
  properties: {
    link?: string;
    iconContent?: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [mapVisible, setMapVisible] = useState(false);
  const pathname = usePathname();
  const isRentPage = pathname.includes('/rent') || pathname.includes('/privacy') || pathname.includes('/agreement') || pathname.includes('/materials') || pathname.includes('/services');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapVisible(true);
          observer.disconnect(); // Отключаем после первого показа
        }
      },
      { threshold: 0.1 } // 10% попадания в видимую зону
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mapVisible) return;

    const initMap = () => {
      if (window.mapInstance) return;

      const isMobile = window.innerWidth < 1200;
      const center = isMobile
        ? [51.607662, 45.970800]
        : [51.607352, 45.968600];

      const map = new window.ymaps.Map('map', {
        center,
        zoom: 17,
        controls: [],
        behaviors: ['drag'],
      });

      window.mapInstance = map;

      const objectManager = new window.ymaps.ObjectManager({});
      const geoJson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            id: 1,
            geometry: {
              type: 'Point',
              coordinates: [51.607607, 45.970449],
            },
            properties: {
              iconContent: '<div style="background-color: white; padding: 5px 16px; border-radius: 10px; font-size: 14px; color: black; font-weight: bold; display: inline-block; white-space: nowrap; position: relative; left: 30px; top: -11px;">ИнвестРемСтрой</div>',
              link: 'https://yandex.ru/maps/org/investremstroy/1633713858/?ll=45.969471%2C51.606170&z=16',
            },
          },
        ],
      };

      objectManager.objects.options.set({
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Yandex_Maps_icon.svg',
        iconImageSize: [40, 50],
        iconImageOffset: [-20, -50],
      });

      objectManager.objects.events.add('click', (e) => {
        const objectId = e.get('objectId');
        const object = objectManager.objects.getById(objectId) as YandexMapFeature;
        const link = object?.properties?.link;
        if (link) window.open(link, '_blank');
      });

      objectManager.add(geoJson);
      map.geoObjects.add(objectManager);
    };

    // Загрузка скрипта только при необходимости
    if (!window.ymaps) {
      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
      script.async = true;
      script.onload = () => {
        if (window.ymaps) {
          window.ymaps.ready(initMap);
        }
      };
      document.head.appendChild(script);
    } else {
      window.ymaps.ready(initMap);
    }
  }, [mapVisible]);

  return (
    <section className={`${isRentPage ? 'bg-white pt-7 md:pt-14' : 'bg-[#ffedd6] pt-8 md:pt-16'}`}>
      <div className="relative">
        <ContactUs />
        <div
          id="map"
          ref={mapRef}
          className={`transition-opacity duration-700 ease-in-out ${
            mapVisible ? 'opacity-100' : 'opacity-0'
          } md:h-[60vh] h-[40vh]`}
          style={{ width: '100%', overflow: 'hidden' }}
        />
      </div>
    </section>
  );
};
