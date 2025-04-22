
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Book, LayoutGrid, Award } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  return (
    <nav className="bottom-nav flex justify-around items-center">
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          `flex flex-col items-center p-2 ${isActive ? 'text-china-red' : 'text-gray-500'}`
        }
        end
      >
        <Home className="h-6 w-6" />
        <span className="text-xs mt-1">Home</span>
      </NavLink>
      <NavLink 
        to="/lessons" 
        className={({ isActive }) => 
          `flex flex-col items-center p-2 ${isActive ? 'text-china-red' : 'text-gray-500'}`
        }
      >
        <Book className="h-6 w-6" />
        <span className="text-xs mt-1">Lessons</span>
      </NavLink>
      <NavLink 
        to="/characters" 
        className={({ isActive }) => 
          `flex flex-col items-center p-2 ${isActive ? 'text-china-red' : 'text-gray-500'}`
        }
      >
        <LayoutGrid className="h-6 w-6" />
        <span className="text-xs mt-1">Characters</span>
      </NavLink>
      <NavLink 
        to="/progress" 
        className={({ isActive }) => 
          `flex flex-col items-center p-2 ${isActive ? 'text-china-red' : 'text-gray-500'}`
        }
      >
        <Award className="h-6 w-6" />
        <span className="text-xs mt-1">Progress</span>
      </NavLink>
    </nav>
  );
};

export default BottomNavigation;
