// components/chat/Sidebar.tsx
import { useChat } from "../../context/ChatContext";
import { useMobile } from "../../hooks/useMobile";
import type { Contact } from "../../types/chat";

export default function Sidebar() {
  const { setSelectedChat, setShowChat } = useChat();
  const isMobile = useMobile();

  const contacts: Contact[] = [
    {
      id: 1,
      name: "Alice Johnson",
      status: "online",
      unread: 2,
      lastMessage: "See you tomorrow!",
      time: "2 min ago",
    },
    {
      id: 2,
      name: "Bob Smith",
      status: "online",
      unread: 0,
      lastMessage: "Thanks for your help!",
      time: "1 hour ago",
    },
    {
      id: 3,
      name: "Carol Davis",
      status: "offline",
      unread: 0,
      lastMessage: "Let's meet next week",
      time: "2 hours ago",
    },
  ];

  const handleContactClick = (contact: Contact) => {
    setSelectedChat(contact);
    if (isMobile) {
      setShowChat(true);
    }
  };

  return (
    <div className="w-full h-full bg-white border-r border-gray-200 flex flex-col shadow-lg">
      <header className="p-5 bg-gradient-to-br from-indigo-600 to-purple-700 text-white h-[80px] flex items-center">
        <div className="flex items-center justify-between w-full">
          <div className="bg-white rounded-2xl">
            <img
              src="/logo.png"
              alt="O-Chat Logo"
              className="h-14 w-auto"
            />
          </div>
          <button className="bg-white/20 hover:bg-white/30 p-2 rounded-md transition-colors">
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
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => handleContactClick(contact)}
              className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
            >
              <div className="relative">
                <img
                  src={`https://i.pravatar.cc/150?img=${contact.id}`}
                  className="w-12 h-12 rounded-full"
                  alt={contact.name}
                />
                <div
                  className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                    contact.status === "online" ? "bg-green-500" : "bg-gray-400"
                  }`}
                />
              </div>

              <div className="ml-3 flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 truncate">
                    {contact.name}
                  </h3>
                  <span className="text-xs text-gray-500">{contact.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600 truncate">
                    {contact.lastMessage}
                  </p>
                  {contact.unread > 0 && (
                    <span className="bg-indigo-500 text-white text-xs rounded-full px-2 py-1 min-w-5 text-center">
                      {contact.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
