
import React, { useState } from 'react';
import { Exercise } from '@/data/exercises';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface ExerciseCardProps {
  exercise: Exercise;
  onComplete: (correct: boolean, score: number) => void;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, onComplete }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false);
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!selectedAnswer) {
      toast({
        title: "Please select an answer",
        variant: "destructive",
      });
      return;
    }

    const correct = 
      Array.isArray(exercise.correctAnswer) 
        ? exercise.correctAnswer.includes(selectedAnswer)
        : selectedAnswer === exercise.correctAnswer;
    
    setIsCorrect(correct);
    
    // Calculate score (simple scoring: 10 for correct, 0 for incorrect)
    const score = correct ? 10 : 0;
    
    // Call the onComplete callback
    onComplete(correct, score);
    
    // Show a toast
    toast({
      title: correct ? "Correct! 太好了！" : "Incorrect. Try again!",
      variant: correct ? "default" : "destructive",
    });
  };

  return (
    <div className="exercise-card">
      <h3 className="text-lg font-medium mb-4">{exercise.question}</h3>
      
      {exercise.type === 'multiple-choice' && exercise.options && (
        <div className="space-y-2 mb-6">
          {exercise.options.map((option, index) => (
            <div 
              key={index}
              className={`p-3 border rounded cursor-pointer transition-colors ${
                selectedAnswer === option
                  ? 'bg-primary/10 border-primary'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
              onClick={() => setSelectedAnswer(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
      
      {exercise.type === 'translation' && (
        <div className="mb-6">
          <textarea
            className="w-full p-3 border rounded"
            rows={3}
            placeholder="Type your translation here..."
            value={selectedAnswer}
            onChange={(e) => setSelectedAnswer(e.target.value)}
          />
        </div>
      )}

      {exercise.type === 'fill-in-blank' && (
        <div className="mb-6">
          <input
            className="w-full p-3 border rounded"
            placeholder="Fill in the blank..."
            value={selectedAnswer}
            onChange={(e) => setSelectedAnswer(e.target.value)}
          />
        </div>
      )}
      
      <div className="flex justify-between items-center">
        <Button 
          variant="outline" 
          onClick={() => setShowHint(!showHint)}
        >
          {showHint ? "Hide Hint" : "Show Hint"}
        </Button>
        
        <Button 
          onClick={handleSubmit}
        >
          Check Answer
        </Button>
      </div>
      
      {showHint && exercise.hint && (
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 rounded">
          <p>{exercise.hint}</p>
        </div>
      )}
      
      {isCorrect !== null && (
        <div className={`mt-4 p-3 rounded ${
          isCorrect 
            ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200' 
            : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200'
        }`}>
          <p>{isCorrect ? "Correct! 太好了！" : "Incorrect. The correct answer is:"}</p>
          {!isCorrect && (
            <p className="font-medium mt-1">
              {Array.isArray(exercise.correctAnswer) 
                ? exercise.correctAnswer.join(', ') 
                : exercise.correctAnswer}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ExerciseCard;
