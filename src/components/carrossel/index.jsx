import './index.scss';
import { Swiper, SwiperSlide} from 'swiper/react';
import { register } from 'swiper/element/bundle';
import { useState } from 'react';

register();

/*
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
*/

export default function Carrossel() {
  const [SliderPerView, setSliderPerView] = useState(2);

  const data = [
    {id: '1', image: 'https://imgs.search.brave.com/z_j0qBpDAGHLWFp4BvvtySk9Y9b5w6abxb9zv3JEjDc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/Ny5tb3RvcnNwb3J0/LmNvbS9pbWFnZXMv/YW1wL1l2OGp2V3gw/L3MzMDAvZGF2aWQt/YWxvbnNvLWdhc2dh/cy1hc3Bhci10ZWFt/LmpwZw'},
    {id: '2', image: 'https://imgs.search.brave.com/aN5DlwsBZZera1AHUahmdE90nGchaE_HQAzKGb_yhmE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/OC5tb3RvcnNwb3J0/LmNvbS9pbWFnZXMv/YW1wL1lwTnlEM00w/L3M3MDAvZGVubmlz/LWZvZ2dpYS1sZW9w/YXJkLXJhY2luZy0x/LmpwZw'},
  ]


  return(
    <div className='comp-carrossel'>
      <h1>aaaaaaaaaaaaaaaaa</h1>

      <Swiper>
        <SwiperSlide>

        </SwiperSlide>
      </Swiper>
    </div>
  )
}
