/* eslint-disable react/jsx-key */
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import {deleteNote, updateStateNote } from '../firebase/firestore';

export const Recycle = (  props ) => { 

    const deleteNoteRecycler = (idNote, title) => {
        const confirmDelete = confirm('¿Seguro que desea eliminar la nota ' + title + 'de forma permanente ' +'?');
        if(confirmDelete){
                const newArrayNotes = [...props.arrayNotes].filter((objNote)=>objNote.id!==idNote);
                props.setArrayNotes(newArrayNotes);
                deleteNote(idNote); 
            }
        };    

    const templateList = props.arrayNotes.map((note) => {
        return (
            <div key = {note.id} className='note-list'>
                <h3>{note.title}</h3>
                <p>{note.description}</p>
                <div className='note-footer'>
                    <h2></h2>
                    <div>
                        <MdDeleteForever className='delete-icon' size='1.3em'onClick={()=> deleteNoteRecycler(note.id, note.title)}></MdDeleteForever>
                    </div>
                </div>
            </div>
        )
    });
return templateList;
    
};