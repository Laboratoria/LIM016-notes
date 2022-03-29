import React, { useState } from 'react';
import { MdDeleteForever, MdCreate } from 'react-icons/md';
import { updateStateNote } from '../firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export const Notes = (props) => {
    //const [edit, setEdit] = useState(false);

    const deleteNotes = (idNote, title) => {
        const confirmDelete = confirm('Do you want to delete the note ' + title + '?');
        if (confirmDelete) {
            updateStateNote(idNote, false).then(() => {
                const newArrayNotes = [...props.arrayNotes].filter((objNote) => objNote.id !== idNote);
                props.setArrayNotes(newArrayNotes);
                props.setSearchArrayNotes(newArrayNotes);
            }).catch(() => {
                alert('Error trying to delete note ' + idNote)
            });
        }
    }

    const editNote = () => {
        //setEdit(true);
        console.log('hola');
    };
    
    const templateList = props.arrayNotes.map((note) => {
        return (
            <div key={note.id} className='note-list'>
                <h3>{note.title}</h3>
                <p>{note.description}</p>
                <div className='note-footer'>
                    <h2> {note.date}</h2>
                    <div>
                        <MdDeleteForever className='delete-icon' size='1.3em' onClick={() => deleteNotes(note.id, note.title)}></MdDeleteForever>
                        <div>
                            <button type="button" className="btn btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <MdCreate className='create-icon' size='1.3em' onClick={editNote} ></MdCreate>
                            </button>

                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <input className="form-control" id="title" type="text" placeholder='Note Title' />
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <input type="text" className="form-control" id='description' placeholder='Type to add a note'></input>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save Changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return templateList; 
};