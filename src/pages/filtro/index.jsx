import './index.scss';

import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';

import { useState, useEffect } from 'react';
import { ConsultarTodos, BuscarImagem } from '../../api/admAdd';
import { useNavigate } from 'react-router-dom';
import { BuscarCategoriaAlianca, BuscarCategoriaBrinco, BuscarCategoriaCorrente, BuscarCategoriaEscapulario, BuscarCategoriaPingente, BuscarCategoriaPulseira, BuscarCategoriaRelogio } from '../../api/UsuarioAdd';


export default function Filtro() {

    const [ produto, setProdutos ] = useState([]);

    const navigate = useNavigate();





    async function ListarTodosProdutos() {
        const resp = await ConsultarTodos()
        setProdutos(resp)
    };


    async function ListarCategoriaRelogio() {
        const resp = await BuscarCategoriaRelogio();
        setProdutos(resp);
    };


    async function ListarCategoriaEscapulario() {
        const resp = await BuscarCategoriaEscapulario();
        setProdutos(resp);
    };


    async function ListarCategoriaAlianca() {
        const resp = await BuscarCategoriaAlianca();
        setProdutos(resp);
    };


    async function ListarCategoriaCorrente() {
        const resp = await BuscarCategoriaCorrente();
        setProdutos(resp);
    };


    async function ListarCategoriaPulseira() {
        const resp = await BuscarCategoriaPulseira();
        setProdutos(resp);
    };


    async function ListarCategoriaBrinco() {
        const resp = await BuscarCategoriaBrinco();
        setProdutos(resp);
    }


    async function ListarCategoriaPingente() {
        const resp = await BuscarCategoriaPingente();
        setProdutos(resp);
    }





    function chamarImg(imagem){
        console.log(imagem);
        return BuscarImagem(imagem)
    };




    function AbrirDetalhes(produto_id) {
        navigate(`/detalhes/${produto_id}`)
    };





    useEffect(() => {
        ListarTodosProdutos();
    }, []);




    return (

        <div className='pagina-filtro'>
            <Cabecalho />

            <section className='conteudo'>
                <div className='texto'>
                    <h1>Joias</h1>
                    <h2>Joias de alta qualidade só aqui!</h2>
                </div>

                <main className='filtros-produtos'>
                    <div className='filtros'>
                        <h1>Filtrar por</h1>
                        <h2 onClick={ListarTodosProdutos}>Acessórios</h2>

                        <div className='input'>
                            <input type="checkbox" onClick={ListarCategoriaRelogio} />
                            <p>Relógios</p> 
                        </div>

                        <div className='input'>
                            <input type="checkbox"  onClick={ListarCategoriaEscapulario}/>
                            <p>Escapulários</p>
                        </div>

                        <div className='input'>
                            <input type="checkbox" onClick={ListarCategoriaAlianca}/>
                            <p>Alianças</p>
                        </div>

                        <div className='input'>
                            <input type="checkbox" onClick={ListarCategoriaCorrente}/>
                            <p>Correntes</p>
                        </div>

                        <div className='input'>
                            <input type="checkbox" onClick={ListarCategoriaPulseira}/>
                            <p>Pulseiras</p>
                        </div>

                        <div className='input'>
                            <input type="checkbox" onClick={ListarCategoriaBrinco}/>
                            <p>Brincos</p>
                        </div>

                        <div className='input'>
                            <input type="checkbox" onClick={ListarCategoriaPingente}/>
                            <p>Pingentes</p>
                        </div>

                        <h2>Preço</h2>

                        <div className="preco">
                            <div>
                                <p>De</p>
                                <input type="text" />
                            </div>
                            <div>
                                <p>Até</p>
                                <input type="text" />
                            </div>
                            <div><p></p></div>
                        </div>
                    </div>

                    <div className='produtos'>

                        {produto.map(item => 
                            <div className='produtos-row' onClick={() => AbrirDetalhes(item.produto_id)}>
                                <div className='relogio'>
                                    <div className='imagem'>
                                        <img src={chamarImg(item.imagem)} alt='clockk' />
                                    </div>
                                    <p>{item.nome}</p>
                                    <p><b>R${item.preco}</b></p>
                                    <p> {item.disponivel ? 'Disponivel' : 'Indisponivel'} </p>
                                    <p> {item.categoria} </p>
                                </div>
                            </div>
                        )}

                    </div>
                </main>
            </section>

            <Rodape />
        </div>
    );
}