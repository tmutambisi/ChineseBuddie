
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-china-red mb-4">404</h1>
        <p className="text-2xl font-medium mb-6">Page not found</p>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        
        <Button 
          size="lg"
          className="flex items-center"
          onClick={() => navigate('/')}
        >
          <Home className="mr-2 h-5 w-5" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
