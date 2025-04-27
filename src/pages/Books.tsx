import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import { books, getBooksByLevel } from '@/data/books';
import { Level } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Download, Headphones } from 'lucide-react';

const Books = () => {
  const navigate = useNavigate();
  
  // Get HSK books in order
  const hsk1Books = getBooksByLevel('hsk1');
  const hsk2Books = getBooksByLevel('hsk2');
  const hsk3Books = getBooksByLevel('hsk3');
  const hsk4Books = getBooksByLevel('hsk4');
  
  // Get other books by level
  const beginnerBooks = getBooksByLevel('beginner');
  const intermediateBooks = getBooksByLevel('intermediate');
  const advancedBooks = getBooksByLevel('advanced');
  
  const handleBookClick = (bookId: string) => {
    navigate(`/book/${bookId}`);
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header title="Books" showBack={false} showSettings={true} />
      
      <main className="flex-1 container px-4 py-6 pb-24">
        <div className="space-y-8">
          {/* HSK Books */}
          <section>
            <h2 className="text-xl font-semibold mb-4">HSK Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[...hsk1Books, ...hsk2Books, ...hsk3Books, ...hsk4Books].map((book) => (
                <div 
                  key={book.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
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
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">{book.description}</p>
                    
                    <div className="mt-4 flex flex-col space-y-2">
                      {book.downloadLink && (
                        <a 
                          href={book.downloadLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download Book
                        </a>
                      )}
                      
                      {book.audiobookLink && (
                        <a 
                          href={book.audiobookLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
                        >
                          <Headphones className="mr-2 h-4 w-4" />
                          Download Audiobook
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Beginner Books */}
          {beginnerBooks.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-4">Beginner Books</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {beginnerBooks.map((book) => (
                  <div 
                    key={book.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleBookClick(book.id)}
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
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Intermediate Books */}
          {intermediateBooks.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-4">Intermediate Books</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {intermediateBooks.map((book) => (
                  <div 
                    key={book.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleBookClick(book.id)}
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
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Advanced Books */}
          {advancedBooks.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-4">Advanced Books</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {advancedBooks.map((book) => (
                  <div 
                    key={book.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleBookClick(book.id)}
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
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Books; 