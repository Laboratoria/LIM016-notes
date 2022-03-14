import React, {useState} from 'react';

import '../Estilos/register.scss';

const eventOnClick = () => {
console.log('notas');
}

export const AddNotes = () => {
    return (
        <div className='note-new'>
            <input type="text" placeholder='Note Title'/>
            <textarea cols="10" rows="8" placeholder='Type to add a note'></textarea>
            <div className='note-footer'>
                <button type='submit'>Save</button>
                <button>Cancel</button>
            </div>
        </div>
    )
};