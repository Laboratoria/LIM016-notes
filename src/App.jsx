import React from 'react';
import './index.scss';
import { Route, Routes } from 'react-router-dom';
import HomePages from './pages/home/HomePages';
import LogInPages from './pages/login/LogInPages';
import SingUpPages from './pages/SingUpPages';
import NotFoundPages from './pages/NotFoundPages';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return ( 
    <>
      <AuthProvider>
        <Routes> 
          <Route path="/" element={<LogInPages/>} />
          <Route path="/singup" element={<SingUpPages/>} />
          <Route path="/home" element={<HomePages/>} />
          <Route path="*" element={<NotFoundPages/>} />
        </Routes>
      </AuthProvider>
    </>    
  );  
}



