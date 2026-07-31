import React, { useState } from 'react';
import { COURTS_DATA } from '../data/mockData';
import { Zap, Shield, CheckCircle, Clock, Eye, Sparkles } from 'lucide-react';

export default function CourtStatusGrid({ onSelectCourt }) {
  const [selectedCourtId, setSelectedCourtId] = useState(1);
  const [isNightMode, setIsNightMode] = useState(true);

  const activeCourt = COURTS_DATA.find((c) => c.id === selectedCourtId) || COURTS_DATA[0];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Available':
        return <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs px-2.5 py-1 rounded-full font-semibold flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>Available</span>;
      case 'Open Play':
        return <span className="bg-sky-500/20 text-sky-300 border border-sky-500/40 text-xs px-2.5 py-1 rounded-full font-semibold flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-sky-400"></span>Open Play</span>;
      case 'Booked':
        return <span className="bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs px-2.5 py-1 rounded-full font-semibold">Booked</span>;
      case 'Clinic In Progress':
        return <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs px-2.5 py-1 rounded-full font-semibold">Clinic Live</span>;
      default:
        return null;
    }
  };

  return (
    <section id="courts" className="py-20 relative bg-[#09150f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-pickle-400 font-bold uppercase tracking-wider text-xs bg-pickle-500/10 px-3 py-1 rounded-full border border-pickle-500/20">
              <Zap className="w-3.5 h-3.5" /> Interactive Court Map
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
              12 DEDICATED STADIUM COURTS
            </h2>
            <p className="text-slate-400 max-w-xl text-sm sm:text-base">
              Pristine hard surfaces, permanent nets, regulation kitchen lines, and pro 500-lux LED lighting on every court.
            </p>
          </div>

          {/* Lighting Mode Switch & Stats */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsNightMode(!isNightMode)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isNightMode
                  ? 'bg-indigo-950/80 border-indigo-500/50 text-indigo-200 shadow-lg shadow-indigo-900/40'
                  : 'bg-amber-950/80 border-amber-500/50 text-amber-200'
              }`}
            >
              <Zap className={`w-4 h-4 ${isNightMode ? 'text-amber-400 animate-pulse' : 'text-slate-400'}`} />
              <span>{isNightMode ? 'Stadium LED Lights: ON' : 'Daylight Mode'}</span>
            </button>
          </div>
        </div>

        {/* Court Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Courts Visual Grid Map (8 Columns) */}
          <div className="lg:col-span-8 glass-panel p-6 rounded-3xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="font-display font-bold text-lg text-white flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-pickle-400" />
                Select Court to Inspect & Book
              </span>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Free</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-sky-400" /> Drop-In</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-rose-400" /> Reserved</span>
              </div>
            </div>

            {/* 12 Courts Grid Layout (2 Rows of 6 or 3 Rows of 4) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {COURTS_DATA.map((court) => {
                const isSelected = court.id === selectedCourtId;
                return (
                  <button
                    key={court.id}
                    onClick={() => setSelectedCourtId(court.id)}
                    className={`relative group p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-pickle-500/20 border-pickle-400 shadow-xl shadow-pickle-500/20 scale-[1.02]'
                        : 'bg-slate-900/60 border-slate-800 hover:border-pickle-500/40 hover:bg-slate-800/60'
                    }`}
                  >
                    {/* Court Visual Representation Box */}
                    <div className={`relative h-28 rounded-xl overflow-hidden mb-3 border flex flex-col justify-between p-2.5 ${
                      isNightMode ? 'bg-emerald-950/70 border-pickle-500/30' : 'bg-emerald-800/80 border-emerald-600'
                    }`}>
                      {/* Kitchen Line Visual Overlay */}
                      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-8 border-y-2 border-white/40 bg-blue-600/30 flex items-center justify-center">
                        <span className="text-[9px] font-bold tracking-widest text-white/70 uppercase">Kitchen</span>
                      </div>
                      
                      <div className="flex justify-between items-start relative z-10">
                        <span className="font-display font-black text-white text-base">C-{court.id}</span>
                        {isNightMode && <Zap className="w-3.5 h-3.5 text-amber-300" />}
                      </div>

                      <div className="relative z-10">
                        {getStatusBadge(court.status)}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="font-bold text-sm text-white">{court.name}</div>
                      <div className="text-xs text-slate-400 truncate">{court.type}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Court Inspector Sidebar (4 Columns) */}
          <div className="lg:col-span-4">
            <div className="glass-panel p-6 rounded-3xl space-y-6 border-2 border-pickle-500/30 sticky top-28">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-bold text-pickle-400 uppercase tracking-widest">Inspecting</span>
                  <h3 className="font-display font-black text-2xl text-white">{activeCourt.name}</h3>
                </div>
                {getStatusBadge(activeCourt.status)}
              </div>

              {/* Court Details */}
              <div className="space-y-4 text-sm">
                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Court Classification</span>
                    <span className="font-bold text-white">{activeCourt.type}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Playing Surface</span>
                    <span className="font-bold text-white">{activeCourt.surface}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Lighting Spec</span>
                    <span className="font-bold text-amber-300">{activeCourt.lighting}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Court Amenities</span>
                  <div className="flex flex-wrap gap-2">
                    {activeCourt.features.map((feat, idx) => (
                      <span key={idx} className="bg-pickle-500/10 border border-pickle-500/20 text-pickle-300 text-xs px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-pickle-400" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                <button
                  onClick={() => onSelectCourt(activeCourt.id)}
                  className="w-full py-3 px-4 bg-gradient-to-r from-pickle-400 to-pickle-500 hover:from-pickle-300 hover:to-pickle-400 text-slate-950 font-black rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-pickle-500/20 transition-all hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2"
                >
                  <Clock className="w-4 h-4" />
                  <span>Reserve {activeCourt.name} Now</span>
                </button>
                <div className="text-center text-xs text-slate-400">
                  Rate: <strong className="text-white">$40 / hour</strong> (Members save up to 50%)
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
