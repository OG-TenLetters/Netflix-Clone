import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBSLe5XuiikxQwEJMOGievSadjBrcCOUOk",
  authDomain: "netflix-clone-3125b.firebaseapp.com",
  projectId: "netflix-clone-3125b",
  storageBucket: "netflix-clone-3125b.firebasestorage.app",
  messagingSenderId: "29916842422",
  appId: "1:29916842422:web:edaa4c60d1ea5099905917",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "))
  }
};

const logIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") + " ┐( ͡ಠ ʖ̯ ͡ಠ)┌")
  }
};

const logOut = () => {
  signOut(auth);
};

export { auth, db, logIn, signUp, logOut };
