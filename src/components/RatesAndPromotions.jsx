import React from 'react';
import { VENUE_INFO, PROMOTIONS } from '../data/mockData';
import { Calendar, ArrowRight, BookOpen, Clock, Play } from 'lucide-react';

export default function RatesAndPromotions() {
  const steps = [
    {
      num: "01",
      title: "Tap Book Now",
      desc: "Click book court to open our official Courtsite booking platform.",
      icon: BookOpen
    },
    {
      num: "02",
      title: "Choose Your Slot",
      desc: "Select your preferred date, time slot, and court on the schedule grid.",
      icon: Clock
    },
    {
      num: "03",
      title: "Show Up & Play",
      desc: "Arrive at Seksyen 51A PJ, scan your booking, and start dinking!",
      icon: Play
    }
  ];

  return (
    <section id="rates" className="py-24 bg-[#f4efe6] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#b39364]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
        
        {/* Rates & Pay-to-Play Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b39364]">Simple Rates</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#122c1d] uppercase tracking-tight">
              Pay-To-Play <br />
              <span className="text-gradient">No Membership Needed</span>
            </h2>
            <p className="text-[#4c5e52] leading-relaxed font-light text-base sm:text-lg">
              We keep it completely hassle-free. No sign-up fees, monthly dues, or complex subscriptions. Just book a court slot when you want to play, invite your friends, and hit the court.
            </p>

            <div className="pt-2 space-y-4">
              <a
                href={VENUE_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#122c1d] hover:bg-[#1f422e] text-[#fdfbf7] font-bold px-6 py-3.5 rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-5 h-5 text-[#b39364]" />
                <span>Check Rates & Book On Courtsite</span>
              </a>
              <p className="text-sm text-[#4c5e52] flex items-center gap-1.5">
                <span>Group bookings or special events?</span>
                <a 
                  href={VENUE_INFO.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#b39364] hover:text-[#9c7a50] font-semibold underline underline-offset-4"
                >
                  WhatsApp us
                </a>
              </p>
            </div>
          </div>

          {/* How Booking Works (Keep as elegant dark card for layout contrast) */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 border border-[#b39364]/20 space-y-6">
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider border-b border-white/10 pb-3">
              How Booking Works
            </h3>
            
            <div className="space-y-6">
              {steps.map((step, idx) => {
                return (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-[#b39364]/20 text-[#b39364] border border-[#b39364]/35 flex items-center justify-center font-display font-black text-lg group-hover:bg-[#fdfbf7] group-hover:text-[#122c1d] transition-all shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base tracking-wide flex items-center gap-2">
                        {step.title}
                        {idx < 2 && <ArrowRight className="w-3.5 h-3.5 text-[#e6dcc7] hidden sm:inline" />}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#e6dcc7] mt-1 leading-relaxed font-light">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Promotions Grid - Converted to Light luxury cards with gold outlines */}
        <div className="space-y-8 pt-8 border-t border-[#122c1d]/10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b39364]">Special Deals</span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#122c1d] uppercase">Active Promotions</h3>
            <p className="text-sm text-[#4c5e52]">Save more on your pickleball sessions with these exclusive offers</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROMOTIONS.map((promo) => (
              <div 
                key={promo.id} 
                className="bg-[#fdfbf7] border border-[#b39364]/30 hover:border-[#122c1d]/40 rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="space-y-3">
                  <span className="inline-block text-[10px] font-bold tracking-widest bg-[#b39364]/10 border border-[#b39364]/20 text-[#8c7046] px-2.5 py-0.5 rounded-md uppercase">
                    {promo.tag}
                  </span>
                  <h4 className="font-bold text-[#122c1d] text-lg group-hover:text-[#b39364] transition-colors">
                    {promo.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4c5e52] leading-relaxed font-light">
                    {promo.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#122c1d]/10 mt-4">
                  <a
                    href={promo.id === 'off-peak' ? VENUE_INFO.bookingUrl : VENUE_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-[#122c1d] hover:bg-[#b39364] text-white hover:text-[#122c1d] font-bold py-2.5 rounded-xl text-xs tracking-wider uppercase transition-all"
                  >
                    <span>{promo.id === 'off-peak' ? "Book Slot" : "Inquire Now"}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
