import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#0b1a13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-pickle-400 font-bold uppercase tracking-wider text-xs bg-pickle-500/10 px-3 py-1 rounded-full border border-pickle-500/20">
            Player Reviews
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
            LOVED BY LOCAL PLAYERS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            See why beginners, seasoned pros, and Garden Club members call Pickle Garden their home court.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="glass-panel p-8 rounded-3xl flex flex-col justify-between space-y-6 glass-panel-hover relative"
            >
              <Quote className="w-10 h-10 text-pickle-500/20 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex text-amber-400 gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-200 text-sm italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-pickle-400"
                />
                <div>
                  <div className="font-display font-bold text-white text-base">{item.author}</div>
                  <div className="text-xs text-pickle-400 font-medium">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
