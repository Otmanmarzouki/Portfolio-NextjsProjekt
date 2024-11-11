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
    },
    {
      icon: <ImLocation />,
      label: 'Ort',
      value: 'Meknes, Marokko',
    },
    {
      icon: <MdAlternateEmail />,
      label: 'Email',
      value: 'Marzouki53@gmail.com',
    },
    {
      icon: <BsFillCalendarWeekFill />,
      label: 'Geburtstag',
      value: '07-11-1991',
    },
  ];

  return (
    <div className="flex flex-col p-7 mt-7 bg-[#1D1D1D] rounded-lg gap-2">
      {details.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <div className="flex items-center justify-center bg-black p-3 rounded-lg text-white transition duration-300 ease-in-out hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef]">
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
