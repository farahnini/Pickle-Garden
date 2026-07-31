import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, ShieldCheck } from 'lucide-react';

export default function MembershipModal({ isOpen, onClose, selectedPlan }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'Intermediate (3.0)'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="relative max-w-lg w-full glass-panel rounded-3xl border border-pickle-500/40 p-6 sm:p-8 space-y-6">
        
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-pickle-400 font-bold text-xs bg-pickle-500/10 px-3 py-1 rounded-full border border-pickle-500/20">
                <Sparkles className="w-3.5 h-3.5" /> Garden Club Pass
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                Join {selectedPlan?.name || 'Pickle Garden'}
              </h3>
              <p className="text-xs text-slate-300">
                Rate: <strong className="text-pickle-400">{selectedPlan?.price} / {selectedPlan?.period}</strong>. Priority court booking & free drop-ins.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Taylor Swift"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:border-pickle-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="taylor@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:border-pickle-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="(904) 555-0199"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:border-pickle-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Skill Level</label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:border-pickle-400 focus:outline-none"
                >
                  <option value="Beginner (1.0 - 2.5)">Beginner (1.0 - 2.5)</option>
                  <option value="Intermediate (3.0 - 3.5)">Intermediate (3.0 - 3.5)</option>
                  <option value="Advanced (4.0+)">Advanced (4.0+)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-pickle-400 to-pickle-500 hover:from-pickle-300 hover:to-pickle-400 text-slate-950 font-black rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-pickle-500/20 transition-all hover:scale-[1.02] cursor-pointer"
            >
              Activate Membership
            </button>
          </form>
        ) : (
          <div className="space-y-6 text-center animate-in zoom-in-95 duration-200">
            <CheckCircle className="w-16 h-16 text-pickle-400 mx-auto" />
            <div className="space-y-2">
              <h3 className="font-display font-black text-2xl text-white">WELCOME TO THE CLUB!</h3>
              <p className="text-xs text-slate-300">
                Your membership activation email has been sent to <strong className="text-pickle-400">{formData.email}</strong>. Welcome to Pickle Garden!
              </p>
            </div>
            <button
              onClick={handleClose}
              className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-sm cursor-pointer"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
