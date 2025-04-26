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

// Helper function to get lessons by level
export const getLessonsByLevel = (level: string) => {
  return lessons.filter((lesson) => lesson.level === level);
};

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
  // Additional Absolute Beginner Lessons
  {
    id: 'ab-time',
    title: 'Telling Time',
    description: 'Learn how to tell time in Chinese',
    level: 'absolute-beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '点',
        pinyin: 'diǎn',
        english: "o'clock",
        example: {
          chinese: '现在三点。',
          pinyin: 'xiàn zài sān diǎn.',
          english: "It's three o'clock.",
        },
      },
      {
        chinese: '分钟',
        pinyin: 'fēn zhōng',
        english: 'minute',
        example: {
          chinese: '十分钟',
          pinyin: 'shí fēn zhōng',
          english: 'ten minutes',
        },
      },
    ],
  },
  {
    id: 'ab-fruits',
    title: 'Common Fruits',
    description: 'Learn names of common fruits',
    level: 'absolute-beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '苹果',
        pinyin: 'píng guǒ',
        english: 'apple',
        example: {
          chinese: '我喜欢吃苹果。',
          pinyin: 'wǒ xǐ huān chī píng guǒ.',
          english: 'I like eating apples.',
        },
      },
    ],
  },
  {
    id: 'ab-drinks',
    title: 'Common Drinks',
    description: 'Learn how to order drinks',
    level: 'absolute-beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '水',
        pinyin: 'shuǐ',
        english: 'water',
        example: {
          chinese: '我要喝水。',
          pinyin: 'wǒ yào hē shuǐ.',
          english: 'I want to drink water.',
        },
      },
    ],
  },
  {
    id: 'ab-animals',
    title: 'Common Animals',
    description: 'Learn names of common animals',
    level: 'absolute-beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '猫',
        pinyin: 'māo',
        english: 'cat',
        example: {
          chinese: '这是我的猫。',
          pinyin: 'zhè shì wǒ de māo.',
          english: 'This is my cat.',
        },
      },
    ],
  },
  {
    id: 'ab-classroom',
    title: 'Classroom Objects',
    description: 'Learn words for items in a classroom',
    level: 'absolute-beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '书',
        pinyin: 'shū',
        english: 'book',
        example: {
          chinese: '这是中文书。',
          pinyin: 'zhè shì zhōng wén shū.',
          english: 'This is a Chinese book.',
        },
      },
    ],
  },
  {
    id: 'ab-weather-basic',
    title: 'Basic Weather Terms',
    description: 'Learn basic weather expressions',
    level: 'absolute-beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '热',
        pinyin: 'rè',
        english: 'hot',
        example: {
          chinese: '今天很热。',
          pinyin: 'jīn tiān hěn rè.',
          english: "It's hot today.",
        },
      },
    ],
  },
  {
    id: 'ab-directions',
    title: 'Basic Directions',
    description: 'Learn basic directional words',
    level: 'absolute-beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '左',
        pinyin: 'zuǒ',
        english: 'left',
        example: {
          chinese: '向左转。',
          pinyin: 'xiàng zuǒ zhuǎn.',
          english: 'Turn left.',
        },
      },
    ],
  },
  {
    id: 'ab-body',
    title: 'Body Parts',
    description: 'Learn basic body part names',
    level: 'absolute-beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '头',
        pinyin: 'tóu',
        english: 'head',
        example: {
          chinese: '我头疼。',
          pinyin: 'wǒ tóu téng.',
          english: 'I have a headache.',
        },
      },
    ],
  },
  {
    id: 'ab-days',
    title: 'Days of the Week',
    description: 'Learn the days of the week',
    level: 'absolute-beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '星期一',
        pinyin: 'xīng qī yī',
        english: 'Monday',
        example: {
          chinese: '星期一上班。',
          pinyin: 'xīng qī yī shàng bān.',
          english: 'Work on Monday.',
        },
      },
    ],
  },
  {
    id: 'ab-months',
    title: 'Months of the Year',
    description: 'Learn the months of the year',
    level: 'absolute-beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '一月',
        pinyin: 'yī yuè',
        english: 'January',
        example: {
          chinese: '一月很冷。',
          pinyin: 'yī yuè hěn lěng.',
          english: 'January is cold.',
        },
      },
    ],
  },
  {
    id: 'ab-seasons',
    title: 'Seasons',
    description: 'Learn the four seasons',
    level: 'absolute-beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '春天',
        pinyin: 'chūn tiān',
        english: 'Spring',
        example: {
          chinese: '我喜欢春天。',
          pinyin: 'wǒ xǐ huān chūn tiān.',
          english: 'I like Spring.',
        },
      },
    ],
  },
  {
    id: 'ab-hobbies-basic',
    title: 'Basic Hobbies',
    description: 'Learn names of common hobbies',
    level: 'absolute-beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '唱歌',
        pinyin: 'chàng gē',
        english: 'Singing',
        example: {
          chinese: '我喜欢唱歌。',
          pinyin: 'wǒ xǐ huān chàng gē.',
          english: 'I like singing.',
        },
      },
    ],
  },
  {
    id: 'ab-places',
    title: 'Common Places',
    description: 'Learn names of common places',
    level: 'absolute-beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '家',
        pinyin: 'jiā',
        english: 'Home',
        example: {
          chinese: '我在家。',
          pinyin: 'wǒ zài jiā.',
          english: 'I am at home.',
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
  {
    id: 'b-daily-routine',
    title: 'Daily Activities',
    description: 'Learn how to describe your daily routine',
    level: 'beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '起床',
        pinyin: 'qǐ chuáng',
        english: 'wake up/get up',
        example: {
          chinese: '我每天六点起床。',
          pinyin: 'wǒ měi tiān liù diǎn qǐ chuáng.',
          english: 'I get up at 6 o\'clock every day.',
        },
      },
      {
        chinese: '刷牙',
        pinyin: 'shuā yá',
        english: 'brush teeth',
        example: {
          chinese: '早上要刷牙。',
          pinyin: 'zǎo shang yào shuā yá.',
          english: 'You should brush your teeth in the morning.',
        },
      },
      {
        chinese: '吃早饭',
        pinyin: 'chī zǎo fàn',
        english: 'eat breakfast',
        example: {
          chinese: '我喜欢吃早饭。',
          pinyin: 'wǒ xǐ huān chī zǎo fàn.',
          english: 'I like eating breakfast.',
        },
      }
    ],
  },
  {
    id: 'b-transportation',
    title: 'Transportation',
    description: 'Learn words related to getting around',
    level: 'beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '公共汽车',
        pinyin: 'gōng gòng qì chē',
        english: 'bus',
        example: {
          chinese: '我每天坐公共汽车去上班。',
          pinyin: 'wǒ měi tiān zuò gōng gòng qì chē qù shàng bān.',
          english: 'I take the bus to work every day.',
        },
      },
      {
        chinese: '地铁',
        pinyin: 'dì tiě',
        english: 'subway/metro',
        example: {
          chinese: '地铁很快。',
          pinyin: 'dì tiě hěn kuài.',
          english: 'The subway is very fast.',
        },
      },
      {
        chinese: '出租车',
        pinyin: 'chū zū chē',
        english: 'taxi',
        example: {
          chinese: '我们打出租车去机场。',
          pinyin: 'wǒ men dǎ chū zū chē qù jī chǎng.',
          english: 'We\'re taking a taxi to the airport.',
        },
      }
    ],
  },
  {
    id: 'b-weather',
    title: 'Weather and Seasons',
    description: 'Learn to talk about weather and seasons',
    level: 'beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '下雨',
        pinyin: 'xià yǔ',
        english: 'rain (verb)',
        example: {
          chinese: '今天下雨了。',
          pinyin: 'jīn tiān xià yǔ le.',
          english: 'It\'s raining today.',
        },
      },
      {
        chinese: '天气',
        pinyin: 'tiān qì',
        english: 'weather',
        example: {
          chinese: '今天天气很好。',
          pinyin: 'jīn tiān tiān qì hěn hǎo.',
          english: 'The weather is nice today.',
        },
      },
      {
        chinese: '春天',
        pinyin: 'chūn tiān',
        english: 'spring',
        example: {
          chinese: '春天的花很漂亮。',
          pinyin: 'chūn tiān de huā hěn piào liang.',
          english: 'Spring flowers are beautiful.',
        },
      }
    ],
  },
  {
    id: 'b-shopping',
    title: 'Shopping Basics',
    description: 'Learn essential shopping vocabulary',
    level: 'beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '多少钱',
        pinyin: 'duō shao qián',
        english: 'how much (money)',
        example: {
          chinese: '这个苹果多少钱？',
          pinyin: 'zhè gè píng guǒ duō shao qián?',
          english: 'How much is this apple?',
        },
      },
      {
        chinese: '便宜',
        pinyin: 'pián yi',
        english: 'cheap',
        example: {
          chinese: '这个很便宜。',
          pinyin: 'zhè gè hěn pián yi.',
          english: 'This is very cheap.',
        },
      },
      {
        chinese: '贵',
        pinyin: 'guì',
        english: 'expensive',
        example: {
          chinese: '这家商店太贵了。',
          pinyin: 'zhè jiā shāng diàn tài guì le.',
          english: 'This store is too expensive.',
        },
      }
    ],
  },
  {
    id: 'b-hobbies',
    title: 'Hobbies and Interests',
    description: 'Learn to talk about different hobbies',
    level: 'beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '看书',
        pinyin: 'kàn shū',
        english: 'read books',
        example: {
          chinese: '我喜欢看书。',
          pinyin: 'wǒ xǐ huān kàn shū.',
          english: 'I like reading books.',
        },
      },
      {
        chinese: '游泳',
        pinyin: 'yóu yǒng',
        english: 'swim',
        example: {
          chinese: '夏天我常去游泳。',
          pinyin: 'xià tiān wǒ cháng qù yóu yǒng.',
          english: 'I often go swimming in summer.',
        },
      },
      {
        chinese: '跑步',
        pinyin: 'pǎo bù',
        english: 'run/jogging',
        example: {
          chinese: '我每天早上跑步。',
          pinyin: 'wǒ měi tiān zǎo shang pǎo bù.',
          english: 'I go running every morning.',
        },
      }
    ],
  },
  // Additional Beginner Lessons
  {
    id: 'b-shopping-phrases',
    title: 'Shopping Phrases',
    description: 'Learn useful phrases for shopping',
    level: 'beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '打折',
        pinyin: 'dǎ zhé',
        english: 'discount',
        example: {
          chinese: '这件衣服在打折。',
          pinyin: 'zhè jiàn yī fu zài dǎ zhé.',
          english: 'This clothing item is on discount.',
        },
      },
    ],
  },
  {
    id: 'b-restaurant-phrases',
    title: 'Restaurant Phrases',
    description: 'Learn how to order in restaurants',
    level: 'beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '点菜',
        pinyin: 'diǎn cài',
        english: 'to order food',
        example: {
          chinese: '我们可以点菜了吗？',
          pinyin: 'wǒ men kě yǐ diǎn cài le ma?',
          english: 'Can we order now?',
        },
      },
    ],
  },
  {
    id: 'b-transportation-vocab',
    title: 'Transportation Vocabulary',
    description: 'Learn words related to transportation',
    level: 'beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '地铁站',
        pinyin: 'dì tiě zhàn',
        english: 'subway station',
        example: {
          chinese: '地铁站在哪里？',
          pinyin: 'dì tiě zhàn zài nǎ lǐ?',
          english: 'Where is the subway station?',
        },
      },
    ],
  },
  {
    id: 'b-accommodation',
    title: 'Accommodation',
    description: 'Learn words related to accommodation',
    level: 'beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '酒店',
        pinyin: 'jiǔ diàn',
        english: 'hotel',
        example: {
          chinese: '我住在酒店。',
          pinyin: 'wǒ zhù zài jiǔ diàn.',
          english: 'I live in a hotel.',
        },
      },
    ],
  },
  {
    id: 'b-directions-basic',
    title: 'Basic Directions',
    description: 'Learn how to give directions',
    level: 'beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '前',
        pinyin: 'qián',
        english: 'front',
        example: {
          chinese: '在前面。',
          pinyin: 'zài qián miàn.',
          english: 'In front.',
        },
      },
    ],
  },
  {
    id: 'b-time-basic',
    title: 'Basic Time',
    description: 'Learn how to tell time',
    level: 'beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '小时',
        pinyin: 'xiǎo shí',
        english: 'hour',
        example: {
          chinese: '一个小时。',
          pinyin: 'yī gè xiǎo shí.',
          english: 'One hour.',
        },
      },
    ],
  },
  {
    id: 'b-colors-basic',
    title: 'More Colors',
    description: 'Learn more colors',
    level: 'beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '绿色',
        pinyin: 'lǜ sè',
        english: 'green',
        example: {
          chinese: '绿色的草。',
          pinyin: 'lǜ sè de cǎo.',
          english: 'Green grass.',
        },
      },
    ],
  },
  {
    id: 'b-food-basic',
    title: 'More Food',
    description: 'Learn more food vocabulary',
    level: 'beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '茶',
        pinyin: 'chá',
        english: 'tea',
        example: {
          chinese: '我要喝茶。',
          pinyin: 'wǒ yào hē chá.',
          english: 'I want to drink tea.',
        },
      },
    ],
  },
  {
    id: 'b-animals-basic',
    title: 'More Animals',
    description: 'Learn more animal names',
    level: 'beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '狗',
        pinyin: 'gǒu',
        english: 'dog',
        example: {
          chinese: '这是我的狗。',
          pinyin: 'zhè shì wǒ de gǒu.',
          english: 'This is my dog.',
        },
      },
    ],
  },
  {
    id: 'b-classroom-basic',
    title: 'More Classroom Objects',
    description: 'Learn more classroom objects',
    level: 'beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '笔',
        pinyin: 'bǐ',
        english: 'pen',
        example: {
          chinese: '这是一支笔。',
          pinyin: 'zhè shì yī zhī bǐ.',
          english: 'This is a pen.',
        },
      },
    ],
  },
  {
    id: 'b-weather-advanced',
    title: 'Advanced Weather Terms',
    description: 'Learn more weather expressions',
    level: 'beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '冷',
        pinyin: 'lěng',
        english: 'cold',
        example: {
          chinese: '今天很冷。',
          pinyin: 'jīn tiān hěn lěng.',
          english: 'It\'s cold today.',
        },
      },
    ],
  },
  {
    id: 'b-body-basic',
    title: 'More Body Parts',
    description: 'Learn more body parts',
    level: 'beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '手',
        pinyin: 'shǒu',
        english: 'hand',
        example: {
          chinese: '我的手很冷。',
          pinyin: 'wǒ de shǒu hěn lěng.',
          english: 'My hand is cold.',
        },
      },
    ],
  },
  {
    id: 'b-places-basic',
    title: 'More Places',
    description: 'Learn more places',
    level: 'beginner',
    type: 'vocabulary',
    content: [
      {
        chinese: '学校',
        pinyin: 'xué xiào',
        english: 'school',
        example: {
          chinese: '我在学校。',
          pinyin: 'wǒ zài xué xiào.',
          english: 'I am at school.',
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
        english: 'wait
