import { useEffect, useState } from 'react';
export const ThemeUtil = () => {
  const [theme, setTheme] = useState('dark');

  const setMode = (mode) => {
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    setMode('dark');
  }, []);

  return [theme, themeToggler];
};
