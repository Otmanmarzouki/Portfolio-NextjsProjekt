import { MdOutlinePhoneIphone } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';
import { MdAlternateEmail } from 'react-icons/md';
import { BsFillCalendarWeekFill } from 'react-icons/bs';

export default function SidebarSubTittle() {
  const details = [
    {
      icon: <MdOutlinePhoneIphone />,
      label: 'Handy',
      value: '+212644469203',
      style:'flex items-center justify-center bg-black p-2 rounded-lg text-[#E93B81] transition duration-300 ease-in-out hover:bg-gradient-to-l hover:text-white  from-[#DD2476] to-[#fa5252ef]'
    },
    {
      icon: <ImLocation />,
      label: 'Ort',
      value: 'Meknes, Marokko',
      style:'flex items-center justify-center bg-black p-2 rounded-lg text-[#6AB5B9] transition duration-300 ease-in-out hover:bg-gradient-to-l  hover:text-white from-[#DD2476] to-[#fa5252ef]'

    },
    {
      icon: <MdAlternateEmail />,
      label: 'Email',
      value: 'Marzouki53@gmail.com',
      style:'flex items-center justify-center bg-black p-2 rounded-lg text-[#FD7590] transition duration-300 ease-in-out hover:bg-gradient-to-l  hover:text-white  from-[#DD2476] to-[#fa5252ef]'

    },
    {
      icon: <BsFillCalendarWeekFill />,
      label: 'Geburtstag',
      value: '07-11-1991',
      style:'flex items-center justify-center bg-black p-2 rounded-lg text-[#C17CEB] transition duration-300 ease-in-out hover:bg-gradient-to-l hover:text-white from-[#DD2476] to-[#fa5252ef]'

    },
  ];

  return (
    <div className="flex flex-col  w-full p-3 bg-[#1D1D1D] rounded-lg gap-2">
      {details.map((item, index) => (
        <div key={index} className={`flex items-center space-x-2 pt-4 ${index > 0 ? 'border-t border-gray-700' : ''}`}
>
          <div className={item.style}>
            {item.icon}
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-gray-500">{item.label}</span>
            <span className="text-xs">{item.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
