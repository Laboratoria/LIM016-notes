import React from 'react';
import {LogIn} from './componentes/Login';
import {SignUp} from './componentes/Signup';
import {ViewNotes} from './componentes/Viewnotes';
import { Route, Routes } from 'react-router-dom';
import {AuthProvider} from './firebase/auth'

function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route exact path='/' element={<LogIn/>}/>
          <Route exact path='/login' element={<LogIn/>}/>
          <Route exact path='/signup' element={<SignUp/>}/>
          <Route exact path='/viewnotes' element={<ViewNotes />}/>
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
