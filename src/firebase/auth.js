import {
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from './config'

export const signIn = (email, password) => signInWithEmailAndPassword (auth, email, password);
export const createUser = (email, password) => createUserWithEmailAndPassword (auth, email, password);
export const userSignOut = () => signOut (auth);