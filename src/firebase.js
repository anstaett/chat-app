import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA4g6Cu1GoTyZRiFfJ2lnqzmYrtTnjcS9I",
  authDomain: "chatroomv2-2b520.firebaseapp.com",
  projectId: "chatroomv2-2b520",
  storageBucket: "chatroomv2-2b520.appspot.com",
  messagingSenderId: "603081121915",
  appId: "1:603081121915:web:0a516cf20776430f4d82de",
  measurementId: "G-7HXN14YPW4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
