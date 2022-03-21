import {
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from './config';

    export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
    export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    export const loginWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider());
    export const userSignOut = () => signOut(auth);
    export const stateAuthUser = (callback) => onAuthStateChanged(auth, callback);

    
    
    

