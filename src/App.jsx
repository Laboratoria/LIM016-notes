import React from 'react';
import { LogIn } from './componentes/Login';
import { SignUp } from './componentes/Signup';
import { ViewNotes } from './componentes/Viewnotes';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './firebase/auth';
import { PrivateRoute } from './componentes/PrivateRoute'

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route exact path='/' componet={<PrivateRoute />}>
            <Route exact path='/' componet={<LogIn />} />
          </Route>
          <Route exact path='/login' componet={<LogIn />} />
          <Route exact path='/signup' componet={<SignUp />} />
          <Route exact path='/viewnotes' componet={<ViewNotes />} />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
