import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/mockData';
import { Check, ZoomIn } from 'lucide-react';

export default function CourtsAndFacilities() {
  const [activeImage, setActiveImage] = useState(null);

  const amenities = [
    { title: "3 Indoor Courts", desc: "Dedicated hard court surface with permanent lines & nets" },
    { title: "Fully Air-Conditioned", desc: "Keep cool and focused, regardless of outside weather" },
    { title: "Restrooms & Showers", desc: "Fresh up right after your intense sessions" },
    { title: "Dedicated Surau", desc: "Clean and cozy prayer room nestled inside the facility" },
    { title: "Food & Drinks Area", desc: "Beverages, snacks, and chilling lobby lounge corner" },
    { title: "On-site Pro Shop", desc: "Pickleball paddles, balls, grips, and apparel for sale" },
  ];

  return (
    <section id="courts" className="py-24 bg-[#fdfbf7] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#b39364]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* About / Brand Story Section */}
        <div id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-[#122c1d]/10">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b39364]">Our Story</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#122c1d] uppercase tracking-tight">
              PJ's Home For <br />
              Pickleball
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg text-[#4c5e52] leading-relaxed font-light">
              Pickle Garden is Petaling Jaya's home for pickleball — three dedicated indoor courts, a community that shows up every week, and everything you need to play without the fuss. Whether it's your first rally or your fiftieth match this month, you've got a court waiting.
            </p>
          </div>
        </div>

        {/* Facilities Amenities Grid - Converted to Light luxury outline cards */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b39364]">Premier Setup</span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#122c1d] uppercase">Facilities & Amenities</h3>
            <p className="text-sm text-[#4c5e52]">Every detail designed to give you a premium playing experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white/80 border border-[#122c1d]/10 hover:border-[#b39364]/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* High contrast check circle */}
                  <div className="w-8 h-8 rounded-lg bg-[#122c1d]/5 text-[#122c1d] flex items-center justify-center shrink-0 group-hover:bg-[#122c1d] group-hover:text-[#fdfbf7] transition-all duration-300">
                    <Check className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    {/* Dark forest green text for light cards */}
                    <h4 className="font-bold text-[#122c1d] text-base tracking-wide group-hover:text-[#b39364] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4c5e52] mt-1 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className="space-y-8 pt-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b39364]">Gallery</span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#122c1d] uppercase">Explore Pickle Garden</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveImage(img)}
                className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-md border border-[#b39364]/20 hover:border-[#b39364]/50 transition-all duration-300"
              >
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-85 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">{img.caption}</span>
                  <div className="w-8 h-8 rounded-lg bg-[#b39364]/20 text-[#e6dcc7] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl bg-slate-950 border border-[#b39364]/35 p-2" onClick={(e) => e.stopPropagation()}>
            <img 
              src={activeImage.url} 
              alt={activeImage.caption} 
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
            />
            <p className="text-center text-[#e6dcc7] text-sm py-2 font-medium">{activeImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
