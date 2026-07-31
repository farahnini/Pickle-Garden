import React from 'react';
import { VENUE_INFO } from '../data/mockData';
import { MapPin, Phone, MessageSquare, Clock, Map, Instagram } from 'lucide-react';

export default function LocationContact() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Jalan+51A%2F225%2C+Seksyen+51A%2C+46100+Petaling+Jaya%2C+Selangor";
  const wazeUrl = "https://waze.com/ul?q=Jalan%2051A/225,%20Seksyen%2051A,%2046100%20Petaling%20Jaya,%20Selangor";

  return (
    <section id="contact" className="py-24 bg-[#fdfbf7] relative">
      {/* Structural lines */}
      <div className="absolute inset-0 border-x border-[#122c1d]/5 max-w-7xl mx-auto pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[#b39364] font-bold uppercase tracking-[0.25em] text-xs bg-[#b39364]/10 px-4 py-1.5 rounded-full border border-[#b39364]/25">
            VISIT & CONTACT
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#122c1d] uppercase tracking-tight">
            FIND PICKLE GARDEN
          </h2>
          <p className="text-[#4c5e52] text-sm sm:text-base font-light">
            Located in Seksyen 51A, Petaling Jaya. Drop in, book a slot, or message us!
          </p>
        </div>

        {/* Map, Hours & WhatsApp Support Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Location Info & Map Frame (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between border border-[#b39364]/25 shadow-xl">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wide border-b border-white/10 pb-3">Location & Map</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                {/* Premium Address Card */}
                <div className="bg-slate-950/45 p-5 rounded-2xl border border-[#b39364]/20 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-[#b39364] text-xs tracking-wider uppercase">
                    <MapPin className="w-4 h-4" /> Address
                  </div>
                  <p className="text-[#e6dcc7] text-xs leading-relaxed font-light">{VENUE_INFO.address}</p>
                  <div className="flex gap-2 pt-1">
                    <a 
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-white/5 hover:bg-[#b39364] hover:text-[#122c1d] text-white px-3 py-1.5 rounded-lg border border-[#b39364]/30 transition-all"
                    >
                      <Map className="w-3 h-3" /> Google Maps
                    </a>
                    <a 
                      href={wazeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-white/5 hover:bg-[#b39364] hover:text-[#122c1d] text-white px-3 py-1.5 rounded-lg border border-[#b39364]/30 transition-all"
                    >
                      🚗 Waze Navigation
                    </a>
                  </div>
                </div>

                {/* Premium Hours Card */}
                <div className="bg-slate-950/45 p-5 rounded-2xl border border-[#b39364]/20 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-[#b39364] text-xs tracking-wider uppercase">
                    <Clock className="w-4 h-4" /> Opening Hours
                  </div>
                  <div className="text-xs text-white space-y-1.5">
                    {VENUE_INFO.hours.map((h, idx) => (
                      <div key={idx} className="flex justify-between border-b border-[#b39364]/10 pb-1 font-light">
                        <span className="font-semibold text-[#c2a980]">{h.day}</span>
                        <span>{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map Frame with border frame */}
            <div className="h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#b39364]/30 relative shadow-inner">
              <iframe
                title="Pickle Garden Map"
                src="https://maps.google.com/maps?q=Jalan%2051A/225,%20Seksyen%2051A,%2046100%20Petaling%20Jaya,%20Selangor,%20Malaysia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-90 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>

          {/* Direct Support & Social Info (5 cols) */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl flex flex-col justify-between border border-[#b39364]/25 shadow-xl text-center sm:text-left space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#b39364] tracking-[0.25em] uppercase">Immediate Support</span>
              <h3 className="font-display font-extrabold text-3xl text-white uppercase tracking-wide">Connect With Us</h3>
              <p className="text-[#e6dcc7] text-sm leading-relaxed font-light">
                We handle all bookings, inquiries, and customer requests directly via WhatsApp or Instagram for instant support.
              </p>
            </div>

            <div className="space-y-5">
              {/* WhatsApp Premium Callout Card */}
              <div className="bg-slate-950/45 border border-[#b39364]/20 p-6 rounded-2xl text-left space-y-4 hover:border-[#b39364]/40 transition-all duration-300 group">
                <div className="flex items-center gap-2.5 text-[#b39364] font-bold text-base">
                  <MessageSquare className="w-5 h-5 text-[#b39364]" /> 
                  <span>WhatsApp Inquiry</span>
                </div>
                <p className="text-xs sm:text-sm text-[#e6dcc7] leading-relaxed font-light">
                  Ask about booking slots, corporate event packages, current promotions, paddle testing, or equipment.
                </p>
                <a
                  href={VENUE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#b39364] via-[#c2a980] to-[#d4c2a3] hover:from-[#c2a980] hover:to-[#b39364] text-[#122c1d] font-black py-4 rounded-xl text-xs uppercase tracking-widest transition-all shadow-md hover:scale-[1.01]"
                >
                  <Phone className="w-4 h-4 text-[#122c1d]" />
                  <span>Chat +60 12-802 7222</span>
                </a>
              </div>

              {/* Instagram Card */}
              <div className="bg-slate-950/45 border border-[#b39364]/20 p-6 rounded-2xl text-left space-y-4 hover:border-pink-500/30 transition-all duration-300">
                <div className="flex items-center gap-2.5 text-pink-500 font-bold text-base">
                  <Instagram className="w-5 h-5" /> 
                  <span>Instagram Community</span>
                </div>
                <p className="text-xs sm:text-sm text-[#e6dcc7] leading-relaxed font-light">
                  Follow us for highlights, community events, tournament announcements, and player stories.
                </p>
                <a
                  href={VENUE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#b39364] via-[#c2a980] to-[#d4c2a3] hover:from-[#c2a980] hover:to-[#b39364] text-[#122c1d] font-black py-4 rounded-xl text-xs uppercase tracking-widest transition-all shadow-md hover:scale-[1.01]"
                >
                  <Instagram className="w-4 h-4 text-[#122c1d]" />
                  <span>Follow @picklegarden_</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
