import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCZ9dq9PfqW__LhQHT6LZPn2Ze-N0Y0O6Q',
  authDomain: 'chatapp-9d51c.firebaseapp.com',
  projectId: 'chatapp-9d51c',
  storageBucket: 'chatapp-9d51c.appspot.com',
  messagingSenderId: '940475119883',
  appId: '1:940475119883:web:0b17d0f301287c3e8f4a0e',
  measurementId: 'G-QP4VM4JRZH',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();