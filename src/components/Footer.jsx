import React, { useState } from 'react';
import { VENUE_INFO } from '../data/mockData';
import { Instagram, MapPin, Phone, Mail, ArrowUp, Send, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [subscribed, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060e0a] border-t border-pickle-500/20 text-slate-400 text-sm relative pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pickle-400 to-pickle-600 flex items-center justify-center text-xl shadow-lg shadow-pickle-500/30">
                🥒
              </div>
              <span className="font-display font-black text-2xl tracking-tight text-white">
                PICKLE GARDEN
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Ponte Vedra Beach's premier pickleball facility at The Yards. 12 dedicated illuminated courts, daily open play, pro coaching, and vibrant social events.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={VENUE_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-pink-400 hover:text-white hover:bg-pink-600 hover:border-pink-500 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`tel:${VENUE_INFO.phone}`}
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-pickle-400 hover:text-white hover:bg-pickle-600 hover:border-pickle-500 transition-all"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${VENUE_INFO.email}`}
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 hover:text-white hover:bg-sky-600 hover:border-sky-500 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-display font-bold text-white text-sm uppercase tracking-wider">Explore</div>
            <ul className="space-y-2 text-xs">
              <li><a href="#courts" className="hover:text-pickle-400 transition-colors">12 Courts Map</a></li>
              <li><a href="#programs" className="hover:text-pickle-400 transition-colors">Open Drop-In Play</a></li>
              <li><a href="#programs" className="hover:text-pickle-400 transition-colors">Clinics & Bootcamps</a></li>
              <li><a href="#memberships" className="hover:text-pickle-400 transition-colors">Garden Club Plans</a></li>
              <li><a href="#coaches" className="hover:text-pickle-400 transition-colors">Private Coaching</a></li>
            </ul>
          </div>

          {/* Information (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-display font-bold text-white text-sm uppercase tracking-wider">Venue Specs</div>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-pickle-400" /> {VENUE_INFO.address}</li>
              <li className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-pickle-400" /> {VENUE_INFO.phone}</li>
              <li>Open 7 Days a Week: 8:00 AM - 10:00 PM</li>
              <li className="text-pickle-400 font-semibold">Pro Shop & Beer Garden On-Site</li>
            </ul>
          </div>

          {/* Newsletter Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-display font-bold text-white text-sm uppercase tracking-wider">Stay In The Loop</div>
            <p className="text-xs text-slate-400">Get early access to tournament signups and social night discounts.</p>
            
            {subscribed ? (
              <div className="p-3 bg-pickle-500/20 border border-pickle-500/40 rounded-xl text-xs text-pickle-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-pickle-400 shrink-0" />
                <span>Subscribed! Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-pickle-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-pickle-500 text-slate-950 font-bold px-3 py-2 rounded-xl text-xs hover:bg-pickle-400 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Pickle Garden at The Yards. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href={VENUE_INFO.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-colors">
              Instagram {VENUE_INFO.instagram}
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-pickle-400 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
