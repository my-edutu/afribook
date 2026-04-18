/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Search, Vote, Bell, User, Sparkles, ShieldCheck, Clock, TrendingUp, Users, Plus, ChevronRight, Heart, ShoppingBag } from 'lucide-react';
import { Screen } from '../types';

interface TribesScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function TribesScreen({ onNavigate }: TribesScreenProps) {
  const stats = [
    { label: 'Active Votes', value: '12', color: 'text-primary' },
    { label: 'Upcoming', value: '5', color: 'text-secondary' },
    { label: 'Voting Power', value: '450 VP', color: 'text-white', bg: 'bg-primary' },
    { label: 'Participation', value: '88%', color: 'text-slate-900' },
  ];

  const fundraisers = [
    {
      id: 1,
      title: 'Lagos Tech Scholars 2024',
      goal: '$25,000',
      raised: '$18,450',
      progress: 74,
      donors: 142,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALTpoLYDvoTRiMa3meOACeUhUxxojUNfqwR3QILA9_hRaFlF0dQ4aEnomiDgMG4hddpWm1mzOKP5XG2q1h1GuRFwFIOk77KEoZWtuNaDNQeZ65dGWTFznPCJrU0VWKHKIbF0pf1Oxr91Tl0PHixram-jZWClYSRio9xpXrYrSBT6MuATaOsx8Wptxi1EiAbe5PFKYVY0ip7Z-KuKMLICx3hHiXh50rW0817hCGUPDmCoA9AuktAeYQEWxb9L0CcW7p76VJMmTnbZI'
    }
  ];

  return (
    <div className="flex flex-col pb-8 pt-4">
      {/* Stats Overview */}
      <section className="px-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-3 py-2 min-w-max">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`w-36 p-4 rounded-xl shadow-sm border border-primary/10 ${stat.bg || 'bg-white'}`}
            >
              <p className={`text-xs font-medium ${stat.bg ? 'text-white/80' : 'text-slate-500'}`}>{stat.label}</p>
              <p className={`text-2xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Create a Tribe CTA */}
      <section className="px-4 mt-6">
        <button 
          onClick={() => onNavigate('create-tribe')}
          className="w-full bg-white border-2 border-dashed border-primary/20 rounded-2xl p-6 flex items-center justify-between group hover:border-primary/40 transition-all"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Users size={24} />
            </div>
            <div>
              <h3 className="font-black text-slate-900 uppercase tracking-tight">Create a Tribe</h3>
              <p className="text-xs text-slate-500 font-bold">Launch your community treasury</p>
            </div>
          </div>
          <div className="size-10 rounded-full bg-slate-50 flex items-center justify-center text-primary">
            <Plus size={20} />
          </div>
        </button>
      </section>

      {/* Tribe Shop CTA */}
      <section className="px-4 mt-6">
        <button 
          onClick={() => onNavigate('tribe-shop')}
          className="w-full bg-stone-900 rounded-2xl p-6 flex items-center justify-between group overflow-hidden relative shadow-xl active:scale-[0.98] transition-all"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6rxH8nemEjHoButoPj0u7G9bEP5Lx_ShHuerp2lhZYtHwRMafucYgCavPWT1f6vQqjLap-TzOxEKLDkgkDmztjtIhGCIz7fvHvNWzhOJGs8fY-RmbhVzFK_rufmOX9V0mAkHPy1r1_9pVHU16b3npoD6aFSjSFfschpBiQjI-eM_-OcTX8sDFMsvf_Wkc7cbiuS0AhR1lQUKk0z1vGG2eEGftONjvX8Pwa13JkhY1GHRL91cQbZSWetIYqchHdYfAxBlmtTtVK5o" 
              alt="Merch"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-4 text-left relative z-10">
            <div className="size-12 rounded-full bg-white/10 flex items-center justify-center text-primary">
              <ShoppingBag size={24} />
            </div>
            <div>
              <h3 className="font-black text-white uppercase tracking-tight">Tribe Shop</h3>
              <p className="text-xs text-white/60 font-bold uppercase tracking-widest leading-none mt-1">Exclusive hardware & merch</p>
            </div>
          </div>
          <div className="size-10 rounded-full bg-white/5 flex items-center justify-center text-white relative z-10">
            <ChevronRight size={20} />
          </div>
        </button>
      </section>

      {/* AI Debate Assistant Banner */}
      <section className="px-4 mt-6">
        <div className="relative overflow-hidden bg-gradient-to-r from-secondary to-blue-600 rounded-2xl p-5 text-white shadow-xl">
          <div className="relative z-10 flex items-center justify-between">
            <div className="max-w-[70%]">
              <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                <Sparkles size={20} className="text-primary" />
                AI Debate Assistant
              </h3>
              <p className="text-xs text-blue-50 opacity-90">Summarize 48+ candidate manifestos in seconds with AI insights.</p>
            </div>
            <button className="bg-white text-secondary px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap">Try Now</button>
          </div>
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
        </div>
      </section>

      {/* Active Elections */}
      <section className="px-4 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Active Elections</h2>
          <button className="text-primary text-sm font-semibold">View All</button>
        </div>

        <div className="space-y-4">
          {/* Election Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 uppercase tracking-wider">
                  <ShieldCheck size={12} /> Blockchain Verified
                </span>
                <div className="flex items-center gap-1 text-slate-500 text-xs">
                  <Clock size={12} /> 2d 14h left
                </div>
              </div>
              <h3 className="text-lg font-bold mb-1">Youth Council Election 2026</h3>
              <p className="text-sm text-slate-500 mb-4 line-clamp-2">Electing 5 regional representatives for the 2026 term. Review all 12 candidate manifestos before voting.</p>
              <div className="flex gap-3">
                <button className="flex-1 py-3 px-4 rounded-xl border border-slate-200 text-sm font-bold hover:bg-slate-50 transition-colors">
                  Review Candidates
                </button>
                <button 
                  onClick={() => onNavigate('tribe-voting')}
                  className="flex-1 py-3 px-4 rounded-xl bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all"
                >
                  Vote Now
                </button>
              </div>
            </div>
            <div className="bg-slate-50 px-5 py-3 flex justify-between items-center text-xs">
              <span className="text-slate-500">8,421 Votes Cast</span>
              <div className="flex -space-x-2">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-300 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="voter" />
                  </div>
                ))}
                <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[10px] font-bold">+12</div>
              </div>
            </div>
          </div>

          {/* Election Card 2 - Linked to Tribe Detail */}
          <div 
            onClick={() => onNavigate('tribe-detail')}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden cursor-pointer active:scale-[0.99] transition-transform"
          >
            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 uppercase tracking-wider">
                  <ShieldCheck size={12} /> Blockchain Verified
                </span>
                <div className="flex items-center gap-1 text-red-500 text-xs font-semibold">
                  <Clock size={12} /> 4h 22m left
                </div>
              </div>
              <h3 className="text-lg font-bold mb-1">Urban Farming Grant Allocation</h3>
              <p className="text-sm text-slate-500 mb-4 line-clamp-1">Community decision on the distribution of the $50k Farming Grant among competing tribes.</p>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-orange-100 flex items-center justify-center text-primary">
                  <Users size={20} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900 uppercase">Lagos Tech Founders</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Proposing Tribe</p>
                </div>
                <ChevronRight className="ml-auto text-slate-300" size={18} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Fundraisers */}
      <section className="px-4 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Ongoing Fundraisers</h2>
          <button 
            onClick={() => onNavigate('fundraiser')}
            className="text-primary text-sm font-semibold"
          >
            Manage
          </button>
        </div>
        
        <div className="space-y-4">
          {fundraisers.map(fund => (
            <div 
              key={fund.id}
              onClick={() => onNavigate('fundraiser')}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden cursor-pointer active:scale-[0.99] transition-transform"
            >
              <div className="p-4 flex gap-4">
                <div className="size-20 rounded-xl overflow-hidden shrink-0">
                  <img src={fund.img} alt={fund.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-black text-[#904d00] uppercase tracking-wider mb-1">
                    <Heart size={10} fill="currentColor" /> Active
                  </div>
                  <h3 className="font-bold text-sm mb-2 line-clamp-1">{fund.title}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-end text-[10px] font-bold">
                      <span className="text-primary">{fund.raised}</span>
                      <span className="text-slate-400">Goal: {fund.goal}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${fund.progress}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Analytics */}
      <section className="px-4 mt-8">
        <h2 className="text-lg font-bold mb-4">Election Turnout Analytics</h2>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm font-bold">Lagos Central Turnout</p>
              <p className="text-xs text-slate-500">Live Participation Heatmap</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-secondary">92.4%</p>
              <p className="text-[10px] text-green-500 font-bold flex items-center justify-end">
                <TrendingUp size={12} className="mr-1" /> +4.2%
              </p>
            </div>
          </div>
          
          {/* Heatmap Grid */}
          <div className="grid grid-cols-8 gap-1.5 mb-4">
            {Array.from({ length: 24 }).map((_, i) => {
              const opacities = [0.1, 0.2, 0.4, 0.6, 0.8, 0.9];
              const opacity = opacities[Math.floor(Math.random() * opacities.length)];
              return (
                <div 
                  key={i} 
                  className="aspect-square rounded-sm bg-primary" 
                  style={{ opacity }}
                ></div>
              );
            })}
          </div>
          
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium">
            <span>Low Activity</span>
            <div className="flex gap-1">
              {[0.2, 0.4, 0.6, 0.9].map((op, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-primary" style={{ opacity: op }}></div>
              ))}
            </div>
            <span>High Engagement</span>
          </div>
        </div>
      </section>
      
      {/* Floating Action Button */}
      <div className="fixed bottom-28 right-6 z-30">
        <button 
          onClick={() => onNavigate('create-tribe')}
          className="w-16 h-16 bg-primary rounded-full shadow-2xl shadow-primary/40 border-4 border-white flex items-center justify-center text-white active:scale-95 transition-all hover:scale-105"
        >
          <Plus size={36} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
