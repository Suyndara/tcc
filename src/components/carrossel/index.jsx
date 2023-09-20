import './index.scss';
import React from 'react';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Autoplay} from 'swiper/modules';
import { register } from 'swiper/element/bundle';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

register();

export default function Carrossel() {
  const [slidePerView, setSlidePerView] = useState(1)
  const data = [
    {id: '1', image: '/assets/img/banner1.png'},
    {id: '2', image: '/assets/img/banner2.png'},
    {id: '3', image: 'assets/img/banner3.jpg'},
    {id: '4', image: '/assets/img/banner4.png'},
  ]

  useEffect(() => {

    function handleResize() {
      if(window.innerWidth > 2200) {
        setSlidePerView(1);
      }
      else {
        setSlidePerView(1);
      }
    }

    handleResize();

  }, [])

  return(
    <div className='comp-carrossele'>  
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={slidePerView}
        autoplay={{delay: 3000}}
        loop={true}
        navigation={true}
      >
        {data.map( (item) => (
          <SwiperSlide key={item.id}>
              <main className='main'>
                <img
                  src={item.image}
                  alt='sas'
                  className='slide-item'
                />

                <button className='bt-joia' href=''>CONFIRA NOSSAS JOIAS</button>
              </main>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
