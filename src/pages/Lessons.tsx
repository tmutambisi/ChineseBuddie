
import React from 'react';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import LessonCard from '@/components/LessonCard';
import { useApp } from '@/context/AppContext';
import { getLessonsByLevel } from '@/data/lessons';

const Lessons = () => {
  const { currentLevel } = useApp();
  const lessons = getLessonsByLevel(currentLevel);
  
  const levelTitles = {
    'absolute-beginner': 'Absolute Beginner',
    'beginner': 'Beginner',
    'intermediate': 'Intermediate',
    'advanced': 'Advanced',
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header title={`${levelTitles[currentLevel]} Lessons`} showBack={true} />
      
      <main className="flex-1 container px-4 py-6 pb-24">
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Select a lesson to start learning
          </p>
        </div>
        
        <div className="space-y-4">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
        
        {lessons.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">No lessons available for this level yet.</p>
          </div>
        )}
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Lessons;
