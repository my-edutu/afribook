/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Search, 
  Bell, 
  MapPin, 
  Heart, 
  Coins, 
  Users, 
  Database, 
  Eye, 
  Sparkles,
  Compass,
  Plus
} from 'lucide-react';

export default function WatchScreen() {
  const filters = ['Trending', 'Nearby', 'Lagos Live', 'Culture'];

  return (
    <div className="flex flex-col bg-white min-h-screen relative">
      {/* Floating Plus Button */}
      <div className="fixed bottom-28 right-6 z-50">
        <button className="size-16 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl shadow-primary/40 border-4 border-white active:scale-95 transition-transform">
          <Plus size={36} strokeWidth={3} />
        </button>
      </div>

      {/* Header & Filters */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center p-4 justify-between">
          <div className="flex items-center gap-3">
            <Compass className="text-primary" size={28} />
            <h2 className="text-xl font-bold tracking-tight">Watch Live</h2>
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
              <Bell size={20} />
            </button>
          </div>
        </div>
        <div className="flex gap-3 px-4 pb-4 overflow-x-auto no-scrollbar">
          {filters.map((filter, i) => (
            <button
              key={i}
              className={`flex h-9 shrink-0 items-center justify-center rounded-full px-5 text-sm font-semibold shadow-md transition-all ${
                i === 0 
                  ? 'bg-primary text-white shadow-primary/20' 
                  : 'bg-primary/10 text-primary hover:bg-primary/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content: Vertical Feed */}
      <main className="flex-1 space-y-6 p-4 pb-32">
        {/* Live Stream Card 1 */}
        <section>
          <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden shadow-xl bg-slate-200">
            {/* Background Image */}
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuApVV6Q1Rcn9sxqBU7dqLAykW2fvcxfg9Ska6tX_sYSvi7BC4mw0cD__uW0H_0CRbN1OsqutLSkCixnL348jC35ol2mEvhGiug1GQM90jQFJDN2LOf62S17Jhdzu1Syi5cHh6hhNzU11eO_0mqCTh4TcFy9RMbM40_s5zPIjDXd5n8By6W9jLMRykFaLDWXDfFuhgn5UkJn4fOXsgQoi18HUSsjLD-3KSm_8CXfSZhuuzz6cWg10YgdfZZlqIYTexy5LY9S8XPg340" 
              alt="Maasai Festival"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>

            {/* Top Status Badges */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
              <div className="flex flex-col gap-2">
                <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1 w-fit">
                  <span className="size-1.5 rounded-full bg-white animate-pulse"></span> LIVE
                </span>
                <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm text-white text-[11px] px-2 py-1 rounded-lg">
                  <Sparkles size={14} className="text-primary" />
                  <span className="font-medium text-white">AI Highlight</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm text-white text-[11px] px-2 py-1 rounded-lg">
                  <Eye size={14} />
                  1.2k
                </div>
                <label className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-2 py-1 rounded-full border border-white/20">
                  <span className="text-[10px] font-bold text-white uppercase tracking-tighter">AI Subtitles</span>
                  <div className="w-6 h-3 bg-primary rounded-full relative">
                    <div className="absolute right-0.5 top-0.5 size-2 bg-white rounded-full"></div>
                  </div>
                </label>
              </div>
            </div>

            {/* Bottom Info & Host */}
            <div className="absolute bottom-4 left-4 right-16 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-12 rounded-full border-2 border-primary overflow-hidden shadow-lg">
                  <img src="https://i.pravatar.cc/100?img=32" alt="Host" />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">Amina J. @ Maasai Festival</h3>
                  <p className="text-white/80 text-xs flex items-center gap-1">
                    <MapPin size={12} className="text-primary" />
                    Narok, Kenya
                  </p>
                </div>
              </div>
            </div>

            {/* Side Interaction Buttons */}
            <div className="absolute bottom-6 right-3 flex flex-col gap-5 items-center">
              <button className="flex flex-col items-center gap-1">
                <div className="size-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary transition-all">
                  <Heart size={24} />
                </div>
                <span className="text-[10px] font-bold text-white uppercase">4.2k</span>
              </button>
              <button className="flex flex-col items-center gap-1">
                <div className="size-12 rounded-full bg-primary/90 flex items-center justify-center text-white shadow-lg shadow-primary/40">
                  <Coins size={24} />
                </div>
                <span className="text-[10px] font-bold text-white uppercase">Tip</span>
              </button>
              <button className="flex flex-col items-center gap-1">
                <div className="size-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                  <Users size={24} />
                </div>
                <span className="text-[10px] font-bold text-white uppercase text-center leading-none">Join<br/>Tribe</span>
              </button>
              <button className="flex flex-col items-center gap-1">
                <div className="size-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                  <Database size={24} />
                </div>
                <span className="text-[10px] font-bold text-white uppercase">Mint</span>
              </button>
            </div>
          </div>
        </section>

        {/* Live Stream Card 2 (Mini Version) */}
        <section>
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg bg-slate-200">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8vmTeHy5H8yzuIwYzT8byl_nfsz5EX_5GqzIpvXIVQkAxMFJvmkzkdEX8uxiWo2M9cwsnVbyTp4iJLxWQgzCINiG8PPLA-ZAh6-v77_QkovNERVcpKxsmWkydZxWuOi3wSYYvNeNfClaOKeAPIasGqcHNyX_GyXm2tI9V5kQ9DTEvNRgA2Lkz5o2CIcfh2jb9XmyOqXsTVxClwbjdZhsN96efmVcf5QNv3dG0K-ZXlp94BF1wyCm9zfhguF3jRDj3bCH-HCrw0qI" 
              alt="Accra Street Food"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
            <div className="absolute top-3 left-3">
              <span className="bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                <span className="size-1 rounded-full bg-white"></span> LIVE
              </span>
            </div>
            <div className="absolute bottom-3 left-3 flex items-center gap-2">
              <div className="size-8 rounded-full border border-primary overflow-hidden">
                <img src="https://i.pravatar.cc/100?img=12" alt="Host" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Kofi's Kitchen - Accra Street Food</h4>
                <p className="text-white/70 text-[10px]">850 watching • Accra, Ghana</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
