"use client"

import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/splide.min.css';


import slide1 from '@pub/images/spookymoon.jpg'
import slide2 from '@pub/images/purpleorangesurface.jpg'
import slide3 from '@pub/images/bluesmoke.jpg'

const Slider = () => {
  return (
    <div className="hero-slider absolute top-0 left-0">
      <Splide
        options={{
          rewind: true,
          gap: '0',
          autoplay: true,
          interval: 5000,
          width: '100vw',
          height: '85vh',
      }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <Image src={slide1} alt="Image 1"/>
        </SplideSlide>
        <SplideSlide>
          <Image src={slide2} alt="Image 2"/>
        </SplideSlide>
        <SplideSlide>
          <Image src={slide3} alt="Image 3"/>
        </SplideSlide>
      </Splide>
    </div>
  )
}

export default Slider