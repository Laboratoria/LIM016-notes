import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import FormInput from "./../../components/FormInput";
import Footer from "./../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";



export default function LogInPages() {
  const [values, setValues] = useState({    
    email: "",
    password: "",
  });

  const inputs = [   
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "El correo no es válido",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password 6 carácteres, incluye 1 letra, 1 número y 1 carácter especial!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,7}$`,
      required: true,
    }    
  ];

  
  const [error, setError] = useState ("");
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(values.email, values.password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }    
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleGoogleSignin = async (e) => {
    e.preventDefault();
    try {
      await loginWithGoogle();
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }    
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if(!values.email) return("Introduzca su correo para resetaer password")
    try {
      await resetPassword(values.email);
      setError("Revise su correos le envio un mensaje")
    } catch (error) {
      setError(error.message);
    }    
  };

  return (
    <>
    <div id="template" className="templateLogin">
      <div id="Logo" className="containerLogin">
        <p className="eslogan">Tomar notas nunca fue tan sencillo</p>
          <figure><img className="imagenFondo" src="/img/anotar-rbg.png" alt=""></img></figure>
      </div>
      <div id="login" className="containerForm">
        <div className="titulo">
          <h1 className="title">LABNOTES</h1>
          <img className="logo2" src="/img/notas.png" alt=""/>
        </div>
        <div id="login" className="login">
          <section>
            <p >Bienvenido a LabNotes</p>
            <div className="center">
                <alert>{error}</alert>
              <form onSubmit={handleSubmit}>
                  {inputs.map((input) => (
                    <FormInput
                      key={input.id}
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  ))}
                  <p><a href="#!" onClick={handleResetPassword}>¿Has Olvidado la Contraseña?</a></p>
                  <button>Iniciar Sessión</button>
                </form> 
            </div>                
           
            <p>O Inicia Sessión Con:</p>
            <div style={{fontSize:"2em", color: "#2A3F88", textAlign: "center"}}>           
              <a href="#!" onClick={handleGoogleSignin}>
                <FontAwesomeIcon icon={faGoogle} /> {" "}
              </a>
            </div>
            <p>¿No tienes una cuenta? <Link to="/singup">Registrate</Link></p>            
          </section>           
        </div>
      </div>     
    </div>
     <Footer />
     </>
    )
}