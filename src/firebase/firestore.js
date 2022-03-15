import {
    db,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs
} from './config'

export const addNote = (userId, title, description,date) => {
    return addDoc(collection(db, 'notes'), {
        userId,
        title,
        description,
        date
    });
};
const queryGetNotesByUser = (userId) => query(collection(db, "notes"), where("userId", "==", userId));
export const getNotesByUser =  (userId) => getDocs(queryGetNotesByUser(userId));

export const getNote = (id) => getDoc(doc(db, 'notes', id));