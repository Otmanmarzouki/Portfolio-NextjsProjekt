import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className='flex-1 flex justify-end '> 
        <nav className=' bg-black p-4 rounded-lg'>
          <ul className="flex space-x-2"> 
            <li>
              <Link href="/home" className="w-16 h-16 rounded-[10px] cursor-pointer font-poppins bg-[#F3F6F6] font-medium mx-2.5 text-xs text-gray-lite dark:text-[#A6A6A6] flex flex-col items-center justify-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]">
                <span className="text-sm mb-1">
                  <svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" height="1em" width="1em">
                    <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
                  </svg>
                </span>
                Home
              </Link>
            </li>
            <li>
              <Link href="/resume" className="w-16 h-16 rounded-[10px] cursor-pointer font-poppins bg-[#F3F6F6] font-medium mx-2.5 text-xs text-gray-lite dark:text-[#A6A6A6] flex flex-col items-center justify-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]">
                <span className="text-sm mb-1">
                  <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em">
                    <path d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z" fill="currentColor"></path>
                    <path d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z" fill="currentColor"></path>
                    <path d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H11C11.5523 15 12 14.5523 12 14C12 13.4477 11.5523 13 11 13H7Z" fill="currentColor"></path>
                  </svg>
                </span>
                Resume
              </Link>
            </li>
            <li >
            <Link href="/portfolio" className="w-16 h-16 rounded-[10px] cursor-pointer font-poppins bg-[#F3F6F6] font-medium mx-2.5 text-xs text-gray-lite dark:text-[#A6A6A6] flex flex-col items-center justify-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]">

              <span className="text-sm mb-1">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1em" width="1em">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                  <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                  <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </span>
              Works
            </Link>
          </li>
          <li >
          <Link href="/portfolio" className="w-16 h-16 rounded-[10px] cursor-pointer font-poppins bg-[#F3F6F6] font-medium mx-2.5 text-xs text-gray-lite dark:text-[#A6A6A6] flex flex-col items-center justify-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]">
          <span className="text-sm mb-1">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 2h16.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3V2zm4 2H5v16h2V4zm2 16h10V4H9v16zm2-4a3 3 0 0 1 6 0h-6zm3-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8-6h2v4h-2V6zm0 6h2v4h-2v-4z"></path></g></svg>
              </span>
              Contact
            </Link>
          </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
