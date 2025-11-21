export default function ChatMessages() {
  const messages = [
    {
      id: 1,
      text: "Hey Bob, how's it going? I was wondering if you'd like to grab lunch sometime this week?",
      sender: "alice",
      time: "10:30 AM",
    },
    {
      id: 2,
      text: "Hi Alice! I'm good! Lunch sounds great. How about Wednesday?",
      sender: "bob",
      time: "10:31 AM",
    },
    {
      id: 3,
      text: "Wednesday works perfectly for me! Any preferences for where we should go?",
      sender: "alice",
      time: "10:32 AM",
    },
    {
      id: 4,
      text: "I've been wanting to try that new Italian place downtown. What do you think?",
      sender: "bob",
      time: "10:33 AM",
    },
    {
      id: 5,
      text: "That's a great idea! I've heard good things about their pasta. Let's meet there at 12:30?",
      sender: "alice",
      time: "10:34 AM",
    },
  ];

  return (
    <div>
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.sender === "bob" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`flex ${
              message.sender === "bob" ? "flex-row-reverse" : "flex-row"
            } items-end space-x-2 max-w-[70%]`}
          >
            <img
              src={`https://i.pravatar.cc/150?img=${
                message.sender === "alice" ? 1 : 2
              }`}
              className="w-8 h-8 rounded-full flex-shrink-0"
              alt={message.sender}
            />

            <div
              className={`flex flex-col ${
                message.sender === "bob" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`px-4 py-3 rounded-2xl ${
                  message.sender === "bob"
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-br-none"
                    : "bg-white text-gray-800 shadow-sm rounded-bl-none border border-gray-200"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
              </div>
              <span className="text-xs text-gray-500 mt-1 px-1">
                {message.time}
              </span>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}
