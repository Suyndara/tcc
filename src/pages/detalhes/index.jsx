import './index.scss';

import Cabecalho from '../../components/cabecalho';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Detalhes(){

    const [slidePerView, setSlidePerView] = useState(1)
    const data = [
      {id: '1', image: '/assets/img/banner6.png'},
      {id: '2', image: '/assets/img/banner7.jpg'},
    ]
  
    useEffect(() => {
  
      function handleResize() {
        if(window.innerWidth > 1200) {
          setSlidePerView(1);
        }
      }
  
      handleResize();
  
    }, [])
    

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
                    {/* nth-child(4) */}
                        <p>Não sei meu CEP</p>
                    </section>
                </aside>
            </main>

            <main className='s2'>
                <p>Relacionados</p>
                
                <section>
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={slidePerView}
                        loop={true}
                        navigation={true}
                    >
                        {data.map( (item) => (
                        <SwiperSlide key={item.id}>

                            <article className='slide-tem'>
                                <img 
                                 src={item.image}/>
                            </article>

                        </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </main>
        </div>
    )
}