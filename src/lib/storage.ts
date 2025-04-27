import { Preferences } from '@capacitor/preferences';

// Storage keys
const STORAGE_KEYS = {
  PROGRESS: 'user_progress',
  CURRENT_LEVEL: 'current_level',
  SHOW_PINYIN: 'show_pinyin',
  USER_SETTINGS: 'user_settings',
};

// Progress data interface
export interface ProgressData {
  [key: string]: {
    completed: boolean;
    score: number;
    lastAccessed?: string;
    timeSpent?: number; // in seconds
  };
}

// User settings interface
export interface UserSettings {
  showPinyin: boolean;
  darkMode: boolean;
  notifications: boolean;
  soundEnabled: boolean;
}

// Default user settings
const DEFAULT_SETTINGS: UserSettings = {
  showPinyin: true,
  darkMode: false,
  notifications: true,
  soundEnabled: true,
};

/**
 * Save progress data to local storage
 */
export const saveProgress = async (progress: ProgressData): Promise<void> => {
  try {
    await Preferences.set({
      key: STORAGE_KEYS.PROGRESS,
      value: JSON.stringify(progress),
    });
    console.log('Progress saved successfully');
  } catch (error) {
    console.error('Error saving progress:', error);
  }
};

/**
 * Load progress data from local storage
 */
export const loadProgress = async (): Promise<ProgressData> => {
  try {
    const { value } = await Preferences.get({ key: STORAGE_KEYS.PROGRESS });
    return value ? JSON.parse(value) : {};
  } catch (error) {
    console.error('Error loading progress:', error);
    return {};
  }
};

/**
 * Save current level to local storage
 */
export const saveCurrentLevel = async (level: string): Promise<void> => {
  try {
    await Preferences.set({
      key: STORAGE_KEYS.CURRENT_LEVEL,
      value: level,
    });
  } catch (error) {
    console.error('Error saving current level:', error);
  }
};

/**
 * Load current level from local storage
 */
export const loadCurrentLevel = async (): Promise<string> => {
  try {
    const { value } = await Preferences.get({ key: STORAGE_KEYS.CURRENT_LEVEL });
    return value || 'absolute-beginner';
  } catch (error) {
    console.error('Error loading current level:', error);
    return 'absolute-beginner';
  }
};

/**
 * Save user settings to local storage
 */
export const saveUserSettings = async (settings: UserSettings): Promise<void> => {
  try {
    await Preferences.set({
      key: STORAGE_KEYS.USER_SETTINGS,
      value: JSON.stringify(settings),
    });
  } catch (error) {
    console.error('Error saving user settings:', error);
  }
};

/**
 * Load user settings from local storage
 */
export const loadUserSettings = async (): Promise<UserSettings> => {
  try {
    const { value } = await Preferences.get({ key: STORAGE_KEYS.USER_SETTINGS });
    return value ? JSON.parse(value) : DEFAULT_SETTINGS;
  } catch (error) {
    console.error('Error loading user settings:', error);
    return DEFAULT_SETTINGS;
  }
};

/**
 * Update progress for a specific lesson
 */
export const updateLessonProgress = async (
  lessonId: string,
  score: number,
  timeSpent?: number
): Promise<void> => {
  try {
    const currentProgress = await loadProgress();
    const now = new Date().toISOString();
    
    // Update or add progress for this lesson
    currentProgress[lessonId] = {
      completed: true,
      score: Math.max(score, currentProgress[lessonId]?.score || 0),
      lastAccessed: now,
      timeSpent: (currentProgress[lessonId]?.timeSpent || 0) + (timeSpent || 0),
    };
    
    await saveProgress(currentProgress);
  } catch (error) {
    console.error('Error updating lesson progress:', error);
  }
};

/**
 * Clear all progress data (for testing or reset)
 */
export const clearAllProgress = async (): Promise<void> => {
  try {
    await Preferences.remove({ key: STORAGE_KEYS.PROGRESS });
    await Preferences.remove({ key: STORAGE_KEYS.CURRENT_LEVEL });
    console.log('All progress data cleared');
  } catch (error) {
    console.error('Error clearing progress data:', error);
  }
}; 