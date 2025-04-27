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

export interface Book {
  id: string;
  title: string;
  titleChinese: string;
  author: string;
  authorChinese: string;
  level: string;
  description: string;
  coverImage?: string;
  downloadLink?: string;
  audiobookLink?: string;
  chapters: BookChapter[];
}

export interface BookChapter {
  id: string;
  title: string;
  titleChinese: string;
  content: string;
  contentChinese: string;
  vocabulary: ChineseWord[];
  exercises?: any[];
}
