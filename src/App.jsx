import React from 'react';
import {LogIn} from './componentes/Login';
import {SignUp} from './componentes/Signup';
import {ViewNotes} from './componentes/Viewnotes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={<LogIn/>}/>
          <Route exact path='/signup' element={<SignUp/>}/>
          <Route exact path='/viewnotes' element={<ViewNotes />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
