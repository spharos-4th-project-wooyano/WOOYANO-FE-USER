'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Room from '@/images/test/room.png'
import Room2 from '@/images/test/room2.png'

const ImgSwiper = () => {
return (
  <div className='rounded-2xl overflow-hidden'>
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={1}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
  >
      <SwiperSlide><Image src={Room} alt="Image 1" width={1000} height={1000} /></SwiperSlide>
      <SwiperSlide><Image src={Room2} alt="Image 1" width={1000} height={1000} /></SwiperSlide>
      <SwiperSlide><Image src={Room} alt="Image 1" width={1000} height={1000} /></SwiperSlide>
      <SwiperSlide><Image src={Room2} alt="Image 1" width={1000} height={1000} /></SwiperSlide>
    
  </Swiper>
  </div>
);
};
export default ImgSwiper;
