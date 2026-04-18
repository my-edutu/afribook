/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Search, 
  MapPin, 
  Sparkles, 
  Coins, 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  Flame, 
  TrendingUp,
  Landmark,
  ShieldCheck,
  History
} from 'lucide-react';
import InteractiveMap from '../components/InteractiveMap';

export default function DiscoverScreen() {
  const trendingTags = ['#Afrobeats', '#TechSummit2024', '#NairobiArt', '#LagosFashionWeek'];

  const tribeCards = [
    { title: 'Digital Griots', sub: '12.4k Storytellers', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC05GEfdbcZGyvIoR36eeertC_fmfmQ0zRtAoh8XU6y2-1WM-G2bNFM0K50US3yP5LzT0EXwaxzdpeg13al7iKocFZiBzgGTJ4pYIYc6cE2PRAMehTQvv5mh0ZFUX-QnI3soJ7s068j2SxWUUOKBBXJUjl_tH2Jgq4BhIhyi5DIk_xuri-DUbr4thZo6BxPnpHvfegMKof-2DTByUy9xVzONv2YJFPDET5u02lUaP_PFx4kRs_A5wnMizeDABhCR9i-6V66q9pFhuo' },
    { title: 'Tech Hub Lagos', sub: '8.9k Innovators', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALhD0dYn6g_JpGb3QOB9Apt9cOKP1dBijl57wQa2FdXypNd4FvvPASGhhRNSKVb1JBnA4EKnvZCdOxft_8DUDhkEhB7Pyf0XYHbC-uqDX6p2AmeDx0s9bSWXWKZE0u3ZiOhiNGGoZXnLL1EXKap8WYWJsoSegwmXx30nsaX4uH1K_gO07Tx80vpuKLV2j7PvXx_F0z882lQX03Du8hCKycov18j8yc7aTapbllE6BTiDQEey2IfXnGYKyykYjOIGW9YFZlZohb1-A' },
    { title: 'Woven Heritage', sub: '5.2k Artisans', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeKZP0rzDrrBfdlHlWVH1DnkZywkoqnzCoCAkUCUFdsFVZvWQVo7LitzzFMCLgztSUFCi737G4r86ckzNqyDx5kW0v_GRBoSZ3i3CHKVejWIwdtYcSSfxGkgl5zZU66ufeTuOHZwt1SEwzsdq04kfgDAm2UE_8EUUMpY_1JzyUqbxfE75iQMw08Xlw2xGxqyF3ewstP65PD2yXOwT0XWWUk41oEqHytYA4usFm8o0hZRSfqPK7ouQIIYtz1B46UaYTm75XIPBPmj0' },
    { title: 'Urban Dakar', sub: '15.1k Explorers', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKTR_QADbB2LKxLxCldzFzsdMfREgAKfyP9x1Rhbqr_Zv2m12lFD5ixs7cVv-c7zSSulh0hWPiJfCbsnfhg3rCJZgaF_1J2tnvirrLJHyVSzdG5CTZrfvelDmdtZWgtmVT0u3KyO1588ZvJV-3-JZUUPuLdXlTxoREDC-ID4Slw1bVlpMPi70TU-62NoiNgM3vw-eQ2n1mGyXlhFKxECwT716em0BTD-3MR9uVUWQUxCypFdVh2LcwO2cOWnBYHRt0_YHJ4OBC49A' },
  ];

  const recordItems = [
    { title: 'Midnight Jazz in Accra', author: 'Kofi Mensah & The Collective', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBw7s0dKJuIKgK9KCdwLJmzj7KpxBVOACqufP9A7dPy1R_sikTc9uj4neYzD4F_xAVrdX9jcWKz403hHTscgsh75z81b7oVXz718SlU50ukg_IdonZClC5BUieuK7fVODP6pJu0Ln3Ju8BqWP9h6aWQOxQnbRQ9TI2wTTW14vhd-8dTleO0JL2T9IbCFiWMPG9ItRqgZVD0SZYNAc1NShVMhrgoN9nUSKZivYX7Iy2Q7MKxPxKT4fMrzkgh53llvjhcnvsx7n0MvBw', tag: 'Exclusive' },
    { title: 'Neon Serengeti', author: 'Synthetic Spirit', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB933Ej_93-uynJnybIIT-Hm0ups90itFXNY0h0z8wb1od5iWLWJq5A0woB8rXJW_Hfl60JeJBILohx3fRtq9PUTI5ISPxOtg9r3dBn386X1o9rM8wDU6T8-fWxyoYm8XotAyuUNyN1-gM20ahit3Rfvm-xaTSBS0YcGSkdwiLsF2JhEKlTZhrml-Ce9BB9v-p5juyNl-Kd5M2AeC_iFVLGHuqN-cuI_bU9py0Jl4YXkhmLEQTqUvmi-aBDVh9JJAy9D3Jbkw8DnTg', tag: 'Digital Drop' },
  ];

  return (
    <div className="flex flex-col pb-32 bg-background-light">
      {/* Search & Trending Chips */}
      <section className="sticky top-16 z-40 space-y-4 pt-4 px-4 bg-background-light/95 backdrop-blur-sm pb-4 border-b border-primary/5">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            className="w-full bg-slate-100 border-none rounded-full py-4 pl-12 pr-6 text-slate-900 focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all placeholder:text-slate-400 font-medium shadow-sm" 
            placeholder="Search tribes, music, and records..." 
            type="text"
          />
        </div>
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary shrink-0">Trending</span>
          {trendingTags.map((tag, i) => (
            <button 
              key={i} 
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                i === 0 ? 'bg-primary text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="px-4 py-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-extrabold tracking-tight">Discover Africa</h2>
          <span className="text-[10px] font-bold text-primary px-3 py-1 bg-primary/10 rounded-full uppercase tracking-widest">Live Connect</span>
        </div>
        <div className="relative w-full aspect-[4/5] bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-xl overflow-hidden">
           <InteractiveMap />
        </div>
      </section>

      {/* AI Recommendations Panel */}
      <section className="px-4 py-4 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-extrabold tracking-tight">For Your Journey</h2>
          <span className="text-[10px] font-black text-secondary uppercase tracking-widest flex items-center gap-1 bg-secondary/5 px-2 py-1 rounded-full">
            <Sparkles size={12} fill="currentColor" /> AI Recommended
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-slate-900 h-64 md:h-80 shadow-lg">
            <img 
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAysc-8Mngpr7BDYIR3KJiMmeDMe-RDDbIV3rYwhItUsBMxkkiU-L3oNuBXH7t9TMYJ-jb6bXGEKRvv5xZR758PsJTyE04PJ-Skxbe2gfxuWSzJmqjXwu1Q_VecPM6O_r1v3Fg2lQtAeDQcS7dNyoMM_WzLjyJsx_m1VbHpnN7jUnxm9MF87a-k2wVh7OkNoXMvm9lp2oB7Wuhl_Ott7kulp-Ai0O6q9vIhvc16YBkHF0fx_fDqXxCPtc5GCZ88hJno_n57UTEAcU" 
              alt="Concert"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-primary font-bold text-[10px] uppercase tracking-widest mb-2 block">Live Event Hub</span>
              <h3 className="text-2xl font-black text-white mb-3 leading-tight">Burnaby Sound: Interactive Virtual World Tour</h3>
              <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform active:scale-95 shadow-lg">Join Experience</button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-secondary p-6 rounded-3xl relative overflow-hidden text-white group shadow-lg">
              <div className="relative z-10">
                <Coins className="mb-2" size={32} />
                <h4 className="text-lg font-bold mb-1">AfriPay Tips</h4>
                <p className="text-white/80 text-xs font-medium">Save 15% on tickets when using your local wallet today.</p>
              </div>
              <Coins className="absolute -right-4 -bottom-4 size-24 text-white/10 group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <div className="bg-accent p-6 rounded-3xl flex flex-col justify-between group shadow-lg">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <FileText size={20} />
                </div>
                <span className="text-[10px] font-black text-white uppercase tracking-widest">New Archive Record</span>
              </div>
              <h4 className="text-lg font-extrabold text-white leading-tight mt-4">Explore the Songhai Empire Records</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tribes */}
      <section className="px-4 py-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-extrabold tracking-tight">Popular Tribes</h2>
          <button className="text-primary font-bold text-xs hover:underline uppercase tracking-widest">Explore All</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tribeCards.map((tribe, i) => (
            <div key={i} className="flex flex-col items-center gap-3 group">
              <div className="w-full aspect-square rounded-[2.5rem] overflow-hidden bg-slate-100 transition-all group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-primary/10">
                <img className="w-full h-full object-cover" src={tribe.img} alt={tribe.title} />
              </div>
              <div className="text-center">
                <p className="font-bold text-slate-900 text-sm">{tribe.title}</p>
                <p className="text-[10px] text-slate-500 font-bold tracking-tight">{tribe.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Discover New Records */}
      <section className="py-8 space-y-6">
        <div className="px-4 flex items-center justify-between">
          <h2 className="text-xl font-extrabold tracking-tight">Discover New Records</h2>
          <div className="flex gap-2">
            <button className="size-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white transition-colors text-slate-600">
              <ChevronLeft size={16} />
            </button>
            <button className="size-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white transition-colors text-slate-600">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-6 px-4">
          {recordItems.map((record, i) => (
            <div key={i} className="min-w-[300px] md:min-w-[400px] bg-white rounded-3xl overflow-hidden shadow-sm group border border-slate-100">
              <div className="h-56 relative overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src={record.img} alt={record.title} />
                <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">{record.tag}</span>
                </div>
              </div>
              <div className="p-5 flex justify-between items-end">
                <div>
                  <h4 className="text-lg font-black text-slate-900 leading-tight">{record.title}</h4>
                  <p className="text-slate-500 font-bold text-[11px] mt-1">{record.author}</p>
                </div>
                <button className="size-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg shadow-secondary/20 hover:scale-110 active:scale-95 transition-all">
                  <Play size={20} fill="currentColor" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating AI Travel Guide Button */}
      <div className="fixed bottom-24 right-4 z-30">
        <button className="bg-primary text-white flex items-center gap-2 px-6 py-3 rounded-full shadow-2xl hover:scale-105 transition-all active:scale-95 group">
          <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
          <span className="font-bold text-sm">AI Pulse Guide</span>
        </button>
      </div>
    </div>
  );
}
