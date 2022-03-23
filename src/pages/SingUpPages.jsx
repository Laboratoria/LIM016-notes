import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./../context/AuthContext";
<<<<<<< HEAD
=======



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

>>>>>>> 0a26c6dd62f4b244e968e60c52303092d0f75413
import FormInput from "./../components/FormInput";
import Footer from "./../components/Footer";

export default function SingUpPages() {
<<<<<<< HEAD
  const { signup } = useAuth();
=======
  const { signup } = useAuth;
>>>>>>> 0a26c6dd62f4b244e968e60c52303092d0f75413
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
<<<<<<< HEAD
      pattern: "^[A-Za-z0-9]{3,7}$",
=======
      pattern: "^[A-Za-z0-9]{3,6}$",
>>>>>>> 0a26c6dd62f4b244e968e60c52303092d0f75413
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
<<<<<<< HEAD
      await signup(values.email, values.password);
=======
      console.log(values.email, values.password);
      signup(values.email, values.password).then( e => console.log(e));
>>>>>>> 0a26c6dd62f4b244e968e60c52303092d0f75413
      navigate("/");
    } catch (er) {
      setError(er.message);
    }    
  }

  

  return (
    <>
    <div id="template" className="templateLogin">
      <div className="container">
<<<<<<< HEAD
        <div className="titulo">
=======
      <div className="titulo">
>>>>>>> 0a26c6dd62f4b244e968e60c52303092d0f75413
          <h1 className="title">LABNOTES</h1>
          <img className="logo2" src="/img/notas.png" alt=""/>
        </div>
        <div id="Logo" className="containerLogin">
        <p >Tomar notas nunca fue tan sencillo</p>
          <figure><img className="imagenFondo" src="/img/anotar-rbg.png" alt=""></img></figure>
<<<<<<< HEAD
        </div>        
      </div>
      <div id="login" className="containerForm">        
=======
        </div>
        
      </div>
      <div id="login" className="containerForm">
        
>>>>>>> 0a26c6dd62f4b244e968e60c52303092d0f75413
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
<<<<<<< HEAD
            </div>        
            <p>¿Tienes una cuenta? <Link to="/">LogIn</Link></p>            
=======
            </div>                
           
            <p>O Inicia Sessión Con:</p>
            <div style={{fontSize:"2em", color: "#2A3F88", textAlign: "center"}}>           
              <FontAwesomeIcon icon={faGoogle} /> {" "}
            </div>
            <p>¿No tienes una cuenta? <Link to="/">LogIn</Link></p>            
>>>>>>> 0a26c6dd62f4b244e968e60c52303092d0f75413
          </section>           
        </div>
      </div>     
    </div>
     <Footer />
     </>
    )
}