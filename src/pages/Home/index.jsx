import Carrossel from '../../components/carrossel';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import './index.scss';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


export default function Home() {
    const [slidePerView, setSlidePerView] = useState(1)
    const data = [
        { id: '1', image: '/assets/img/banner6.png' },
        { id: '2', image: '/assets/img/banner7.jpg' },
        { id: '4', image: '/assets/img/banner8.jpg' },
        { id: '4', image: '/assets/img/banner9.jpg' },
    ]

    useEffect(() => {

        function handleResize() {
            if (window.innerWidth > 1200) {
                setSlidePerView(1);
            }
        }

        handleResize();

    }, [])

    const navigate = useNavigate();

    function Filtro() {
        navigate('/filtro');
    }


    return (
        <div className='pagina-home'>
            <div className='nav'></div>

            <Cabecalho />
            <Carrossel />

            <main className='s2'>
                <article>
                    <img alt='truck' src="/assets/img/i-truck.png" />
                    <h1>COMPRA SEGURA, ENTREGA RÁPIDA</h1>
                </article>

                <article>
                    <img alt='car' src="/assets/img/i-card.png" />
                    <h1>PAGAMENTO SIMPLES, FLEXÍVEL E SEGURO</h1>
                </article>

                <article>
                    <img alt='ret' src="/assets/img/i-return.png" />
                    <h1>TEMOS GARANTIA DE ATÉ 1 ANO</h1>
                </article>

                <article>
                    <img alt='loc' src="/assets/img/i-locke.png" />
                    <h1>COMPRE COM SEGURANÇA</h1>
                </article>
            </main>

            <main className='s3'>
                <article>
                    <img alt='ring' src="/assets/img/anel.png" />
                    <button onClick={Filtro}>ANÉIS</button>
                </article>

                <article>
                    <img alt='necklace' src="/assets/img/colar.png" />
                    <button onClick={Filtro}>COLARES</button>
                </article>

                <article>
                    <img alt='brink' src="/assets/img/brinco.png" />
                    <button onClick={Filtro}>BRINCOS</button>
                </article>

                <article>
                    <img alt='kid' src="/assets/img/infantil.png" />
                    <button onClick={Filtro}>INFANTIL</button>
                </article>
            </main>

            <main className='s4'>
                <article>
                    <img src="/assets/img/ring.png" alt="anelson" />
                    <p>BEM-VINDO À NOSSA JOALHERIA EXCLUSIVA, ONDE A ELEGÂNCIA ENCONTRA O BRILHO EM CADA DETALHE PRECIOSO.</p>
                </article>
            </main>

            <main className='s5'>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={slidePerView}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    navigation={true}
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <main className='slide'>
                                <img
                                    src={item.image}
                                    alt='slider'
                                    className='slide-item'
                                />

                                <p>CONFIRA NOSSOS DIAMANTES</p>
                            </main>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </main>

            <Rodape />
        </div>
    )
}