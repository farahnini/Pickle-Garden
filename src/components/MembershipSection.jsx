import React, { useState } from 'react';
import { MEMBERSHIPS } from '../data/mockData';
import { Check, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export default function MembershipSection({ onOpenMembershipModal }) {
  const [annualBilling, setAnnualBilling] = useState(false);

  return (
    <section id="memberships" className="py-20 bg-[#09150f] relative overflow-hidden">
      {/* Accent Background Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-pickle-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-pickle-400 font-bold uppercase tracking-wider text-xs bg-pickle-500/10 px-3.5 py-1.5 rounded-full border border-pickle-500/20">
            Membership Perks
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
            JOIN THE GARDEN CLUB
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Unlock priority advance court booking, court discount rates, free drop-in access, and exclusive member-only social tournaments.
          </p>

          {/* Billing Switch */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-sm font-semibold ${!annualBilling ? 'text-white' : 'text-slate-400'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setAnnualBilling(!annualBilling)}
              className="w-14 h-8 rounded-full bg-slate-800 border border-slate-700 p-1 transition-colors relative cursor-pointer"
            >
              <div
                className={`w-6 h-6 rounded-full bg-pickle-400 transition-transform ${
                  annualBilling ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-semibold flex items-center gap-1.5 ${annualBilling ? 'text-white' : 'text-slate-400'}`}>
              <span>Annual Billing</span>
              <span className="text-[10px] bg-amber-400/20 text-amber-300 font-bold px-2 py-0.5 rounded-full border border-amber-400/30">
                SAVE 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIPS.map((plan) => {
            const rawPrice = parseInt(plan.price.replace('$', '')) || 0;
            const finalPrice = annualBilling && rawPrice > 0 ? Math.round(rawPrice * 0.8) : rawPrice;

            return (
              <div
                key={plan.id}
                className={`glass-panel rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  plan.popular
                    ? 'border-2 border-pickle-400 shadow-2xl shadow-pickle-500/20 bg-[#122b1f] scale-[1.03] z-10'
                    : 'hover:border-pickle-500/40'
                }`}
              >
                {/* Popular Ribbon Tag */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pickle-400 to-lime-400 text-slate-950 font-black text-xs uppercase tracking-widest px-4 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Card Header */}
                  <div>
                    <h3 className="font-display font-black text-2xl text-white">{plan.name}</h3>
                    <p className="text-slate-400 text-xs mt-1 min-h-[32px]">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 pb-6 border-b border-white/10">
                    <span className="font-display font-black text-4xl sm:text-5xl text-white">
                      ${finalPrice}
                    </span>
                    <span className="text-slate-400 text-sm font-medium">/{plan.period}</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">What's Included:</span>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-pickle-500/20 text-pickle-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Call To Action */}
                <div className="pt-8">
                  <button
                    onClick={() => onOpenMembershipModal(plan)}
                    className={`w-full py-3.5 px-4 font-black rounded-xl text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-lg ${
                      plan.popular
                        ? 'bg-gradient-to-r from-pickle-400 to-pickle-500 hover:from-pickle-300 hover:to-pickle-400 text-slate-950 shadow-pickle-500/30 hover:scale-[1.02]'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
