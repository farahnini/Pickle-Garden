import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickInfoStrip from './components/QuickInfoStrip';
import CourtsAndFacilities from './components/CourtsAndFacilities';
import RatesAndPromotions from './components/RatesAndPromotions';
import CommunitySessions from './components/CommunitySessions';
import ProShop from './components/ProShop';
import Testimonials from './components/Testimonials';
import LocationContact from './components/LocationContact';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import { X } from 'lucide-react';

export default function App() {
  const [showPromo, setShowPromo] = useState(true);

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#122c1d] font-sans selection:bg-[#b39364] selection:text-white">
      {/* Dismissible Flash-Promo Banner at the top of page */}
      {showPromo && (
        <div className="bg-[#122c1d] text-[#e6dcc7] border-b border-[#b39364]/20 px-4 py-2.5 text-xs sm:text-sm font-medium flex items-center justify-between z-[60] relative transition-all duration-300">
          <div className="flex-1 text-center tracking-wide uppercase text-[11px] sm:text-xs">
            🏓 Off-peak weekday sessions — ask us about current rates before 5pm.
          </div>
          <button 
            onClick={() => setShowPromo(false)} 
            className="p-1 hover:bg-white/10 rounded transition-colors text-white"
            title="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Quick Info Strip */}
        <QuickInfoStrip />

        {/* About & Courts & Facilities */}
        <CourtsAndFacilities />

        {/* Rates & Promotions */}
        <RatesAndPromotions />

        {/* Community sessions */}
        <CommunitySessions />

        {/* Pro Shop */}
        <ProShop />

        {/* Testimonials */}
        <Testimonials />

        {/* Location & Contact */}
        <LocationContact />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
