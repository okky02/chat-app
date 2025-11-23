export interface Contact {
  id: number;
  name: string;
  status: 'online' | 'offline';
  unread: number;
  lastMessage: string;
  time: string;
}

export interface Message {
  id: number;
  text: string;
  sender: string;
  time: string;
}

export interface ChatContextType {
  selectedChat: Contact | null;
  setSelectedChat: (contact: Contact | null) => void;
  showChat: boolean;
  setShowChat: (show: boolean) => void;
}