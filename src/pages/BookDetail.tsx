import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { getBookById } from '@/data/books';
import { Button } from '@/components/ui/button';
import { Download, Headphones } from 'lucide-react';

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const book = id ? getBookById(id) : null;
  
  if (!book) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header title="Book Not Found" showBack={true} showSettings={false} />
        <main className="flex-1 container px-4 py-6 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Book Not Found</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">The book you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/books')}>Back to Books</Button>
          </div>
        </main>
      </div>
    );
  }
  
  // Check if this is an HSK book (has download or audiobook links)
  const isHskBook = book.downloadLink || book.audiobookLink;
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header title={book.title} showBack={true} showSettings={false} />
      
      <main className="flex-1 container px-4 py-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="aspect-[3/4] md:aspect-[2/1] bg-gray-200 dark:bg-gray-700 relative">
            {book.coverImage ? (
              <img 
                src={book.coverImage} 
                alt={book.title} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-6xl font-chinese">{book.titleChinese}</span>
              </div>
            )}
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-semibold">{book.title}</h1>
            <p className="text-xl font-chinese mt-1">{book.titleChinese}</p>
            <p className="text-gray-500 dark:text-gray-400 mt-1">By {book.author} ({book.authorChinese})</p>
            <p className="mt-4">{book.description}</p>
            
            {/* Download and Audiobook links for HSK books */}
            {isHskBook && (
              <div className="mt-6 flex flex-col space-y-3">
                {book.downloadLink && (
                  <a 
                    href={book.downloadLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition-colors"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Book
                  </a>
                )}
                
                {book.audiobookLink && (
                  <a 
                    href={book.audiobookLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md transition-colors"
                  >
                    <Headphones className="mr-2 h-5 w-5" />
                    Download Audiobook
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Only show chapters section if the book has chapters */}
        {book.chapters.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mb-4">Chapters</h2>
            <div className="space-y-4">
              {book.chapters.map((chapter) => (
                <div 
                  key={chapter.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => navigate(`/book/${book.id}/chapter/${chapter.id}`)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{chapter.title}</h3>
                      <p className="text-sm font-chinese text-gray-500 dark:text-gray-400">{chapter.titleChinese}</p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {chapter.vocabulary.length} vocabulary words
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default BookDetail; 