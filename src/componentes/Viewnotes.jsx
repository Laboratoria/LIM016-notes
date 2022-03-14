import React, {useState} from 'react';
import '../Estilos/Note.scss';
import {MdLogout, MdSearch} from 'react-icons/md'
import {AddNotes} from './AddNotes';
import {Notes} from './Notes';

const imgMas = new URL ('../imagenes/mas.png', import.meta.url);
const imgCategoria = new URL ('../imagenes/categoria.png', import.meta.url);
const imgRecycle = new URL ('../imagenes/recycle-bin.png', import.meta.url);

export const ViewNotes = () =>{
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
                    <img src={imgMas} alt=""></img>
                    <p>Add Notes</p>
                    <img src={imgCategoria} alt=""></img>
                    <p>Category</p>
                    <img src={imgRecycle} alt=""></img>
                    <p>Recycle</p>
                </div>
                <div className='box-notes'>
                    <AddNotes></AddNotes>
                    <Notes></Notes>
                </div>
            </main>
        </section>
    );
};