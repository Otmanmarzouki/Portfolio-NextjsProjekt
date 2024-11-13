export default function Title({ firstText, secondText }) {
    return (
      <div className="flex flex-col p-4 ">
        <div className=" text-xl text-gray-400 dark:text-gray-400">{firstText}</div>
        <div className=" font-bold text-xl text-gray-700 dark:text-gray-200">{secondText}</div>
      </div>
    );
  }
  