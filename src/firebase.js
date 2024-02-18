
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCvuuiZ9C1SUvP2kPw00aT89oVFZf2wpr8",
    authDomain: "chat-app-c6c66.firebaseapp.com",
    projectId: "chat-app-c6c66",
    storageBucket: "chat-app-c6c66.appspot.com",
    messagingSenderId: "215565445706",
    appId: "1:215565445706:web:caf1062827a3d7c4c494b3"
  };


export  const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();