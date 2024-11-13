import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; 
import Header from '../Header/index';
import Sidebar from '../Sidebar/index';
import Logo from "@/components/Logo/index";

export default function Layout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
  
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDarkMode(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div
      className={`flex min-h-screen text-white transition-colors duration-300 ${
        isDarkMode ? "bg-cover bg-center bg-no-repeat bg-dark" : "bg-cover bg-center bg-no-repeat bg-light"
      }`}
    >
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full items-center justify-between p-6">
          <Logo />
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full h-10 w-10 bg-white"
          >
            {isDarkMode ? (
              <FaSun className="text-yellow-400" size={24} />
            ) : (
              <FaMoon className="text-gray-600" size={24} /> 
            )}
          </button>
        </div>
        
        <div className="flex justify-end p-6">
          <Header />
        </div>
       
        <main className="flex flex-col lg:flex-row gap-10 p-6 mx-10">
          <Sidebar /> 
          {children}
        </main>
      </div>
    </div>
  );
}
