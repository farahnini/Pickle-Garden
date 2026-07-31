import React, { useState } from 'react';
import { COURTS_DATA, TIME_SLOTS, VENUE_INFO } from '../data/mockData';
import { X, Calendar, Clock, CheckCircle, ShieldCheck, Sparkles, User, ShoppingBag } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialData = {} }) {
  const [step, setStep] = useState(1);
  const [courtId, setCourtId] = useState(initialData.courtId || 1);
  const [date, setDate] = useState(initialData.date || new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState(initialData.time || TIME_SLOTS[0]);
  const [players, setPlayers] = useState(initialData.players || 4);
  const [includePaddleRental, setIncludePaddleRental] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [playerEmail, setPlayerEmail] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  if (!isOpen) return null;

  const activeCourt = COURTS_DATA.find((c) => c.id === Number(courtId)) || COURTS_DATA[0];
  const courtPrice = 40;
  const paddlePrice = includePaddleRental ? 10 : 0;
  const totalPrice = courtPrice + paddlePrice;

  const handleConfirm = (e) => {
    e.preventDefault();
    const booking = {
      id: 'PG-' + Math.floor(100000 + Math.random() * 900000),
      courtName: activeCourt.name,
      date,
      time,
      players,
      playerName: playerName || 'Guest Player',
      playerEmail,
      paddleRental: includePaddleRental,
      totalPrice
    };
    setConfirmedBooking(booking);
    setStep(2);
  };

  const handleReset = () => {
    setStep(1);
    setConfirmedBooking(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="relative max-w-2xl w-full glass-panel rounded-3xl border border-pickle-500/40 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <form onSubmit={handleConfirm} className="space-y-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-pickle-400 font-bold text-xs bg-pickle-500/10 px-3 py-1 rounded-full border border-pickle-500/20">
                <Sparkles className="w-3.5 h-3.5" /> Instant Court Reservation
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">Book Court at Pickle Garden</h3>
              <p className="text-xs sm:text-sm text-slate-400">Select your preferred court, date, time slot, and rental extras.</p>
            </div>

            {/* Selection Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {/* Court Picker */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Select Court (1 - 12)</label>
                <select
                  value={courtId}
                  onChange={(e) => setCourtId(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white font-medium focus:border-pickle-400 focus:outline-none"
                >
                  {COURTS_DATA.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.type})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date Picker */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Date</label>
                <input
                  type="date"
                  value={date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white font-medium focus:border-pickle-400 focus:outline-none"
                />
              </div>

              {/* Time Picker */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Time Slot</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white font-medium focus:border-pickle-400 focus:outline-none"
                >
                  {TIME_SLOTS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Player Count */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Number of Players</label>
                <select
                  value={players}
                  onChange={(e) => setPlayers(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white font-medium focus:border-pickle-400 focus:outline-none"
                >
                  <option value={2}>2 Players (Singles)</option>
                  <option value={4}>4 Players (Doubles)</option>
                  <option value={6}>6 Players</option>
                  <option value={8}>8 Players</option>
                </select>
              </div>
            </div>

            {/* Addon Checkbox */}
            <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-pickle-500/20 text-pickle-400 flex items-center justify-center shrink-0">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Add Pro Demo Paddle Rentals?</div>
                  <div className="text-xs text-slate-400">Selkirk & JOOLA high-performance paddles + balls</div>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={includePaddleRental}
                  onChange={(e) => setIncludePaddleRental(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pickle-500"></div>
              </label>
            </div>

            {/* Guest Player Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:border-pickle-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Email for Booking Pass</label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={playerEmail}
                  onChange={(e) => setPlayerEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:border-pickle-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Price Summary & Submit */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs text-slate-400">Total Due At Venue</div>
                <div className="font-display font-black text-3xl text-pickle-400">${totalPrice}</div>
              </div>

              <button
                type="submit"
                className="py-3.5 px-8 bg-gradient-to-r from-pickle-400 to-pickle-500 hover:from-pickle-300 hover:to-pickle-400 text-slate-950 font-black rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-pickle-500/25 cursor-pointer transition-all hover:scale-105"
              >
                Confirm Reservation
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Pass Screen */
          <div className="space-y-6 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-pickle-500/20 text-pickle-400 border border-pickle-500/40 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-black text-3xl text-white">RESERVATION CONFIRMED!</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Your digital court pass has been issued and sent to <strong className="text-pickle-400">{confirmedBooking?.playerEmail}</strong>.
              </p>
            </div>

            {/* Digital Pass Card */}
            <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 p-6 rounded-3xl border border-pickle-500/40 text-left space-y-4 shadow-2xl relative overflow-hidden">
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🥒</span>
                  <span className="font-display font-extrabold text-white text-base">PICKLE GARDEN COURT PASS</span>
                </div>
                <span className="text-xs font-mono bg-pickle-500/20 text-pickle-300 px-2.5 py-1 rounded-lg border border-pickle-500/30">
                  #{confirmedBooking?.id}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400">Reserved Court</span>
                  <div className="font-bold text-white text-base">{confirmedBooking?.courtName}</div>
                </div>

                <div>
                  <span className="text-slate-400">Date & Time</span>
                  <div className="font-bold text-pickle-400 text-sm">{confirmedBooking?.date} @ {confirmedBooking?.time}</div>
                </div>

                <div>
                  <span className="text-slate-400">Player Name</span>
                  <div className="font-semibold text-white">{confirmedBooking?.playerName}</div>
                </div>

                <div>
                  <span className="text-slate-400">Group Size</span>
                  <div className="font-semibold text-white">{confirmedBooking?.players} Players</div>
                </div>
              </div>

              {confirmedBooking?.paddleRental && (
                <div className="bg-pickle-500/10 p-2.5 rounded-xl text-xs text-pickle-300 border border-pickle-500/20 font-medium">
                  ✓ Demo Paddles & Balls Reserved at Pro Shop
                </div>
              )}
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-sm transition-colors cursor-pointer"
            >
              Done & Return To Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
