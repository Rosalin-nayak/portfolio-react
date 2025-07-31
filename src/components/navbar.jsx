import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
const str="<MyPortfolio/>"
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-black shadow-md w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600 dark:text-green-400">{str}</h1>

        
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200">
          <li><a href="#home" className="hover:text-green-500">Home</a></li>
          <li><a href="#about" className="hover:text-green-500">About</a></li>
          <li><a href="#skills" className="hover:text-green-500">Skills</a></li>
          <li><a href="#service" className="hover:text-green-500">Services</a></li>
          <li><a href="#project" className="hover:text-green-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-green-500">Contact</a></li>
        </ul>

       
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-gray-700 dark:text-gray-200"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-gray-700 dark:text-gray-200"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

     
      {isOpen && (
        <ul className="md:hidden bg-white dark:bg-black px-4 pb-4 space-y-2 text-gray-700 dark:text-gray-200">
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#service" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#project" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
