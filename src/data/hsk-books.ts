import { Book } from './types';

// HSK Books data
export const hskBooks: Book[] = [
  {
    id: 'hsk1-book',
    title: 'HSK 1 Standard Course',
    titleChinese: 'HSK 1 标准教程',
    author: 'Hanban',
    authorChinese: '汉办',
    level: 'hsk1',
    description: 'Official HSK 1 textbook covering vocabulary, grammar, and exercises for the HSK 1 exam.',
    coverImage: '/coverhsk1.jpg',
    downloadLink: 'https://drive.google.com/file/d/1I8S6zD_-ZlpagAYaV793ZuKWdiMs2T5D/view?usp=drive_link',
    audiobookLink: 'https://drive.google.com/drive/folders/1JakCli_Y7JhFX31Ry9oMF-cGPIZlB-l4?usp=sharing',
    chapters: [] // No chapters needed as this is a downloadable book
  },
  {
    id: 'hsk2-book',
    title: 'HSK 2 Standard Course',
    titleChinese: 'HSK 2 标准教程',
    author: 'Hanban',
    authorChinese: '汉办',
    level: 'hsk2',
    description: 'Official HSK 2 textbook covering vocabulary, grammar, and exercises for the HSK 2 exam.',
    coverImage: '/coverhsk2.jpg',
    downloadLink: 'https://drive.google.com/file/d/1QLW4G7YJn7T-V7P9_cXVyxxpGsLArmCo/view?usp=sharing',
    audiobookLink: 'https://drive.google.com/drive/folders/1e66I-TdCUe59HHU5g9cOyxt8F43AczZH?usp=sharing',
    chapters: [] // No chapters needed as this is a downloadable book
  },
  {
    id: 'hsk3-book',
    title: 'HSK 3 Standard Course',
    titleChinese: 'HSK 3 标准教程',
    author: 'Hanban',
    authorChinese: '汉办',
    level: 'hsk3',
    description: 'Official HSK 3 textbook covering vocabulary, grammar, and exercises for the HSK 3 exam.',
    coverImage: '/coverhsk3.jpg',
    downloadLink: 'https://drive.google.com/file/d/1qDI_Sc0ea1VEpz-fbUToMeNm2BQcPHa2/view?usp=sharing',
    audiobookLink: 'https://drive.google.com/drive/folders/1xhZWUniGjIAU6Ljsr4emtDG3rIsbhDs8?usp=sharing',
    chapters: [] // No chapters needed as this is a downloadable book
  },
  {
    id: 'hsk4-book',
    title: 'HSK 4 Standard Course',
    titleChinese: 'HSK 4 标准教程',
    author: 'Hanban',
    authorChinese: '汉办',
    level: 'hsk4',
    description: 'Official HSK 4 textbook covering vocabulary, grammar, and exercises for the HSK 4 exam.',
    coverImage: '/coverhsk4.jpg',
    downloadLink: 'https://drive.google.com/file/d/13t0n5k1GV2cz5wGULCwmS9Z3WP-Qw3v2/view?usp=sharing',
    //audiobookLink: 'https://drive.google.com/file/d/YOUR_HSK4_AUDIOBOOK_FILE_ID/view?usp=sharing',
    chapters: [] // No chapters needed as this is a downloadable book
  }
];

// Helper function to get HSK books by level
export const getHskBooksByLevel = (level: string) => {
  return hskBooks.filter((book) => book.level === level);
};

// Helper function to get an HSK book by ID
export const getHskBookById = (id: string) => {
  return hskBooks.find((book) => book.id === id);
}; 