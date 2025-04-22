
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Level = 'absolute-beginner' | 'beginner' | 'intermediate' | 'advanced';

interface Progress {
  [key: string]: {
    completed: boolean;
    score: number;
  };
}

interface AppContextType {
  currentLevel: Level;
  setCurrentLevel: (level: Level) => void;
  progress: Progress;
  completeLesson: (lessonId: string, score: number) => void;
  showPinyin: boolean;
  togglePinyin: () => void;
}

const defaultContext: AppContextType = {
  currentLevel: 'absolute-beginner',
  setCurrentLevel: () => {},
  progress: {},
  completeLesson: () => {},
  showPinyin: true,
  togglePinyin: () => {},
};

const AppContext = createContext<AppContextType>(defaultContext);

export const useApp = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLevel, setCurrentLevel] = useState<Level>('absolute-beginner');
  const [progress, setProgress] = useState<Progress>({});
  const [showPinyin, setShowPinyin] = useState(true);

  const completeLesson = (lessonId: string, score: number) => {
    setProgress((prev) => ({
      ...prev,
      [lessonId]: {
        completed: true,
        score: Math.max(score, prev[lessonId]?.score || 0),
      },
    }));
  };

  const togglePinyin = () => {
    setShowPinyin((prev) => !prev);
  };

  return (
    <AppContext.Provider
      value={{
        currentLevel,
        setCurrentLevel,
        progress,
        completeLesson,
        showPinyin,
        togglePinyin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
