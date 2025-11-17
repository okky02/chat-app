import { Timestamp } from "firebase/firestore";
export interface Message {
  id?: string;
  text: string;
  uid: string;
  displayName: string | null;
  photoURL: string | null;
  createdAt: Timestamp | null; 
}
