import React from 'react';
import { Palette } from 'lucide-react';
import { useTheme } from './ThemeContext';

const ThemeToggle: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
        <Palette className="w-5 h-5 text-white" />
        <span className="text-white text-sm">{currentTheme.name}</span>
      </button>
      
      <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="p-2 space-y-1 min-w-[150px]">
          <button
            onClick={() => setTheme('redBlack')}
            className="w-full flex items-center space-x-3 px-3 py-2 rounded hover:bg-gray-100 transition-colors"
          >
            <div className="w-4 h-4 bg-gradient-to-r from-red-600 to-black rounded-full"></div>
            <span className="text-gray-900 text-sm">Red & Black</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;