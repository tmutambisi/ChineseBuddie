
import React from 'react';
import { NumberOne, NumberTwo, NumberThree, NumberFour } from 'lucide-react';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import LevelCard from '@/components/LevelCard';
import { Level } from '@/context/AppContext';

const Index = () => {
  const levels: {
    level: Level;
    title: string;
    description: string;
    color: string;
    icon: React.ReactNode;
  }[] = [
    {
      level: 'absolute-beginner',
      title: 'Absolute Beginner',
      description: 'Start your journey with basic phrases and characters',
      color: 'bg-china-red text-white',
      icon: <NumberOne />,
    },
    {
      level: 'beginner',
      title: 'Beginner',
      description: 'Build your vocabulary and simple conversations',
      color: 'bg-china-gold text-china-black',
      icon: <NumberTwo />,
    },
    {
      level: 'intermediate',
      title: 'Intermediate',
      description: 'Expand your skills with more complex sentences',
      color: 'bg-china-jade text-white',
      icon: <NumberThree />,
    },
    {
      level: 'advanced',
      title: 'Advanced',
      description: 'Master idioms and cultural expressions',
      color: 'bg-china-ink text-white',
      icon: <NumberFour />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header showBack={false} />
      
      <main className="flex-1 container px-4 py-6 pb-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome to Mandarin Journey</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Start your adventure learning Chinese!
          </p>
        </div>
        
        <h2 className="text-xl font-semibold mb-4">Choose Your Level</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {levels.map((levelInfo) => (
            <LevelCard 
              key={levelInfo.level}
              level={levelInfo.level}
              title={levelInfo.title}
              description={levelInfo.description}
              color={levelInfo.color}
              icon={levelInfo.icon}
            />
          ))}
        </div>
        
        <div className="mt-8 p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Quick Start Tip</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Begin with the "Absolute Beginner" level to learn basic greetings and numbers in Chinese.
            Practice every day for the best results!
          </p>
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Index;
