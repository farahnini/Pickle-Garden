import React, { useState } from 'react';
import { INSTAGRAM_POSTS, VENUE_INFO } from '../data/mockData';
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles, X } from 'lucide-react';

export default function InstagramFeed() {
  const [activePost, setActivePost] = useState(null);

  return (
    <section id="instagram" className="py-20 bg-[#09150f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-pink-400 font-bold uppercase tracking-wider text-xs bg-pink-500/10 px-3.5 py-1 rounded-full border border-pink-500/20">
              <Instagram className="w-3.5 h-3.5 text-pink-400" /> Instagram Gallery
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
              FOLLOW <span className="text-pink-400">@PICKLEGARDEN_</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-sm sm:text-base">
              Catch daily court action, tournament highlights, clinic schedules, and community vibes live from Ponte Vedra Beach.
            </p>
          </div>

          <a
            href={VENUE_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white font-bold text-sm shadow-xl shadow-pink-500/20 hover:scale-105 transition-all cursor-pointer self-start md:self-auto"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow On Instagram</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setActivePost(post)}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-white/10"
            >
              <img
                src={post.imageUrl}
                alt="Instagram post"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center space-y-2">
                <div className="flex items-center gap-4 text-white text-xs font-bold">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 text-sky-400" />
                    {post.comments}
                  </span>
                </div>
                <p className="text-[10px] text-slate-300 line-clamp-2">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="relative max-w-xl w-full glass-panel rounded-3xl overflow-hidden border border-pink-500/30 p-6 space-y-4">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-lg">
                  🥒
                </div>
              </div>
              <div>
                <div className="font-bold text-white text-sm">picklegarden_</div>
                <div className="text-xs text-slate-400">Ponte Vedra Beach, FL</div>
              </div>
            </div>

            <div className="aspect-square rounded-2xl overflow-hidden">
              <img src={activePost.imageUrl} alt="Instagram Post Detail" className="w-full h-full object-cover" />
            </div>

            <p className="text-sm text-slate-200 leading-relaxed">{activePost.caption}</p>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs text-slate-400">
              <div className="flex gap-4">
                <span className="flex items-center gap-1 text-rose-400 font-semibold">
                  <Heart className="w-4 h-4 fill-rose-400" /> {activePost.likes} Likes
                </span>
                <span className="flex items-center gap-1 text-sky-400 font-semibold">
                  <MessageCircle className="w-4 h-4" /> {activePost.comments} Comments
                </span>
              </div>
              <a
                href={VENUE_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="text-pink-400 hover:underline flex items-center gap-1"
              >
                <span>View on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
