import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cadastro from './pages/cadastro';
import Home from './pages/Home';
import PaginaPagamento from './pages/Pagina-Pagamento';
import Login from './pages/login/App';
import EntregaPagamento from './pages/entrega-pagamento';


import LoginAdm from './pages/login-adm';
import HomeAdm from './pages/Pagina-HomeAdm';



export default function Rotas() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/pagamento' element={< PaginaPagamento />} />
                <Route path='/entrega' element={< EntregaPagamento />} />

                <Route path='/login-adm' element={< LoginAdm />} />
                <Route path='/home-adm' element={< HomeAdm />} />
            </Routes>
        </BrowserRouter>
    )
}