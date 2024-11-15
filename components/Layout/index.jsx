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
    <div className={`flex min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-dark text-white" : "bg-light text-gray-900"}`}>
      <div className="flex flex-col w-full max-w-screen-xl mx-auto px-4 lg:px-8">
        <header className="flex items-center justify-between py-6">
          <Logo />
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white dark:bg-gray-800 dark:text-white text-gray-600 hover:text-yellow-400"
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </header>
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          <Sidebar className=" lg:w-1/4 w-full" />
          <main className="flex flex-col w-full gap-6  lg:w-3/4 lg:ml-10  rounded-lg shadow-lg">
            <div className="flex justify-end w-full">
              <Header />
            </div>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
