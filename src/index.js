import React from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css';   
import ReactDOM from 'react-dom/client';
import Rotas from './Routes';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>
);

