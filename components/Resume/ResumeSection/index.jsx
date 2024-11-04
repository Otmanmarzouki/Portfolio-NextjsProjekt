
import ResumeItem from '../ResumeItem/index';

export default function ResumeSection({ icon, title, items }) {
  return (
    <div className="flex flex-col space-y-4 md:w-full">
      <div className="flex items-center space-x-2 text-white">
        {icon}
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <ResumeItem 
            key={index} 
            date={item.date} 
            position={item.position} 
            description={item.description} 
          />
        ))}
      </div>
    </div>
  );
}
