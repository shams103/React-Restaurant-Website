import React from 'react'
import P1 from './P1'
import P2 from './P2'
import Heading from '../common/Heading'
import img5 from "../../Images/p-5.jpg"
import Footer from './Footer'
import { specialOccDish1, specialOccDish2 } from '../data/Data'
import './special.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';


// Import Swiper styles
import "swiper/css";
import 'swiper/css/autoplay';



const Special = () => {
  return (
    <>
      <P1 topimg={img5} topText="Occasion Special" />

      <div className="special container">
        <Swiper slidesPerView={1}  modules={[Autoplay]} autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }} className="mySwiper">
         
            <SwiperSlide>
              <Heading title='Dusshera' subtitle="- Kolkata's Special -" />
             
                <div className='content grid3 chefRecom'>
                {specialOccDish1.map((items, index) => (
                      <P2 Cover={items.cover} Price={items.price} Name={items.name} About={items.about} key={index}/>
                   ))};
                </div> 
          
            </SwiperSlide>

            <SwiperSlide>
              <Heading title='Chhatth' subtitle="- Bihar's Special -" />
             
                <div className='content grid3 chefRecom'>
                {specialOccDish2.map((items, index) => (
                      <P2 Cover={items.cover} Price={items.price} Name={items.name} About={items.about} key={index}/>
                   ))};
                </div> 
          
            </SwiperSlide>

            <SwiperSlide>
              <Heading title='Christmas' subtitle="- India's Special -" />
             
                <div className='content grid3 chefRecom'>
                {specialOccDish2.map((items, index) => (
                      <P2 Cover={items.cover} Price={items.price} Name={items.name} About={items.about} key={index}/>
                   ))};
                </div> 
          
            </SwiperSlide>

        </Swiper>
      </div>

      <Footer />
    </>
  )
}

export default Special



          

