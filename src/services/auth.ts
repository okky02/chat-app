import { auth, db } from "../firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const googleProvider = new GoogleAuthProvider();

// ----------------- REGISTER -----------------
export async function registerUser(
  name: string,
  email: string,
  password: string
) {
  const res = await createUserWithEmailAndPassword(auth, email, password);

  // Set display name
  await updateProfile(res.user, {
    displayName: name,
    photoURL: "/default-avatar.png",
  });

  // Save user to Firestore
  await setDoc(doc(db, "users", res.user.uid), {
    uid: res.user.uid,
    name,
    email,
    photoURL: res.user.photoURL,
    createdAt: Date.now(),
  });

  return res.user;
}

// ----------------- LOGIN EMAIL -----------------
export async function loginUser(email: string, password: string) {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res.user;
}

// ----------------- LOGIN GOOGLE -----------------
export async function googleLogin() {
  const res = await signInWithPopup(auth, googleProvider);

  // Save/update user in Firestore
  await setDoc(
    doc(db, "users", res.user.uid),
    {
      uid: res.user.uid,
      name: res.user.displayName,
      email: res.user.email,
      photoURL: res.user.photoURL,
      lastLogin: Date.now(),
    },
    { merge: true }
  );

  return res.user;
}
