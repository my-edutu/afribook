/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Users, 
  PlayCircle, 
  Compass, 
  Wallet, 
  User, 
  Plus, 
  Bell, 
  Menu,
  Search,
  FileText,
  X,
  Settings,
  Shield,
  HelpCircle,
  LogOut,
  Heart,
  Sparkles
} from 'lucide-react';
import { Screen } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeScreen: Screen;
  onScreenChange: (screen: Screen) => void;
}

export default function Layout({ children, activeScreen, onScreenChange }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'tribes', icon: Users, label: 'Tribes' },
    { id: 'watch', icon: PlayCircle, label: 'Watch' },
    { id: 'afripay', icon: Wallet, label: 'AfriPay' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background-light shadow-2xl relative overflow-hidden">
      {/* Compact Top-Right Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Invisible backdrop for closing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[60] max-w-md mx-auto"
            />
            {/* Dropdown Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20, originX: '100%', originY: '0%' }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="absolute top-16 right-4 w-60 bg-white z-[70] rounded-3xl border border-slate-200 flex flex-col overflow-hidden"
            >
              <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                {[
                  { id: 'profile', icon: User, label: 'Profile', color: 'text-blue-500 bg-blue-50' },
                  { id: 'afripay', icon: Wallet, label: 'AfriPay', color: 'text-emerald-500 bg-emerald-50' },
                  { id: 'fundraiser', icon: Heart, label: 'Fund', color: 'text-rose-500 bg-rose-50' },
                  { id: 'showroom-ai', icon: Sparkles, label: 'AI Studio', color: 'text-amber-500 bg-amber-50' },
                  { id: 'settings', icon: Settings, label: 'Settings', color: 'text-slate-500 bg-slate-50' },
                  { id: 'help', icon: HelpCircle, label: 'Support', color: 'text-indigo-500 bg-indigo-50' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onScreenChange(item.id as Screen);
                      setIsMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className={`size-8 rounded-lg flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                      <item.icon size={18} />
                    </div>
                    <span className="font-bold text-slate-700 uppercase tracking-tight text-[11px]">{item.label}</span>
                  </button>
                ))}
                
                <div className="pt-2 border-t border-slate-100">
                  <button className="w-full flex items-center gap-3 p-3 rounded-2xl text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-all group">
                    <div className="size-8 rounded-lg bg-slate-50 group-hover:bg-rose-100 group-hover:text-rose-500 flex items-center justify-center transition-colors">
                      <LogOut size={18} />
                    </div>
                    <span className="font-bold uppercase tracking-tight text-[11px]">Logout</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Top Header - Sticky */}
      <header className="sticky top-0 z-50 bg-background-light/90 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-primary/5">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-black tracking-tight text-primary uppercase">AfriBook</h1>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors text-primary"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-24 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScreen}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white/95 backdrop-blur-md border-t border-primary/10 px-2 pb-6 pt-2 z-40">
        <div className="flex items-center justify-between relative">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onScreenChange(item.id as Screen)}
              className={`flex flex-col items-center gap-1 flex-1 py-1 transition-colors ${
                activeScreen === item.id ? 'text-primary' : 'text-slate-400'
              }`}
            >
              <item.icon size={24} fill={activeScreen === item.id ? 'currentColor' : 'none'} />
              <span className="text-[10px] font-bold uppercase tracking-tighter">{item.label}</span>
            </button>
          ))}
        </div>

      </nav>
    </div>
  );
}
