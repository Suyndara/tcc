import './index.scss';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { register } from 'swiper/element/bundle';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


register();


export default function Carrossel() {
  const [slidePerView, setSlidePerView] = useState(1)
  const data = [
    {id: '1', image: '/assets/img/banner1.png'},
    {id: '2', image: 'https://imgs.search.brave.com/aN5DlwsBZZera1AHUahmdE90nGchaE_HQAzKGb_yhmE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/OC5tb3RvcnNwb3J0/LmNvbS9pbWFnZXMv/YW1wL1lwTnlEM00w/L3M3MDAvZGVubmlz/LWZvZ2dpYS1sZW9w/YXJkLXJhY2luZy0x/LmpwZw'},
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
        slidesPerView={slidePerView}
        pagination={{clickable: true}}
        navigation
      >
        {data.map( (item) => (
          <SwiperSlide key={item.id}>
              <img
                src={item.image}
                alt='sas'
                className='slide-item'
              />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
