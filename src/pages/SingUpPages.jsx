import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./../context/AuthContext";
import FormInput from "./../components/FormInput";
import Footer from "./../components/Footer";

export default function SingUpPages() {
  const { signup } = useAuth();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });  

  const inputs = [   
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username puede usar 3-6 carácteres y puede incluir un carácter especial!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,7}$",
      required: true,
    },
    {      
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "El correo no es válido",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password 6 carácteres, incluye 1 letra, 1 número y 1 carácter especial!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,8}$`,
      required: true,
    }    
  ];

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [error, setError] = useState ("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(values.email, values.password);
      navigate("/");
    } catch (er) {
      setError(er.message);
    }    
  }

  

  return (
    <>
    <div id="template" className="templateLogin">
      <div className="container">
        <div className="titulo">
          <h1 className="title">LABNOTES</h1>
          <img className="logo2" src="/img/notas.png" alt=""/>
        </div>
        <div id="Logo" className="containerLogin">
        <p >Tomar notas nunca fue tan sencillo</p>
          <figure><img className="imagenFondo" src="/img/anotar-rbg.png" alt=""></img></figure>
        </div>        
      </div>
      <div id="login" className="containerForm">        
        <div id="login" className="login">
          <section>
            <p className="title">Regístrate</p>
            <div className="center">
              <p>{error}</p>
              <form onSubmit={handleSubmit}>
                  {inputs.map((input) => (
                    <FormInput
                      key={input.id}
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  ))}
                  <p>¿Has Olvidado la Contraseña?</p>
                  <button>Regístrate</button>
                </form> 
            </div>        
            <p>¿Tienes una cuenta? <Link to="/">LogIn</Link></p>            
          </section>           
        </div>
      </div>     
    </div>
     <Footer />
     </>
    )
}