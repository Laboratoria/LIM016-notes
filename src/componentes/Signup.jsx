import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { imgLogoNotes } from './Login';
import '../Estilos/register.scss';
import { useAuth } from '../firebase/auth';

export const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleName = (e) => setName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await createUser(email, password)
            navigate.push('/')
        } catch(error) {
            setError('Your email or password are wrong');  
        }
    };
    return (
        <section className='box-signup'>
            <h3 className='welcome-signup' id='log'>Sign Up To</h3>
            <div className='box-logo' id='log'>
                <img src={imgLogoNotes} alt="" className='img-logo' id='log'></img>
                <h1 className='name-notes' id='log'>Simple Notes</h1>
            </div>

            <form onSubmit={handleSubmit} action="" className='box-form' id='log'>
                <input type="text" className='name-user' id='log' placeholder='Enter your name' onChange={handleName} />
                <input type="text" className='email' id='log' placeholder='Enter your email' onChange={handleEmail} />
                <input type="password" className='paswword' id='log' placeholder='Password' onChange={handlePassword} />
                <button type='submit' className='btn-signup' id='log'> Sign Up</button>
            </form>
            <p className='optionLogin' id='log'>Do you have an account?<Link to='/login'>Log In</Link></p>
        </section>
    );
};
