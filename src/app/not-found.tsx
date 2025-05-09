import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center text-[#f09605]  justify-center pt-8 md:pt-16 h-[50vh] bg-[#ffedd6]">
      
        <h1 className="text-4xl font-bold ">404</h1>
        <p className="mt-4 text-xl font-semibold text-gray-700">Страница не найдена</p>
        <Link className="mt-6 inline-block px-6 py-3 text-lg md:text-xl md:px-8 md:py-4 bg-[#f09605] text-white rounded-md" href="/">

            Вернуться на главную
          
        </Link>
      
    </div>
  );
};

