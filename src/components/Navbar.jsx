import React, { useState, useEffect } from 'react';
import {useDarkMode} from '../hooks/useDarkMode'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode()
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  useEffect( _ => {
    if (!darkMode) document.body.classList.remove("dark-mode")
    else document.body.classList.add("dark-mode")
  }, [darkMode])
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
