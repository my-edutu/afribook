/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ArrowLeft, 
  ShoppingCart, 
  Bell, 
  Filter, 
  Box, 
  ShoppingBag, 
  Smartphone, 
  Cpu, 
  ChevronRight,
  Bot
} from 'lucide-react';
import { Screen } from '../types';

interface TribeShopScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function TribeShopScreen({ onNavigate }: TribeShopScreenProps) {
  const shopItems = [
    {
      id: 1,
      title: 'Neural Link Pro Headphones',
      desc: 'Experience hyper-focused sound engineered for deep work sessions.',
      price: '12,450 AFR',
      tag: "Editor's Choice",
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6rxH8nemEjHoButoPj0u7G9bEP5Lx_ShHuerp2lhZYtHwRMafucYgCavPWT1f6vQqjLap-TzOxEKLDkgkDmztjtIhGCIz7fvHvNWzhOJGs8fY-RmbhVzFK_rufmOX9V0mAkHPy1r1_9pVHU16b3npoD6aFSjSFfschpBiQjI-eM_-OcTX8sDFMsvf_Wkc7cbiuS0AhR1lQUKk0z1vGG2eEGftONjvX8Pwa13JkhY1GHRL91cQbZSWetIYqchHdYfAxBlmtTtVK5o',
      featured: true
    },
    {
      id: 2,
      title: 'Founders Watch v2',
      desc: 'Track productivity & vitals.',
      price: '8,200 AFR',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVCz7_YCt2K3dmAioX760cuvvGHuXKkDnuov34jHm-Fb_kbBRYn9bjwudUZSd1iGDfd7jN50AdDBYaYq6AzxoifhOYkIqzoCRJQDrlhUxAXAhLLPRPetei7wL4ppc7bt6j-cuGjN8t4_IFbInVkwmVoh-TuAYKxgjvZUpXwUJo4qr2iSqEtebiedUl36ljSNP4h82xAwUAYLcusn9yXwLcBrQMLOe2rcbSMIL-i9qhtTuG0omuv4AWLLLg_31KV92ZeO0ElHnS1MI'
    },
    {
      id: 3,
      title: 'Matrix Keyboard',
      desc: 'Haptic response optimized for code.',
      price: '4,500 AFR',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-gMUvwX7NF2bQJWiB9QFDqVp0T30ZdGLXOrPSpWubFvyZZXJL3F85QPgLCPzhcKA9Qd-SiFHc2o_-9_hjLlQUwyHLeVQYq5YgTUF2T1pIC_WBol2sFwRgio4dIJT-dXrspUmfHbJ4O_ql9MIwQuJ67RHr3Z_tjB9WLRRxXbEEI_L6Rw9WDx6NE63eDlzWwE0oHE3rgVBXNbFi3PQGWhZUrHoLif6-N3gbcB2vzjpa54G9qPFHecBBEUsW4TshvfurayXE_ui_FRo'
    },
    {
      id: 4,
      title: 'AfriPad Pro 13"',
      desc: 'The ultimate tablet for designers.',
      price: '32,000 AFR',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvsrBIoC0e2yL__PHQA-q0cj2RVXlp8iYZw7J1MWv4v3sY-DyRv2Rf5yquNJPJFlzECLatxKduIJfiZJUDwWL2ntpGfmTiJXZhvTUtqzBVpsqIwu1Vu1Shl0xPoCVM9S0toHdPcaASV7y4-_SLqAVU1IV2N052L6DM2V2UgK9cTbDuEXxBcstaNDGtKTQMFgQ4qdyloTBkQbZdpuIM4NugDr2zSQkVVOX4rmWKQzAPWyrglNBwEBlAnnEr8-ZvYuDfKejraUM2fL0'
    },
    {
      id: 5,
      title: 'Founder Tee',
      desc: 'Heavyweight organic cotton.',
      price: '1,200 AFR',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrnwPS8g3qIM-N9uqpxOJ23O6GLFmuuqt2e0vxEmUJSEyZTNWjEhYln5Izq6_IoR2n1fQg1ZGrlVjRiYn3FgDYJ-ynBbslbFXG3CqO5y5oc1-wmdla3wqcps2iy3S_BisYu_hlcTadUn_cfJNPsGtAabnl0wjmwL8DxUozNOyGX3XY2t8WGWHOp9k7LWpiG-7T6DsSadaSqjVAA21P17fdEeepqsx-ZwgQOod86pOVYTePQYUefTKsxy6h01RmvFqwV8BxxsdnNgU'
    }
  ];

  const collections = [
    { title: 'Workspace 2.0', sub: 'Optimize your flow', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIsv_aqDAr-FWdkhhyuVagPPcxNxN9Pa2hgTJ3QH2CbqfIpqCcjwegdt_Z0ZdFTXzF7NVi0vWWZV6Ye76CEaIlWC1aHb3V2I-GzPwGTgInWO7Y81n-Yu_b1RGJlKNYEZcKMYUidVFxmsdnQiE9WD-zOBSg_pXElghWM7lgv541OB1dxayip5dEQh-Kr3YYJPMSP915TEopIgeHLvdml1_hE6p0PxknPq3FfGg4Eg2ZftuYlOxK1CRORaeLHJkvCx56R_unIoGw2CY' },
    { title: 'Founders Wear', sub: 'Style for the boardroom', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvEde797Dm59aU-3HpOAdUFtV9L35NFrigbWqhpHYKT9kmoGTdn9ubmQV_M__kSzdZeVJWmLXmVJCbh7re9zq30-RV0LNy3Q5rd5538NHxxUxe09lum-iM9zBFdvaTGSbNoNhRodgGPyAeCG1z3OJ7s4KkIkN9dWE7OUxy3jvadArDq2tcvXmbHAXK40H1jpkiY7E29mA7rx2iNEKjrNc-l7wYd_vHBSPJKAW9T-O9xsprJuGhN-oMFBtJIL5kZB81KJVaSeg4krs' },
    { title: 'Limited Drops', sub: 'Collectible rarities', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAA0HC-qVvLWR_M-vM5S2YqOB4J6VOsxtaz2stuZe2txO-WtVJzobZn_2UsKMY1-58kN24nPtdozt2MjUj-YelqQAs3KaZDFtSflKOhJmKjO-9r0kLe-ZYCXYZenUqJyJvhSEOs9d94D7dug0yQ8ecptdsXGUJu9NUbZbc752h56eci6nqZUkKQSk7NY56aZYF13hICIzPXJ8_VwpdeH02VsQPQyDYoiTeYFUr8ht9_eTXG2OvWbTxwTvPGdi5bWloGA9Rln--9B-c' }
  ];

  return (
    <div className="flex flex-col bg-[#fdf9ee] min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#fdf9ee]/80 backdrop-blur-xl px-6 py-4 flex items-center justify-between border-b border-stone-200/50">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('tribes')}
            className="size-10 rounded-full bg-stone-100 flex items-center justify-center text-primary"
          >
            <ArrowLeft size={24} />
          </button>
          <span className="text-2xl font-black bg-gradient-to-br from-[#904d00] to-[#ff8c00] bg-clip-text text-transparent tracking-tight">
            AfriBook
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative p-2 rounded-full hover:bg-stone-200/50 transition-colors cursor-pointer group">
            <ShoppingCart size={24} className="text-[#904d00]" />
            <span className="absolute top-1 right-1 size-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full font-bold">3</span>
          </div>
          <button className="p-2 text-stone-500 hover:bg-stone-100 rounded-full transition-colors relative">
            <Bell size={24} />
          </button>
        </div>
      </header>

      <main className="flex-1 px-6 pt-10 pb-32 max-w-7xl mx-auto w-full font-body">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-black tracking-widest text-[10px] uppercase mb-3 block">Exclusive Tribe Drop</span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#1c1c15] mb-4 uppercase">Tech Founders Merch</h1>
              <p className="text-stone-500 text-lg leading-relaxed font-medium">
                Curated hardware and apparel for the African digital frontier. Precision engineered for the builders of tomorrow.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="bg-stone-100 px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-stone-200 transition-all">
                <Filter size={18} />
                Filter
              </button>
              <button 
                onClick={() => onNavigate('showroom-ai')}
                className="bg-primary text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
              >
                <Box size={18} />
                Virtual Showroom
              </button>
            </div>
          </div>
        </section>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {shopItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => onNavigate('showroom-ai')}
              className={`${item.featured ? 'md:col-span-2 md:row-span-2' : ''} group bg-white rounded-[2.5rem] overflow-hidden flex flex-col transition-all hover:shadow-2xl hover:shadow-stone-200 border border-stone-100 cursor-pointer active:scale-[0.99]`}
            >
              <div className={`relative ${item.featured ? 'h-[400px]' : 'h-48'} overflow-hidden`}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                {item.tag && (
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <span className="bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                      {item.tag}
                    </span>
                  </div>
                )}
                {!item.featured && (
                  <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-xl text-primary shadow-sm hover:scale-110 transition-transform">
                    <Box size={20} />
                  </button>
                )}
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className={`${item.featured ? 'text-2xl' : 'text-lg'} font-black uppercase tracking-tight mb-2`}>
                    {item.title}
                  </h3>
                  <p className="text-stone-500 text-sm font-medium mb-6">{item.desc}</p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-stone-400 uppercase font-black tracking-widest">Price</span>
                    <span className={`${item.featured ? 'text-2xl' : 'text-lg'} font-black text-primary`}>{item.price}</span>
                  </div>
                  <button className={`${item.featured ? 'px-6 py-4 rounded-2xl' : 'size-12 rounded-full'} bg-stone-900 text-white flex items-center justify-center gap-3 font-black text-xs uppercase tracking-widest hover:bg-primary transition-colors active:scale-95 overflow-hidden`}>
                    {item.featured ? (
                      <>
                        <ShoppingCart size={20} />
                        Add to Cart
                      </>
                    ) : (
                      <ShoppingBag size={20} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collections */}
        <section className="mt-20">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Curated Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((coll, i) => (
              <div key={i} className="relative h-64 rounded-[3rem] overflow-hidden group cursor-pointer shadow-lg">
                <img 
                  src={coll.img} 
                  alt={coll.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h4 className="text-2xl font-black uppercase tracking-tight">{coll.title}</h4>
                  <p className="text-white/70 text-[10px] font-black uppercase tracking-widest">{coll.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* AI Assistant FAB */}
      <div className="fixed bottom-28 right-8 z-50">
        <div className="bg-white shadow-2xl rounded-[2rem] p-4 flex items-center gap-4 border border-stone-100">
          <div className="size-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
            <Bot size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">AI Sales Assistant</p>
            <p className="text-sm font-bold text-stone-900 tracking-tight">How can I help you build today?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
