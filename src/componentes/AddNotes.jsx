/* eslint-disable react/prop-types */
import React from 'react';
import '../Estilos/register.scss';
import {addNote} from '../firebase/firestore';

// eslint-disable-next-line react/prop-types
export const AddNotes = ( props ) => {

    const saveNotes = (e) => {
        e.preventDefault();
        const note = {
            userId: 'lucia@gmail.com',
            title:e.target.title.value, 
            description: e.target.description.value, 
            state: true, 
            date: new Date().toLocaleDateString()
        }
        if(note.title==='' && note.description===''){
            return alert('Write a note!!');
        }     

        addNote(note)
        .then((response)=>{
            note.id = response.id;
            const newArrayNotes = [...props.arrayNotes, note]
            e.target.reset();
            props.setArrayNotes(newArrayNotes);
            props.setStateAddNote(false);
        })
        .catch((error) => console.log(error.message));   
  }

  const cancel = () => {
    props.setStateAddNote(false);
  }

    return (
        <form onSubmit={saveNotes} className='note-new'>
            <input type="text" placeholder='Note Title' id='title'/>
            <textarea cols="10" rows="8" placeholder='Type to add a note' id='description'></textarea>
            <div className='note-footer'>
                <button type='submit'>Save</button>
                <button type='button' onClick={cancel}>Cancel</button>
            </div>
        </form>
    )
}; 