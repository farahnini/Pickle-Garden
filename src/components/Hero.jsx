import React, { useEffect, useState } from 'react';
import { Calendar, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { VENUE_INFO } from '../data/mockData';
import { animate } from 'animejs';

export default function Hero() {
  const slides = [
    {
      url: "./assets/poster-court.jpeg",
      title: "Indoor Court Setup",
      desc: "3 dedicated professional hard courts with air conditioning"
    },
    {
      url: "./assets/poster-changing-lounge.jpeg",
      title: "Changing Lounge",
      desc: "Premium, clean shower rooms to freshen up after matches"
    },
    {
      url: "./assets/poster-experience-lounge.jpeg",
      title: "Lobby & Lounge",
      desc: "Cozy community space for players to relax and socialize"
    },
    {
      url: "./assets/poster-surau.jpeg",
      title: "Dedicated Surau",
      desc: "Comfortable, clean prayer room nestled inside the facility"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Entrance animations on page load
  useEffect(() => {
    animate('.animate-hero-item', {
      translateY: [35, 0],
      opacity: [0, 1],
      delay: (el, i) => i * 120,
      duration: 1200,
      easing: 'easeOutExpo'
    });

    animate('.animate-hero-slideshow', {
      scale: [0.96, 1],
      opacity: [0, 1],
      delay: 400,
      duration: 1400,
      easing: 'easeOutExpo'
    });
  }, []);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    // Clean Deep Forest Green (#0c1c14) background to make the slideshow pop
    <section className="relative pt-36 pb-20 flex items-center justify-center bg-[#0c1c14] overflow-hidden min-h-[85vh]">
      {/* Premium organic leaf vector pattern in background */}
      <div 
        className="absolute right-0 bottom-0 w-[500px] h-[500px] opacity-[0.03] bg-contain bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="%23b39364" d="M80,20 C60,20 40,40 40,60 C40,70 45,75 50,75 C60,75 80,50 80,20 Z M30,50 C15,50 5,70 5,85 C5,90 10,95 15,95 C30,95 45,80 45,65 C45,55 35,50 30,50 Z"/></svg>')` }}
      />
      
      {/* Subtle structural grid lines */}
      <div className="absolute inset-0 border-x border-white/5 max-w-7xl mx-auto pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Story & CTAs (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-4">
              <span className="animate-hero-item opacity-0 text-xs font-bold uppercase tracking-[0.35em] text-[#b39364] block">
                Petaling Jaya, Selangor
              </span>
              
              {/* Luxury Editorial Typography */}
              <h1 className="leading-[0.95] tracking-tight uppercase">
                <span className="animate-hero-item opacity-0 font-serif italic font-normal text-3xl sm:text-4xl md:text-5xl lowercase tracking-normal text-[#b39364] block mb-2">
                  play where
                </span>
                <span className="animate-hero-item opacity-0 font-display font-black text-6xl sm:text-7xl md:text-8xl text-white block drop-shadow-sm">
                  PJ PLAYS
                </span>
              </h1>
              
              <p className="animate-hero-item opacity-0 text-base sm:text-lg text-[#e6dcc7] font-light leading-relaxed max-w-md pt-2">
                Experience Selangor's premier dedicated indoor pickleball venue. Three professional hard courts with permanent lines, nets, and full amenities at Seksyen 51A. 
              </p>
            </div>

            {/* Action Buttons */}
            <div className="animate-hero-item opacity-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={VENUE_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#b39364] via-[#c2a980] to-[#d4c2a3] hover:from-[#c2a980] hover:to-[#b39364] text-[#122c1d] font-black px-8 h-15 rounded-xl transition-all uppercase tracking-widest text-xs shadow-lg hover:scale-[1.02]"
              >
                <Calendar className="w-4 h-4 text-[#122c1d]" />
                <span>Book A Court</span>
              </a>
              <a
                href={VENUE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-bold px-8 h-15 rounded-xl transition-all uppercase tracking-widest text-xs border border-white/20 backdrop-blur-sm"
              >
                <MessageSquare className="w-4 h-4 text-[#b39364]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Details Strip in white/gold */}
            <div className="animate-hero-item opacity-0 pt-6 border-t border-white/10 mt-6">
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

          {/* Right Column: Premium Interactive Slideshow (7 cols) */}
          <div className="lg:col-span-7 animate-hero-slideshow opacity-0 flex justify-center w-full">
            <div className="relative p-3 bg-[#122c1d] border border-[#b39364]/30 rounded-3xl shadow-2xl w-full max-w-2xl group">
              {/* Outer floating line */}
              <div className="absolute -top-2 -left-2 w-full h-full border border-[#b39364]/20 rounded-3xl pointer-events-none translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
              
              {/* Gold Accent corner tabs */}
              <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-[#b39364]" />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-[#b39364]" />
              
              {/* Slideshow Display Area */}
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 relative shadow-inner">
                {slides.map((slide, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                        isActive ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-105 pointer-events-none'
                      }`}
                    >
                      <img 
                        src={slide.url} 
                        alt={slide.title} 
                        className="w-full h-full object-cover"
                      />
                      {/* Dark overlay mask inside slide */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Caption Card inside slide */}
                      <div className="absolute bottom-5 left-5 right-5 text-left space-y-1">
                        <span className="text-[10px] font-bold tracking-widest text-[#b39364] uppercase bg-[#122c1d]/90 border border-[#b39364]/35 px-2.5 py-0.5 rounded">
                          {slide.title}
                        </span>
                        <p className="text-white text-xs sm:text-sm font-light leading-relaxed drop-shadow-sm pt-1">
                          {slide.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* Left/Right manual arrows */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/45 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-[#b39364] hover:text-[#122c1d] transition-all"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/45 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-[#b39364] hover:text-[#122c1d] transition-all"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Bottom Dot Indicators */}
              <div className="absolute bottom-5 right-6 z-10 flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'bg-[#b39364] w-5' : 'bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
