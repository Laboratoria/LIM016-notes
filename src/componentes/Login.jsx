import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../Estilos/register.scss';

export const imgLogoNotes = new URL ('../imagenes/logoNotes.jpg', import.meta.url);
const imgIconoGo = new URL ('../imagenes/iconoGo.png', import.meta.url);
const imgIconoFb = new URL ('../imagenes/iconoFb.png', import.meta.url);

export const LogIn = () => {
    return (
        <section className='box-login'>
            <h3 className='welcome' id='log'>Welcome To</h3>
            <div className='box-logo' id='log'>
                <img src= {imgLogoNotes} alt="" className='img-logo' id='log'></img>
                <h1 className='name-notes' id='log'>Simple Notes</h1>
            </div>
            <form action="" className='box-form' id='log'>
                <input type="text" className='email' id='log' placeholder='Enter your email'/>
                <input type="password" className='paswword' id='log' placeholder='Password'/>
                <button type='submit' className='btn-login' id='log'>
                    <Link to = '/viewnotes'>Log In</Link>
                </button>
            </form>
            <p className='textOption' id='log'>or log in with:</p>
            <div className='box-fb-go' id='log'>
                <img src= {imgIconoGo} alt="" className='img-fb' id='log'></img>
                <img src= {imgIconoFb} alt="" className='img-go' id='log'></img>
            </div>
            <p className='optionSignUp' id='log'>Don´t you have an account?<Link to = '/signup'> Sign Up </Link></p>
        </section>
    );
};