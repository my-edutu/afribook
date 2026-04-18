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
  FileText
} from 'lucide-react';
import { Screen } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeScreen: Screen;
  onScreenChange: (screen: Screen) => void;
}

export default function Layout({ children, activeScreen, onScreenChange }: LayoutProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'tribes', icon: Users, label: 'Tribes' },
    { id: 'watch', icon: PlayCircle, label: 'Watch' },
    { id: 'afripay', icon: Wallet, label: 'AfriPay' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background-light shadow-2xl relative overflow-hidden">
      {/* Top Header - Sticky */}
      <header className="sticky top-0 z-50 bg-background-light/90 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-primary/5">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-black tracking-tight text-primary italic uppercase italic">AfriBook</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-primary/10 transition-colors text-primary">
            <Search size={22} />
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
