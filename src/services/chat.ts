import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import type { Message } from "../types/Message";

const messagesRef = collection(db, "messages");

// kirim pesan
export const sendMessage = async (
  text: string,
  user: { uid: string; displayName: string | null; photoURL: string | null }
) => {
  if (!text.trim()) return;

  await addDoc(messagesRef, {
    text,
    uid: user.uid,
    displayName: user.displayName,
    photoURL: user.photoURL,
    createdAt: serverTimestamp(),
  });
};

// listen realtime (setiap msg baru masuk)
export const subscribeMessages = (callback: (msgs: Message[]) => void) => {
  const q = query(messagesRef, orderBy("createdAt", "asc"));

  return onSnapshot(q, (snapshot) => {
    const msgs: Message[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Message[];

    callback(msgs);
  });
};
