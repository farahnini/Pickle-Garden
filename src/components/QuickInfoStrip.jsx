import React from 'react';
import { MapPin, Clock, Trophy, ShowerHead, Compass, Coffee } from 'lucide-react';

export default function QuickInfoStrip() {
  const infoItems = [
    {
      icon: MapPin,
      label: "Seksyen 51A, PJ",
      sub: "Petaling Jaya, Selangor"
    },
    {
      icon: Clock,
      label: "Open Daily 8AM - 1AM",
      sub: "Wednesday till 2AM"
    },
    {
      icon: Trophy,
      label: "3 Indoor Courts",
      sub: "Professional Hard Courts"
    },
    {
      icon: ShowerHead,
      label: "Shower Rooms",
      sub: "Fresh Restrooms"
    },
    {
      icon: Compass,
      label: "Dedicated Surau",
      sub: "Clean Prayer Space"
    },
    {
      icon: Coffee,
      label: "Food & Drinks",
      sub: "Lobby Lounge Area"
    }
  ];

  return (
    <section className="bg-[#fdfbf7] border-y border-[#b39364]/30 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {infoItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center p-4 bg-[#f4efe6] border border-[#b39364]/25 hover:border-[#122c1d] rounded-2xl transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group cursor-pointer"
              >
                {/* Gold icon inside a deep forest green circular badge */}
                <div className="w-12 h-12 rounded-full bg-[#122c1d] text-[#b39364] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-[#b39364]/30">
                  <IconComponent className="w-5 h-5 text-[#b39364]" />
                </div>
                
                {/* Main Label */}
                <span className="text-[11px] font-extrabold text-[#122c1d] tracking-widest uppercase leading-tight">
                  {item.label}
                </span>
                
                {/* Secondary Subtitle */}
                <span className="text-[9px] font-medium text-[#4c5e52] tracking-wider uppercase mt-1 opacity-80">
                  {item.sub}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
