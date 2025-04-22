
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, Check } from 'lucide-react';
import { Lesson } from '@/data/lessons';
import { useApp } from '@/context/AppContext';

interface LessonCardProps {
  lesson: Lesson;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => {
  const navigate = useNavigate();
  const { progress } = useApp();
  
  const isCompleted = progress[lesson.id]?.completed || false;
  
  return (
    <div 
      className="lesson-card cursor-pointer"
      onClick={() => navigate(`/lesson/${lesson.id}`)}
    >
      {isCompleted && (
        <div className="absolute top-2 right-2 bg-green-100 text-green-600 p-1 rounded-full">
          <Check className="h-4 w-4" />
        </div>
      )}
      <div className="flex items-start">
        <div className="bg-primary/10 p-2 rounded-lg mr-3">
          <Book className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-medium">{lesson.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{lesson.description}</p>
          <div className="flex items-center mt-2">
            <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
              {lesson.type}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
