import { Book } from './types';
import { hskBooks } from './hsk-books';

// Books data
export const books: Book[] = [
  // HSK Books (in order from HSK1 to HSK4)
  ...hskBooks,
  // Original books removed
];

// Helper function to get books by level
export const getBooksByLevel = (level: string) => {
  return books.filter((book) => book.level === level);
};

// Helper function to get a book by ID
export const getBookById = (id: string) => {
  return books.find((book) => book.id === id);
};

// Helper function to get a chapter by ID
export const getChapterById = (bookId: string, chapterId: string) => {
  const book = getBookById(bookId);
  if (!book) return null;
  return book.chapters.find((chapter) => chapter.id === chapterId);
}; 