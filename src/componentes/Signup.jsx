import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { imgLogoNotes } from './Login';
import '../Estilos/register.scss';
import { createUser } from '../firebase/auth';

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
            const currentUserSingUp = await createUser(email, password)
            console.log('id ususrio registrado', currentUserSingUp);
            navigate('/')
        } catch (error) {
            setError('Error: '+ error.message);
        }
    }
    return (
        <section className='box-signup'>
            <h3 className='welcome-signup' id='log'>Sign Up To</h3>
            <div className='box-logo' id='log'>
                <img src={imgLogoNotes} alt="" className='img-logo' id='log'></img>
                <h1 className='name-notes' id='log'>Simple Notes</h1>
            </div>
            {error && <p className='error'>{error}</p>}
            <form onSubmit={handleSubmit} action="" className='box-form' id='log'>
                <input type="text" className='name-user' id='log' placeholder='Enter your name' onChange={handleName} />
                <input type="email" className='email' id='log' placeholder='Enter your email' onChange={handleEmail} />
                <input type="password" className='paswword' id='log' placeholder='Password' onChange={handlePassword} />
                <button type='submit' className='btn-signup' id='log'> Sign Up</button>
            </form>
            <p className='optionLogin' id='log'>Do you have an account?<Link to='/login'>Log In</Link></p>
        </section>
    );
};
