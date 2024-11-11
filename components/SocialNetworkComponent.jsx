import { AiFillLinkedin, AiOutlineGoogle } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';

export default function SidebarSubTittle() {
  const socialMedia = [
    { icon: <AiFillLinkedin />, link: 'https://www.linkedin.com' },
    { icon: <AiOutlineGoogle />, link: 'https://www.google.com' },
    { icon: <BsGithub />, link: 'https://www.github.com' }
  ];

  const iconStyle = "py-2 flex justify-center items-center bg-[#1D1D1D] rounded-lg w-10 text-white transition duration-300 ease-in-out hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef]";

  return (
    <div className="flex flex-row space-x-4 justify-center ">
      {socialMedia.map((social, index) => (
        <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className={iconStyle}>
          {social.icon}
        </a>
      ))}
    </div>
  );
}
