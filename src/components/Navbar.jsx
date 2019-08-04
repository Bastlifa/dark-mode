import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
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
      <NavLink 
        to="/"
        exact
        style={{
          fontSize: "18px",
          textDecoration: "none",
          color: darkMode ? "white" : "black"
        }}
        activeStyle={{
          fontSize: "18px",
          fontWeight: "bold",
          textDecoration: "none",
          color: darkMode ? "white" : "black"
        }}
      >
        Coins
      </NavLink>
      <NavLink to="/shitcoins"
        style={{
          fontSize: "18px",
          textDecoration: "none",
          color: darkMode ? "white" : "black"
        }}
        activeStyle={{
          fontSize: "18px",
          fontWeight: "bold",
          textDecoration: "none",
          color: darkMode ? "white" : "black"
        }}
      >
        Shit Coins
      </NavLink>
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
