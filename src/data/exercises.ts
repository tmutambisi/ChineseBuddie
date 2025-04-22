
import { getLessonById } from './lessons';

export interface Exercise {
  id: string;
  lessonId: string;
  type: 'multiple-choice' | 'translation' | 'matching' | 'fill-in-blank';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  hint?: string;
}

export const exercises: Exercise[] = [
  // Absolute Beginner Exercises
  {
    id: 'ex-ab-greeting-1',
    lessonId: 'ab-greeting',
    type: 'multiple-choice',
    question: 'How do you say "hello" in Chinese?',
    options: ['再见', '你好', '早上好', '晚上好'],
    correctAnswer: '你好',
    hint: 'This is the most common greeting in Chinese.',
  },
  {
    id: 'ex-ab-greeting-2',
    lessonId: 'ab-greeting',
    type: 'multiple-choice',
    question: 'Which phrase means "goodbye" in Chinese?',
    options: ['你好', '早上好', '再见', '晚上好'],
    correctAnswer: '再见',
    hint: 'This literally means "see again".',
  },
  {
    id: 'ex-ab-numbers-1',
    lessonId: 'ab-numbers',
    type: 'matching',
    question: 'Match the numbers with their Chinese characters:',
    options: ['一', '二', '三', '四', '五'],
    correctAnswer: ['one', 'two', 'three', 'four', 'five'],
    hint: 'Remember the stroke order of Chinese characters.',
  },
  // Beginner Exercises
  {
    id: 'ex-b-family-1',
    lessonId: 'b-family',
    type: 'translation',
    question: 'Translate "My father is a doctor." to Chinese.',
    correctAnswer: '我爸爸是医生。',
    hint: 'Use the vocabulary from the Family Members lesson.',
  },
  // Intermediate Exercises
  {
    id: 'ex-i-weather-1',
    lessonId: 'i-weather',
    type: 'fill-in-blank',
    question: 'Complete the sentence: 今天是_____，我们去公园吧。 (Today is sunny, let\'s go to the park.)',
    correctAnswer: '晴天',
    hint: 'This is a weather term from your lesson.',
  },
  // Advanced Exercises
  {
    id: 'ex-a-idioms-1',
    lessonId: 'a-idioms',
    type: 'multiple-choice',
    question: 'What does "一举两得" mean?',
    options: [
      'to make a big mistake', 
      'kill two birds with one stone', 
      'to be very busy', 
      'easy come, easy go'
    ],
    correctAnswer: 'kill two birds with one stone',
    hint: 'Think about achieving two things with one action.',
  },
];

export const getExercisesByLessonId = (lessonId: string) => {
  return exercises.filter(exercise => exercise.lessonId === lessonId);
};

export const getExerciseById = (id: string) => {
  return exercises.find(exercise => exercise.id === id);
};
