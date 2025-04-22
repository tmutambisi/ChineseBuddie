
export interface Character {
  character: string;
  pinyin: string;
  meaning: string;
  strokes: number;
  level: 'absolute-beginner' | 'beginner' | 'intermediate' | 'advanced';
}

export const characters: Character[] = [
  // Absolute Beginner Characters
  {
    character: '人',
    pinyin: 'rén',
    meaning: 'person',
    strokes: 2,
    level: 'absolute-beginner',
  },
  {
    character: '口',
    pinyin: 'kǒu',
    meaning: 'mouth',
    strokes: 3,
    level: 'absolute-beginner',
  },
  {
    character: '日',
    pinyin: 'rì',
    meaning: 'sun/day',
    strokes: 4,
    level: 'absolute-beginner',
  },
  {
    character: '月',
    pinyin: 'yuè',
    meaning: 'moon/month',
    strokes: 4,
    level: 'absolute-beginner',
  },
  {
    character: '水',
    pinyin: 'shuǐ',
    meaning: 'water',
    strokes: 4,
    level: 'absolute-beginner',
  },
  // Beginner Characters
  {
    character: '木',
    pinyin: 'mù',
    meaning: 'tree/wood',
    strokes: 4,
    level: 'beginner',
  },
  {
    character: '火',
    pinyin: 'huǒ',
    meaning: 'fire',
    strokes: 4,
    level: 'beginner',
  },
  {
    character: '土',
    pinyin: 'tǔ',
    meaning: 'earth',
    strokes: 3,
    level: 'beginner',
  },
  {
    character: '金',
    pinyin: 'jīn',
    meaning: 'gold/metal',
    strokes: 8,
    level: 'beginner',
  },
  // Intermediate Characters
  {
    character: '心',
    pinyin: 'xīn',
    meaning: 'heart',
    strokes: 4,
    level: 'intermediate',
  },
  {
    character: '手',
    pinyin: 'shǒu',
    meaning: 'hand',
    strokes: 4,
    level: 'intermediate',
  },
  {
    character: '山',
    pinyin: 'shān',
    meaning: 'mountain',
    strokes: 3,
    level: 'intermediate',
  },
  // Advanced Characters
  {
    character: '鸟',
    pinyin: 'niǎo',
    meaning: 'bird',
    strokes: 5,
    level: 'advanced',
  },
  {
    character: '龙',
    pinyin: 'lóng',
    meaning: 'dragon',
    strokes: 5,
    level: 'advanced',
  },
];

export const getCharactersByLevel = (level: string) => {
  return characters.filter(char => char.level === level);
};
