import React, { useState } from 'react';
import './ThemeToggle.css';

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'theme-container dark' : 'theme-container light'}>
      <h1>Theme Toggle Demo</h1>
      <p>Current Theme: {isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;
