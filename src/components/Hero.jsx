import React, { useEffect, useRef } from 'react';
import { Calendar, MessageSquare, Sparkles } from 'lucide-react';
import { VENUE_INFO } from '../data/mockData';
import { animate } from 'animejs';

export default function Hero() {
  const borderOffsetRef = useRef(null);

  // Entrance animations on page load
  useEffect(() => {
    // 1. Staggered reveal for left column items
    animate('.animate-stagger-item', {
      translateY: [35, 0],
      opacity: [0, 1],
      delay: (el, i) => i * 120, 
      duration: 1400,
      easing: 'easeOutExpo'
    });

    // 2. Springy scale in for right image card container
    animate('.animate-hero-card', {
      scale: [0.96, 1],
      opacity: [0, 1],
      delay: 300,
      duration: 1500,
      easing: 'easeOutElastic(1, 0.85)'
    });

    // 3. Offset border entry animation
    animate('.animate-border-offset', {
      translateX: [15, 6],
      translateY: [15, 6],
      opacity: [0, 1],
      delay: 700,
      duration: 1200,
      easing: 'easeOutExpo'
    });
  }, []);

  // 4. Interactive Hover Animations using Anime.js
  const handleMouseEnter = () => {
    animate(borderOffsetRef.current, {
      translateX: 12,
      translateY: 12,
      borderColor: '#b39364',
      duration: 500,
      easing: 'easeOutExpo'
    });
  };

  const handleMouseLeave = () => {
    animate(borderOffsetRef.current, {
      translateX: 6,
      translateY: 6,
      borderColor: 'rgba(179, 147, 100, 0.3)',
      duration: 600,
      easing: 'easeOutExpo'
    });
  };

  return (
    <section className="relative pt-36 pb-16 flex items-center justify-center bg-[#fdfbf7] overflow-hidden">
      {/* Premium organic leaf vector pattern in background */}
      <div 
        className="absolute right-0 bottom-0 w-[500px] h-[500px] opacity-[0.03] bg-contain bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="%23122c1d" d="M80,20 C60,20 40,40 40,60 C40,70 45,75 50,75 C60,75 80,50 80,20 Z M30,50 C15,50 5,70 5,85 C5,90 10,95 15,95 C30,95 45,80 45,65 C45,55 35,50 30,50 Z"/></svg>')` }}
      />
      
      {/* Subtle structural grid lines */}
      <div className="absolute inset-0 border-x border-[#122c1d]/5 max-w-7xl mx-auto pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Story & CTAs */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-4">
              <span className="animate-stagger-item opacity-0 text-xs font-bold uppercase tracking-[0.3em] text-[#b39364] block">
                Petaling Jaya, Selangor
              </span>
              
              {/* Luxury Editorial Typography - staggered line-by-line */}
              <h1 className="leading-[0.95] tracking-tight text-[#122c1d] uppercase">
                <span className="animate-stagger-item opacity-0 font-serif italic font-normal text-3xl sm:text-4xl md:text-5xl lowercase tracking-normal text-[#b39364] block mb-2">
                  play where
                </span>
                <span className="animate-stagger-item opacity-0 font-display font-black text-6xl sm:text-7xl md:text-8xl block">
                  PJ PLAYS
                </span>
              </h1>
              
              <p className="animate-stagger-item opacity-0 text-base sm:text-lg text-[#4c5e52] font-light leading-relaxed max-w-md pt-2">
                Experience Selangor's premier dedicated indoor pickleball venue. Three professional hard courts with permanent lines, nets, and full amenities at Seksyen 51A. 
              </p>
            </div>

            {/* Staggered Action Buttons */}
            <div className="animate-stagger-item opacity-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={VENUE_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#122c1d] hover:bg-[#1a3a27] text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wider text-xs border border-[#122c1d] shadow-sm"
              >
                <Calendar className="w-4 h-4 text-[#b39364]" />
                <span>Book A Court</span>
              </a>
              <a
                href={VENUE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-transparent hover:bg-[#122c1d]/5 text-[#122c1d] font-bold px-8 py-4 rounded-lg transition-all uppercase tracking-wider text-xs border border-[#122c1d]"
              >
                <MessageSquare className="w-4 h-4 text-[#b39364]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Minimalist Details Strip */}
            <div className="animate-stagger-item opacity-0 pt-6 border-t border-[#122c1d]/10">
              <div className="flex flex-wrap gap-y-2 text-xs font-bold uppercase tracking-widest text-[#122c1d]/60">
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

          {/* Right Column: Larger Framed Image with Interactive Hover */}
          <div className="lg:col-span-7 flex justify-center w-full">
            <div 
              className="animate-hero-card opacity-0 relative p-3 bg-white border border-[#b39364]/20 rounded-2xl shadow-xl w-full max-w-2xl cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Gold Offset border animated via Anime.js on hover */}
              <div 
                ref={borderOffsetRef}
                className="animate-border-offset opacity-0 absolute top-0 left-0 w-full h-full border border-[#b39364]/30 rounded-2xl pointer-events-none" 
                style={{ transform: 'translate(6px, 6px)' }}
              />
              
              {/* Gold Accent corner tabs */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#b39364]" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#b39364]" />
              
              {/* The Photo Container */}
              <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 relative">
                <img 
                  src="./assets/poster-court.jpeg" 
                  alt="Pickle Garden Indoor Courts" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-[#122c1d] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded border border-[#b39364]/30 shadow-md">
                  Professional Indoor Layout
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
