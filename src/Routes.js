import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Edicao from './pages/adm-edicao';
import VendasADM from './pages/adm-vendas';
import LoginAdm from './pages/adm-login';
import HomeAdm from './pages/adm-home';
import Home from './pages/Home';
import Cadastro from './pages/cadastro';
import EntregaPagamento from './pages/entrega-pagamento';
import Login from './pages/login/App';
import Filtro from './pages/filtro';
import Carrinho from './pages/carrinho';
import Detalhes from './pages/detalhes';
import Conta from './pages/minha-conta';


export default function Rotas() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/minhaconta' element={<Conta/>} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/entrega' element={< EntregaPagamento />} />
                <Route path='/edicao' element={<Edicao/>} />
                <Route path='/detalhes' element={<Detalhes/>} />
                <Route path='/login-adm' element={< LoginAdm />} />
                <Route path='/home-adm' element={< HomeAdm />} />
                <Route path='/filtro' element={< Filtro />} />
                <Route path='/carrinho' element={< Carrinho />} />
                <Route path='/vendas-adm' element={< VendasADM />} />
            </Routes>
        </BrowserRouter>
    )
}