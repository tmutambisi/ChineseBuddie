import { Lesson } from './types';

export const intermediateLessons: Lesson[] = [
  {
    id: 'i-weather',
    title: 'Weather Expressions',
    description: 'Talk about different weather conditions',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '下雨',
        pinyin: 'xià yǔ',
        english: 'rain (verb)',
        example: {
          chinese: '明天会下雨，带把伞吧。',
          pinyin: 'míng tiān huì xià yǔ, dài bǎ sǎn ba.',
          english: 'It will rain tomorrow, bring an umbrella.',
        },
      },
      {
        chinese: '晴天',
        pinyin: 'qíng tiān',
        english: 'sunny day',
        example: {
          chinese: '今天是晴天，我们去公园吧。',
          pinyin: 'jīn tiān shì qíng tiān, wǒ men qù gōng yuán ba.',
          english: 'Today is sunny, let\'s go to the park.',
        },
      },
      {
        chinese: '多云',
        pinyin: 'duō yún',
        english: 'cloudy',
        example: {
          chinese: '今天多云，但不会下雨。',
          pinyin: 'jīn tiān duō yún, dàn bú huì xià yǔ.',
          english: 'It\'s cloudy today, but it won\'t rain.',
        },
      },
    ],
  },
  {
    id: 'i-restaurant',
    title: 'Restaurant Dining',
    description: 'Learn vocabulary for dining out',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '点菜',
        pinyin: 'diǎn cài',
        english: 'to order food',
        example: {
          chinese: '我们可以开始点菜了吗？',
          pinyin: 'wǒ men kě yǐ kāi shǐ diǎn cài le ma?',
          english: 'Can we start ordering food?',
        },
      },
      {
        chinese: '服务员',
        pinyin: 'fú wù yuán',
        english: 'waiter/waitress',
        example: {
          chinese: '服务员，请给我一杯水。',
          pinyin: 'fú wù yuán, qǐng gěi wǒ yī bēi shuǐ.',
          english: 'Waiter, please give me a glass of water.',
        },
      },
      {
        chinese: '菜单',
        pinyin: 'cài dān',
        english: 'menu',
        example: {
          chinese: '请给我看看菜单。',
          pinyin: 'qǐng gěi wǒ kàn kàn cài dān.',
          english: 'Please show me the menu.',
        },
      },
    ],
  },
  {
    id: 'i-travel',
    title: 'Travel Vocabulary',
    description: 'Learn essential travel-related words',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '护照',
        pinyin: 'hù zhào',
        english: 'passport',
        example: {
          chinese: '我的护照丢了。',
          pinyin: 'wǒ de hù zhào diū le.',
          english: 'I lost my passport.',
        },
      },
      {
        chinese: '机票',
        pinyin: 'jī piào',
        english: 'airplane ticket',
        example: {
          chinese: '这是我的机票。',
          pinyin: 'zhè shì wǒ de jī piào.',
          english: 'This is my airplane ticket.',
        },
      },
      {
        chinese: '行李',
        pinyin: 'xíng lǐ',
        english: 'luggage',
        example: {
          chinese: '我的行李很重。',
          pinyin: 'wǒ de xíng lǐ hěn zhòng.',
          english: 'My luggage is very heavy.',
        },
      },
    ],
  },
  {
    id: 'i-health',
    title: 'Health and Body',
    description: 'Learn to talk about health and body parts',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '头疼',
        pinyin: 'tóu téng',
        english: 'headache',
        example: {
          chinese: '我今天头疼。',
          pinyin: 'wǒ jīn tiān tóu téng.',
          english: 'I have a headache today.',
        },
      },
      {
        chinese: '感冒',
        pinyin: 'gǎn mào',
        english: 'to have a cold',
        example: {
          chinese: '我感冒了，需要休息。',
          pinyin: 'wǒ gǎn mào le, xū yào xiū xi.',
          english: 'I have a cold and need to rest.',
        },
      },
      {
        chinese: '发烧',
        pinyin: 'fā shāo',
        english: 'to have a fever',
        example: {
          chinese: '他发烧了，不能上班。',
          pinyin: 'tā fā shāo le, bù néng shàng bān.',
          english: 'He has a fever and can\'t go to work.',
        },
      },
    ],
  },
  {
    id: 'i-work',
    title: 'Work and Occupation',
    description: 'Discuss jobs and work-related topics',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '工作',
        pinyin: 'gōng zuò',
        english: 'work/job',
        example: {
          chinese: '我喜欢我的工作。',
          pinyin: 'wǒ xǐ huān wǒ de gōng zuò.',
          english: 'I like my job.',
        },
      },
      {
        chinese: '经理',
        pinyin: 'jīng lǐ',
        english: 'manager',
        example: {
          chinese: '他是我们的经理。',
          pinyin: 'tā shì wǒ men de jīng lǐ.',
          english: 'He is our manager.',
        },
      },
      {
        chinese: '同事',
        pinyin: 'tóng shì',
        english: 'colleague',
        example: {
          chinese: '我的同事很友好。',
          pinyin: 'wǒ de tóng shì hěn yǒu hǎo.',
          english: 'My colleagues are very friendly.',
        },
      },
    ],
  },
  {
    id: 'i-education',
    title: 'Education and School',
    description: 'Learn words related to education',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '学生',
        pinyin: 'xué shēng',
        english: 'student',
        example: {
          chinese: '我是学生。',
          pinyin: 'wǒ shì xué shēng.',
          english: 'I am a student.',
        },
      },
      {
        chinese: '老师',
        pinyin: 'lǎo shī',
        english: 'teacher',
        example: {
          chinese: '我的老师很棒。',
          pinyin: 'wǒ de lǎo shī hěn bàng.',
          english: 'My teacher is great.',
        },
      },
      {
        chinese: '考试',
        pinyin: 'kǎo shì',
        english: 'exam',
        example: {
          chinese: '明天有考试。',
          pinyin: 'míng tiān yǒu kǎo shì.',
          english: 'There is an exam tomorrow.',
        },
      },
    ],
  },
  // Additional Intermediate Lessons
  {
    id: 'i-city-life',
    title: 'City Life',
    description: 'Learn vocabulary about city living',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '交通',
        pinyin: 'jiāo tōng',
        english: 'traffic',
        example: {
          chinese: '这里的交通很拥挤。',
          pinyin: 'zhè lǐ de jiāo tōng hěn yōng jǐ.',
          english: 'The traffic here is very congested.',
        },
      },
    ],
  },
  {
    id: 'i-technology',
    title: 'Technology',
    description: 'Learn words related to technology',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '电脑',
        pinyin: 'diàn nǎo',
        english: 'computer',
        example: {
          chinese: '我需要一台新电脑。',
          pinyin: 'wǒ xū yào yī tái xīn diàn nǎo.',
          english: 'I need a new computer.',
        },
      },
    ],
  },
  {
    id: 'i-sports',
    title: 'Sports',
    description: 'Learn names of different sports',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '篮球',
        pinyin: 'lán qiú',
        english: 'basketball',
        example: {
          chinese: '我喜欢打篮球。',
          pinyin: 'wǒ xǐ huān dǎ lán qiú.',
          english: 'I like playing basketball.',
        },
      },
    ],
  },
  {
    id: 'i-music',
    title: 'Music',
    description: 'Learn about different music genres',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '音乐',
        pinyin: 'yīn yuè',
        english: 'music',
        example: {
          chinese: '我喜欢听音乐。',
          pinyin: 'wǒ xǐ huān tīng yīn yuè.',
          english: 'I like listening to music.',
        },
      },
    ],
  },
  {
    id: 'i-movies',
    title: 'Movies',
    description: 'Learn about different movie genres',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '电影',
        pinyin: 'diàn yǐng',
        english: 'movie',
        example: {
          chinese: '我们去看电影吧。',
          pinyin: 'wǒ men qù kàn diàn yǐng ba.',
          english: 'Let\'s go see a movie.',
        },
      },
    ],
  },
  {
    id: 'i-books',
    title: 'Books',
    description: 'Learn about different types of books',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '书',
        pinyin: 'shū',
        english: 'book',
        example: {
          chinese: '我喜欢看书。',
          pinyin: 'wǒ xǐ huān kàn shū.',
          english: 'I like reading books.',
        },
      },
    ],
  },
  {
    id: 'i-art',
    title: 'Art',
    description: 'Learn about different forms of art',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '艺术',
        pinyin: 'yì shù',
        english: 'art',
        example: {
          chinese: '我对艺术很感兴趣。',
          pinyin: 'wǒ duì yì shù hěn gǎn xìng qù.',
          english: 'I am very interested in art.',
        },
      },
    ],
  },
  {
    id: 'i-cooking',
    title: 'Cooking',
    description: 'Learn cooking-related vocabulary',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '做饭',
        pinyin: 'zuò fàn',
        english: 'cooking',
        example: {
          chinese: '我喜欢做饭。',
          pinyin: 'wǒ xǐ huān zuò fàn.',
          english: 'I like cooking.',
        },
      },
    ],
  },
  {
    id: 'i-gardening',
    title: 'Gardening',
    description: 'Learn gardening-related vocabulary',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '花园',
        pinyin: 'huā yuán',
        english: 'garden',
        example: {
          chinese: '我家有一个花园。',
          pinyin: 'wǒ jiā yǒu yī gè huā yuán.',
          english: 'I have a garden at home.',
        },
      },
    ],
  },
  {
    id: 'i-pets',
    title: 'Pets',
    description: 'Learn names of common pets',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '宠物',
        pinyin: 'chǒng wù',
        english: 'pet',
        example: {
          chinese: '我喜欢宠物。',
          pinyin: 'wǒ xǐ huān chǒng wù.',
          english: 'I like pets.',
        },
      },
    ],
  },
  {
    id: 'i-holidays',
    title: 'Holidays',
    description: 'Learn names of common holidays',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '节日',
        pinyin: 'jié rì',
        english: 'holiday',
        example: {
          chinese: '我喜欢过节日。',
          pinyin: 'wǒ xǐ huān guò jié rì.',
          english: 'I like celebrating holidays.',
        },
      },
    ],
  },
  {
    id: 'i-social-media',
    title: 'Social Media',
    description: 'Learn social media related terms',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '社交媒体',
        pinyin: 'shè jiāo méi tǐ',
        english: 'social media',
        example: {
          chinese: '我每天都用社交媒体。',
          pinyin: 'wǒ měi tiān dōu yòng shè jiāo méi tǐ.',
          english: 'I use social media every day.',
        },
      },
    ],
  },
  {
    id: 'i-environmental-issues',
    title: 'Environmental Issues',
    description: 'Learn about environmental issues',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '环境',
        pinyin: 'huán jìng',
        english: 'environment',
        example: {
          chinese: '保护环境很重要。',
          pinyin: 'bǎo hù huán jìng hěn zhòng yào.',
          english: 'Protecting the environment is very important.',
        },
      },
    ],
  },
  {
    id: 'i-current-events',
    title: 'Current Events',
    description: 'Learn to discuss current events',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '新闻',
        pinyin: 'xīn wén',
        english: 'news',
        example: {
          chinese: '我每天看新闻。',
          pinyin: 'wǒ měi tiān kàn xīn wén.',
          english: 'I watch the news every day.',
        },
      },
    ],
  },
  {
    id: 'i-finance',
    title: 'Finance',
    description: 'Learn basic finance terms',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '钱',
        pinyin: 'qián',
        english: 'money',
        example: {
          chinese: '我需要钱。',
          pinyin: 'wǒ xū yào qián.',
          english: 'I need money.',
        },
      },
    ],
  },
  {
    id: 'i-politics',
    title: 'Politics',
    description: 'Learn basic political terms',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '政治',
        pinyin: 'zhèng zhì',
        english: 'politics',
        example: {
          chinese: '我对政治不感兴趣。',
          pinyin: 'wǒ duì zhèng zhì bù gǎn xìng qù.',
          english: 'I am not interested in politics.',
        },
      },
    ],
  },
  {
    id: 'i-law',
    title: 'Law',
    description: 'Learn basic legal terms',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '法律',
        pinyin: 'fǎ lǜ',
        english: 'law',
        example: {
          chinese: '我学习法律。',
          pinyin: 'wǒ xué xí fǎ lǜ.',
          english: 'I study law.',
        },
      },
    ],
  },
  {
    id: 'i-military',
    title: 'Military',
    description: 'Learn basic military terms',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '军队',
        pinyin: 'jūn duì',
        english: 'army',
        example: {
          chinese: '他在军队里。',
          pinyin: 'tā zài jūn duì lǐ.',
          english: 'He is in the army.',
        },
      },
    ],
  },
  {
    id: 'i-religion',
    title: 'Religion',
    description: 'Learn basic religious terms',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '宗教',
        pinyin: 'zōng jiào',
        english: 'religion',
        example: {
          chinese: '我对宗教感兴趣。',
          pinyin: 'wǒ duì zōng jiào gǎn xìng qù.',
          english: 'I am interested in religion.',
        },
      },
    ],
  },
  {
    id: 'i-philosophy',
    title: 'Philosophy',
    description: 'Learn basic philosophical terms',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '哲学',
        pinyin: 'zhé xué',
        english: 'philosophy',
        example: {
          chinese: '我学习哲学。',
          pinyin: 'wǒ xué xí zhé xué.',
          english: 'I study philosophy.',
        },
      },
    ],
  },
  {
    id: 'i-psychology',
    title: 'Psychology',
    description: 'Learn basic psychological terms',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '心理学',
        pinyin: 'xīn lǐ xué',
        english: 'psychology',
        example: {
          chinese: '我学习心理学。',
          pinyin: 'wǒ xué xí xīn lǐ xué.',
          english: 'I study psychology.',
        },
      },
    ],
  },
  {
    id: 'i-sociology',
    title: 'Sociology',
    description: 'Learn basic sociological terms',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '社会学',
        pinyin: 'shè huì xué',
        english: 'sociology',
        example: {
          chinese: '我学习社会学。',
          pinyin: 'wǒ xué xí shè huì xué.',
          english: 'I study sociology.',
        },
      },
    ],
  },
  {
    id: 'i-history',
    title: 'History',
    description: 'Learn basic historical terms',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '历史',
        pinyin: 'lì shǐ',
        english: 'history',
        example: {
          chinese: '我对历史感兴趣。',
          pinyin: 'wǒ duì lì shǐ gǎn xìng qù.',
          english: 'I am interested in history.',
        },
      },
    ],
  },
  {
    id: 'i-geography',
    title: 'Geography',
    description: 'Learn basic geographical terms',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '地理',
        pinyin: 'dì lǐ',
        english: 'geography',
        example: {
          chinese: '我学习地理。',
          pinyin: 'wǒ xué xí dì lǐ.',
          english: 'I study geography.',
        },
      },
    ],
  },
  {
    id: 'i-mathematics',
    title: 'Mathematics',
    description: 'Learn basic mathematical terms',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '数学',
        pinyin: 'shù xué',
        english: 'mathematics',
        example: {
          chinese: '我学习数学。',
          pinyin: 'wǒ xué xí shù xué.',
          english: 'I study mathematics.',
        },
      },
    ],
  },
  {
    id: 'i-physics',
    title: 'Physics',
    description: 'Learn basic physics terms',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '物理',
        pinyin: 'wù lǐ',
        english: 'physics',
        example: {
          chinese: '我学习物理。',
          pinyin: 'wǒ xué xí wù lǐ.',
          english: 'I study physics.',
        },
      },
    ],
  },
  {
    id: 'i-chemistry',
    title: 'Chemistry',
    description: 'Learn basic chemistry terms',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '化学',
        pinyin: 'huà xué',
        english: 'chemistry',
        example: {
          chinese: '我学习化学。',
          pinyin: 'wǒ xué xí huà xué.',
          english: 'I study chemistry.',
        },
      },
    ],
  },
  {
    id: 'i-biology',
    title: 'Biology',
    description: 'Learn basic biology terms',
    level: 'intermediate',
    type: 'vocabulary',
    content: [
      {
        chinese: '生物学',
        pinyin: 'shēng wù xué',
        english: 'biology',
        example: {
          chinese: '我学习生物学。',
          pinyin: 'wǒ xué xí shēng wù xué.',
          english: 'I study biology.',
        },
      },
    ],
  },
];
