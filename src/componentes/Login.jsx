import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Estilos/register.scss';
import {signIn, singInGoogle } from '../firebase/auth';
import {FcGoogle} from 'react-icons/fc';
 



import imgLogoNotes from '../imagenes/logoNotes.jpg';
import imgIconoGo from '../imagenes/iconoGo.png';
import imgIconoFb from '../imagenes/iconoFb.png';

export { imgLogoNotes }

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
            <div className='boxWelcome'> 
                <h3 className='welcome' >Welcome To</h3>
                <div className='box-logo'>
                    <img src={imgLogoNotes} alt="" className='img-logo'></img>
                    <h1 className='name-notes'>Simple Notes</h1>
                </div>
            </div>          
            {error && <p className='error'>{error}</p>}
            <form action="" className='box-form' onSubmit={handleSubmit}>
                <div className='boxInput'>
                    <input type="email" className='email' placeholder='Enter your email' onChange={handleEmail} />
                    <input type="password" className='paswword' placeholder='Password' onChange={handlePassword} />
                    <button type='submit' className='btn-login' >Log In</button>
                </div>
                <p className='textOption'>or log in with:</p>
                <div className='box-fb-go'>
                    <img src={imgIconoGo} alt="" className='img-fb' ></img>
                    <img src={imgIconoFb} alt="" className='img-go' ></img>
                </div>
                <p className='optionSignUp'>Don´t you have an account?<Link to='/signup'> Sign Up </Link></p>
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