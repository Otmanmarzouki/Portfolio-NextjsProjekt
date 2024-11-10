export default function SendButton({ onClick, isLoading }) {
    return (
      <button
        onClick={onClick}
        disabled={isLoading} 
        className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    );
  }
  