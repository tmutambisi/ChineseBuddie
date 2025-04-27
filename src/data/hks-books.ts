import { Book } from './types';

// HKS Books data
export const hksBooks: Book[] = [
  {
    id: 'hks1',
    title: 'HKS 1',
    titleChinese: 'HKS 1',
    author: 'HKS Series',
    authorChinese: 'HKS 系列',
    level: 'beginner',
    description: 'HKS 1 is designed for absolute beginners to learn basic Chinese vocabulary and grammar.',
    coverImage: '/images/books/hks1.jpg',
    chapters: [
      {
        id: 'hks1-chapter-1',
        title: 'Chapter 1',
        titleChinese: '第一章',
        content: 'Welcome to HKS 1. This chapter introduces basic greetings and introductions.',
        contentChinese: '欢迎来到 HKS 1。本章介绍基本的问候和自我介绍。',
        vocabulary: [
          {
            chinese: '你好',
            pinyin: 'nǐ hǎo',
            english: 'hello',
            example: {
              chinese: '你好，我叫小明。',
              pinyin: 'nǐ hǎo, wǒ jiào xiǎo míng.',
              english: 'Hello, my name is Xiaoming.'
            }
          },
          {
            chinese: '再见',
            pinyin: 'zài jiàn',
            english: 'goodbye',
            example: {
              chinese: '再见，明天见。',
              pinyin: 'zài jiàn, míng tiān jiàn.',
              english: 'Goodbye, see you tomorrow.'
            }
          }
        ]
      },
      {
        id: 'hks1-chapter-2',
        title: 'Chapter 2',
        titleChinese: '第二章',
        content: 'This chapter covers numbers and basic counting in Chinese.',
        contentChinese: '本章介绍数字和基本计数。',
        vocabulary: [
          {
            chinese: '一',
            pinyin: 'yī',
            english: 'one',
            example: {
              chinese: '我有一个苹果。',
              pinyin: 'wǒ yǒu yī gè píng guǒ.',
              english: 'I have one apple.'
            }
          },
          {
            chinese: '二',
            pinyin: 'èr',
            english: 'two',
            example: {
              chinese: '我有两个苹果。',
              pinyin: 'wǒ yǒu liǎng gè píng guǒ.',
              english: 'I have two apples.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'hks2',
    title: 'HKS 2',
    titleChinese: 'HKS 2',
    author: 'HKS Series',
    authorChinese: 'HKS 系列',
    level: 'beginner',
    description: 'HKS 2 builds on the foundations of HKS 1, introducing more vocabulary and grammar structures.',
    coverImage: '/images/books/hks2.jpg',
    chapters: [
      {
        id: 'hks2-chapter-1',
        title: 'Chapter 1',
        titleChinese: '第一章',
        content: 'This chapter introduces family members and relationships.',
        contentChinese: '本章介绍家庭成员和关系。',
        vocabulary: [
          {
            chinese: '爸爸',
            pinyin: 'bà ba',
            english: 'father',
            example: {
              chinese: '我爸爸是医生。',
              pinyin: 'wǒ bà ba shì yī shēng.',
              english: 'My father is a doctor.'
            }
          },
          {
            chinese: '妈妈',
            pinyin: 'mā ma',
            english: 'mother',
            example: {
              chinese: '我妈妈是老师。',
              pinyin: 'wǒ mā ma shì lǎo shī.',
              english: 'My mother is a teacher.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'hks3',
    title: 'HKS 3',
    titleChinese: 'HKS 3',
    author: 'HKS Series',
    authorChinese: 'HKS 系列',
    level: 'intermediate',
    description: 'HKS 3 focuses on more complex grammar structures and expanded vocabulary for daily conversations.',
    coverImage: '/images/books/hks3.jpg',
    chapters: [
      {
        id: 'hks3-chapter-1',
        title: 'Chapter 1',
        titleChinese: '第一章',
        content: 'This chapter covers daily routines and activities.',
        contentChinese: '本章介绍日常活动和习惯。',
        vocabulary: [
          {
            chinese: '起床',
            pinyin: 'qǐ chuáng',
            english: 'to get up',
            example: {
              chinese: '我每天早上六点起床。',
              pinyin: 'wǒ měi tiān zǎo shang liù diǎn qǐ chuáng.',
              english: 'I get up at six every morning.'
            }
          },
          {
            chinese: '睡觉',
            pinyin: 'shuì jiào',
            english: 'to sleep',
            example: {
              chinese: '我每天晚上十点睡觉。',
              pinyin: 'wǒ měi tiān wǎn shang shí diǎn shuì jiào.',
              english: 'I go to sleep at ten every night.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'hks4',
    title: 'HKS 4',
    titleChinese: 'HKS 4',
    author: 'HKS Series',
    authorChinese: 'HKS 系列',
    level: 'intermediate',
    description: 'HKS 4 introduces more advanced grammar concepts and vocabulary for complex conversations.',
    coverImage: '/images/books/hks4.jpg',
    chapters: [
      {
        id: 'hks4-chapter-1',
        title: 'Chapter 1',
        titleChinese: '第一章',
        content: 'This chapter covers expressing opinions and preferences.',
        contentChinese: '本章介绍表达意见和偏好。',
        vocabulary: [
          {
            chinese: '认为',
            pinyin: 'rèn wéi',
            english: 'to think, to believe',
            example: {
              chinese: '我认为学习中文很有趣。',
              pinyin: 'wǒ rèn wéi xué xí zhōng wén hěn yǒu qù.',
              english: 'I think learning Chinese is very interesting.'
            }
          },
          {
            chinese: '喜欢',
            pinyin: 'xǐ huān',
            english: 'to like',
            example: {
              chinese: '我喜欢吃中国菜。',
              pinyin: 'wǒ xǐ huān chī zhōng guó cài.',
              english: 'I like eating Chinese food.'
            }
          }
        ]
      }
    ]
  }
];

// Helper function to get HKS books by level
export const getHksBooksByLevel = (level: string) => {
  return hksBooks.filter((book) => book.level === level);
};

// Helper function to get an HKS book by ID
export const getHksBookById = (id: string) => {
  return hksBooks.find((book) => book.id === id);
};

// Helper function to get an HKS chapter by ID
export const getHksChapterById = (bookId: string, chapterId: string) => {
  const book = getHksBookById(bookId);
  if (!book) return null;
  return book.chapters.find((chapter) => chapter.id === chapterId);
}; 