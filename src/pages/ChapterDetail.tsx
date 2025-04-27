import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { getBookById, getChapterById } from '@/data/books';
import { useApp } from '@/context/AppContext';
import WordCard from '@/components/WordCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ChapterDetail = () => {
  const { bookId, chapterId } = useParams<{ bookId: string; chapterId: string }>();
  const navigate = useNavigate();
  const { showPinyin } = useApp();
  
  const book = bookId ? getBookById(bookId) : null;
  const chapter = bookId && chapterId ? getChapterById(bookId, chapterId) : null;
  
  const [showTranslation, setShowTranslation] = useState(false);
  
  if (!book || !chapter) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header title="Chapter Not Found" showBack={true} showSettings={false} />
        <main className="flex-1 container px-4 py-6 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Chapter Not Found</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">The chapter you're looking for doesn't exist.</p>
            <Button onClick={() => navigate(`/book/${bookId}`)}>Back to Book</Button>
          </div>
        </main>
      </div>
    );
  }
  
  // Find the current chapter index
  const currentChapterIndex = book.chapters.findIndex(c => c.id === chapterId);
  const prevChapter = currentChapterIndex > 0 ? book.chapters[currentChapterIndex - 1] : null;
  const nextChapter = currentChapterIndex < book.chapters.length - 1 ? book.chapters[currentChapterIndex + 1] : null;
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header title={`${book.title} - ${chapter.title}`} showBack={true} showSettings={false} />
      
      <main className="flex-1 container px-4 py-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-semibold mb-1">{chapter.title}</h1>
          <p className="text-xl font-chinese mb-6">{chapter.titleChinese}</p>
          
          <div className="prose dark:prose-invert max-w-none">
            <div className="mb-6">
              <div className="text-lg font-chinese mb-2">{chapter.contentChinese}</div>
              {showPinyin && (
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {/* This would be better with a proper pinyin generator library */}
                  {chapter.contentChinese}
                </div>
              )}
              {showTranslation && (
                <div className="text-gray-700 dark:text-gray-300 mt-2">
                  {chapter.content}
                </div>
              )}
              <button 
                className="text-sm text-blue-600 dark:text-blue-400 mt-2"
                onClick={() => setShowTranslation(!showTranslation)}
              >
                {showTranslation ? 'Hide' : 'Show'} Translation
              </button>
            </div>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mb-4">Vocabulary</h2>
        <div className="space-y-4 mb-8">
          {chapter.vocabulary.map((word, index) => (
            <WordCard key={index} word={word} showExample={true} />
          ))}
        </div>
        
        <div className="flex justify-between mt-8">
          {prevChapter ? (
            <Button 
              variant="outline" 
              onClick={() => navigate(`/book/${bookId}/chapter/${prevChapter.id}`)}
              className="flex items-center"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              {prevChapter.title}
            </Button>
          ) : (
            <div></div>
          )}
          
          {nextChapter ? (
            <Button 
              variant="outline" 
              onClick={() => navigate(`/book/${bookId}/chapter/${nextChapter.id}`)}
              className="flex items-center"
            >
              {nextChapter.title}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <div></div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ChapterDetail; 