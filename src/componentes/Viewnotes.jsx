/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import '../Estilos/viewNotes.scss';
import { Return } from './Return';
import {MdLogout, MdSearch} from 'react-icons/md'
import {AddNotes} from './AddNotes';
import {Notes} from './Notes';
import { userSignOut } from '../firebase/auth';
import {useNavigate } from 'react-router-dom';
import {getNotesByUserAndState} from '../firebase/firestore';
import {Recycle} from './Recycle'

import  imgMas from '../imagenes/mas.png';
import  imgCategoria from '../imagenes/categoria.png';
import  imgRecycle from '../imagenes/recycle-bin.png';

export const ViewNotes = (props) =>{

    const [arrayNotes, setArrayNotes] = useState([]);
    const [stateAddNote, setStateAddNote] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate ();
    const [stateRecycle, setStateRecycle] = useState(false);
    const [stateReturn, setStateReturn] = useState(false);
    const [stateGetNotes, setStateGetNotes] = useState(true);
    const [searchArrayNotes, setSearchArrayNotes] = useState([]);


    let tempArrayNotes = [];  
    let userId = props.currentUser;
    useEffect(()=>{
        getNotesByUserAndState(userId, true)
        .then((response) => {
            response.forEach(note => {
                let newNote = note.data();
                newNote.id = note.id;
                tempArrayNotes.push(newNote);
            });
            setArrayNotes(tempArrayNotes);
            setSearchArrayNotes(tempArrayNotes);

        })
        .catch((error) => console.log('Error: ', error.message)) 
    },[]);

    const addNotes = () => {
        setStateAddNote(true);
    }


    const handleSingOut = async() => {
        try {
           const userLogOut =  await userSignOut()
            navigate('/')
        } catch (error) {
            setError('Server error');
            
        }
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
            setSearchArrayNotes(tempArrayNotes);
        })
        .catch((error) => console.log('Error: ', error.message)) 
    }

    const getSearch = (e) => {
        const valueSearch = e.target.value;
        if(valueSearch!==''){
            const newArraySearchNotes = searchArrayNotes.filter((search)=>{
               return search.title.toLowerCase().includes(valueSearch.toLowerCase());
            })
            setArrayNotes(newArraySearchNotes);
        }else{
            setArrayNotes(searchArrayNotes)
        }
    };

    return (
        <section className='contentNote'>
            <header className='box-header'>
                <div className='boxName'>
                    <h3 >Simple Notes</h3>
                </div>
                <div className='box-search'>
                    <MdSearch className='search-icon' size='2em'></MdSearch>
                    <input type="search" placeholder='Find your notes by title' onChange={getSearch}/>
                </div>
                <div className='signout'>
                    <MdLogout className='Logout-icon' size='2.5em' onClick={handleSingOut}></MdLogout>
                    <p>sign out</p>
                </div>
            </header>
            <section className='box-option-notes'>
                <div className='box-option'>
                        {
                            stateReturn?
                            <Return 
                            tateReturn= {stateReturn} 
                            setStateReturn= {setStateReturn}
                            setArrayNotes={setArrayNotes}
                            setStateRecycle = {setStateRecycle} 
                            userId = {userId}
                            setStateGetNotes={setStateGetNotes}>
                            </Return>
                            :
                            <div className='boxOptionBtn'>
                                <div className='btnAdd'>
                                    <img src={imgMas} alt="" className='img-option' id='imgAdd' onClick={addNotes}></img>
                                    <p className='img-option' id='textAdd'>Add Notes</p>

                                </div>
                                <div className='btnCategory'>
                                    <img src={imgCategoria} alt="" className='img-option' id='imgCategory'></img>
                                    <p className='img-option' id='textCategory'>Category</p>
                                </div>
                                <div className='btnRecycle'>
                                    <img src={imgRecycle} alt="" className='img-option' id='imgRecycle' onClick={recycler}></img>
                                    <p className='img-option' id='textRecycle'>Recycle</p>
                                </div>                                
                            </div>
                        } 
                </div>         
                          
                <div className='box-notes' >
                    {
                        stateAddNote?
                            <AddNotes 
                            arrayNotes={arrayNotes} 
                            setArrayNotes={setArrayNotes} 
                            setStateAddNote={setStateAddNote} 
                            currentUserId ={userId} 
                            setSearchArrayNotes={setSearchArrayNotes}
                            ></AddNotes>
                        : null
                    }
                    {
                        stateGetNotes? 
                            <Notes 
                            arrayNotes = {arrayNotes} 
                            setArrayNotes={setArrayNotes}
                            setSearchArrayNotes={setSearchArrayNotes}
                            ></Notes>
                        :null
                    }                                                      
                      
                    {
                        stateRecycle?
                            <Recycle 
                            arrayNotes = {arrayNotes} 
                            setArrayNotes={setArrayNotes}
                            setSearchArrayNotes={setSearchArrayNotes}
                            ></Recycle> 
                        : null
                    }
                                                     
                </div>
            </section>
        </section>
    );
};