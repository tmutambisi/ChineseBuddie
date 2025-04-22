
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import WordCard from '@/components/WordCard';
import { Button } from '@/components/ui/button';
import { getLessonById } from '@/data/lessons';
import { getExercisesByLessonId } from '@/data/exercises';
import { ArrowRight } from 'lucide-react';

const LessonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(id ? getLessonById(id) : null);
  const exercises = id ? getExercisesByLessonId(id) : [];
  
  useEffect(() => {
    if (id) {
      const lessonData = getLessonById(id);
      setLesson(lessonData);
      
      if (!lessonData) {
        navigate('/lessons', { replace: true });
      }
    }
  }, [id, navigate]);
  
  if (!lesson) {
    return null;
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header title={lesson.title} showBack={true} />
      
      <main className="flex-1 container px-4 py-6 pb-24">
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {lesson.description}
          </p>
          <div className="flex items-center">
            <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
              {lesson.type}
            </span>
            <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full ml-2">
              {lesson.level.replace('-', ' ')}
            </span>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mb-4">Vocabulary</h2>
        
        <div className="space-y-4 mb-8">
          {lesson.content.map((word, index) => (
            <WordCard key={index} word={word} showExample={true} />
          ))}
        </div>
        
        {exercises.length > 0 && (
          <div className="mt-8">
            <Button 
              className="w-full flex items-center justify-center"
              onClick={() => navigate(`/exercises/${id}`)}
            >
              Practice Exercises
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default LessonDetail;
