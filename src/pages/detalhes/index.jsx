import './index.scss';

import Cabecalho from '../../components/cabecalho';

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
                <p>Relacionados</p>
                
                <section>
                    <Swiper
                        modules={[Navigation]}
                        navigation={true}
                    >
                        <SwiperSlide>
                                <label>
                                    <article>
                                        <section>
                                            <img src="./assets/img/item1.png" alt="" />
                                        </section>

                                        <section>
                                            
                                        </section>
                                    </article>
                                </label>
                        </SwiperSlide>        

                        <SwiperSlide>
                                <label>
                                    <h1>teste</h1>
                                </label>
                        </SwiperSlide>
                    </Swiper>
                </section>
            </main>
        </div>
    )
}