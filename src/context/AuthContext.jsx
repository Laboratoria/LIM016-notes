import React, { createContext, useContext } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext(); 

export const useAuth = () => {
    const context =useContext(AuthContext);
    return context;
}


export function AuthProvider({children}) {


    //const [currentUser, setCurrentUser] = useState({});

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)};
    
    //const login  = (email, password) => {
    //    return auth.signInWithEmailAndPassword(email, password);
    //}
    //const logout = () => auth.logout();
   // const value = {signup, login, logout, currentUser};

    return(
        <AuthContext.Provider value = {signup} >
            {children}
        </AuthContext.Provider>
    )
}
