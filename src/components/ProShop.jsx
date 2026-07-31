import React from 'react';
import { VENUE_INFO } from '../data/mockData';
import { MessageSquare, ShoppingBag } from 'lucide-react';

export default function ProShop() {
  const products = [
    {
      category: "Paddles",
      items: "Premium Performance Paddles",
      brands: "Selkirk, JOOLA, Paddletek & more",
      description: "Find the perfect weight, grip, and core material to match your play style.",
      icon: "🏓"
    },
    {
      category: "Balls",
      items: "Indoor & Outdoor Tournament Balls",
      brands: "Franklin X-40, JOOLA Prime & USAPA approved",
      description: "Durable, high-visibility, and consistent bounce options always in stock.",
      icon: "🟡"
    },
    {
      category: "Grips & Accessories",
      items: "Overgrips, Lead Tape & Edge Guards",
      brands: "Wilson, Selkirk, Tourna Grip",
      description: "Keep your paddle in peak condition and custom-tuned to your grip needs.",
      icon: "🏸"
    },
    {
      category: "Apparel",
      items: "Pickle Garden Branded Tees & Socks",
      brands: "Exclusive Club Merch",
      description: "Designed for premium court performance and off-court comfort.",
      icon: "👕"
    }
  ];

  return (
    <section id="pro-shop" className="py-24 bg-[#f4efe6] relative overflow-hidden">
      <div className="absolute top-1/4 left-10 w-92 h-92 bg-[#b39364]/5 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b39364]">On-Site Retail</span>
          <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#122c1d] uppercase">The Pro Shop</h3>
          <p className="text-sm text-[#4c5e52]">Gear up with the best pickleball equipment and exclusive Pickle Garden apparel.</p>
        </div>

        {/* Product Grid - Converted to clean, light luxury retail cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((prod, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-[#122c1d]/10 hover:border-[#b39364] rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="text-4xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {prod.icon}
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#b39364]">
                    {prod.category}
                  </span>
                  <h4 className="font-bold text-[#122c1d] text-lg group-hover:text-[#b39364] transition-colors">
                    {prod.items}
                  </h4>
                  <p className="text-xs text-[#8c7046] font-semibold">
                    {prod.brands}
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-[#4c5e52] leading-relaxed font-light">
                  {prod.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#122c1d]/5 mt-4">
                <a
                  href={`${VENUE_INFO.whatsappUrl}&text=Hi%20Pickle%20Garden%2C%20I%27d%20like%20to%20inquire%20about%20your%20Pro%20Shop%20items%20(${prod.category})...`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#122c1d]/5 hover:bg-[#122c1d] text-[#122c1d] hover:text-white font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer border border-[#122c1d]/10"
                >
                  <MessageSquare className="w-4 h-4 text-[#b39364] group-hover:text-white" />
                  <span>Reserve via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Support Note - Converted to Light luxury card */}
        <div className="bg-white border border-[#122c1d]/10 rounded-2xl p-6 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-[#122c1d]/5 text-[#122c1d] flex items-center justify-center shrink-0">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <div>
            <h5 className="font-bold text-[#122c1d] text-base">Paddle Demo Testing Available</h5>
            <p className="text-xs sm:text-sm text-[#4c5e52] mt-1 leading-relaxed font-light">
              Not sure which paddle is right for you? Ask our court captains about trying out demo paddles before making your purchase. Contact us on WhatsApp to check model availability.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
