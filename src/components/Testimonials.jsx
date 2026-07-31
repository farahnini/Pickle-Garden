import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#f4efe6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[#b39364] font-bold uppercase tracking-wider text-xs bg-[#b39364]/10 px-3 py-1 rounded-full border border-[#b39364]/20">
            Player Reviews
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#122c1d] uppercase">
            Loved By Local Players
          </h2>
          <p className="text-[#4c5e52] text-sm sm:text-base">
            See why beginners, seasoned pros, and weekend dinkers call Pickle Garden their home court.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="glass-panel p-8 flex flex-col justify-between space-y-6 relative border border-[#b39364]/20 hover:border-[#b39364]/50 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-[#b39364]/10 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex text-amber-500 gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* High contrast text on dark green card background */}
                <p className="text-[#e6dcc7] text-sm italic leading-relaxed font-light">
                  "{item.quote}"
                </p>
              </div>

              {/* High contrast border and author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-[#b39364]/20 text-[#b39364] font-bold flex items-center justify-center border-2 border-[#b39364] uppercase font-display text-sm shrink-0">
                  {item.author[0]}
                </div>
                <div>
                  <div className="font-display font-bold text-white text-base">{item.author}</div>
                  <div className="text-xs text-[#b39364] font-semibold">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
