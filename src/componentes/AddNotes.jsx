import React from 'react';
import '../Estilos/register.scss';
import {addNote} from '../firebase/firestore';

// eslint-disable-next-line react/prop-types
export const AddNotes = ( { arrayNotes, setArrayNotes } ) => {

    const saveNotes = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const date =  new Date().toLocaleDateString(); 
        const newArrayNotes = [...arrayNotes, {userId:'lucia@gmail.com', title: title, description: description}]

        addNote("lucia@gmail.com", title, description, date)
        .then((response)=>{
            e.target.reset();
            setArrayNotes(newArrayNotes);
        })
        .catch((error) => console.log(error.message));        
  }

    return (
        <form onSubmit={saveNotes} className='note-new'>
            <input type="text" placeholder='Note Title' id='title'/>
            <textarea cols="10" rows="8" placeholder='Type to add a note' id='description'></textarea>
            <div className='note-footer'>
                <button type='submit'>Save</button>
                <button>Cancel</button>
            </div>
        </form>
    )
}; 