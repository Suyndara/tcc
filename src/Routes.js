import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Graficos from './pages/adm-graficos';
import VendasADM from './pages/adm-vendas';
import LoginAdm from './pages/adm-login';
import Edicao from './pages/adm-edicao';
import HomeAdm from './pages/adm-home';
import Home from './pages/Home';
import EntregaPagamento from './pages/entrega-pagamento';
import Carrinho from './pages/carrinho';
import Cadastro from './pages/cadastro';
import Detalhes from './pages/detalhes';
import Conta from './pages/minha-conta';
import Politica from './pages/politica';
import Login from './pages/login/App';
import Filtro from './pages/filtro';
import Guia from './pages/guia';
import StatusCliente from './pages/status-cliente';
import Estoque from './pages/adm-estoque';
import StatusAdm from './pages/status-adm';

export default function Rotas() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                
                <Route path='/login' element={<Login/>} />
                <Route path='status-cliente' element={<StatusCliente />} />
                <Route path='/minhaconta' element={<Conta/>} />
                <Route path='/politicas' element={<Politica/>} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/detalhes' element={<Detalhes/>} />
                <Route path='/carrinho' element={<Carrinho/>} />
                <Route path='/entrega' element={<EntregaPagamento/>} />
                <Route path='/filtro' element={<Filtro/>} />
                <Route path='/guia' element={<Guia/>} />
                <Route path='/edicao' element={<Edicao/>} />
                <Route path='/graficos-adm' element={<Graficos/>} />
                <Route path='/vendas-adm' element={<VendasADM/>} />
                <Route path='/login-adm' element={<LoginAdm/>} />
                <Route path='/home-adm' element={<HomeAdm/>} />
                <Route path='/estoque-adm' element={<Estoque/>} />
                <Route path='/status-adm' element={<StatusAdm/>} />
            </Routes>
        </BrowserRouter>
    )
}
