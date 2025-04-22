
import React from 'react';
import { Character } from '@/data/characters';
import { useApp } from '@/context/AppContext';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { showPinyin } = useApp();
  
  return (
    <div className="flex flex-col items-center p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-sm">
      <span className="chinese-character mb-2">{character.character}</span>
      {showPinyin && <span className="text-sm text-gray-600 dark:text-gray-300">{character.pinyin}</span>}
      <span className="text-sm font-medium mt-1">{character.meaning}</span>
      <span className="text-xs text-gray-500 mt-1">{character.strokes} strokes</span>
    </div>
  );
};

export default CharacterCard;
