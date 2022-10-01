import React from "react"
import { featured } from "../data/Data"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";



const BoxCard = () => {

   return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        
      
        className="mySwiper"
        breakpoints={{
       
          250:{
            width: 250,
            slidesPerView: 1,
          
          },
          640: {
            width: 640,
            slidesPerView: 2,
          },
     
          768: {
            width: 768,
            slidesPerView: 3,
          },
        }}
      >
      <div className='content '>
    
          {featured.map((items, index) => (
               <SwiperSlide>
              <div className='box' key={index}>
                <img src={items.cover} alt='' />
                <span></span>
                <div className="tra">
                  <h4>{items.name}</h4>
                </div>
              </div>
              </SwiperSlide>
          ))};
         
        </div>

        </Swiper>
    </>
  )
}

export default BoxCard











