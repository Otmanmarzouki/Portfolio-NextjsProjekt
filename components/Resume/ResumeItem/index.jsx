
export default function ResumeItem({ date, position, description }) {
    return (
      <div className="w-full border border-gray-700 shadow-sm shadow-gray-700 rounded-lg p-4">
        <p className="dark:text-gray-400 text-gray-500 text-sm">{date}</p>
        <h3 className="dark:text-white  text-gray-700 font-semibold">{position}</h3>
        {description && <p className="dark:text-gray-300  text-gray-700 text-xs mt-2">{description}</p>}
      </div>
    );
  }
  