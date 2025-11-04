import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
  };
}

export const themes: Record<string, Theme> = {
  redBlack: {
    name: 'Red & Black',
    colors: {
      primary: '#dc2626',
      secondary: '#ef4444',
      accent: '#f87171',
      background: '#000000',
      surface: '#1a1a1a',
      text: '#ffffff',
      textSecondary: '#cccccc',
      border: '#333333',
    },
  },
};

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeName: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes.redBlack);

  const setTheme = (themeName: string) => {
    if (themes[themeName]) {
      setCurrentTheme(themes[themeName]);
      localStorage.setItem('selectedTheme', themeName);
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(themes[savedTheme]);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};