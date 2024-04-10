import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// slider image
import slide1 from '../../assets/slider1.jpg';
import slide2 from '../../assets/slider2.jpg';
import slide3 from '../../assets/slider3.jpg';
import slide4 from '../../assets/slider4.jpg';
import { Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <div>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-full md:h-[500px]' src={slide1} alt="" /></SwiperSlide>

        <SwiperSlide><img className='w-full md:h-[500px]' src={slide2} alt="" /></SwiperSlide>

        <SwiperSlide><img className='w-full md:h-[500px]' src={slide3} alt="" /></SwiperSlide>

        <SwiperSlide><img className='w-full md:h-[500px]' src={slide4} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;