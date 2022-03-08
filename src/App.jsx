import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePages from './pages/HomePages';
<<<<<<< HEAD
import LogInPages from './pages/login/LogInPages';
import SingUpPages from './pages/SingUpPages';
import NotFoundPages from './pages/NotFoundPages';
=======
import LogInPages from './pages/LogInPages';
import SingUpPages from './pages/SingUpPages';
import NotFoundPages from './pages/NotFoundPages';
import Navbar from './components/Navbar';
>>>>>>> d07018717392bd50206af68d9379cef6854ac7ff


export default function App() {
  return ( 
    <BrowserRouter>
<<<<<<< HEAD
=======
      <Navbar />
>>>>>>> d07018717392bd50206af68d9379cef6854ac7ff
      <Routes> 
        <Route path="/" element={<LogInPages/>} />
        <Route path="/singup" element={<SingUpPages/>} />
        <Route path="/home" element={<HomePages/>} />
        <Route path="*" element={<NotFoundPages/>} />
      </Routes>
    </BrowserRouter>
  );  
}



