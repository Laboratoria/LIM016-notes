import { createContext, useContext, useState } from "react";
import {
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from './config'

const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("There is no Auth provider");
    return context;
};

export function AuthProvider({ children }) {
   
    const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const loginWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider());
    const userSignOut = () => signOut(auth);
    const stateAuthUser = (callback) => onAuthStateChanged(auth, callback);

    return (
        <authContext.Provider
          value={{
            createUser,
            signIn,
            userSignOut,
            loginWithGoogle,
            stateAuthUser
          }}
        >
          {children}
        </authContext.Provider>
      );
    }