// components/chat/ChatHeader.tsx
import { useChat } from "../../context/ChatContext";
import { useMobile } from "../../hooks/useMobile";

export default function ChatHeader() {
  const { selectedChat, setShowChat } = useChat();
  const isMobile = useMobile();

  const handleBackClick = () => {
    setShowChat(false);
  };

  if (!selectedChat) return null;

  return (
    <header className="bg-white border-b border-gray-200 p-5 shadow-sm h-[80px] flex items-center">
        <div className="flex items-center space-x-4">
          {isMobile && (
            <button
              onClick={handleBackClick}
              className="text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-lg hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          <div className="relative">
            <img
              src={`https://i.pravatar.cc/150?img=${selectedChat.id}`}
              className="w-12 h-12 rounded-full"
              alt={selectedChat.name}
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              {selectedChat.name}
            </h1>
            <p className="text-sm text-green-600 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Online
            </p>
          </div>
        </div>
    </header>
  );
}
