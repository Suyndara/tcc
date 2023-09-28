import './index.scss';

import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Detalhes(){


    return(
        <div className='pagina-detalhes'>
            <Cabecalho/>

            <main className='s1'>
                <article>
                    <img src="/assets/img/escapulario.png" alt="esca" />
                </article>

                <aside>
                    <section className='tb'>
                        <h1>Escapulário Ouro Amarelo</h1>
                        <p>R$ 2850,00</p>
                        <p>10x <strong>R$285,00</strong> sem juros</p>

                        <button>ADICIONAR AO CARRINHO</button>
                    </section>

                    <section className='et'>
                        <p>CONSULTE O ESTOQUE DA LOJA</p>
                        <p>Calcular o frete da entrega</p>
                        <label>
                            <input type="text" placeholder='Digite o CEP'/>
                            <button>OK</button>
                        </label>
                        <p>Não sei meu CEP</p>
                    </section>
                </aside>
            </main>

            <main className='s2'>
                <p className='a'>Relacionados</p>
                
                <section>
                    <Swiper
                        modules={[Navigation]}
                        navigation={true}
                    >
                        <SwiperSlide>
                                <label>
                                    <article>
                                        <footer className='f1'>

                                        </footer>

                                        <footer>
                                            <p>Brinco Ouro Rodolita E Diamantes</p>
                                            <p>R$ 20.350,00</p>


                                            <a>ADICIONAR AO CARRINHO</a>
                                        </footer>
                                    </article>

                                    <article>
                                        <footer className='f2'>

                                        </footer>

                                        <footer>
                                            <p>Anel Ouro Branco E Diamantes Grandes</p>
                                            <p>R$ 8.450,00</p>


                                            <a>ADICIONAR AO CARRINHO</a>
                                        </footer>
                                    </article>

                                    <article>
                                        <footer className='f3'>

                                        </footer>

                                        <footer>
                                            <p>Escapulário Ouro Amarelo</p>
                                            <p>R$ 3.350,00</p>


                                            <a>ADICIONAR AO CARRINHO</a>
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


                                            <a>ADICIONAR AO CARRINHO</a>
                                        </footer>
                                    </article>

                                    <article>
                                        <footer className='f5'>

                                        </footer>

                                        <footer>
                                            <p>Colar Life Unique Prata e Ágata Verde</p>
                                            <p>R$ 550,00</p>


                                            <a>ADICIONAR AO CARRINHO</a>
                                        </footer>
                                    </article>

                                    <article>
                                        <footer className='f6'>

                                        </footer>

                                        <footer>
                                            <p>Escapulario Ouro Branco</p>
                                            <p>R$ 4.150,00</p>


                                            <a>ADICIONAR AO CARRINHO</a>
                                        </footer>
                                    </article>
                                </label>
                        </SwiperSlide>
                    </Swiper>
                </section>
            </main>

            <Rodape/>
        </div>
    )
}