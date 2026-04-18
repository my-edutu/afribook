/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ChevronRight, 
  Bell, 
  Lock, 
  Eye, 
  Smartphone, 
  Globe, 
  HelpCircle,
  Info
} from 'lucide-react';

interface SettingsScreenProps {
  onNavigate?: (screen: any) => void;
}

export default function SettingsScreen({ onNavigate }: SettingsScreenProps) {
  const sections = [
    {
      title: 'Account',
      items: [
        { icon: Bell, label: 'Notifications', value: 'On' },
        { icon: Lock, label: 'Security & Privacy', value: 'Managed' },
        { icon: Eye, label: 'Profile Visibility', value: 'Public' },
      ]
    },
    {
      title: 'Preferences',
      items: [
        { icon: Smartphone, label: 'App Theme', value: 'Light' },
        { icon: Globe, label: 'Language', value: 'English (UK)' },
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help Center', value: '' },
        { icon: Info, label: 'About AfriBook', value: 'v2.4.0' },
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <div className="p-6 bg-white border-b border-slate-100">
        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Settings</h2>
        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Manage your digital heritage experience</p>
      </div>

      <div className="p-4 space-y-8">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-3">
            <h3 className="px-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{section.title}</h3>
            <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden">
              {section.items.map((item, i) => (
                <button 
                  key={i}
                  className={`w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors ${
                    i !== section.items.length - 1 ? 'border-b border-slate-50' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                      <item.icon size={20} />
                    </div>
                    <span className="font-bold text-slate-700 text-sm">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.value && <span className="text-[10px] font-black text-primary uppercase tracking-widest">{item.value}</span>}
                    <ChevronRight size={16} className="text-slate-300" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 mt-4">
        <button className="w-full py-4 rounded-2xl bg-slate-100 text-slate-600 font-bold text-sm uppercase tracking-widest hover:bg-slate-200 transition-colors">
          Clear Cache
        </button>
      </div>
    </div>
  );
}
