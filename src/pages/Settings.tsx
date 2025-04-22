
import React from 'react';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Info } from 'lucide-react';

const Settings = () => {
  const { showPinyin, togglePinyin } = useApp();
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header title="Settings" showBack={true} showSettings={false} />
      
      <main className="flex-1 container px-4 py-6 pb-24">
        <div className="space-y-6">
          <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Display Settings</h2>
            
            <div className="flex items-center justify-between py-2">
              <div>
                <span className="font-medium">Show Pinyin</span>
                <p className="text-sm text-gray-500">Show pronunciation guide for Chinese characters</p>
              </div>
              <Switch checked={showPinyin} onCheckedChange={togglePinyin} />
            </div>
          </div>
          
          <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">About the App</h2>
            
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <p>Mandarin Journey is designed to help you learn Chinese step by step.</p>
              <p>Version 1.0.0</p>
            </div>
            
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 rounded flex items-start">
              <Info className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-sm">
                This app includes content for absolute beginners through advanced learners.
                All content is stored locally on your device.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Settings;
