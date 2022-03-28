// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { 
  getAuth,
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
 } from 'firebase/auth';

 import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBkUNvRt7tYhGlV3z5nvMhLEG5ylQywhqE',
  authDomain: 'simple-notes-138ea.firebaseapp.com',
  projectId: 'simple-notes-138ea',
  storageBucket: 'simple-notes-138ea.appspot.com',
  messagingSenderId: '36471898392',
  appId: '1:36471898392:web:27ee41295fecffa0a11e6d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export fireAuth
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
};

// Export FireStore

export { db };