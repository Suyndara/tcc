import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cadastro from './pages/cadastro';
import Home from './pages/Home';
import PaginaPagamento from './pages/Pagina-Pagamento';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/pagamento' element={< PaginaPagamento />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

