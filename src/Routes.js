import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Graficos from './pages/adm-graficos';
import VendasADM from './pages/adm-vendas';
import LoginAdm from './pages/adm-login';
import Edicao from './pages/adm-edicao';
import Cadastro from './pages/cadastro';
import HomeAdm from './pages/adm-home';
import Home from './pages/Home';
import EntregaPagamento from './pages/entrega-pagamento';
import Carrinho from './pages/carrinho';
import Detalhes from './pages/detalhes';
import Conta from './pages/minha-conta';
import Login from './pages/login/App';
import Filtro from './pages/filtro';


export default function Rotas() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/minhaconta' element={<Conta/>} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/detalhes' element={<Detalhes/>} />
                <Route path='/carrinho' element={< Carrinho />} />
                <Route path='/entrega' element={< EntregaPagamento />} />
                <Route path='/edicao' element={<Edicao/>} />
                <Route path='/filtro' element={< Filtro />} />
                <Route path='/graficos-adm' element={<Graficos/>} />
                <Route path='/vendas-adm' element={< VendasADM />} />
                <Route path='/login-adm' element={< LoginAdm />} />
                <Route path='/home-adm' element={< HomeAdm />} />
            </Routes>
        </BrowserRouter>
    )
}