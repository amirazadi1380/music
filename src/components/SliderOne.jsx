import React, { useContext } from 'react'
import { Navigation, Pagination, A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { AppContext } from '../App';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SliderOne() {
    const {teachers} = useContext(AppContext)
  return (
    <div className='flex flex-col w-screen justify-center items-center'>
      <h1 className='font-black text-xl md:text-3xl my-2 text-yellow-300'>اساتــــــــــــــــــید آمــــــــــــــوزشـــــگاه</h1>
         <Swiper className='w-[200px] md:w-[246px] opacity-80'
      modules={[Navigation,Autoplay, Pagination,  A11y]}
      autoplay={true}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}

    >
        {teachers.map(item=><SwiperSlide key={Math.random()*1000}><img src={item.src} alt="as" className='w-[250px] rounded-xl h-[310px]' /></SwiperSlide>)}

    </Swiper>
        
    </div>
  )
}
