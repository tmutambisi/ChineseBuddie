import React, { useState } from 'react';
import { ChineseWord } from '@/data/lessons';
import { useApp } from '@/context/AppContext';

interface WordCardProps {
  word: ChineseWord;
  showExample?: boolean;
}

const WordCard: React.FC<WordCardProps> = ({ word, showExample = false }) => {
  const { showPinyin } = useApp();
  const [showFullExample, setShowFullExample] = useState(false);
  
  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-sm mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="chinese-character">{word.chinese}</span>
      </div>
      
      {showPinyin && (
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{word.pinyin}</div>
      )}
      
      <div className="font-medium">{word.english}</div>
      
      {showExample && word.example && (
        <div className="mt-3 pt-3 border-t">
          <button 
            className="text-sm text-blue-600 dark:text-blue-400 mb-2"
            onClick={() => setShowFullExample(!showFullExample)}
          >
            {showFullExample ? 'Hide' : 'Show'} Example
          </button>
          
          {showFullExample && (
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
              <div className="font-chinese">{word.example.chinese}</div>
              {showPinyin && (
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {word.example.pinyin}
                </div>
              )}
              <div className="text-sm mt-1">{word.example.english}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WordCard;
