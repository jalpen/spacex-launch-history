import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeUtil } from '../helpers/ThemeUtil';
import { GlobalStyles } from './GlobalStyle';
import { lightTheme, darkTheme } from '../config/themes';
import ThemeSelector from './ThemeSelector';

const ThemeContainer = () => {
  const [theme, themeToggler] = ThemeUtil();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  useEffect(() => {
    const timer = setTimeout(() => {}, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="theme-container">
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <ThemeSelector theme={theme} toggleTheme={themeToggler} />
      </ThemeProvider>
    </div>
  );
};

export default ThemeContainer;
