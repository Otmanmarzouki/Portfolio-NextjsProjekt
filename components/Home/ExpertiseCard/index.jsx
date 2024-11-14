import Image from 'next/image';

const ExpertiseCard = ({ Icon, title, description, width , height ,bg  }) => (
  <div  className={` flex flex-col border border-gray-700 shadow-sm shadow-gray-700 rounded-lg py-4 px-4 w-full dark:bg-[#1a1a1a] ${bg} `}
  >
    <div className="flex items-center mb-4">
      <div className="mr-3">
        <Image src={Icon} alt={`${title} Icon`} width={width} height={height} />
      </div>
      <h3 className="text-lg font-semibold text-gray-600 dark:text-white">{title}</h3>
    </div>
    <p className="text-xs text-gray-700 dark:text-gray-300">{description}</p>
  </div>
);

export default ExpertiseCard;
