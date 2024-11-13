import { AiFillLinkedin, AiOutlineGoogle } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';

export default function SidebarSubTittle() {
  const socialMedia = [
    { icon: <AiFillLinkedin />, link: 'https://www.linkedin.com',
    style:"py-2 flex justify-center items-center bg-[#F3F6F6] dark:bg-[#292929] text-[#1773EA] rounded-lg w-10  transition duration-300 ease-in-out hover:text-white hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] "},
    { icon: <AiOutlineGoogle />, link: 'https://www.google.com' ,
    style:"py-2 flex justify-center items-center bg-[#F3F6F6] dark:bg-[#292929] text-[#ea7617] rounded-lg w-10  transition duration-300 ease-in-out hover:text-white hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] "},
    { icon: <BsGithub />, link: 'https://www.github.com' ,   
    style:"py-2 flex justify-center   text-black  items-center bg-[#F3F6F6] dark:bg-[#292929] text-gray-700 rounded-lg w-10  transition duration-300 ease-in-out  hover:text-white hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] "},

  ];


  return (
    <div className="flex flex-row space-x-4 justify-center ">
      {socialMedia.map((social, index) => (
        <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className={social.style}>
          {social.icon}
        </a>
      ))}
    </div>
  );
}
