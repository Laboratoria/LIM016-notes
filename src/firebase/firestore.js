import {
    db,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  onSnapshot
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

/*
export const unsubscribe = (userId) => onSnapshot(queryGetNotesByUser(userId), (querySnapshot) => {
    let notes = [];
    querySnapshot.forEach((doc) => {
        let temp = {userId: doc.data().userId, title: doc.data().title, description: doc.data().description, date: doc.data().date}
        notes.push(temp);
    });
    return notes;
});*/

export const getNote = (id) => getDoc(doc(db, 'notes', id));