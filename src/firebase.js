
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDzLzgYvTwey3-cArl-JgSCorgffUof3g4",
    authDomain: "m4mmoth.firebaseapp.com",
    projectId: "m4mmoth",
    storageBucket: "m4mmoth.firebasestorage.app",
    messagingSenderId: "230794101368",
    appId: "1:230794101368:web:28bab50cf94de551af638d"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword };
