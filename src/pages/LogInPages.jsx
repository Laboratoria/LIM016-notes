import React from 'react';

export default function LogInPages() {
  return (
        <div id="template" className="templateLogin">
          <div id="Logo" className="containerLogin">
            <p className="eslogan">Tomar notas nunca fue tan sencillo</p>
            <figure><img className="imagenFondo" src="/img/logincontainer.jpg" alt=""></img></figure>
          </div>
          <div id="login" className="containerForm">
            <div className="titulo">
              <h1 className="title">LABNOTES</h1>
              <img className="logo2" src="/img/notas.png" alt=""/>
            </div>
            <form id="login" className="login">
            </form>
          </div>
        </div>
    )
}