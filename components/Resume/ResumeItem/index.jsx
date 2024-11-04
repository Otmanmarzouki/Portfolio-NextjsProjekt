
export default function ResumeItem({ date, position, description }) {
    return (
      <div className="w-full border border-gray-700 shadow-sm shadow-gray-700 rounded-lg p-4">
        <p className="text-gray-400 text-sm">{date}</p>
        <h3 className="text-white font-semibold">{position}</h3>
        {description && <p className="text-gray-300 text-sm mt-2">{description}</p>}
      </div>
    );
  }
  