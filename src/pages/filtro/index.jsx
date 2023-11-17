import './index.scss';

import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
// import Relogio from '../../assets/img/shopping (1) 1.svg';

import { useState, useEffect } from 'react';
import { ConsultarTodos, BuscarImagem } from '../../api/admAdd';
import { useNavigate } from 'react-router-dom';
// import Escapulario from '../../assets/img/CO00020832 1.svg';
// import Pulseira from '../../assets/img/Pulseira-Life-Royal-Prata-Cristal-Azul-69469_set 1.svg';
// import PulseiraOuro from '../../assets/img/Pulseira-Ouro-Amarelo-3171_set 1.svg';
// import Pingente from '../../assets/img/Pingente-Ouro-Rose-Ametista-e-Diamante-9514_set 1.svg';



export default function Filtro() {


    const [ produto, setProdutos ] = useState([]);


    const navigate = useNavigate()

    async function ListarTodosProdutos() {
        const resp = await ConsultarTodos()
        console.log(resp);
        setProdutos(resp)
    };

    function chamarImg(imagem){
        console.log(imagem);
        return BuscarImagem(imagem)
    }


    useEffect(() => {
        ListarTodosProdutos()
    }, []);



    function AbrirDetalhes(produto_id) {
        navigate(`/detalhes/${produto_id}`)
    }



    return (

        <div className='pagina-filtro'>
            <Cabecalho />

            <section className='conteudo'>
                <div className='texto'>
                    <h1>Joias</h1>
                    <h2>Joias de alta qualidade só aqui!</h2>
                </div>

                <div className='select-filtro'>
                    <select>
                        <option value="vendidos" key="">Mais vendidos</option>
                    </select>
                </div>

                <main className='filtros-produtos'>
                    <div className='filtros'>
                        <h1>Filtrar por</h1>
                        <h2>Acessórios</h2>

                        <div className='input'>
                            <input type="checkbox" />
                            <p>Pulseiras</p>
                        </div>

                        <div className='input'>
                            <input type="checkbox" />
                            <p>Anéis</p>
                        </div>

                        <div className='input'>
                            <input type="checkbox" />
                            <p>Colares</p>
                        </div>

                        <div className='input'>
                            <input type="checkbox" />
                            <p>Correntes</p>
                        </div>

                        <div className='input'>
                            <input type="checkbox" />
                            <p>Relógios</p>
                        </div>

                        <div className='input'>
                            <input type="checkbox" />
                            <p>Brincos</p>
                        </div>

                        <div className='input'>
                            <input type="checkbox" />
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