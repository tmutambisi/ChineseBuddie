
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Level, useApp } from '@/context/AppContext';

interface LevelCardProps {
  level: Level;
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}

const LevelCard: React.FC<LevelCardProps> = ({ level, title, description, color, icon }) => {
  const navigate = useNavigate();
  const { setCurrentLevel } = useApp();
  
  const handleClick = () => {
    setCurrentLevel(level);
    navigate('/lessons');
  };

  return (
    <div 
      className={`stage-button ${color} cursor-pointer animate-slideIn`}
      onClick={handleClick}
    >
      <div className="absolute top-2 right-2 opacity-20 text-6xl">{icon}</div>
      <div className="z-10">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm opacity-90 mb-4">{description}</p>
      </div>
      <div className="flex justify-end items-center mt-2">
        <ArrowRight className="h-6 w-6" />
      </div>
    </div>
  );
};

export default LevelCard;
