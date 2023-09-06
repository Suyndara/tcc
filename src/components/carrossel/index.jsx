import './index.scss';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

export default function Carrossel(){
    return (
      <div className='Carrosseles'>

        <CarouselProvider
        className='aa'

        totalSlides={2}
      >

        <Slider className='slide-principal'>
          <Slide index={0} className='img1'>
                <img src="/assets/img/banner12.png"/>
                <img src="/assets/img/banner1.png"/>
          </Slide>
        </Slider>

        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider> 
      </div>
    );
}