import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, Menu, X, Instagram, MapPin, Phone, HelpCircle } from 'lucide-react';
import { VENUE_INFO } from '../data/mockData';

export default function Navbar({ onOpenBooking, onOpenSkillQuiz }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0b1a13]/90 backdrop-blur-md border-b border-pickle-500/20 py-3 shadow-2xl' 
        : 'bg-gradient-to-b from-[#0b1a13]/90 to-transparent py-5'
    }`}>
      {/* Top Banner Bar */}
      <div className="hidden lg:block border-b border-white/5 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-slate-300">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-pickle-400 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-pickle-400" />
              {VENUE_INFO.address}
            </span>
            <span className="flex items-center gap-1.5 hover:text-pickle-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-pickle-400" />
              {VENUE_INFO.phone}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={onOpenSkillQuiz}
              className="flex items-center gap-1 text-pickle-400 hover:text-pickle-300 font-medium transition-colors cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              Skill Level Assessment Quiz
            </button>
            <span className="text-slate-600">•</span>
            <a 
              href={VENUE_INFO.instagramUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1.5 text-slate-300 hover:text-pink-400 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-500" />
              <span>{VENUE_INFO.instagram}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pickle-400 to-pickle-600 flex items-center justify-center text-2xl shadow-lg shadow-pickle-500/30 group-hover:scale-105 transition-transform">
            🥒
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-pickle-400 transition-colors">
                PICKLE GARDEN
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-pickle-500/20 text-pickle-400 border border-pickle-500/30 uppercase tracking-widest">
                12 Courts
              </span>
            </div>
            <span className="text-[11px] font-medium tracking-widest uppercase text-slate-400 -mt-1">
              At The Yards • Ponte Vedra
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 font-medium text-sm text-slate-200">
          <a href="#courts" className="hover:text-pickle-400 transition-colors py-1">Courts</a>
          <a href="#programs" className="hover:text-pickle-400 transition-colors py-1">Open Play & Clinics</a>
          <a href="#memberships" className="hover:text-pickle-400 transition-colors py-1">Memberships</a>
          <a href="#coaches" className="hover:text-pickle-400 transition-colors py-1">Coaching</a>
          <a href="#instagram" className="hover:text-pickle-400 transition-colors py-1 flex items-center gap-1">
            <span>Social</span>
            <span className="w-2 h-2 rounded-full bg-pickle-400 animate-ping"></span>
          </a>
          <a href="#contact" className="hover:text-pickle-400 transition-colors py-1">Location</a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 bg-gradient-to-r from-pickle-400 to-pickle-500 hover:from-pickle-300 hover:to-pickle-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-pickle-500/25 transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book A Court</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-slate-800/50 border border-slate-700/50"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c1f15] border-b border-pickle-500/20 px-6 py-6 shadow-2xl space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 font-medium text-base text-slate-200">
            <a 
              href="#courts" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-pickle-400 py-1 border-b border-white/5"
            >
              12 Courts Status
            </a>
            <a 
              href="#programs" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-pickle-400 py-1 border-b border-white/5"
            >
              Open Play & Clinics
            </a>
            <a 
              href="#memberships" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-pickle-400 py-1 border-b border-white/5"
            >
              Membership Plans
            </a>
            <a 
              href="#coaches" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-pickle-400 py-1 border-b border-white/5"
            >
              Pro Coaches
            </a>
            <a 
              href="#instagram" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-pickle-400 py-1 border-b border-white/5 flex items-center justify-between"
            >
              <span>Instagram Feed ({VENUE_INFO.instagram})</span>
              <Instagram className="w-4 h-4 text-pink-400" />
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-pickle-400 py-1"
            >
              Hours & Map
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 bg-pickle-500 text-slate-950 font-bold py-3 rounded-xl shadow-lg shadow-pickle-500/20"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Court ($40/hr)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSkillQuiz();
              }}
              className="w-full text-center text-sm text-pickle-400 border border-pickle-500/30 py-2.5 rounded-xl bg-pickle-500/10"
            >
              Take Skill Level Quiz
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
