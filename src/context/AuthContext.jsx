import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail
    //sendEmailVerification
} from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

export const AuthContext = createContext(); 

export const useAuth = () => {
    const context =useContext(AuthContext);
    return context;
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };

    const loginWithGoogle = () => {
      const googleProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleProvider);
    };

    const logout = () => signOut(auth);

    const resetPassword = async (email) => sendPasswordResetEmail(auth, email);
    useEffect(() => {
      const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log({ currentUser });
        setUser(currentUser);
        setLoading(false);
      });
      return () => unsubuscribe();
    }, []);

    return (
      <AuthContext.Provider
        value={{
          signup,
          login,
          user,
          logout,
          loading,
          loginWithGoogle,
          resetPassword,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
