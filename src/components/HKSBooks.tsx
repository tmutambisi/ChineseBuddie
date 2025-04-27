import React from 'react';
import { Link } from 'react-router-dom';
import { hksBooks } from '../data/hks-books';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';

const HKSBooks: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header title="HKS Books" showBack={true} showSettings={false} />
      
      <main className="flex-1 container px-4 py-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hksBooks.map((book) => (
            <Link
              key={book.id}
              to={`/book/${book.id}`}
              className="block bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-700 relative">
                {book.coverImage ? (
                  <img 
                    src={book.coverImage} 
                    alt={book.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl font-chinese">{book.titleChinese}</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium">{book.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{book.author}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{book.description}</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-2 py-1 rounded">
                    {book.level}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {book.chapters.length} chapters
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default HKSBooks; 