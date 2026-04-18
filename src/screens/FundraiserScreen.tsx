/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ArrowLeft, 
  Bell, 
  PlusCircle, 
  Wallet, 
  Share2, 
  Sparkles, 
  History, 
  Heart, 
  TrendingUp, 
  CheckCircle2, 
  MoreHorizontal,
  ChevronRight,
  Clock,
  ExternalLink
} from 'lucide-react';
import { Screen } from '../types';

interface FundraiserScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function FundraiserScreen({ onNavigate }: FundraiserScreenProps) {
  const donors = [
    {
      name: 'Amara Okafor',
      amount: '$250.00',
      time: '2h ago',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZwWosRibZhbVlz7VlwgQe_mUsmy-P33bZgKvhWMDZpBuV2oz5Hq7y54rjMV7F_zia-qTl7I0b16RteTosukxdMMeThxR83vUWNDPXYnix0osl8EB_C_ALX_DkuW3MYw8M1X5892NshisQ9hEqHV4ByojqQJixOXWwPC0xL5Dx2wiQVxBhb0BIhzkcNkjWqlqyKUab9RIhDf5O1Bbuyx5NBC2ZGu2sJ-WD53bXMYL0cZNThkPHZOp0PgxPGgAJ4hEW6LKJZmQztxg',
      thanked: false
    },
    {
      name: 'Kofi Mensah',
      amount: '$1,000.00',
      time: '5h ago',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdWH98aVcwewDSoFC5G12ZnW67xbFgNnso2rzqnjaySMKFyPST3i6EV0bPlrxtBWgevIAX6FIM5gdd1gd29iQPgEyoYbWlrFs0jTKoOcBpfDSLOCVddsmNesNth3iH2xytKVFoIdfIWLEtvBi57NZFDzDvjAgd1yzRLHZT_uxoD_Hj8B5TrGJv9lyMFwfLizSqlSxPu7ucGHeo_76ugm7gEG5jdaye_a6BVklMY10EeHdc8Kv_02_TcfoU0zmc7whWiQtdcmulWRg',
      thanked: true
    }
  ];

  const stats = [
    { label: 'Views', value: '2.4k' },
    { label: 'Shares', value: '842' },
    { label: 'Followers', value: '315' },
    { label: 'Days Left', value: '14', color: 'text-primary' }
  ];

  return (
    <div className="flex flex-col bg-[#fdf9ee] min-h-screen text-[#1c1c15]">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-[#fdf9ee]/80 backdrop-blur-xl px-6 py-4 flex items-center justify-between border-b border-stone-200/50">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('home')}
            className="size-10 rounded-full bg-stone-100 flex items-center justify-center text-primary"
          >
            <ArrowLeft size={24} />
          </button>
          <span className="text-2xl font-black bg-gradient-to-br from-[#904d00] to-[#ff8c00] bg-clip-text text-transparent italic">
            AfriBook
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 text-stone-500 hover:bg-stone-100 rounded-full transition-colors relative">
            <Bell size={24} />
            <span className="absolute top-2 right-2 size-2 bg-primary rounded-full border border-white"></span>
          </button>
          <button className="hidden md:flex items-center gap-2 bg-gradient-to-br from-[#904d00] to-[#ff8c00] text-white px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-widest shadow-lg shadow-orange-500/20 active:scale-95 transition-all">
            <PlusCircle size={18} />
            <span>Create New</span>
          </button>
        </div>
      </header>

      <main className="flex-1 px-6 pt-10 pb-32 max-w-5xl mx-auto w-full">
        {/* Main Campaign Section */}
        <section className="mb-12">
          <div className="bg-stone-50 rounded-[3rem] p-8 md:p-12 border border-stone-200/50 relative overflow-hidden shadow-xl shadow-stone-900/5">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALTpoLYDvoTRiMa3meOACeUhUxxojUNfqwR3QILA9_hRaFlF0dQ4aEnomiDgMG4hddpWm1mzOKP5XG2q1h1GuRFwFIOk77KEoZWtuNaDNQeZ65dGWTFznPCJrU0VWKHKIbF0pf1Oxr91Tl0PHixram-jZWClYSRio9xpXrYrSBT6MuATaOsx8Wptxi1EiAbe5PFKYVY0ip7Z-KuKMLICx3hHiXh50rW0817hCGUPDmCoA9AuktAeYQEWxb9L0CcW7p76VJMmTnbZI" 
                alt="pattern" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-[#904d00] font-black text-[10px] uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-[#904d00] animate-pulse"></span>
                Active Fundraiser
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-[#1c1c15] tracking-tight mb-4 uppercase italic">
                Lagos Tech Scholars 2024
              </h1>
              
              <p className="text-stone-500 text-lg mb-10 leading-relaxed font-medium">
                Empowering 50 young women in Lagos with coding bootcamps and laptops to bridge the digital divide.
              </p>

              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="block text-stone-400 text-[10px] font-black uppercase tracking-widest mb-1">Total Raised</span>
                    <span className="text-4xl font-black text-primary">$18,450.00</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-stone-400 text-[10px] font-black uppercase tracking-widest mb-1">Goal: $25,000</span>
                    <span className="text-xl font-black text-on-surface">74% Reached</span>
                  </div>
                </div>

                <div className="h-4 w-full bg-stone-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-[#ffb77d] rounded-full" style={{ width: '74%' }}></div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="bg-gradient-to-br from-primary to-[#ff8c00] text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-xl shadow-orange-500/30 flex items-center gap-3 active:scale-95 transition-transform">
                    <Wallet size={20} />
                    Withdraw Funds
                  </button>
                  <button className="bg-white text-stone-900 border border-stone-200/50 px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-3 shadow-sm active:scale-95 transition-transform">
                    <Share2 size={20} />
                    Spread the Word
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Management Bento */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* AI Storyteller */}
          <div className="md:col-span-7 bg-white rounded-[2.5rem] p-8 border border-stone-100 shadow-xl shadow-stone-900/5">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Sparkles size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight italic">AI Storyteller</h3>
                  <p className="text-stone-400 text-[10px] font-black uppercase tracking-widest">Automated donor updates</p>
                </div>
              </div>
              <button className="text-primary font-black text-xs uppercase tracking-widest">Settings</button>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 mb-6 relative">
              <p className="text-stone-600 italic leading-relaxed mb-4">
                "We've reached 74% of our goal! Thanks to our 142 amazing donors, we've secured the first batch of 15 laptops. These will be delivered to the learning hub this Friday. Check out the impact you're making!"
              </p>
              <div className="flex items-center gap-2 text-[10px] text-stone-400 font-black uppercase tracking-widest">
                <History size={14} />
                Drafted 2 mins ago
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-primary text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-primary/20 transition-transform active:scale-95 hover:brightness-110">
                Post Update Now
              </button>
              <button className="px-8 py-4 border border-stone-200 rounded-2xl font-black text-xs uppercase tracking-widest text-stone-600 hover:bg-stone-50 transition-colors">
                Edit Draft
              </button>
            </div>
          </div>

          {/* Recent Donors */}
          <div className="md:col-span-5 bg-white rounded-[2.5rem] p-8 border border-stone-100 shadow-xl shadow-stone-900/5">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black uppercase tracking-tight italic">Recent Donors</h3>
              <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">142 Total</span>
            </div>

            <div className="space-y-6">
              {donors.map((donor, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full overflow-hidden border border-stone-200">
                      <img src={donor.img} alt={donor.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-black text-xs text-slate-900 uppercase tracking-tight">{donor.name}</h4>
                      <p className="text-primary font-black text-sm">{donor.amount} <span className="text-stone-400 font-bold text-[10px] ml-1 uppercase tracking-widest">{donor.time}</span></p>
                    </div>
                  </div>
                  {donor.thanked ? (
                    <span className="bg-primary/10 text-primary text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest">Thanked</span>
                  ) : (
                    <button className="size-10 rounded-full bg-stone-50 text-stone-300 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all active:scale-95">
                      <Heart size={20} fill="currentColor" />
                    </button>
                  )}
                </div>
              ))}

              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center font-black text-xs uppercase">JD</div>
                  <div>
                    <h4 className="font-black text-xs text-slate-900 uppercase tracking-tight">Anonymous</h4>
                    <p className="text-primary font-black text-sm">$50.00 <span className="text-stone-400 font-bold text-[10px] ml-1 uppercase tracking-widest">12h ago</span></p>
                  </div>
                </div>
                <button className="size-10 rounded-full bg-stone-50 text-stone-300 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all active:scale-95">
                  <Heart size={20} />
                </button>
              </div>
            </div>

            <button className="w-full mt-8 py-3 text-stone-400 font-black text-[10px] uppercase tracking-[0.2em] hover:text-primary transition-all flex items-center justify-center gap-2">
              View All Activity <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-stone-50 rounded-[2rem] p-6 text-center shadow-sm border border-stone-200/50">
              <span className="block text-stone-400 text-[10px] font-black uppercase tracking-widest mb-2">{stat.label}</span>
              <span className={`text-3xl font-black ${stat.color || 'text-[#1c1c15]'}`}>{stat.value}</span>
            </div>
          ))}
        </section>
      </main>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 z-50 bg-gradient-to-br from-primary to-accent size-14 rounded-full flex items-center justify-center text-white shadow-2xl shadow-primary/30 active:scale-95 transition-transform">
        <MoreHorizontal size={28} />
      </button>
    </div>
  );
}
