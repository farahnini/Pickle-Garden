import React from 'react';
import { AMENITIES } from '../data/mockData';

export default function QuickInfoStrip() {
  return (
    <section className="bg-[#f4efe6] border-y border-[#b39364]/20 py-6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
          {AMENITIES.map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center gap-2.5 px-3 py-1 transition-colors duration-200 group"
            >
              <span className="text-2xl filter drop-shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <span className="text-[11px] font-bold text-[#122c1d] tracking-widest uppercase leading-normal max-w-[150px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
