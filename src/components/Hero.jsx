import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, Users, ArrowRight, Sun, Award, Zap, ShieldCheck } from 'lucide-react';
import { TIME_SLOTS, VENUE_INFO } from '../data/mockData';

export default function Hero({ onOpenBooking, onSelectSlot }) {
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[0]);
  const [players, setPlayers] = useState(4);

  const handleQuickBook = (e) => {
    e.preventDefault();
    onSelectSlot({ date: selectedDate, time: selectedTime, players });
    onOpenBooking();
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#0b1a13]">
      {/* Background Glows & Patterns */}
      <div className="absolute inset-0 pickle-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-pickle-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Visual Image Banner overlay */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1599586120429-48281b6f0eca?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-10">
        
        {/* Top Tag Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pickle-500/10 border border-pickle-500/30 text-pickle-300 text-xs sm:text-sm font-semibold tracking-wide animate-bounce-slow">
          <Sparkles className="w-4 h-4 text-pickle-400" />
          <span>PONTE VEDRA BEACH'S PREMIER PICKLEBALL DESTINATION</span>
        </div>

        {/* Hero Title */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl leading-[1.08] tracking-tight text-white">
            WHERE EVERY GAME <br className="hidden sm:block" />
            IS A <span className="text-gradient">MASTERPIECE</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            12 dedicated illuminated courts, daily open drop-in play, world-class coaching, and an electric social vibe at <strong className="text-pickle-400 font-semibold">The Yards</strong>.
          </p>
        </div>

        {/* Quick Court Reservation Card Widget */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl border border-pickle-500/25">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10 text-left">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-pickle-400 animate-ping" />
                <span className="font-display font-bold text-white text-base sm:text-lg">Reserve Court Online</span>
              </div>
              <span className="text-xs text-pickle-400 font-semibold bg-pickle-500/10 px-3 py-1 rounded-full border border-pickle-500/20">
                {VENUE_INFO.courtFee}
              </span>
            </div>

            <form onSubmit={handleQuickBook} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-left">
              {/* Date Input */}
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700/60 focus-within:border-pickle-400 transition-colors">
                <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-pickle-400" /> Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-transparent text-white text-sm font-medium focus:outline-none cursor-pointer"
                />
              </div>

              {/* Time Slot Select */}
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700/60 focus-within:border-pickle-400 transition-colors">
                <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-pickle-400" /> Time Slot
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full bg-slate-900 text-white text-sm font-medium focus:outline-none cursor-pointer"
                >
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot} className="bg-slate-900 text-white">
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              {/* Players Select */}
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700/60 focus-within:border-pickle-400 transition-colors">
                <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-pickle-400" /> Group Size
                </label>
                <select
                  value={players}
                  onChange={(e) => setPlayers(Number(e.target.value))}
                  className="w-full bg-slate-900 text-white text-sm font-medium focus:outline-none cursor-pointer"
                >
                  <option value={2}>2 Players (Singles)</option>
                  <option value={4}>4 Players (Doubles)</option>
                  <option value={6}>6 Players (Group)</option>
                  <option value={8}>8 Players (2 Courts)</option>
                </select>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full h-full min-h-[50px] bg-gradient-to-r from-pickle-400 via-pickle-500 to-lime-500 hover:from-pickle-300 hover:to-pickle-400 text-slate-950 font-black text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-pickle-500/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Find Court</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Highlight Quick Stats Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4">
          <div className="glass-panel p-4 rounded-2xl flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-pickle-500/20 text-pickle-400 flex items-center justify-center shrink-0">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-bold text-lg text-white">12 Courts</div>
              <div className="text-xs text-slate-400">Dedicated Outdoor Hard</div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-bold text-lg text-white">LED Stadium</div>
              <div className="text-xs text-slate-400">Night Play Ready</div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-bold text-lg text-white">$12 Drop-In</div>
              <div className="text-xs text-slate-400">Daily Open Play</div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-bold text-lg text-white">4.9 ★★★★★</div>
              <div className="text-xs text-slate-400">Ponte Vedra Community</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
