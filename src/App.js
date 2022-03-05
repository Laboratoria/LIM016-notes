import React, { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
//import logo from './logo.svg';
import './App.css';
import db from './firebase/firebaseConfig';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
const App = () => {
  useEffect( () => {
    const obtenerDatos = async() => {
      const datos = await getDocs(collection(db, 'usuarios'));
      datos.forEach((documento) => {
        console.log(documento.data());
      });
    }
    obtenerDatos();
  }, [ ]);
  return ( 
    <h1>Firebase9!!!!!</h1>
  );
}

export default App;
