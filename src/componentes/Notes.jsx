import React, { useState } from 'react';
import { MdDeleteForever, MdCreate } from 'react-icons/md';
import {deleteNote, upDateNote} from '../firebase/firestore';

export const Notes = ( props ) => { 
    
    const templateList = props.arrayNotes.map((note) => {

        const deleteNotes = (idNote) => {
            deleteNote(idNote);
            const newArrayNotes = props.arrayNotes.filter((objNote)=>objNote.id!==idNote)

        }
        /*
            upDateNote(, {...newArrayNotes})
            props.setArrayNotes(newArrayNotes);

            //Eliminar del farebase
            //Pasar las notas a un nuevo array
            //Eliminar la nota del newArrayNotes 
            //Actualizar el estado arrayNotes
       */

       return (
        <div key={note.id} className='note-list'>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <div className='note-footer'>
                <h2> {note.date}.</h2>
                <div>
                    <MdDeleteForever className='delete-icon' size='1.3em' onClick={()=> deleteNotes(note.id)}></MdDeleteForever>
                    <MdCreate className='create-icon' size='1.3em'></MdCreate>
                </div>
            </div>
        </div>
        )
    });


    return templateList; 
};

