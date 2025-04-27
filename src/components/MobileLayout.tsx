import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import BottomNavigation from './BottomNavigation';

interface MobileLayoutProps {
  children: React.ReactNode;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if we're running on a mobile device
    setIsMobile(Capacitor.isNativePlatform());

    // Handle back button on Android
    if (Capacitor.getPlatform() === 'android') {
      App.addListener('backButton', ({ canGoBack }) => {
        if (canGoBack) {
          window.history.back();
        } else {
          App.exitApp();
        }
      });
    }

    return () => {
      // Clean up listeners
      if (Capacitor.getPlatform() === 'android') {
        App.removeAllListeners();
      }
    };
  }, []);

  if (!isMobile) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 overflow-y-auto pb-16">
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
};

export default MobileLayout; 