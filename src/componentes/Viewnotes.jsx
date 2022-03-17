import React, {useState, useEffect} from 'react';
import '../Estilos/Note.scss';
import {MdLogout, MdSearch} from 'react-icons/md'
import {AddNotes} from './AddNotes';
import {Notes} from './Notes';
import {getNotesByUser} from '../firebase/firestore';

const imgMas = new URL ('../imagenes/mas.png', import.meta.url);
const imgCategoria = new URL ('../imagenes/categoria.png', import.meta.url);
const imgRecycle = new URL ('../imagenes/recycle-bin.png', import.meta.url);

export const ViewNotes = () =>{

    const [arrayNotes, setArrayNotes] = useState([]);
    const [stateAddNote, setStateAddNote] = useState(false);

    let tempArrayNotes = [];  
    let userId = 'lucia@gmail.com'; 
    useEffect(()=>{
        getNotesByUser(userId)
        .then((response) => {
            response.forEach(note => {
                let newNote = note.data();
                newNote.id = note.id;
                tempArrayNotes.push(newNote);
            });
            setArrayNotes(tempArrayNotes);
        })
        .catch((error) => console.log('Error: ', error.message)) 
    },[]);

    const addNotes = () => {
        setStateAddNote(true);
    }

    return (
        <section className='contentNote'>
            <header className='box-header'>
                <h3 >Simple Notes</h3>
                <div className='box-search'>
                    <MdSearch className='search-icon' size='2em'></MdSearch>
                    <input type="search" placeholder='Find Your Note'/>
                </div>
                <div className='signout'>
                    <MdLogout className='Logout-icon' size='3em'></MdLogout>
                    <p>sign out</p>
                </div>
            </header>
            <main className='box-option-notes'>
                <div className='box-option'>
                    <img src={imgMas} alt="" id='img-option' onClick={addNotes}></img>
                    <p id='img-option'>Add Notes</p>
                    <img src={imgCategoria} alt="" id='img-option'></img>
                    <p id='img-option'>Category</p>
                    <img src={imgRecycle} alt="" id='img-option'></img>
                    <p id='img-option'>Recycle</p>
                </div>
                <div className='box-notes'>
                    {
                        stateAddNote?
                        <AddNotes arrayNotes={arrayNotes} setArrayNotes={setArrayNotes} setStateAddNote={setStateAddNote}></AddNotes>
                        : null
                    }                
                    <Notes arrayNotes = {arrayNotes} setArrayNotes={setArrayNotes}></Notes>                                    
                </div>
            </main>
        </section>
    );
};