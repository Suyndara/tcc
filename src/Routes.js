import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Adicionar from './pages/adm-adicionar';
import Produtos from './pages/adm-produtos';
import Graficos from './pages/adm-graficos';
import StatusAdm from './pages/adm-status';
import VendasADM from './pages/adm-vendas';
import Estoque from './pages/adm-consultar-usuario';
import LoginAdm from './pages/adm-login';
import HomeAdm from './pages/adm-home';
import Home from './pages/Home';
import EntregaPagamento from './pages/entrega-pagamento';
import StatusCliente from './pages/status-cliente';
import Carrinho from './pages/carrinho';
import Cadastro from './pages/cadastro';
import DetalhesProduto from './pages/detalhes';
import Conta from './pages/minha-conta';
import Politica from './pages/politica';
import Login from './pages/login/App';
import Filtro from './pages/filtro';
import Guia from './pages/guia';
import NotFound from './pages/404';

export default function Rotas() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                
                <Route path='/login' element={<Login/>} />
                <Route path='status-cliente' element={<StatusCliente />} />
                <Route path='/minhaconta' element={<Conta/>} />
                <Route path='/alterar-minhaconta/:cliente' element={ < Conta/> } />
                <Route path='/politica' element={<Politica/>} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/detalhes/:idParam' element={<DetalhesProduto/>} />
                <Route path='/carrinho' element={<Carrinho/>} />
                <Route path='/entrega' element={<EntregaPagamento/>} />
                <Route path='/filtro' element={<Filtro/>} />
                <Route path='/guia' element={<Guia/>} />

                <Route path='/consultar-usuario-adm' element={<Estoque/>} />
                <Route path='/adicionar-adm' element={<Adicionar/>} />
                <Route path='/alterar-adm/:produto_id' element={<Adicionar/>} />
                <Route path='/graficos-adm' element={<Graficos/>} />
                <Route path='/produtos-adm' element={<Produtos />} />
                <Route path='/vendas-adm' element={<VendasADM/>} />
                <Route path='/status-adm' element={<StatusAdm/>} />
                <Route path='/login-adm' element={<LoginAdm/>} />
                <Route path='/home-adm' element={<HomeAdm/>} />

                <Route path='/*' element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}
