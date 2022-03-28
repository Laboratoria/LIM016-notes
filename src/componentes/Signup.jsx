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
            <div className='boxWelcomeSignUp'>
                <h3 className='welcome-signup'>Sign Up To</h3>
                <div className='box-logo'>
                    <img src={imgLogoNotes} alt="" className='img-logo'></img>
                    <h1 className='name-notes'>Simple Notes</h1>
                </div>

            </div>
            
            {error && <p className='error'>{error}</p>}
            <form onSubmit={handleSubmit} action="" className='box-form'>
                <div className='boxInputSignUp'> 
                    <input type="text" className='name-user' placeholder='Enter your name' onChange={handleName} />
                    <input type="email" className='email' placeholder='Enter your email' onChange={handleEmail} />
                    <input type="password" className='paswword' placeholder='Password' onChange={handlePassword} />
                    <button type='submit' className='btn-signup'> Sign Up</button>
                </div>
                <p className='optionLogin'>Do you have an account?<Link to='/login'>Log In</Link></p>
            </form>
        </section>
    );
};
