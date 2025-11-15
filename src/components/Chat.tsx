import { useEffect, useState } from "react";
import { sendMessage, subscribeMessages } from "../services/chat";
import { useAuth } from "../hooks/useAuth";
import type { Message } from "../types/Message";

export default function Chat() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const unsub = subscribeMessages((msgs) => {
      setMessages(msgs);
    });
    return () => unsub();
  }, []);

  const handleSend = async () => {
    if (!user) return alert("Login dulu");
    await sendMessage(text, user);
    setText("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 border p-4 rounded shadow space-y-4">
      <div className="h-80 overflow-y-auto border p-2 rounded bg-gray-50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-2 my-1 rounded ${
              msg.uid === user?.uid
                ? "bg-blue-200 ml-auto w-fit"
                : "bg-gray-200 w-fit"
            }`}
          >
            <p className="text-xs text-gray-600">{msg.displayName}</p>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 flex-1 rounded"
          placeholder="Type message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
