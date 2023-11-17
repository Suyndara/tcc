import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import Resumo from '../../components/resumo'
import './index.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { Link } from 'react-router-dom';
import Lixo from '../../assets/img/trash.svg';
import Mais from '../../assets/img/mais.svg';
import Menos from '../../assets/img/menos.svg'; 
import { useState } from 'react';
import storage from 'local-storage'
import { useEffect } from 'react';
import { BuscarImagem } from '../../api/admAdd';


export default function Carrinho() {
    const [produtos, setProdutos] = useState([])
    const [total, setTotal] = useState()

    function puxarProdutos() {
        const produtosBuscando = storage('usuario-pedido').carrinho
        let totalCalc = 0
            for(let cont = 0; cont < produtosBuscando.length; cont++){
                totalCalc = totalCalc + (produtosBuscando[cont].preco * produtosBuscando[cont].qtd)
            }
            setTotal(totalCalc)

        console.log(produtosBuscando);
        setProdutos(produtosBuscando)
    };


    function removerProduto() {
        localStorage.removeItem('usuario-pedido');
    }


    useEffect(() => {
        puxarProdutos();
    }, [])



    return (

        <div className='pagina-carrinho'>
            <Cabecalho />

            <main className='s1'>
                <div className='carrinho-produtos'>
                    <h1>SEU CARRINHO</h1>
                    <h2>TOTAL (1 produto)  <b>R$ {total}</b> </h2>
                    <p>Os itens do seu carrinho não estão reservados. Finalize a compra para torná-los seus itens pessoais.</p>
                    
                    {produtos.map((item, index) => {
                        return(
                            <div className='produto'>
                                <div className='informacao-produto'>
                                    <img src={BuscarImagem(item.imagem)} alt='ringg' />
                                    <div className='informacao'>
                                        <h1><b>{item.nome}</b></h1>
                                        <p>tamanho de aro: 9</p>

                                        <div className='contador'>
                                            <div>
                                                <img src={Mais} alt='s-mais' />
                                                <p>1</p>
                                                <img src={Menos} alt='s-menos' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='preco'>
                                        <img src={Lixo} onClick={removerProduto}  alt='trash-can' />
                                        <p><b>R$ {item.preco}</b></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className='finalizamento'>
                    <div className='finalizar'>
                        <div>
                            <Link to='/entrega'>FINALIZAR</Link>
                        </div>
                    </div>
                    <Resumo />
                </div>
            </main>

            <main className='s2'>
                <p className='s2-p'>AS NOSSAS RECOMENDAÇÕES</p>

                <section>
                    <Swiper
                        modules={[Navigation]}
                        navigation={true}
                        loop={true}
                    >
                        <SwiperSlide>
                            <label>
                                <article>
                                    <footer className='f1'>

                                    </footer>

                                    <footer>
                                        <p>Brinco Ouro Rodolita E Diamantes</p>
                                        <p>R$ 20.350,00</p>


                                        <a href='/carrinho'>ADICIONAR AO CARRINHO</a>
                                    </footer>
                                </article>

                                <article>
                                    <footer className='f2'>

                                    </footer>

                                    <footer>
                                        <p>Anel Ouro Branco E Diamantes Grandes</p>
                                        <p>R$ 8.450,00</p>


                                        <a href='/carrinho'>ADICIONAR AO CARRINHO</a>
                                    </footer>
                                </article>

                                <article>
                                    <footer className='f3'>

                                    </footer>

                                    <footer>
                                        <p>Escapulário Ouro Amarelo</p>
                                        <p>R$ 3.350,00</p>


                                        <a href='/carrinho'>ADICIONAR AO CARRINHO</a>
                                    </footer>
                                </article>
                            </label>
                        </SwiperSlide>

                        <SwiperSlide>
                            <label>
                                <article>
                                    <footer className='f4'>

                                    </footer>

                                    <footer>
                                        <p>Escapulario de Prata 60cm</p>
                                        <p>R$ 850,00</p>


                                        <a href='/carrinho'>ADICIONAR AO CARRINHO</a>
                                    </footer>
                                </article>

                                <article>
                                    <footer className='f5'>

                                    </footer>

                                    <footer>
                                        <p>Colar Life Unique Prata e Ágata Verde</p>
                                        <p>R$ 550,00</p>


                                        <a href='/carrinho'>ADICIONAR AO CARRINHO</a>
                                    </footer>
                                </article>

                                <article>
                                    <footer className='f6'>

                                    </footer>

                                    <footer>
                                        <p>Escapulario Ouro Branco</p>
                                        <p>R$ 4.150,00</p>


                                        <a href='/carrinho'>ADICIONAR AO CARRINHO</a>
                                    </footer>
                                </article>
                            </label>
                        </SwiperSlide>
                    </Swiper>
                </section>
            </main>

            <Rodape />
        </div>
    );
}