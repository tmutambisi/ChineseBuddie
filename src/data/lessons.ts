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

export const lessons: Lesson[] = [
  // Absolute Beginner Lessons
  {
    id: 'ab-greeting',
    title: 'Basic Greetings',
    description: 'Learn how to say hello and goodbye in Chinese',
    level: 'absolute-beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '你好',
        pinyin: 'nǐ hǎo',
        english: 'hello',
        example: {
          chinese: '你好，我叫小明。',
          pinyin: 'nǐ hǎo, wǒ jiào xiǎo míng.',
          english: 'Hello, my name is Xiao Ming.',
        },
      },
      {
        chinese: '早上好',
        pinyin: 'zǎo shang hǎo',
        english: 'good morning',
        example: {
          chinese: '早上好！今天天气很好。',
          pinyin: 'zǎo shang hǎo! jīn tiān tiān qì hěn hǎo.',
          english: 'Good morning! The weather is nice today.',
        },
      },
      {
        chinese: '晚上好',
        pinyin: 'wǎn shang hǎo',
        english: 'good evening',
        example: {
          chinese: '晚上好，欢迎光临我们的餐厅。',
          pinyin: 'wǎn shang hǎo, huān yíng guāng lín wǒ men de cān tīng.',
          english: 'Good evening, welcome to our restaurant.',
        },
      },
      {
        chinese: '再见',
        pinyin: 'zài jiàn',
        english: 'goodbye',
        example: {
          chinese: '明天见，再见！',
          pinyin: 'míng tiān jiàn, zài jiàn!',
          english: 'See you tomorrow, goodbye!',
        },
      },
    ],
  },
  {
    id: 'ab-family-basic',
    title: 'Basic Family Members',
    description: 'Learn the most common family words',
    level: 'absolute-beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '妈妈',
        pinyin: 'mā ma',
        english: 'mom',
        example: {
          chinese: '我妈妈做饭很好吃。',
          pinyin: 'wǒ mā ma zuò fàn hěn hǎo chī.',
          english: 'My mom cooks delicious food.',
        },
      },
      {
        chinese: '爸爸',
        pinyin: 'bà ba',
        english: 'dad',
        example: {
          chinese: '我爸爸在公园跑步。',
          pinyin: 'wǒ bà ba zài gōng yuán pǎo bù.',
          english: 'My dad is running in the park.',
        },
      },
      {
        chinese: '妹妹',
        pinyin: 'mèi mei',
        english: 'younger sister',
        example: {
          chinese: '这是我妹妹。',
          pinyin: 'zhè shì wǒ mèi mei.',
          english: 'This is my younger sister.',
        },
      },
    ],
  },
  {
    id: 'ab-numbers-basic',
    title: 'Numbers 1-10',
    description: 'Learn to count in Chinese',
    level: 'absolute-beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '一',
        pinyin: 'yī',
        english: 'one',
        example: {
          chinese: '我要一个苹果。',
          pinyin: 'wǒ yào yī gè píng guǒ.',
          english: 'I want one apple.',
        },
      },
      {
        chinese: '二',
        pinyin: 'èr',
        english: 'two',
        example: {
          chinese: '我有二个兄弟。',
          pinyin: 'wǒ yǒu èr gè xiōng dì.',
          english: 'I have two brothers.',
        },
      },
      {
        chinese: '三',
        pinyin: 'sān',
        english: 'three',
        example: {
          chinese: '三个朋友。',
          pinyin: 'sān gè péng you.',
          english: 'Three friends.',
        },
      },
    ],
  },
  {
    id: 'ab-numbers',
    title: 'Numbers 1-10',
    description: 'Learn to count from 1 to 10 in Chinese',
    level: 'absolute-beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '一',
        pinyin: 'yī',
        english: 'one',
        example: {
          chinese: '我有一个苹果。',
          pinyin: 'wǒ yǒu yī gè píng guǒ.',
          english: 'I have one apple.',
        },
      },
      {
        chinese: '二',
        pinyin: 'èr',
        english: 'two',
        example: {
          chinese: '这里有二十个人。',
          pinyin: 'zhè lǐ yǒu èr shí gè rén.',
          english: 'There are twenty people here.',
        },
      },
      {
        chinese: '三',
        pinyin: 'sān',
        english: 'three',
        example: {
          chinese: '我有三个兄弟。',
          pinyin: 'wǒ yǒu sān gè xiōng dì.',
          english: 'I have three brothers.',
        },
      },
      {
        chinese: '四',
        pinyin: 'sì',
        english: 'four',
        example: {
          chinese: '桌子上有四本书。',
          pinyin: 'zhuō zi shàng yǒu sì běn shū.',
          english: 'There are four books on the table.',
        },
      },
      {
        chinese: '五',
        pinyin: 'wǔ',
        english: 'five',
        example: {
          chinese: '我家有五口人。',
          pinyin: 'wǒ jiā yǒu wǔ kǒu rén.',
          english: 'There are five people in my family.',
        },
      },
    ],
  },
  {
    id: 'ab-colors',
    title: 'Basic Colors',
    description: 'Learn common colors in Chinese',
    level: 'absolute-beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '红色',
        pinyin: 'hóng sè',
        english: 'red',
        example: {
          chinese: '我喜欢红色。',
          pinyin: 'wǒ xǐ huān hóng sè.',
          english: 'I like red.',
        },
      },
      {
        chinese: '蓝色',
        pinyin: 'lán sè',
        english: 'blue',
        example: {
          chinese: '天空是蓝色的。',
          pinyin: 'tiān kōng shì lán sè de.',
          english: 'The sky is blue.',
        },
      },
      {
        chinese: '黄色',
        pinyin: 'huáng sè',
        english: 'yellow',
        example: {
          chinese: '香蕉是黄色的。',
          pinyin: 'xiāng jiāo shì huáng sè de.',
          english: 'Bananas are yellow.',
        },
      },
    ],
  },
  {
    id: 'ab-food',
    title: 'Common Foods',
    description: 'Learn basic food vocabulary',
    level: 'absolute-beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '米饭',
        pinyin: 'mǐ fàn',
        english: 'rice',
        example: {
          chinese: '我爱吃米饭。',
          pinyin: 'wǒ ài chī mǐ fàn.',
          english: 'I love eating rice.',
        },
      },
      {
        chinese: '面条',
        pinyin: 'miàn tiáo',
        english: 'noodles',
        example: {
          chinese: '这个面条很好吃。',
          pinyin: 'zhè gè miàn tiáo hěn hǎo chī.',
          english: 'These noodles are delicious.',
        },
      },
      {
        chinese: '水果',
        pinyin: 'shuǐ guǒ',
        english: 'fruit',
        example: {
          chinese: '我每天吃水果。',
          pinyin: 'wǒ měi tiān chī shuǐ guǒ.',
          english: 'I eat fruit every day.',
        },
      },
    ],
  },
  // Beginner Lessons
  {
    id: 'b-family',
    title: 'Family Members',
    description: 'Learn words for different family members',
    level: 'beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '爸爸',
        pinyin: 'bà ba',
        english: 'father',
        example: {
          chinese: '我爸爸是医生。',
          pinyin: 'wǒ bà ba shì yī shēng.',
          english: 'My father is a doctor.',
        },
      },
      {
        chinese: '妈妈',
        pinyin: 'mā ma',
        english: 'mother',
        example: {
          chinese: '我妈妈很喜欢做菜。',
          pinyin: 'wǒ mā ma hěn xǐ huān zuò cài.',
          english: 'My mother likes to cook.',
        },
      },
      {
        chinese: '哥哥',
        pinyin: 'gē ge',
        english: 'older brother',
        example: {
          chinese: '我哥哥比我高。',
          pinyin: 'wǒ gē ge bǐ wǒ gāo.',
          english: 'My older brother is taller than me.',
        },
      },
      {
        chinese: '妹妹',
        pinyin: 'mèi mei',
        english: 'younger sister',
        example: {
          chinese: '我妹妹今年十岁。',
          pinyin: 'wǒ mèi mei jīn nián shí suì.',
          english: 'My younger sister is ten years old this year.',
        },
      },
    ],
  },
  // Intermediate Lessons
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
  // Advanced Lessons
  {
    id: 'a-idioms',
    title: 'Common Chinese Idioms',
    description: 'Learn some popular Chinese expressions',
    level: 'advanced',
    type: 'vocabulary',
    content: [
      {
        chinese: '一举两得',
        pinyin: 'yī jǔ liǎng dé',
        english: 'kill two birds with one stone',
        example: {
          chinese: '学习中文可以认识新朋友，真是一举两得。',
          pinyin: 'xué xí zhōng wén kě yǐ rèn shí xīn péng yǒu, zhēn shì yī jǔ liǎng dé.',
          english: 'Learning Chinese allows you to make new friends, truly killing two birds with one stone.',
        },
      },
      {
        chinese: '入乡随俗',
        pinyin: 'rù xiāng suí sú',
        english: 'when in Rome, do as the Romans do',
        example: {
          chinese: '到了中国，你应该入乡随俗，尝试用筷子吃饭。',
          pinyin: 'dào le zhōng guó, nǐ yīng gāi rù xiāng suí sú, cháng shì yòng kuài zi chī fàn.',
          english: 'In China, you should do as the locals do and try to eat with chopsticks.',
        },
      },
    ],
  },
];

export const getLessonsByLevel = (level: string) => {
  return lessons.filter(lesson => lesson.level === level);
};

export const getLessonById = (id: string) => {
  return lessons.find(lesson => lesson.id === id);
};
