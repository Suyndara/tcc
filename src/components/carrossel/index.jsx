import './index.scss';
import React from 'react';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
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
    {id: '2', image: 'https://imgs.search.brave.com/IJITVaSE4QBS8K7teR_VTbQDfSmpA23yCZ0OAjdHUnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90dWRv/Y29tbW9kYS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDYvMTAtbG9vay1j/b20tY2FtaXNhLWJy/YW5jYS1lLWJyaW5j/by1wcmV0by1ncmFu/ZGUuanBn'},
    {id: '3', image: 'https://imgs.search.brave.com/z_j0qBpDAGHLWFp4BvvtySk9Y9b5w6abxb9zv3JEjDc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/Ny5tb3RvcnNwb3J0/LmNvbS9pbWFnZXMv/YW1wL1l2OGp2V3gw/L3MzMDAvZGF2aWQt/YWxvbnNvLWdhc2dh/cy1hc3Bhci10ZWFt/LmpwZw'},
    {id: '4', image: 'https://imgs.search.brave.com/aN5DlwsBZZera1AHUahmdE90nGchaE_HQAzKGb_yhmE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/OC5tb3RvcnNwb3J0/LmNvbS9pbWFnZXMv/YW1wL1lwTnlEM00w/L3M3MDAvZGVubmlz/LWZvZ2dpYS1sZW9w/YXJkLXJhY2luZy0x/LmpwZw'},
  ]

  useEffect(() => {

    function handleResize() {
      if(window.innerWidth < 1200) {
        setSlidePerView(1);
      }
      else{
        setSlidePerView(2);
      }
    }

    handleResize();

  }, [])

  return(
    <div className='comp-carrossele'>  
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={slidePerView}
        Autoplay={{delay: 10}}
        pagination={{clickable: true}}
        navigation={true}
      >
        {data.map( (item) => (
          <SwiperSlide key={item.id}>
              <img
                src={item.image}
                alt='sas'
                className='slide-item'
              />
              <button className='bt-joia' href=''>CONFIRA NOSSA JOIAS</button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
