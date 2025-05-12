import React from 'react';
import { 
  Circle as CircleOne, 
  Circle as CircleTwo, 
  Circle as CircleThree, 
  Circle as CircleFour,
  BookOpen
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import LevelCard from '@/components/LevelCard';
import { Level } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import FeedbackForm from '@/components/FeedbackForm';
import { hskBooks } from '@/data/hsk-books';

const Index = () => {
  const navigate = useNavigate();
  
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
      icon: <CircleOne />,
    },
    {
      level: 'beginner',
      title: 'Beginner',
      description: 'Build your vocabulary and simple conversations',
      color: 'bg-china-gold text-china-black',
      icon: <CircleTwo />,
    },
    {
      level: 'intermediate',
      title: 'Intermediate',
      description: 'Expand your skills with more complex sentences',
      color: 'bg-china-jade text-white',
      icon: <CircleThree />,
    },
    {
      level: 'advanced',
      title: 'Advanced',
      description: 'Master idioms and cultural expressions',
      color: 'bg-china-ink text-white',
      icon: <CircleFour />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header showBack={false} />
      
      <main className="flex-1 container px-4 py-6 pb-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome to ChineseBuddie</h1>
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
        
        <div className="mt-8 p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-1">Reading Practice</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Improve your Chinese with our collection of books at different difficulty levels.
              </p>
            </div>
            <Button 
              onClick={() => navigate('/books')}
              className="flex items-center"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Browse Books
            </Button>
          </div>
        </div>

        {/* HSK Book Covers Section */}
        <div className="mt-8 p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">HSK Standard Course Books</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {hskBooks.map((book) => (
              <div
                key={book.id}
                className="flex flex-col items-center cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => navigate(`/book/${book.id}`)}
              >
                <div className="relative w-full aspect-[3/4] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md mb-2">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity duration-200" />
                </div>
                <div className="text-center">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200 block">
                    {book.title}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 block">
                    {book.titleChinese}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mt-8 p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">We value your feedback!</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Let us know your thoughts, suggestions, or issues. Your feedback helps us improve ChineseBuddie.
          </p>
          <FeedbackForm />
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Index;
