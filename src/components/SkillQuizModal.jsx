import React, { useState } from 'react';
import { X, HelpCircle, Trophy, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SkillQuizModal({ isOpen, onClose, onSelectProgram }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  if (!isOpen) return null;

  const questions = [
    {
      title: "How long have you been playing Pickleball?",
      options: [
        { label: "Just starting out / Never played before", score: 1 },
        { label: "6 months to 1 year of recreational play", score: 2 },
        { label: "2+ years, playing leagues or tournaments", score: 3 }
      ]
    },
    {
      title: "How consistent is your Third-Shot Drop & Kitchen Soft Game?",
      options: [
        { label: "What's a third-shot drop? I tend to slam or drive every ball!", score: 1 },
        { label: "I can drop soft into the kitchen about 50% of the time", score: 2 },
        { label: "Consistent reset drops under pressure & quick kitchen reflexes", score: 3 }
      ]
    },
    {
      title: "What is your main goal at Pickle Garden?",
      options: [
        { label: "Learn basic rules, scoring, and court positioning", score: 1 },
        { label: "Meet local players and enjoy open drop-in games", score: 2 },
        { label: "Dominate competitive tournaments & 4.0+ matches", score: 3 }
      ]
    }
  ];

  const handleSelectOption = (score) => {
    const nextAnswers = [...answers, score];
    setAnswers(nextAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      const totalScore = nextAnswers.reduce((a, b) => a + b, 0);
      let level = "Beginner (2.0 - 2.5)";
      let rec = "Pickleball 101: Fundamentals & Rules";
      let desc = "You're at the beginning of an exciting pickleball journey! We recommend our Pickleball 101 clinic with Coach Elena.";

      if (totalScore >= 5 && totalScore <= 7) {
        level = "Intermediate (3.0 - 3.5)";
        rec = "Daily Drop-In Open Play";
        desc = "You know your way around the kitchen! Join our daily open drop-in sessions to rotate against diverse playstyles.";
      } else if (totalScore >= 8) {
        level = "Advanced (4.0+)";
        rec = "Advanced Kitchen & Reset BootCamp";
        desc = "High-level player! Take your third-shot drops and fast hands to competitive tournament level with Coach Maria Nili.";
      }

      setResult({ level, rec, desc, totalScore });
    }
  };

  const handleReset = () => {
    setCurrentQ(0);
    setAnswers([]);
    setResult(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="relative max-w-lg w-full glass-panel rounded-3xl border border-pickle-500/40 p-6 sm:p-8 space-y-6">
        
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!result ? (
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-pickle-400 font-bold text-xs bg-pickle-500/10 px-3 py-1 rounded-full border border-pickle-500/20">
                <HelpCircle className="w-3.5 h-3.5" /> Step {currentQ + 1} of 3
              </div>
              <h3 className="font-display font-black text-2xl text-white">
                Find Your Pickleball Level
              </h3>
            </div>

            {/* Question Title */}
            <div className="space-y-4">
              <h4 className="font-bold text-slate-200 text-base">
                {questions[currentQ].title}
              </h4>

              <div className="space-y-3">
                {questions[currentQ].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt.score)}
                    className="w-full text-left p-4 rounded-2xl bg-slate-900/80 hover:bg-pickle-500 hover:text-slate-950 border border-slate-800 hover:border-pickle-400 font-medium text-sm transition-all duration-200 cursor-pointer flex items-center justify-between group"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Result Screen */
          <div className="space-y-6 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-pickle-500/20 text-pickle-400 border border-pickle-500/40 flex items-center justify-center mx-auto">
              <Trophy className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-pickle-400 uppercase tracking-widest">Assessed Rating</span>
              <h3 className="font-display font-black text-3xl text-white">{result.level}</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">{result.desc}</p>
            </div>

            <div className="bg-slate-900/90 p-4 rounded-2xl border border-pickle-500/30 text-left space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Recommended Program</span>
              <div className="font-bold text-pickle-300 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-pickle-400" />
                {result.rec}
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 bg-pickle-500 hover:bg-pickle-400 text-slate-950 font-black rounded-xl text-sm uppercase tracking-wider cursor-pointer"
            >
              Done & Explore Programs
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
