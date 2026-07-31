import React from 'react';
import { COACHES } from '../data/mockData';
import { Award, Calendar, CheckCircle2, MessageSquare } from 'lucide-react';

export default function CoachesSection({ onOpenBooking }) {
  return (
    <section id="coaches" className="py-20 bg-[#0b1a13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-pickle-400 font-bold uppercase tracking-wider text-xs bg-pickle-500/10 px-3 py-1 rounded-full border border-pickle-500/20">
            PRO INSTRUCTION
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
            MEET OUR CERTIFIED PROS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Take your kitchen game, third-shot drop, and match strategy to tournament level with customized 1-on-1 private coaching.
          </p>
        </div>

        {/* Coaches Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COACHES.map((coach, index) => (
            <div
              key={index}
              className="glass-panel rounded-3xl overflow-hidden glass-panel-hover group flex flex-col justify-between"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a13] via-[#0b1a13]/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <span className="bg-pickle-500/20 text-pickle-300 font-semibold text-xs px-2.5 py-1 rounded-md border border-pickle-500/30">
                    {coach.credentials}
                  </span>
                  <h3 className="font-display font-black text-2xl text-white pt-1">{coach.name}</h3>
                  <div className="text-xs font-semibold text-pickle-400">{coach.role}</div>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {coach.bio}
                </p>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 px-4 bg-slate-900 hover:bg-pickle-500 hover:text-slate-950 text-pickle-400 font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 border border-pickle-500/30 hover:border-pickle-400 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Private Lesson</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
