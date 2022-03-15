import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDeleteForever, MdCreate } from 'react-icons/md';

export const Notes = ( props ) => { 
    // eslint-disable-next-line react/prop-types
    const templateList = props.notes.map((note) => {
        // eslint-disable-next-line react/jsx-key
        let key = 0;
       return (
        <div key={key+1} className='note-list'>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <div className='note-footer'>
                <h2> {note.date}.</h2>
                <div>
                    <MdDeleteForever className='delete-icon' size='1.3em'></MdDeleteForever>
                    <MdCreate className='create-icon' size='1.3em'></MdCreate>
                </div>
            </div>
        </div>
        )
    });
    return templateList; 
};

