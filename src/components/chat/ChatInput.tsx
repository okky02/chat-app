export default function ChatInput() {
  return (
    <div className="p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
        <button className="text-white hover:text-gray-300 transition-colors p-2 sm:p-2 lg:p-3">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
        </button>

        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full py-2 px-3 sm:py-3 sm:px-4 lg:py-3 lg:px-4 pr-10 sm:pr-12 lg:pr-12 text-sm sm:text-base lg:text-base rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-gray-50 focus:bg-white"
          />
        </div>

        <button className="bg-white text-indigo-600 p-2 sm:p-2 lg:p-3 rounded-xl sm:rounded-xl lg:rounded-2xl hover:bg-gray-300 transition-all">
          <svg
            className="w-5 h-5 sm:w-5 sm:h-5 lg:w-5 lg:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
