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
import Anel from '../../assets/img/anel.svg';



export default function Carrinho() {


    return (

        <div className='pagina-carrinho'>
            <Cabecalho />

            <main className='s1'>
                <div className='carrinho-produtos'>
                    <h1>SEU CARRINHO</h1>
                    <h2>TOTAL (1 produto)  <b>R$ 2.600,00</b> </h2>
                    <p>Os itens do seu carrinho não estão reservados. Finalize a compra para torná-los seus itens pessoais.</p>

                    <div className='produto'>
                        <div className='informacao-produto'>
                            <img src={Anel} alt='ringg' />
                            <div className='informacao'>
                                <h1><b>Anel solitário de ouro 18k</b></h1>
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
                                <img src={Lixo} alt='trash-can' />
                                <p><b>R$ 2.600,00</b></p>
                            </div>
                        </div>
                    </div>
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