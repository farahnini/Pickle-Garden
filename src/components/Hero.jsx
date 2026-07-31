import React, { useEffect } from 'react';
import { Calendar, MessageSquare } from 'lucide-react';
import { VENUE_INFO } from '../data/mockData';
import { animate } from 'animejs';

export default function Hero() {
  // Staggered entrance animations for elements on page load
  useEffect(() => {
    animate('.animate-hero-item', {
      translateY: [35, 0],
      opacity: [0, 1],
      delay: (el, i) => i * 150,
      duration: 1200,
      easing: 'easeOutExpo'
    });
  }, []);

  return (
    <section 
      className="relative pt-44 pb-28 flex items-center bg-cover bg-center bg-no-repeat min-h-[85vh] overflow-hidden"
      style={{ backgroundImage: "url('./assets/poster-court.jpeg')" }}
    >
      {/* Premium deep forest green and black gradient mask overlay for high text contrast and luxury tone */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060e0a]/90 via-[#0c1c14]/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Structural layout grid lines */}
      <div className="absolute inset-0 border-x border-white/5 max-w-7xl mx-auto pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 text-left">
          
          {/* PJ Tag */}
          <span className="animate-hero-item opacity-0 text-xs font-bold uppercase tracking-[0.35em] text-[#b39364] block">
            Petaling Jaya, Selangor
          </span>
          
          {/* Headline pairing (Serif Playfair + Sans Outfit) in high-contrast light colors */}
          <h1 className="leading-[0.95] tracking-tight uppercase">
            <span className="animate-hero-item opacity-0 font-serif italic font-normal text-3xl sm:text-4xl md:text-5xl lowercase tracking-normal text-[#b39364] block mb-2">
              play where
            </span>
            <span className="animate-hero-item opacity-0 font-display font-black text-6xl sm:text-7xl md:text-8xl text-white block drop-shadow-md">
              PJ PLAYS
            </span>
          </h1>
          
          {/* Description */}
          <p className="animate-hero-item opacity-0 text-base sm:text-lg text-[#e6dcc7] font-light leading-relaxed max-w-xl drop-shadow-sm">
            Experience Selangor's premier dedicated indoor pickleball venue. Three professional hard courts with permanent lines, nets, and full amenities at Seksyen 51A. 
          </p>

          {/* Action Buttons */}
          <div className="animate-hero-item opacity-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
            <a
              href={VENUE_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#b39364] via-[#c2a980] to-[#d4c2a3] hover:from-[#c2a980] hover:to-[#b39364] text-[#122c1d] font-black px-8 py-4 rounded-lg transition-all uppercase tracking-wider text-xs shadow-lg hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4 text-[#122c1d]" />
              <span>Book A Court</span>
            </a>
            <a
              href={VENUE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-all uppercase tracking-wider text-xs border border-white/20 backdrop-blur-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#b39364]" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Details Strip in white/gold */}
          <div className="animate-hero-item opacity-0 pt-8 border-t border-white/10 mt-6 max-w-xl">
            <div className="flex flex-wrap gap-y-2 text-xs font-bold uppercase tracking-widest text-[#e6dcc7]/80">
              <span>3 Indoor Courts</span>
              <span className="mx-2 text-[#b39364]">•</span>
              <span>Permanent Nets</span>
              <span className="mx-2 text-[#b39364]">•</span>
              <span>Surau & Showers</span>
              <span className="mx-2 text-[#b39364]">•</span>
              <span>Open Daily</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
