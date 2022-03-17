/* eslint-disable react/prop-types */
import React from 'react';
import '../Estilos/register.scss';
import {addNote} from '../firebase/firestore';

// eslint-disable-next-line react/prop-types
export const AddNotes = ( props ) => {

    const saveNotes = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        if(title==='' && description===''){
            return alert('Write a note!!');
        }
        const date =  new Date().toLocaleDateString();        

        addNote("lucia@gmail.com", title, description, date)
        .then((response)=>{
            const newArrayNotes = [...props.arrayNotes, {userId:'lucia@gmail.com', title: title, description: description, date: date, id: response.id}]
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