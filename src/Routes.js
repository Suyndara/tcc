import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cadastro from './pages/cadastro';
import Home from './pages/Home';
import PaginaPagamento from './pages/Pagina-Pagamento';
import Login from './pages/login/App.jsx';
import LoginAdm from './pages/login-adm';
import EntregaPagamento from './pages/entrega-pagamento';



export default function Rotas() {
    

    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/pagamento' element={< PaginaPagamento />} />
                <Route path='/login-adm' element={< LoginAdm />} />
                <Route path='/entrega' element={< EntregaPagamento />} />
            </Routes>
        </BrowserRouter>
    )
}