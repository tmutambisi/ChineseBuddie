
import React from 'react';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import { useApp } from '@/context/AppContext';
import { lessons } from '@/data/lessons';
import { CheckCircle, Circle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const ProgressPage = () => {
  const { progress } = useApp();
  
  const levelProgress = {
    'absolute-beginner': 0,
    'beginner': 0,
    'intermediate': 0,
    'advanced': 0
  };
  
  const levelLessons = {
    'absolute-beginner': 0,
    'beginner': 0,
    'intermediate': 0,
    'advanced': 0
  };
  
  // Calculate progress per level
  lessons.forEach(lesson => {
    levelLessons[lesson.level]++;
    if (progress[lesson.id]?.completed) {
      levelProgress[lesson.level]++;
    }
  });
  
  const calculatePercentage = (level: string) => {
    if (levelLessons[level] === 0) return 0;
    return Math.round((levelProgress[level] / levelLessons[level]) * 100);
  };
  
  // Calculate total progress
  const totalLessons = lessons.length;
  const completedLessons = Object.values(progress).filter(p => p.completed).length;
  const totalPercentage = totalLessons ? Math.round((completedLessons / totalLessons) * 100) : 0;
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header title="Learning Progress" showBack={true} />
      
      <main className="flex-1 container px-4 py-6 pb-24">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Overall Progress</h2>
          <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Total Completion</span>
              <span className="text-sm">{completedLessons} of {totalLessons} lessons</span>
            </div>
            <Progress value={totalPercentage} className="h-2" />
            <div className="text-right mt-1 text-sm text-gray-500">{totalPercentage}%</div>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mb-4">Progress by Level</h2>
        
        <div className="space-y-4">
          {Object.entries(levelLessons).map(([level, count]) => (
            <div key={level} className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium capitalize">{level.replace('-', ' ')}</span>
                <span className="text-sm">{levelProgress[level]} of {count} lessons</span>
              </div>
              <Progress value={calculatePercentage(level)} className="h-2" />
              <div className="text-right mt-1 text-sm text-gray-500">{calculatePercentage(level)}%</div>
            </div>
          ))}
        </div>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">Completed Lessons</h2>
        
        <div className="space-y-2">
          {lessons.map(lesson => (
            <div 
              key={lesson.id} 
              className="flex items-center p-3 border rounded bg-white dark:bg-gray-800"
            >
              {progress[lesson.id]?.completed ? (
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              ) : (
                <Circle className="h-5 w-5 text-gray-300 mr-3" />
              )}
              <div>
                <div className="font-medium">{lesson.title}</div>
                <div className="text-xs text-gray-500 capitalize">{lesson.level.replace('-', ' ')}</div>
              </div>
              {progress[lesson.id]?.completed && (
                <div className="ml-auto text-sm font-medium">
                  Score: {progress[lesson.id].score}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default ProgressPage;
