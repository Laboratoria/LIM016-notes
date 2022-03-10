import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {imgLogoNotes} from './Login';
import '../Estilos/register.scss';


export const SignUp = () =>{
    return (
        <section className='box-signup'> 
            <h3 className='welcome-signup' id='log'>Sign Up To</h3>
            <div className='box-logo' id='log'>
                <img src= {imgLogoNotes} alt="" className='img-logo' id='log'></img>
                <h1 className='name-notes' id='log'>Simple Notes</h1>
            </div>
            
            <form action="" className='box-form' id='log'>
                <input type="text" className='name-user' id='log' placeholder='Enter your name'/>
                <input type="text" className='email' id='log' placeholder='Enter your email'/>
                <input type="password" className='paswword' id='log' placeholder='Password'/>
                <button type='submit'className='btn-signup' id='log'>Sign Up</button>
            </form>
            <p className='optionLogin' id='log'>Do you have an account?<Link to = '/login'>Log In</Link></p>
        </section>
    );
};