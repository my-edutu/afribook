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
      {/* Side Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] max-w-md mx-auto"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-4/5 bg-white z-[70] shadow-2xl flex flex-col max-w-md"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h2 className="text-xl font-black text-primary uppercase tracking-tight">Menu</h2>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4 px-4 space-y-2">
                {[
                  { id: 'profile', icon: User, label: 'My Profile' },
                  { id: 'afripay', icon: Wallet, label: 'AfriPay Wallet' },
                  { id: 'fundraiser', icon: Heart, label: 'Fundraisers' },
                  { id: 'showroom-ai', icon: Sparkles, label: 'AI Showroom' },
                  { id: 'settings', icon: Settings, label: 'Settings' },
                  { id: 'governance', icon: Shield, label: 'Governance' },
                  { id: 'help', icon: HelpCircle, label: 'Help Center' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onScreenChange(item.id as Screen);
                      setIsMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-primary/5 transition-colors group"
                  >
                    <div className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      <item.icon size={22} />
                    </div>
                    <span className="font-bold text-slate-700 uppercase tracking-tight text-sm">{item.label}</span>
                  </button>
                ))}
              </div>

              <div className="p-6 border-t border-slate-100">
                <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-rose-500 hover:bg-rose-50 transition-colors">
                  <div className="size-10 rounded-xl bg-rose-50 flex items-center justify-center">
                    <LogOut size={22} />
                  </div>
                  <span className="font-bold uppercase tracking-tight text-sm">Logout</span>
                </button>
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

        {/* Floating Action Button - Only on Home */}
        {activeScreen === 'home' && (
          <div className="absolute -top-20 right-4">
            <button 
              onClick={() => onScreenChange('claim-record')}
              className="w-16 h-16 bg-primary rounded-full shadow-2xl shadow-primary/40 border-4 border-background-light flex items-center justify-center text-white active:scale-95 transition-all hover:scale-105"
            >
              <Plus size={36} strokeWidth={3} />
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}
