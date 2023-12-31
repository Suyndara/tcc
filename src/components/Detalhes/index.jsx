import './index.scss';
import 'swiper/css';
import 'swiper/css/navigation';

import { toast, ToastContainer } from 'react-toastify';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { BuscarImagem } from '../../api/admAdd';

import storage from 'local-storage';


export default function Detalhes(props) {


    function adicionarCarrinho(infoProduto){
        infoProduto.qtd = 1 
        let pedido = storage('usuario-pedido')

        if(!pedido) {
            
        }

        pedido.carrinho = [...pedido.carrinho, infoProduto]
        storage('usuario-pedido', pedido);


        toast.info('Produto Adicionado ao carrinho');
    }

    return (
        <div className='pagina-detalhes'>
            <ToastContainer />

            <main className='s1'>
                <article>
                    <img src={BuscarImagem(props.produto.imagem)} alt="esca" />
                </article>

                <aside>
                    <section className='tb'>
                        <section>
                            <h1> {props.produto.nome} </h1>
                            <p> R$ {props.produto.preco} </p>
                        </section>

                        <section>
                            <h1> Categoria </h1>
                            <p> {props.produto.categoria} </p>
                        </section>

                        <section>
                            <h1> Disponibilidade </h1>
                            <p> {props.produto.disponivel ? 'Disponivel' : 'Indisponivel'} </p>
                        </section>

                        <button  onClick={() => adicionarCarrinho(props.produto)}>ADICIONAR AO CARRINHO</button>
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