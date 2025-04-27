import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { 
  loadProgress, 
  saveProgress, 
  loadCurrentLevel, 
  saveCurrentLevel,
  loadUserSettings,
  saveUserSettings,
  updateLessonProgress,
  ProgressData,
  UserSettings
} from '@/lib/storage';

export type Level = 'absolute-beginner' | 'beginner' | 'intermediate' | 'advanced';

interface AppContextType {
  currentLevel: Level;
  setCurrentLevel: (level: Level) => void;
  progress: ProgressData;
  completeLesson: (lessonId: string, score: number, timeSpent?: number) => void;
  showPinyin: boolean;
  togglePinyin: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  notifications: boolean;
  toggleNotifications: () => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  isLoading: boolean;
  resetProgress: () => void;
}

const defaultContext: AppContextType = {
  currentLevel: 'absolute-beginner',
  setCurrentLevel: () => {},
  progress: {},
  completeLesson: () => {},
  showPinyin: true,
  togglePinyin: () => {},
  darkMode: false,
  toggleDarkMode: () => {},
  notifications: true,
  toggleNotifications: () => {},
  soundEnabled: true,
  toggleSound: () => {},
  isLoading: true,
  resetProgress: () => {},
};

const AppContext = createContext<AppContextType>(defaultContext);

export const useApp = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLevel, setCurrentLevelState] = useState<Level>('absolute-beginner');
  const [progress, setProgress] = useState<ProgressData>({});
  const [isLoading, setIsLoading] = useState(true);
  
  // User settings
  const [showPinyin, setShowPinyin] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Load saved data on initial render
  useEffect(() => {
    const loadSavedData = async () => {
      try {
        setIsLoading(true);
        
        // Load progress data
        const savedProgress = await loadProgress();
        setProgress(savedProgress);
        
        // Load current level
        const savedLevel = await loadCurrentLevel();
        setCurrentLevelState(savedLevel as Level);
        
        // Load user settings
        const savedSettings = await loadUserSettings();
        setShowPinyin(savedSettings.showPinyin);
        setDarkMode(savedSettings.darkMode);
        setNotifications(savedSettings.notifications);
        setSoundEnabled(savedSettings.soundEnabled);
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading saved data:', error);
        setIsLoading(false);
      }
    };
    
    loadSavedData();
  }, []);

  // Save progress whenever it changes
  useEffect(() => {
    if (!isLoading) {
      saveProgress(progress);
    }
  }, [progress, isLoading]);

  // Save current level whenever it changes
  useEffect(() => {
    if (!isLoading) {
      saveCurrentLevel(currentLevel);
    }
  }, [currentLevel, isLoading]);

  // Save user settings whenever they change
  useEffect(() => {
    if (!isLoading) {
      saveUserSettings({
        showPinyin,
        darkMode,
        notifications,
        soundEnabled,
      });
    }
  }, [showPinyin, darkMode, notifications, soundEnabled, isLoading]);

  const setCurrentLevel = (level: Level) => {
    setCurrentLevelState(level);
  };

  const completeLesson = async (lessonId: string, score: number, timeSpent?: number) => {
    // Update local state
    setProgress((prev) => ({
      ...prev,
      [lessonId]: {
        completed: true,
        score: Math.max(score, prev[lessonId]?.score || 0),
        lastAccessed: new Date().toISOString(),
        timeSpent: (prev[lessonId]?.timeSpent || 0) + (timeSpent || 0),
      },
    }));
    
    // Also update in storage
    await updateLessonProgress(lessonId, score, timeSpent);
  };

  const togglePinyin = () => {
    setShowPinyin((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const toggleNotifications = () => {
    setNotifications((prev) => !prev);
  };

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  const resetProgress = async () => {
    setProgress({});
    setCurrentLevelState('absolute-beginner');
    // Storage will be updated via the useEffect hooks
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
        darkMode,
        toggleDarkMode,
        notifications,
        toggleNotifications,
        soundEnabled,
        toggleSound,
        isLoading,
        resetProgress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
