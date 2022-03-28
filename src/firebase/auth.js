import {auth} from './config';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithRedirect } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const loginWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider());
export const userSignOut = () => signOut(auth);
export const stateAuthUser = (callback) => onAuthStateChanged(auth, callback);
export const singInGoogle = () => signInWithRedirect(auth, googleProvider);




