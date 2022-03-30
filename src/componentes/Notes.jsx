import React, { useState } from 'react';
import { MdDeleteForever, MdCreate } from 'react-icons/md';
import { updateStateNote } from '../firebase/firestore';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'


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
    const showModal = async(e) => {
        const MySwal = withReactContent(Swal)

        MySwal.fire({
            title: 'Edit your Note',
            html:
              '<input id="swal-input1" class="swal2-input" placeholder="Title">' +
              '<input id="swal-input2" class="swal2-input" placeholder="Write your note">',
            didOpen: () => {
    // `MySwal` is a subclass of `Swal`
    //   with all the same instance & static methods
    MySwal.clickConfirm()
  }
}).then(() => {
  return MySwal.fire(<p>Shorthand works too</p>)
})
        /* const { value: formValues } = await Swal.fire({
            title: 'Edit your Note',
            html:
              '<input id="swal-input1" class="swal2-input" placeholder="Title">' +
              '<input id="swal-input2" class="swal2-input" placeholder="Write your note">',
            focusConfirm: false,
            preConfirm: () => {
              return 'You update your note'
                //document.getElementById('swal-input1').value,
                //document.getElementById('swal-input2').value
            }
        })
          
          if (formValues) {
            Swal.fire(JSON.stringify(formValues))
          } */
    };
    
    
    const editNote = () => {
        //setEdit(true);
        console.log('hola');
    };

    const templateList = props.arrayNotes.map((note) => {
        return (
            <div key={note.id} className='note-list'>
                <h3>{note.title}</h3>
                <p className='noteDescrip'>{note.description}</p>
                <div className='note-footer'>
                    <h2> {note.date}</h2>
                    <div>
                        <MdDeleteForever className='delete-icon' size='1.3em' onClick={() => deleteNotes(note.id, note.title)}></MdDeleteForever>
                        <MdCreate className='create-icon' size='1.3em' onClick={()=> showModal()} ></MdCreate>
                    </div>
                </div>
            </div>
        )
    })
    return templateList; 
};