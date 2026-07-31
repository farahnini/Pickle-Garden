import React, { useState } from 'react';
import { VENUE_INFO } from '../data/mockData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShoppingBag, Coffee, Wifi, Shield } from 'lucide-react';

export default function LocationContact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Court Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#09150f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-pickle-400 font-bold uppercase tracking-wider text-xs bg-pickle-500/10 px-3 py-1 rounded-full border border-pickle-500/20">
            VISIT & CONTACT
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
            FIND US AT THE YARDS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Located in beautiful Ponte Vedra Beach, FL. Drop in or send us a message anytime!
          </p>
        </div>

        {/* Venue Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-panel p-5 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pickle-500/20 text-pickle-400 flex items-center justify-center shrink-0">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">On-Site Pro Shop</div>
              <div className="text-xs text-slate-400">Paddles, Gear & Apparel</div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Café & Social Bar</div>
              <div className="text-xs text-slate-400">Drinks, Craft Beer & Snacks</div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
              <Wifi className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Free Player Wi-Fi</div>
              <div className="text-xs text-slate-400">High Speed Across Courts</div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Restrooms & Showers</div>
              <div className="text-xs text-slate-400">Climate Controlled</div>
            </div>
          </div>
        </div>

        {/* Map & Form Two-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Location Info & Map Frame (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-2xl text-white">Venue Location</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-pickle-400">
                    <MapPin className="w-4 h-4" /> Address
                  </div>
                  <p className="text-slate-300 text-xs">{VENUE_INFO.address}</p>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-pickle-400">
                    <Clock className="w-4 h-4" /> Hours of Operation
                  </div>
                  <p className="text-slate-300 text-xs">{VENUE_INFO.hours}</p>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-pickle-400">
                    <Phone className="w-4 h-4" /> Phone Numbers
                  </div>
                  <p className="text-slate-300 text-xs">{VENUE_INFO.phone} / {VENUE_INFO.secondaryPhone}</p>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-pickle-400">
                    <Mail className="w-4 h-4" /> Direct Email
                  </div>
                  <p className="text-slate-300 text-xs">{VENUE_INFO.email}</p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map Frame */}
            <div className="h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10 relative shadow-inner">
              <iframe
                title="Pickle Garden Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.327664835694!2d-81.38521582352843!3d30.18485297485292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e438e83344b58b%3A0x7d0139b8bd2a433a!2s254%20Alta%20Mar%20Dr%2C%20Ponte%20Vedra%20Beach%2C%20FL%2032082!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Contact Form (5 cols) */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
            <div className="space-y-1">
              <h3 className="font-display font-bold text-2xl text-white">Send A Message</h3>
              <p className="text-slate-400 text-xs">Inquire about events, clinic availability, or membership questions.</p>
            </div>

            {submitted ? (
              <div className="bg-pickle-500/20 border border-pickle-500/40 p-6 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-pickle-400 mx-auto" />
                <div className="font-display font-bold text-xl text-white">Message Sent!</div>
                <p className="text-slate-300 text-xs">
                  Thank you! Our Pickle Garden team will reply within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-pickle-400 underline font-semibold cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:border-pickle-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:border-pickle-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:border-pickle-400 focus:outline-none"
                  >
                    <option value="Court Inquiry">Court Reservation Question</option>
                    <option value="Private Coaching">Private Coaching Inquiry</option>
                    <option value="Membership">Garden Club Membership</option>
                    <option value="Corporate Event">Corporate / Private Event Buyout</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:border-pickle-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-pickle-400 to-pickle-500 hover:from-pickle-300 hover:to-pickle-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-pickle-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
