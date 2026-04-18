/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Search, 
  Users, 
  FileText, 
  Wallet, 
  Vote, 
  PlayCircle, 
  Compass,
  TrendingUp,
  Flame,
  ChevronRight,
  MapPin,
  Bell,
  Globe,
  Plus,
  BadgeCheck,
  Languages,
  Heart,
  MessageCircle,
  Coins,
  Bookmark,
  Share2,
  MoreHorizontal,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen } from '../types';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  const [hasJoinedTribe, setHasJoinedTribe] = useState(false);
  const [showDemoBanner, setShowDemoBanner] = useState(true);

  // Auto-hide demo banner after 20 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => setShowDemoBanner(false), 20000);
    return () => clearTimeout(timer);
  }, []);

  const coreModules = [
    { id: 'fundraiser', label: 'Fundraiser', icon: Heart, color: 'bg-emerald-100 text-emerald-600' },
    { id: 'afrirecord', label: 'AfriRecord', icon: FileText, color: 'bg-orange-100 text-orange-600' },
    { id: 'afripay', label: 'AfriPay', icon: Wallet, color: 'bg-blue-100 text-blue-600' },
    { id: 'afrivote', label: 'AfriVote', icon: Vote, color: 'bg-purple-100 text-purple-600' },
    { id: 'watch', label: 'Watch Live', icon: PlayCircle, color: 'bg-red-100 text-red-600' },
    { id: 'discover', label: 'Discover', icon: Compass, color: 'bg-amber-100 text-amber-600' },
  ];

  const journeyCards = [
    {
      title: 'Active Vote in Lagos Tech Tribe',
      tag: 'VOTE ACTIVE',
      button: 'Cast Vote',
      bg: 'bg-emerald-700',
      icon: Vote,
      screen: 'tribes'
    },
    {
      title: 'New Record: Largest Community Mural',
      tag: 'NEW RECORD',
      button: 'View Record',
      bg: 'bg-blue-600',
      icon: FileText,
      screen: 'afrirecord'
    },
    {
      title: 'AfriPay Tip: Save 15% on tickets',
      tag: 'SAVING TIP',
      button: 'Learn More',
      bg: 'bg-orange-500',
      icon: Wallet,
      screen: 'afripay'
    }
  ];

  const stories = [
    { id: 1, name: 'Amina', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMvbdbT_FInfR8uxmxmI7MuTPPRnz92srUYfLCZGODrfnnSNlvl0JnQ1jhuwLmFimYOa-8AYZ8s7HNG6QNjX2e3LGyfC1xr87hI2SDjE9VuH6sdwx82JQxkNsXHvYRcAYDbJywMj2mPea3OySYZmSBHz9yzaMH1j7hmlRarebGmB_qSp7WDqc43y5L4977lDvhMBZsTNImUU9FK_rEmTB1A5JmkzIieZqg7ZvCdF4auLVTferxfHmv-z30sH5JTZswOA3xZr7itAI' },
    { id: 2, name: 'Kofi', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa7kMSnak5Z7TvZWOEKQAbm6CbO3ODtMNbcDpHbSCmI-nVtbjbopcryUHPV4zJOWRW12Wc01rnkTMgOB25pW4pHliiEPM5pHy1Zy5deuxJaSZn2VsSfau3kmv3bxnuf2_PYfOhZheJVH22vwTRX9EHqC7emYnxTvXDQhs_eHxoZf7XEUmy9GCIHLiRpc2QWxuDuVTuG74Lonkv6HsdM00RKE-Rmn3S1RMLYmWccp0ZLuCEkgxUdgnwkzkB7AdX88R_MxTqZHpt9qg' },
    { id: 3, name: 'Zainab', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPVLtZ9ebNSCsefwON9tx0ts5LmldUZe4kD1u4zS9PMxbjJ4O5uglg1WHhHKYApsOYZB50QKrSldgC1RLaTjErqoHZdtO-AK1szrOensz0B73S8NOEVXz0TDckAP_e-3WdzJ6VzCWegeyM7_k8nqdGZFHduhqVRZVxlGUD4Ld-ka0zo22oe0SJ8Y5RuwrQlyCRH2J3gUfoYX_ErsNZiDgJGpWAlaYduA3uiOQwJ-fqwYNCxJ-k8gFVVW7tCoC0I4lbXhlrjwzMYtI' },
    { id: 4, name: 'Efe', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2XtlpGxrCiPPSTW4VrTLvtkMbQT4TbliNiC_Kt5vqWef0ISzPjcKP_Aplz3_g5uVbZGJ7x_LpaMjr1RbpXcgn-UNKJDBBADO3u_4N_RIkzNO0ckrj8sW9W6N4Wtz1UgT7WHC5apJXrVdIPg9AltF76xY-iQ1hvHOK70yhOwWswH68CRbRD3NMVY8hc57jqgeiOULeRR2oWKI-jefaykjv3HkxSbTkU29MzB0WFR_CM_ZiGKozMjY1NzPlGSKrz-F92TXquBMF4es' },
  ];

  const tribeHighlights = [
    { title: 'Tech Lagos', sub: 'New Hub Opening in Ikeja' },
    { title: 'Afrobeats', sub: 'Grammy Nominations 2024' },
    { title: 'Cuisine', sub: 'Jollof Festival Guide' },
  ];

  const feedPosts = [
    {
      id: 1,
      user: { name: 'Amina Diallo', handle: '@amina', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBm1D2MR21PdFvHkTTzfOduC4cXL4lb7xdBi05uhu1vv3cCnkKzqMvPQM23QpcYsFs4uILWSqLZR7k2DJo-3wPLgbulURUuxyU8_7CL_IiDhtC5eWFkLApvmQoGbbCJ0eX1pREmVrc69ArDP0tjQuYD4efjmPmtH7Y6wPIi3km80ROFi5rZfWibuFSAFw_khsceF4wpcwkHwHQv_aVJy4SMUulp6DYZPMcBHCFnfxyh2xtSX7rHCwoJ6aQzWCdsPEuLErmqEm6kQCE' },
      content: 'Capturing the golden hour at Tarkwa Bay. Lagos energy is unmatched! \uD83C\uDF0A✨',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsK_pzZOJ14Vq8wb3iBogYinmyn-pDIuyAQj5Wvt4EsjazoGrdrZfuYR6Gi7KxJ0ZIeeJaLTy9StVmF3M-Wwo5EezRRRtvhYB0JwlHm3BeWBBDLD0pLqY1r1JJAQ96DXCAx4QL0WDTZmJmn1lLnXBf7JEyUEdnXxMi-6mJe5nnWDXxJsNR_3Yq28vQh7ANlQK6F223EWgoq2ZGSuFdGzRwdbkVte48UtJEAsE9SOAg7ZNBlPlTthJCOJRlXJW-pUq1sP-Krnopcbk',
      location: 'Lagos, Nigeria',
      time: '2h ago',
      likes: '1.2k',
      comments: '84'
    },
    {
      id: 2,
      user: { name: 'Kofi Mensah', handle: '@kofi_m', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQCB3TcksY69TIb3JTE9R0iEgfGXHyUaNW1vDGhSqite2MwlH6JFSENuwWvE0ehMkXxrFFNoS24M_PWSiS-CMx83zL8BRqc15On0vKfvwugv6lEC47Zvqx2Ctk1JuLaFVkkQZVhvoE6QjWZX12Q6cgrztBuGlgYaLrLCFVWndc-91EYzaVvPMJ1DfVGzX0yxFOURIdQBCE7g9dxjYakyTRqvGEwDDIGiYOhXd-ZgPbFE2VOMQKkAERPH5LWed2DUaGSvlC5RbTXh8' },
      content: 'Just launched the new AfriPay feature for small businesses! Supporting the local ecosystem one transaction at a time. \uD83D\uDE80\uD83D\uDCBC',
      isPromo: true,
      promoTitle: 'AfriPay Merchant',
      promoSub: 'Zero fees for first 30 days',
      location: 'Accra, Ghana',
      time: '5h ago',
      likes: '342',
      comments: '12'
    }
  ];

  const renderModuleGrid = (compact = false) => (
    <section className={`px-4 ${compact ? 'py-4' : 'py-6'}`}>
      <div className={`grid grid-cols-3 ${compact ? 'gap-4' : 'gap-6'}`}>
        {coreModules.map((module) => (
          <button
            key={module.id}
            onClick={() => onNavigate(module.id as Screen)}
            className="flex flex-col items-center gap-2 group"
          >
            <div className={`${compact ? 'w-12 h-12 rounded-2xl' : 'w-16 h-16 rounded-3xl'} ${module.color} flex items-center justify-center transition-all group-active:scale-90 shadow-sm`}>
              <module.icon size={compact ? 24 : 32} />
            </div>
            <span className={`${compact ? 'text-[10px]' : 'text-[13px]'} font-black text-slate-700 uppercase tracking-tight`}>{module.label}</span>
          </button>
        ))}
      </div>
    </section>
  );

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      <AnimatePresence mode="wait">
        {!hasJoinedTribe ? (
          <motion.div
            key="hub-view"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            {/* Notification Banner */}
            <AnimatePresence>
              {showDemoBanner && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-4 pt-4"
                >
                  <div className="bg-primary/10 border border-primary/20 p-4 rounded-2xl flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white">
                        <Sparkles size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-black text-primary uppercase tracking-tight">AfriBook Demo</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Experience the Tribe Feed evolution</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setHasJoinedTribe(true)}
                      className="bg-primary text-white text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-widest active:scale-95 transition-transform"
                    >
                      Join Demo
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hub Header Removed for Dual Header Style Fix */}

            {/* Core Modules Grid */}
            {renderModuleGrid()}

            {/* For Your Journey */}
            <section className="py-6">
              <div className="px-4 mb-4 flex justify-between items-center">
                <h2 className="text-xl font-black tracking-tight text-slate-900 uppercase">For Your Journey</h2>
                <button className="text-primary font-black text-[10px] uppercase tracking-widest">See All</button>
              </div>
              <div className="flex overflow-x-auto gap-4 px-4 no-scrollbar">
                {journeyCards.map((card, i) => (
                  <div 
                    key={i} 
                    className={`min-w-[280px] ${card.bg} rounded-3xl p-6 text-white relative overflow-hidden shadow-xl shadow-slate-900/10`}
                  >
                    <div className="relative z-10">
                      <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">
                        {card.tag}
                      </span>
                      <h3 className="text-lg font-bold leading-tight mb-4">{card.title}</h3>
                      <button 
                        onClick={() => onNavigate(card.screen as Screen)}
                        className="bg-white text-slate-900 px-6 py-2 rounded-xl font-black text-xs uppercase tracking-tight"
                      >
                        {card.button}
                      </button>
                    </div>
                    <div className="absolute -right-4 -bottom-4 opacity-10">
                      <card.icon size={96} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Trending Tribes */}
            <section className="px-4 py-4 mb-8">
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-xl font-black tracking-tight text-slate-900 uppercase">Trending Tribes</h2>
                <button className="text-primary font-black text-[10px] uppercase tracking-widest">View Hub</button>
              </div>
              <div className="space-y-4">
                <div 
                  onClick={() => onNavigate('tribes')}
                  className="relative h-56 rounded-3xl overflow-hidden group cursor-pointer shadow-lg"
                >
                  <img 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbNNQk1_FwijWinaA3SY5ksMs_f48eebyAjlp8TvIlExB7Zr4bg5VorcBN9KGX25LNLmMErGe9vyc5ZG_-JNcspnkftMNwbJ5EG6iElrZr1IUcPNA9hfm_ZQolx_ywh45VSGc7wPg3CqNd2QQzoUJWvpJKd6XyEUSTyIu7L4IQTdtQsuiWbbsSfreEvokQvObIal6h1q58fmwBEHzixPP0vEm6lXU1go5fyMKnzzKoVOxaUohCvSrjT3iv1zZzLcemB3JY5KhzD7U" 
                    alt="Textiles"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <Flame size={14} className="text-orange-500 fill-orange-500" />
                      <span className="text-orange-400 text-[10px] font-black tracking-widest uppercase">High Activity</span>
                    </div>
                    <h4 className="text-white text-xl font-black uppercase">Nairobi Creatives Collective</h4>
                    <p className="text-slate-300 text-xs font-medium">12.4k Members • 42 Live Now</p>
                  </div>
                </div>

                <div 
                  onClick={() => onNavigate('tribes')}
                  className="relative h-56 rounded-3xl overflow-hidden group cursor-pointer shadow-lg"
                >
                  <img 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_exvvwk_lpu5Xk_VeDBqc_6BSCFmnW8FX6DwuarbJ-2j-NTS6l31wz-zdSdQTjLfxM50SsLrun3RF-AqgaBVY4BP5PCrpe1KQQgqioSZeHSoqgPhl_I0f8K3cwqrPAP7wzCzocBn0er11QnQEiHnyLj8djEAkPgqlgCLFLX1UL8PGhczcEA5uvSBp10YpNrhWSp7NkG75-ozrJ1X7TXrjOktPkqQVxzMgcQk4WWPqAxQ4Qchk0eHB5HMOgH1UcdjhN0q8gsUn-TM" 
                    alt="Tech Office"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp size={14} className="text-blue-400" />
                      <span className="text-blue-400 text-[10px] font-black tracking-widest uppercase">Fastest Growing</span>
                    </div>
                    <h4 className="text-white text-xl font-black uppercase">Lagos Tech Vanguard</h4>
                    <p className="text-slate-300 text-xs font-medium">45.8k Members • 12 New Votes</p>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="feed-view"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pb-20"
          >
            {/* Feed Header Simplified - No redundant title/logo */}
            <header className="sticky top-0 z-30 bg-slate-50/80 backdrop-blur-md px-4 pt-4 pb-2">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-black tracking-tight text-slate-900 uppercase">Tribe Feed</h2>
                <button 
                  onClick={() => setHasJoinedTribe(false)}
                  className="px-4 py-3 bg-white border border-slate-200 rounded-2xl text-[10px] font-black uppercase text-slate-400"
                >
                  Hub
                </button>
              </div>
            </header>

            {/* Core Modules Grid (Compact for Feed) */}
            {renderModuleGrid(true)}

            {/* Stories Section */}
            <section className="py-4 bg-white border-y border-slate-100 mb-6">
              <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar">
                <div className="flex flex-col items-center gap-1.5 shrink-0">
                  <div className="relative size-16 rounded-full p-0.5 border-2 border-dashed border-primary flex items-center justify-center cursor-pointer">
                    <div className="size-14 rounded-full bg-slate-50 flex items-center justify-center text-primary">
                      <Plus size={24} />
                    </div>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-tight text-slate-500">Your Story</span>
                </div>
                {stories.map(story => (
                  <div key={story.id} className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer">
                    <div className="size-16 rounded-full p-0.5 bg-gradient-to-tr from-primary to-accent">
                      <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                        <img src={story.img} alt={story.name} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-tight text-slate-900">{story.name}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Tribe Highlights */}
            <section className="px-4 mb-8">
              <div className="bg-primary/5 rounded-[2.5rem] p-6 border border-primary/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="text-primary" size={20} />
                    <h3 className="font-black text-xs uppercase tracking-widest text-slate-900">Tribe Highlights</h3>
                  </div>
                  <button className="text-primary text-[10px] font-black uppercase tracking-widest">See All</button>
                </div>
                <div className="flex gap-4 overflow-x-auto no-scrollbar">
                  {tribeHighlights.map((highlight, i) => (
                    <div key={i} className="shrink-0 w-40 bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                      <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">{highlight.title}</p>
                      <p className="text-xs font-bold text-slate-900 line-clamp-2 leading-tight uppercase tracking-tight">{highlight.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Feed Content */}
            <main className="px-4 space-y-8">
              {feedPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                  <div className="p-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full overflow-hidden border border-slate-100">
                        <img src={post.user.img} alt={post.user.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <h4 className="font-black text-sm text-slate-900 uppercase tracking-tight">{post.user.name}</h4>
                          <BadgeCheck className="text-primary" size={16} fill="currentColor" />
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          <span>📍 {post.location}</span>
                          <span>• {post.time}</span>
                        </div>
                      </div>
                    </div>
                    <button className="text-slate-300"><MoreHorizontal size={24} /></button>
                  </div>

                  <div className="px-5 pb-3">
                    <p className="text-sm font-medium text-slate-700 leading-relaxed">{post.content}</p>
                    <button className="mt-3 flex items-center gap-2 text-[10px] font-black text-primary/70 bg-primary/5 px-3 py-1.5 rounded-full uppercase tracking-widest">
                      <Languages size={14} />
                      Translate
                    </button>
                  </div>

                  {post.image && (
                    <div className="aspect-square bg-slate-100 w-full">
                      <img src={post.image} alt="post" className="w-full h-full object-cover" />
                    </div>
                  )}

                  {post.isPromo && (
                    <div className="px-5 pb-5">
                      <div className="p-5 rounded-3xl bg-secondary/5 border border-secondary/10 flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-4">
                          <div className="size-12 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-secondary/20 transition-transform group-hover:scale-110">
                            <Wallet size={24} />
                          </div>
                          <div>
                            <p className="text-xs font-black text-slate-900 uppercase tracking-tight">{post.promoTitle}</p>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{post.promoSub}</p>
                          </div>
                        </div>
                        <ChevronRight className="text-secondary" size={20} />
                      </div>
                    </div>
                  )}

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-6">
                        <button className="flex items-center gap-2 text-slate-600 hover:text-rose-500 transition-colors">
                          <Heart size={24} /> 
                          <span className="text-xs font-black">{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors">
                          <MessageCircle size={24} /> 
                          <span className="text-xs font-black">{post.comments}</span>
                        </button>
                        <button className="flex items-center gap-2 text-primary hover:scale-110 transition-transform">
                          <Coins size={24} /> 
                          <span className="text-xs font-black uppercase tracking-widest">Tip</span>
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <button className="text-slate-400 hover:text-slate-600"><Bookmark size={24} /></button>
                        <button className="text-slate-400 hover:text-slate-600"><Share2 size={24} /></button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="size-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                          <Globe size={20} />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-slate-900 uppercase tracking-tight">Permanent Memory</p>
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Mint local achievement as NFT</p>
                        </div>
                      </div>
                      <button className="bg-primary text-white text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-widest shadow-lg shadow-primary/20 transition-transform active:scale-95">Mint</button>
                    </div>
                  </div>
                </article>
              ))}
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
