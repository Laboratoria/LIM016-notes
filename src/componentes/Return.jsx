/* eslint-disable react/prop-types */
import React from 'react';
import { MdUndo } from 'react-icons/md';
import {getNotesByUserAndState} from '../firebase/firestore';

export const Return = ( props ) => { 
    const returnNotes = () =>{
        props.setStateReturn(false);
        props.setStateRecycle(false);
        props.setStateGetNotes(true);
        const tempArrayNotes = [];
        getNotesByUserAndState(props.userId, true)
        .then((response) => {
            response.forEach(note => {
                let newNote = note.data();
                newNote.id = note.id;
                tempArrayNotes.push(newNote);
            });
            props.setArrayNotes(tempArrayNotes);
        })
        .catch((error) => console.log('Error: ', error.message));
    }

    return (
        <div className='icon-return'>
            <MdUndo onClick={returnNotes} size='3em'></MdUndo>  
            <p>Return</p>                      
        </div>
    )
};