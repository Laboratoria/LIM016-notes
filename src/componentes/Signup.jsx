import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { imgLogoNotes } from './Login';
import '../Estilos/register.scss';
import { useAuth } from '../firebase/auth';

export const SignUp = () => {
    const { createUser } = useAuth();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleName = (e) => setUser({ ...user, name: e.target.value});
    const handleEmail = (e) => setUser({ ...user, email: e.target.value});
    const handlePassword = (e) => setUser({ ...user, password: e.target.value})
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await createUser(user.name, user.email, user.password);
            navigate("/");
        } catch (error) {
            setError(error.message);
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
                <button type='submit' className='btn-signup' id='log'><Link to='/login'> Sign Up </Link></button>
            </form>
            <p className='optionLogin' id='log'>Do you have an account?<Link to='/login'>Log In</Link></p>
        </section>
    );
};