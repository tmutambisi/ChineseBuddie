
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import ExerciseCard from '@/components/ExerciseCard';
import { Button } from '@/components/ui/button';
import { useApp } from '@/context/AppContext';
import { getExercisesByLessonId } from '@/data/exercises';
import { getLessonById } from '@/data/lessons';

const Exercises = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { completeLesson } = useApp();
  
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  
  const exercises = id ? getExercisesByLessonId(id) : [];
  const lesson = id ? getLessonById(id) : null;
  
  useEffect(() => {
    if (!id || exercises.length === 0 || !lesson) {
      navigate('/lessons', { replace: true });
    }
  }, [id, exercises.length, lesson, navigate]);
  
  const handleExerciseComplete = (correct: boolean, score: number) => {
    // Update the total score
    setTotalScore(prev => prev + score);
    
    // Move to next exercise or complete
    setTimeout(() => {
      if (currentExerciseIndex < exercises.length - 1) {
        setCurrentExerciseIndex(prev => prev + 1);
      } else {
        setCompleted(true);
        if (id) {
          completeLesson(id, totalScore + score);
        }
      }
    }, 1000);
  };
  
  if (!lesson || exercises.length === 0) {
    return null;
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header title={`${lesson.title} - Exercises`} showBack={true} showSettings={false} />
      
      <main className="flex-1 container px-4 py-6 pb-16">
        {!completed ? (
          <div>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">Exercise {currentExerciseIndex + 1} of {exercises.length}</h2>
                <span className="text-sm text-gray-500">Score: {totalScore}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full" 
                  style={{ width: `${((currentExerciseIndex) / exercises.length) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <ExerciseCard 
              exercise={exercises[currentExerciseIndex]} 
              onComplete={handleExerciseComplete}
            />
          </div>
        ) : (
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4">Great job! 做得好！</h2>
            <p className="text-lg mb-6">You've completed all exercises for this lesson.</p>
            <p className="text-xl font-semibold mb-8">Your score: {totalScore}</p>
            
            <div className="space-y-4">
              <Button 
                className="w-full max-w-xs"
                onClick={() => navigate(`/lesson/${id}`)}
              >
                Back to Lesson
              </Button>
              <Button 
                variant="outline"
                className="w-full max-w-xs"
                onClick={() => navigate('/lessons')}
              >
                All Lessons
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Exercises;
