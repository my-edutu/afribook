/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Layout from './components/Layout';
import HomeScreen from './screens/HomeScreen';
import AfriRecordScreen from './screens/AfriRecordScreen';
import TribesScreen from './screens/TribesScreen';
import WatchScreen from './screens/WatchScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import AfriPayScreen from './screens/AfriPayScreen';
import ProfileScreen from './screens/ProfileScreen';
import CreateTribeScreen from './screens/CreateTribeScreen';
import ClaimNewRecordScreen from './screens/ClaimNewRecordScreen';
import TribeDetailScreen from './screens/TribeDetailScreen';
import TribeVotingScreen from './screens/TribeVotingScreen';
import FundraiserScreen from './screens/FundraiserScreen';
import TribeShopScreen from './screens/TribeShopScreen';
import ShowroomAIScreen from './screens/ShowroomAIScreen';
import { Screen } from './types';
import { Plus } from 'lucide-react';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('home');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <HomeScreen onNavigate={setActiveScreen} />;
      case 'afrirecord':
        return <AfriRecordScreen onNavigate={setActiveScreen} />;
      case 'tribes':
        return <TribesScreen onNavigate={setActiveScreen} />;
      case 'create-tribe':
        return <CreateTribeScreen onNavigate={setActiveScreen} />;
      case 'claim-new-record':
        return <ClaimNewRecordScreen onNavigate={setActiveScreen} />;
      case 'tribe-detail':
        return <TribeDetailScreen onNavigate={setActiveScreen} />;
      case 'tribe-voting':
        return <TribeVotingScreen onNavigate={setActiveScreen} />;
      case 'fundraiser':
        return <FundraiserScreen onNavigate={setActiveScreen} />;
      case 'tribe-shop':
        return <TribeShopScreen onNavigate={setActiveScreen} />;
      case 'showroom-ai':
        return <ShowroomAIScreen onNavigate={setActiveScreen} />;
      case 'watch':
        return <WatchScreen />;
      case 'discover':
        return <DiscoverScreen />;
      case 'afripay':
        return <AfriPayScreen />;
      case 'profile':
        return <ProfileScreen />;
      case 'claim-record':
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center">
            <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
              <Plus size={40} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Claim a New Record</h2>
            <p className="text-slate-500 mb-8">Start your journey to becoming an official record holder in Africa.</p>
            <button 
              onClick={() => setActiveScreen('home')}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg"
            >
              Get Started
            </button>
          </div>
        );
      default:
        return <HomeScreen onNavigate={setActiveScreen} />;
    }
  };

  return (
    <Layout activeScreen={activeScreen} onScreenChange={setActiveScreen}>
      {renderScreen()}
    </Layout>
  );
}
