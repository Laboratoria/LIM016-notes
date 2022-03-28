import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Estilos/register.scss';
import {signIn, singInGoogle } from '../firebase/auth';
import {FcGoogle} from 'react-icons/fc';
 



export const imgLogoNotes = new URL('../imagenes/logoNotes.jpg', import.meta.url);
const imgIconoGo = new URL('../imagenes/iconoGo.png', import.meta.url);
const imgIconoFb = new URL('../imagenes/iconoFb.png', import.meta.url);

export const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate ();
    
    const handleGoogleSubmit = (e) => singInGoogle();
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const user = await signIn(email, password)
            const currentUser = user.user.uid;
            navigate('/viewnotes', user.user.id)
        } catch(error) {
            setError('Your email or password are wrong');  
        }      
    };

    
    return (
        <section className='box-login'>
            <h3 className='welcome' id='log'>Welcome To</h3>
            <div className='box-logo' id='log'>
                <img src={imgLogoNotes} alt="" className='img-logo' id='log'></img>
                <h1 className='name-notes' id='log'>Simple Notes</h1>
            </div>
            {error && <p className='error'>{error}</p>}
            <form action="" className='box-form' id='log' onSubmit={handleSubmit}>
                <input type="text" className='email' id='log' placeholder='Enter your email' onChange={handleEmail} />
                <input type="password" className='paswword' id='log' placeholder='Password' onChange={handlePassword} />
                <button type='submit' className='btn-login' id='log' >Log In</button>
            </form>
            <p className='textOption' id='log'>or log in with:</p>
            <div className='box-fb-go' id='log'>
                <FcGoogle onClick= {handleGoogleSubmit} className='img-go' size='2em' id='log'></FcGoogle>
                <img src={imgIconoFb} alt="" className='img-fb' id='log'></img>
            </div>
            <p className='optionSignUp' id='log'>Don´t you have an account?<Link to='/signup'> Sign Up </Link></p>
        </section>
    );
};