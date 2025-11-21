// components/chat/ChatLayout.tsx
import { useMobile } from "../hooks/useMobile";
import { useChat } from "../context/ChatContext";
import Sidebar from "../components/chat/Sidebar";
import ChatHeader from "../components/chat/ChatHeader";
import ChatMessages from "../components/chat/ChatMessages";
import ChatInput from "../components/chat/ChatInput";

export default function ChatLayout() {
  const isMobile = useMobile();
  const { showChat, selectedChat } = useChat();

  const showSidebar = !isMobile || !showChat;
  const showMainChat = !isMobile || showChat;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      {showSidebar && (
        <div className={`${isMobile ? "w-full" : "w-80"} h-full`}>
          <Sidebar />
        </div>
      )}

      {/* Main Chat Area */}
      {showMainChat && selectedChat && (
        <div className={`flex-1 flex flex-col ${isMobile ? "w-full" : ""}`}>
          <ChatHeader />

          <div className="flex-1 overflow-y-auto px-4 md:px-6 py-4 bg-gradient-to-br from-gray-50 to-blue-50">
            <ChatMessages />
          </div>

          <div className="bg-white border-t border-gray-200">
            <ChatInput />
          </div>
        </div>
      )}

      {/* Empty State */}
      {!isMobile && !selectedChat && (
        <div className="flex-1 flex flex-col items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Pilih Percakapan
            </h3>
            <p className="text-gray-500">
              Pilih kontak untuk memulai percakapan
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
