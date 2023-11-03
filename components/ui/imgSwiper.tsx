'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination } from 'swiper/modules';

const ImgSwiper = () => {
return (
  <div>
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={1}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
  >
      <SwiperSlide><img src="/images/cleaning.jfif" alt="Image 1" /></SwiperSlide>
      <SwiperSlide><img src="/images/review1.jfif" alt="Image 2" /></SwiperSlide>
      <SwiperSlide><img src="/images/cleaning.jfif" alt="Image 1" /></SwiperSlide>
      <SwiperSlide><img src="/images/review1.jfif" alt="Image 2" /></SwiperSlide>
    
  </Swiper>
  </div>
);
};
export default ImgSwiper;