import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, Instagram, MapPin, Phone, MessageSquare } from 'lucide-react';
import { VENUE_INFO } from '../data/mockData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#fdfbf7]/95 backdrop-blur-md border-b border-[#b39364]/20 py-4 shadow-md' 
        : 'bg-slate-950/45 backdrop-blur-sm border-b border-white/5 py-5'
    }`}>
      {/* Top Banner Bar */}
      <div className={`hidden lg:block border-b pb-3 mb-3 transition-colors ${
        scrolled ? 'border-[#122c1d]/5 text-[#4c5e52]' : 'border-white/5 text-[#e6dcc7]'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-[#b39364] transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#b39364]" />
              {VENUE_INFO.address}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href={VENUE_INFO.whatsappUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1.5 hover:text-[#b39364] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#b39364]" />
              <span>WhatsApp: {VENUE_INFO.phoneDisplay}</span>
            </a>
            <span className={scrolled ? 'text-[#122c1d]/10' : 'text-white/10'}>•</span>
            <a 
              href={VENUE_INFO.instagramUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1.5 hover:text-pink-500 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#b39364]" />
              <span>{VENUE_INFO.instagram}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="w-11 h-11 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform shrink-0 border border-[#b39364]/20">
            <img src="./assets/logo.jpg" alt="Pickle Garden Logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className={`font-display font-black text-xl sm:text-2xl tracking-tight transition-colors group-hover:text-[#b39364] ${
                scrolled ? 'text-[#122c1d]' : 'text-white'
              }`}>
                {VENUE_INFO.name.toUpperCase()}
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#b39364]/10 text-[#b39364] border border-[#b39364]/30 uppercase tracking-widest">
                Indoor PJ
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links - Colors applied directly to <a> tags for robust styling */}
        <nav className="hidden lg:flex items-center gap-8 font-semibold text-xs uppercase tracking-wider transition-colors">
          <a href="#about" className={`hover:text-[#b39364] transition-colors py-1 ${scrolled ? 'text-[#122c1d]' : 'text-white'}`}>About</a>
          <a href="#courts" className={`hover:text-[#b39364] transition-colors py-1 ${scrolled ? 'text-[#122c1d]' : 'text-white'}`}>Facilities</a>
          <a href="#rates" className={`hover:text-[#b39364] transition-colors py-1 ${scrolled ? 'text-[#122c1d]' : 'text-white'}`}>Rates</a>
          <a href="#open-play" className={`hover:text-[#b39364] transition-colors py-1 ${scrolled ? 'text-[#122c1d]' : 'text-white'}`}>Community</a>
          <a href="#pro-shop" className={`hover:text-[#b39364] transition-colors py-1 ${scrolled ? 'text-[#122c1d]' : 'text-white'}`}>Pro Shop</a>
          <a href="#contact" className={`hover:text-[#b39364] transition-colors py-1 ${scrolled ? 'text-[#122c1d]' : 'text-white'}`}>Contact</a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href={VENUE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center p-3 rounded-xl border transition-all ${
              scrolled 
                ? 'border-[#b39364]/40 text-[#b39364] hover:bg-[#b39364]/10' 
                : 'border-white/20 text-white hover:bg-white/10'
            }`}
            title="WhatsApp Us"
          >
            <MessageSquare className="w-5 h-5" />
          </a>
          <a
            href={VENUE_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 font-bold px-6 py-3 rounded-xl shadow-md transition-all hover:scale-[1.03] active:scale-[0.98] ${
              scrolled
                ? 'bg-[#122c1d] hover:bg-[#1f422e] text-[#fdfbf7]'
                : 'bg-gradient-to-r from-[#b39364] to-[#c2a980] hover:from-[#c2a980] hover:to-[#b39364] text-[#122c1d]'
            }`}
          >
            <Calendar className={`w-4 h-4 ${scrolled ? 'text-[#b39364]' : 'text-[#122c1d]'}`} />
            <span>Book A Court</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg border transition-colors ${
            scrolled
              ? 'text-[#122c1d] hover:text-[#b39364] bg-[#e6dfd3]/35 border-[#e6dfd3]/50'
              : 'text-white hover:text-[#b39364] bg-white/5 border-white/10'
          }`}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fdfbf7] border-b border-[#b39364]/20 px-6 py-6 shadow-xl space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 font-medium text-base text-[#122c1d]">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#b39364] py-1 border-b border-[#122c1d]/5"
            >
              About
            </a>
            <a 
              href="#courts" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#b39364] py-1 border-b border-[#122c1d]/5"
            >
              Facilities & Gallery
            </a>
            <a 
              href="#rates" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#b39364] py-1 border-b border-[#122c1d]/5"
            >
              Rates & Promotions
            </a>
            <a 
              href="#open-play" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#b39364] py-1 border-b border-[#122c1d]/5"
            >
              Community Open Play
            </a>
            <a 
              href="#pro-shop" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#b39364] py-1 border-b border-[#122c1d]/5"
            >
              Pro Shop
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#b39364] py-1"
            >
              Location & Hours
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href={VENUE_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#122c1d] text-[#fdfbf7] font-bold py-3 rounded-xl shadow-md"
            >
              <Calendar className="w-5 h-5 text-[#b39364]" />
              <span>Book Court (Courtsite)</span>
            </a>
            <a
              href={VENUE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 text-center text-sm text-[#b39364] border border-[#b39364]/40 py-2.5 rounded-xl bg-[#b39364]/10"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
