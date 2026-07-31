import React from 'react';
import { COMMUNITY_SESSIONS, VENUE_INFO } from '../data/mockData';
import { MessageSquare, Users } from 'lucide-react';

export default function CommunitySessions() {
  return (
    <section id="open-play" className="py-24 bg-[#fdfbf7] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#b39364]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b39364]">Join the Community</span>
          <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#122c1d] uppercase">Open Play & Social Sessions</h3>
          <p className="text-sm text-[#4c5e52]">No partner needed! Just show up, stack your paddle, and get playing with friendly local players.</p>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMMUNITY_SESSIONS.map((session, idx) => (
            <div 
              key={idx} 
              className="glass-panel p-8 border border-[#b39364]/20 hover:border-[#b39364]/50 flex flex-col justify-between group transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#b39364] tracking-widest uppercase">
                      {session.day}
                    </span>
                    <span className="text-xs text-white font-semibold bg-[#b39364]/20 border border-[#b39364]/30 px-2.5 py-0.5 rounded-full">
                      {session.time}
                    </span>
                  </div>
                  <h4 className="font-display font-extrabold text-xl text-white group-hover:text-[#b39364] transition-colors uppercase">
                    {session.title}
                  </h4>
                </div>

                {/* Skill Level Badges */}
                <div className="flex flex-wrap gap-2">
                  {session.levels.map((lvl, lIdx) => (
                    <span 
                      key={lIdx} 
                      className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-[#b39364]/20 border border-[#b39364]/30 text-[#b39364]"
                    >
                      {lvl}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-[#e6dcc7] leading-relaxed font-light">
                  {session.description}
                </p>
              </div>

              {/* RSVP CTA */}
              <div className="pt-6 border-t border-white/10 mt-6">
                <a
                  href={`${VENUE_INFO.whatsappUrl}&text=Hi%20Pickle%20Garden%2C%20I%27d%20like%20to%20RSVP%20for%20the%20${encodeURIComponent(session.title)}...`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#b39364] hover:bg-[#c2a980] text-[#122c1d] font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#122c1d]" />
                  <span>RSVP Via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Community Info Note */}
        <div className="glass-panel p-6 border border-[#b39364]/20 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-xl bg-[#b39364]/15 text-[#b39364] flex items-center justify-center shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h5 className="font-bold text-white text-base">New to Pickleball?</h5>
            <p className="text-xs sm:text-sm text-[#e6dcc7] mt-1 leading-relaxed font-light">
              Our community sessions are the perfect place to learn. Experienced players are always on site to help explain scoring, rules, and fundamental kitchen positioning.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
