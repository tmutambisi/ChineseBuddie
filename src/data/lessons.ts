import { Lesson } from './types';
import { absoluteBeginnerLessons } from './absolute-beginner-lessons';
import { beginnerLessons } from './beginner-lessons';
import { intermediateLessons } from './intermediate-lessons';
import { advancedLessons } from './advanced-lessons';

export const lessons: Lesson[] = [
  ...absoluteBeginnerLessons,
  ...beginnerLessons,
  ...intermediateLessons,
  ...advancedLessons
];

// Helper function to get lessons by level
export const getLessonsByLevel = (level: string) => {
  return lessons.filter((lesson) => lesson.level === level);
};

// Helper function to get a lesson by ID
export const getLessonById = (id: string) => {
  return lessons.find((lesson) => lesson.id === id);
};

// Re-export types
export type { ChineseWord, Lesson } from './types';
