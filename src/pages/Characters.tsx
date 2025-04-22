
import React, { useState } from 'react';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import CharacterCard from '@/components/CharacterCard';
import { useApp } from '@/context/AppContext';
import { getCharactersByLevel } from '@/data/characters';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Characters = () => {
  const { currentLevel } = useApp();
  const [selectedLevel, setSelectedLevel] = useState<string>(currentLevel);
  
  const characters = getCharactersByLevel(selectedLevel);
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header title="Chinese Characters" showBack={true} />
      
      <main className="flex-1 container px-4 py-6 pb-24">
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Learn and practice essential Chinese characters
          </p>
          
          <Tabs defaultValue={currentLevel} onValueChange={setSelectedLevel}>
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="absolute-beginner">Absolute</TabsTrigger>
              <TabsTrigger value="beginner">Beginner</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>
            
            {['absolute-beginner', 'beginner', 'intermediate', 'advanced'].map((level) => (
              <TabsContent key={level} value={level}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {getCharactersByLevel(level).map((character, index) => (
                    <CharacterCard key={index} character={character} />
                  ))}
                </div>
                
                {getCharactersByLevel(level).length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-lg text-gray-500">No characters available for this level yet.</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Characters;
