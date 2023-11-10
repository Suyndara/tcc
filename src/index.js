import React from 'react';  
import ReactDOM from 'react-dom/client';
import Rotas from './Routes';
import './index.scss';

import 'react-confirm-alert/src/react-confirm-alert.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>
);

