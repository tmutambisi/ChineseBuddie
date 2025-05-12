import { Lesson } from './types';

export const absoluteBeginnerLessons: Lesson[] = [
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
    id: 'ab-numbers',
    title: 'Numbers 1-50',
    description: 'Learn to count from 1 to 50 in Chinese',
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
      {
        chinese: '六',
        pinyin: 'liù',
        english: 'six',
        example: {
          chinese: '他有六本书。',
          pinyin: 'tā yǒu liù běn shū.',
          english: 'He has six books.',
        },
      },
      {
        chinese: '七',
        pinyin: 'qī',
        english: 'seven',
        example: {
          chinese: '我有七个朋友。',
          pinyin: 'wǒ yǒu qī gè péng you.',
          english: 'I have seven friends.',
        },
      },
      {
        chinese: '八',
        pinyin: 'bā',
        english: 'eight',
        example: {
          chinese: '他八点起床。',
          pinyin: 'tā bā diǎn qǐ chuáng.',
          english: 'He gets up at eight o\'clock.',
        },
      },
      {
        chinese: '九',
        pinyin: 'jiǔ',
        english: 'nine',
        example: {
          chinese: '我九岁了。',
          pinyin: 'wǒ jiǔ suì le.',
          english: 'I am nine years old.',
        },
      },
      {
        chinese: '十',
        pinyin: 'shí',
        english: 'ten',
        example: {
          chinese: '十个人在这里。',
          pinyin: 'shí gè rén zài zhè lǐ.',
          english: 'There are ten people here.',
        },
      },
      // 11-50, no example sentences
      { chinese: '十一', pinyin: 'shí yī', english: 'eleven' },
      { chinese: '十二', pinyin: 'shí èr', english: 'twelve' },
      { chinese: '十三', pinyin: 'shí sān', english: 'thirteen' },
      { chinese: '十四', pinyin: 'shí sì', english: 'fourteen' },
      { chinese: '十五', pinyin: 'shí wǔ', english: 'fifteen' },
      { chinese: '十六', pinyin: 'shí liù', english: 'sixteen' },
      { chinese: '十七', pinyin: 'shí qī', english: 'seventeen' },
      { chinese: '十八', pinyin: 'shí bā', english: 'eighteen' },
      { chinese: '十九', pinyin: 'shí jiǔ', english: 'nineteen' },
      { chinese: '二十', pinyin: 'èr shí', english: 'twenty' },
      { chinese: '二十一', pinyin: 'èr shí yī', english: 'twenty-one' },
      { chinese: '二十二', pinyin: 'èr shí èr', english: 'twenty-two' },
      { chinese: '二十三', pinyin: 'èr shí sān', english: 'twenty-three' },
      { chinese: '二十四', pinyin: 'èr shí sì', english: 'twenty-four' },
      { chinese: '二十五', pinyin: 'èr shí wǔ', english: 'twenty-five' },
      { chinese: '二十六', pinyin: 'èr shí liù', english: 'twenty-six' },
      { chinese: '二十七', pinyin: 'èr shí qī', english: 'twenty-seven' },
      { chinese: '二十八', pinyin: 'èr shí bā', english: 'twenty-eight' },
      { chinese: '二十九', pinyin: 'èr shí jiǔ', english: 'twenty-nine' },
      { chinese: '三十', pinyin: 'sān shí', english: 'thirty' },
      { chinese: '三十一', pinyin: 'sān shí yī', english: 'thirty-one' },
      { chinese: '三十二', pinyin: 'sān shí èr', english: 'thirty-two' },
      { chinese: '三十三', pinyin: 'sān shí sān', english: 'thirty-three' },
      { chinese: '三十四', pinyin: 'sān shí sì', english: 'thirty-four' },
      { chinese: '三十五', pinyin: 'sān shí wǔ', english: 'thirty-five' },
      { chinese: '三十六', pinyin: 'sān shí liù', english: 'thirty-six' },
      { chinese: '三十七', pinyin: 'sān shí qī', english: 'thirty-seven' },
      { chinese: '三十八', pinyin: 'sān shí bā', english: 'thirty-eight' },
      { chinese: '三十九', pinyin: 'sān shí jiǔ', english: 'thirty-nine' },
      { chinese: '四十', pinyin: 'sì shí', english: 'forty' },
      { chinese: '四十一', pinyin: 'sì shí yī', english: 'forty-one' },
      { chinese: '四十二', pinyin: 'sì shí èr', english: 'forty-two' },
      { chinese: '四十三', pinyin: 'sì shí sān', english: 'forty-three' },
      { chinese: '四十四', pinyin: 'sì shí sì', english: 'forty-four' },
      { chinese: '四十五', pinyin: 'sì shí wǔ', english: 'forty-five' },
      { chinese: '四十六', pinyin: 'sì shí liù', english: 'forty-six' },
      { chinese: '四十七', pinyin: 'sì shí qī', english: 'forty-seven' },
      { chinese: '四十八', pinyin: 'sì shí bā', english: 'forty-eight' },
      { chinese: '四十九', pinyin: 'sì shí jiǔ', english: 'forty-nine' },
      { chinese: '五十', pinyin: 'wǔ shí', english: 'fifty' },
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
];
