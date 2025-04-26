
export interface ChineseWord {
  chinese: string;
  pinyin: string;
  english: string;
  example?: {
    chinese: string;
    pinyin: string;
    english: string;
  };
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  level: 'absolute-beginner' | 'beginner' | 'intermediate' | 'advanced';
  type: 'vocabulary' | 'grammar' | 'characters' | 'conversation';
  content: ChineseWord[];
}
