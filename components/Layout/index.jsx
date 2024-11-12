import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; 
import Header from '../Header/index';
import Sidebar from '../Sidebar/index';
import Logo from "@/components/Logo/index"

export default function Layout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
 

  const toggleTheme=()=>{
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  }
  
  return (
    <div
      className="flex min-h-screen text-white"
      style={{
        backgroundImage: isDarkMode ? `url('/background/bg-dark.jpg') ` : `url('/background/bg-light.jpg') `,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full items-center justify-between px-6">
          <Logo />
          <button
            onClick={toggleTheme}
            className=" p-2 rounded-full  h-10 w-10 bg-white"
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
       
        <main className="flex flex-col lg:flex-row gap-10 p-6 mx-10 ">
        <Sidebar /> 
          {children}
        </main>
      </div>
    </div>
  );
}
