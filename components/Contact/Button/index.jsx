export default function SendButton({ onClick, isLoading }) {
    return (
        <div className="transition-all duration-300 ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg ">
      <button
        onClick={onClick}
        disabled={isLoading} 
        className="transition ease-in duration-200 text-sm font-semibold cursor-pointer border-gray-400 hover:border-transparent px-6 py-2 rounded-lg border-[1px] hover:text-white text-gray-600 dark:text-white"
      >
        {isLoading ? "Sending..." : "Send"}
      </button>
      </div>
    );
  }
  