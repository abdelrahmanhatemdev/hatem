"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";

import "swiper/css";

const Hero = () => {
  return <section className="h-screen bg-neutral-500">
    <Swiper modules={[Pagination]}>
        <SwiperSlide>
            Slider 1
        </SwiperSlide>
        <SwiperSlide>
            Slider 2
        </SwiperSlide>
        <SwiperSlide>
            Slider 3
        </SwiperSlide>
    </Swiper>
  </section>;
};
export default Hero;
