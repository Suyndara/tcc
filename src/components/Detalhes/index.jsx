import './index.scss';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { BuscarImagem } from '../../api/admAdd';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Detalhes(props) {


    return (
        <div className='pagina-detalhes'>

            <main className='s1'>
                <article>
                    <img src={BuscarImagem(props.produto)} alt="esca" />
                </article>

                <aside>
                    <section className='tb'>
                        <h1> {props.produto.nome} </h1>
                        <p> R$ {props.produto.preco} </p>

                        <section>
                            <h1> Categoria </h1>
                            <p> {props.produto.categoria} </p>
                        </section>

                        <section>
                            <h1> Disponibilidade </h1>
                            <p> {props.produto.disponivel ? 'Disponivel' : 'Indisponivel'} </p>
                        </section>

                        <button>ADICIONAR AO CARRINHO</button>
                    </section>

                    <section className='et'>
                        <p>EM ESTOQUE: {props.produto.estoque} </p>
                        <p>Calcular o frete da entrega</p>
                        <label>
                            <input type="text" placeholder='Digite o CEP' />
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

            <main className='s3'>
                <article>
                    <section>
                        <h1>Composição  </h1>
                        <p>{props.produto.composicao}</p>
                    </section>

                    <p className='p-s3'>• Sugestão: Para ela ou ele </p>
                    <p className='p-s3'>• Material: Ouro amarelo</p>
                </article>


                <article>


                    <section>
                        <h1>Detalhes </h1>
                    </section>

                    <p> {props.produto.detalhes} </p>

                </article>
            </main>

        </div>
    )
}