/* eslint-disable react/jsx-key */
import React from 'react';
import { MdDeleteForever, MdAutorenew  } from 'react-icons/md';
import {deleteNote, updateStateNote } from '../firebase/firestore';

export const Recycle = (  props ) => { 

    const deleteNoteRecycler = (idNote, title) => {
        const confirmDelete = confirm('Are you sure you want to permanently delete ' + title + ' note?');
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
                        <MdAutorenew size='1.3em'></MdAutorenew>  
                    </div>
                </div>
            </div>
        )
    });
return templateList;
    
};