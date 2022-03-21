/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState, useEffect } from 'react';
import {
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from './config';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = (props) => {
    const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
        stateAuthUser((user) => {
            setCurrentUser(user);
        })
    }, []);

    const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const loginWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider());
    const userSignOut = () => signOut(auth);
    const stateAuthUser = (user) => onAuthStateChanged(auth, user);
    const value = { signIn, createUser, loginWithGoogle, userSignOut, stateAuthUser, currentUser };
    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

