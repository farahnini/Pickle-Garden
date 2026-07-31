import React, { useState } from 'react';
import { PROGRAMS } from '../data/mockData';
import { Calendar, Users, Star, ArrowRight, Filter, Clock, CheckCircle } from 'lucide-react';

export default function ProgramsSection({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Recreational', 'Clinics', 'Social'];

  const filteredPrograms = activeCategory === 'All'
    ? PROGRAMS
    : PROGRAMS.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" className="py-20 bg-[#0b1a13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-pickle-400 font-bold uppercase tracking-wider text-xs bg-pickle-500/10 px-3 py-1 rounded-full border border-pickle-500/20">
              Programs & Events
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
              PLAY, LEARN & CONNECT
            </h2>
            <p className="text-slate-400 max-w-xl text-sm sm:text-base">
              From daily open drop-in play to beginner clinics and Friday Night social events, there's always a match waiting for you.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-pickle-500 text-slate-950 shadow-md shadow-pickle-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="glass-panel rounded-3xl overflow-hidden flex flex-col justify-between glass-panel-hover group"
            >
              {/* Program Image Header */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a13] via-transparent to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-pickle-500 text-slate-950 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    {prog.tag}
                  </span>
                  <span className="bg-slate-950/80 backdrop-blur-md text-white border border-white/10 font-semibold text-xs px-3 py-1 rounded-full">
                    {prog.skillLevel}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 bg-slate-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-pickle-500/30 text-pickle-400 font-extrabold text-sm sm:text-base">
                  {prog.price}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-2xl text-white group-hover:text-pickle-400 transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {prog.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Clock className="w-4 h-4 text-pickle-400" />
                    <span className="font-medium text-slate-200">{prog.schedule}</span>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3 px-4 bg-slate-800 hover:bg-pickle-500 hover:text-slate-950 text-white font-bold rounded-xl text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-slate-700 hover:border-pickle-400"
                  >
                    <span>Reserve Spot / Register</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
