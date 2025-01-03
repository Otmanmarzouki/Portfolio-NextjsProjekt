import ResumeItem from '../ResumeItem/index';

export default function ResumeSection({ icon, title, items }) {
  return (
    <div className="flex flex-col space-y-4 md:w-full">
      <div className="flex items-center space-x-2">
        <div className="text-[rgb(249,80,84)] text-3xl">{icon}</div>
        <h2 className="text-lg text-gray-700 dark:text-white font-semibold">{title}</h2>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} dark:bg-[#292929] `}
            
          >
            <ResumeItem 
              date={item.date} 
              position={item.position} 
              description={item.description} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
