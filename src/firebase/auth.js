import {
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from './config';

    const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const loginWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider());
    const userSignOut = () => signOut(auth);
    const stateAuthUser = (callback) => onAuthStateChanged(auth, callback);

    export {
      auth,
      signIn,
      createUser,
      stateAuthUser,
      userSignOut
  }; 