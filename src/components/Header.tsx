
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Settings } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showSettings?: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  title = 'ChineseBuddie', 
  showBack = false,
  showSettings = true
}) => {
  const navigate = useNavigate();
  const { togglePinyin } = useApp();
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b py-3 px-4" 
           style={isMobile ? { paddingTop: 'env(safe-area-inset-top)' } : {}}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {showBack && (
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}
          <h1 className="text-lg font-medium">{title}</h1>
        </div>
        {showSettings && (
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={() => navigate('/settings')}>
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
