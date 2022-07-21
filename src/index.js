import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import { Layout } from './components/Layout';
import StarShips from './pages/StarShips';
import StarShipsDetails from './pages/StarShipsDetails';
import reportWebVitals from './reportWebVitals';
import { Home } from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
    <Routes>
      <Route path='/' element={<Layout />}> 
        <Route index element={<Home />} />
        <Route path="starships" element={<StarShips />} />
        <Route path="starships/:starshipId" element={<StarShipsDetails />} />
        <Route path="*" element={<Navigate replace to ="/" />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
