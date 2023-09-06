import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Cadastro from './pages/cadastro';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

