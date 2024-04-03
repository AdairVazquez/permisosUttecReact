import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Login from './components/Login';
import Permisos from './components/Permisos';
import Menu from './components/Menu';
import Home from './components/Home';
import Principal from './components/Principal';
import NuevoPermiso from './components/NuevoPermiso';
import React, { Children, Component, useState } from 'react';
import './App.css';
import { UseSelector, useSelector } from 'react-redux';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes, Redirect, Navigate } from 'react-router-dom';
import Pdf from './components/Pdf';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Principal}></Route>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} ></Route>
        <Route path='/home' element={isLoggedIn ? <Home/> : <Navigate to='/login' />}></Route>
        <Route exact path='/pdf' Component={Pdf}></Route>
        <Route path='permiso/nuevo/:id?' element={isLoggedIn ? <NuevoPermiso/> : <Navigate to='/' />}></Route>
        <Route path='/*' element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;