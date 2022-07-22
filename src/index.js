import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import StarShips from './pages/StarShips';
import StarShipsDetails from './pages/StarShipsDetails';
import reportWebVitals from './reportWebVitals';
import { Home } from './pages/Home';
import  Login  from './pages/Login';
import  SignUp  from './pages/Signup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
    <Routes>
      <Route path='/' element={<Layout />}> 
        <Route index element={<Home />} />
        <Route path="starships" element={localStorage.getItem('user') ? <StarShips /> : <Login />} />
        <Route path="starships/:starshipId" element={<StarShipsDetails />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Login />} />
        <Route path="*" element={<Navigate replace to ="/" />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
