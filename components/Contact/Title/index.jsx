export default function Title({ firstText, secondText }) {
    return (
      <div className="flex flex-col p-4">
        <div className="text-gray-500 text-2xl">{firstText}</div>
        <div className="text-white font-semibold text-2xl">{secondText}</div>
      </div>
    );
  }
  