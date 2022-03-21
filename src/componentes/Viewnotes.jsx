/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import '../Estilos/Note.scss';
import { Return } from './Return';
import {MdLogout, MdSearch} from 'react-icons/md'
import {AddNotes} from './AddNotes';
import {Notes} from './Notes';
import {getNotesByUser} from '../firebase/firestore';
import { userSignOut } from '../firebase/auth';
import {useNavigate } from 'react-router-dom';
import {getNotesByUserAndState} from '../firebase/firestore';
import {Recycle} from './Recycle'

const imgMas = new URL ('../imagenes/mas.png', import.meta.url);
const imgCategoria = new URL ('../imagenes/categoria.png', import.meta.url);
const imgRecycle = new URL ('../imagenes/recycle-bin.png', import.meta.url);

export const ViewNotes = (props) =>{

    const [arrayNotes, setArrayNotes] = useState([]);
    const [stateAddNote, setStateAddNote] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate ();
    const [stateRecycle, setStateRecycle] = useState(false);
    const [stateReturn, setStateReturn] = useState(false);
    const [stateGetNotes, setStateGetNotes] = useState(true);


    let tempArrayNotes = [];  
    let userId = props.currentUser;
    console.log('id de viewnotes', userId) 
    useEffect(()=>{
        getNotesByUserAndState(userId, true)
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


    const handleSingOut = async() => {
        try {
           const userLogOut =  await userSignOut()
           console.log('funcionará?', navigate)

        console.log('Salir', userLogOut)
            navigate('/')
        } catch (error) {
            setError('Server error');
            
        }
        //userSignOut()
    }
    const recycler = () =>{
        setStateRecycle(true);
        setStateReturn(true);
        setStateAddNote(false);
        setStateGetNotes(false);
        tempArrayNotes = [];

        getNotesByUserAndState(userId, false)
        .then((response) => {
            response.forEach(note => {
                let newNote = note.data();
                newNote.id = note.id;
                tempArrayNotes.push(newNote);
            });
            setArrayNotes(tempArrayNotes);
        })
        .catch((error) => console.log('Error: ', error.message)) 
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
                    <MdLogout className='Logout-icon' size='3em' onClick={handleSingOut}></MdLogout>
                    <p>sign out</p>
                </div>
            </header>
            <main className='box-option-notes'>
                    <div className='box-option'>
                        {
                            stateReturn?
                            <Return 
                            tateReturn= {stateReturn} 
                            setStateReturn= {setStateReturn}
                            setArrayNotes={setArrayNotes}
                            setStateRecycle = {setStateRecycle} 
                            userId = {userId}
                            setStateGetNotes={setStateGetNotes}                            >
                            </Return>
                            :
                            <>
                                <img src={imgMas} alt="" className='img-option' id='imgAdd' onClick={addNotes}></img>
                                <p className='img-option' id='textAdd'>Add Notes</p>
                                <img src={imgCategoria} alt="" className='img-option' id='imgCategory'></img>
                                <p className='img-option' id='textCategory'>Category</p>
                                <img src={imgRecycle} alt="" className='img-option' id='imgRecycle' onClick={recycler}></img>
                                <p className='img-option' id='textRecycle'>Recycle</p>
                            </>
                        }
                    </div>
                          
                <div className='box-notes' >
                    {
                        stateAddNote?
                        <AddNotes arrayNotes={arrayNotes} setArrayNotes={setArrayNotes} setStateAddNote={setStateAddNote}></AddNotes>
                        : null
                    }
                    {
                        stateGetNotes? 
                            <Notes arrayNotes = {arrayNotes} setArrayNotes={setArrayNotes}></Notes>
                        :null
                    }                                                      
                      
                    {
                        stateRecycle?
                        <Recycle arrayNotes = {arrayNotes} setArrayNotes={setArrayNotes}></Recycle> : null
                    }
                                                     
                </div>
            </main>
        </section>
    );
};