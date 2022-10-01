import React  from 'react'
import { Link } from "react-router-dom"
import "./home.css"
import Dishes from './P3'
import img5 from "../../Images/p-5.jpg"
import img6 from "../../Images/p-6.jpg"
import Heading from '../common/Heading'
import BoxCard from './BoxCard'
import Location from './Location'
import Footer from './Footer'
import P2 from './P2'
import { scroll, chefR, newsChef, testimonials } from '../data/Data'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';



// Import Swiper styles
import "swiper/css";
import 'swiper/css/autoplay';



const Home = () => {

  return (
    <>
 
      <div className="image" >
        <img src={img5} alt='' className='img5' />
        <img src={img6} alt='' className='img6' />
      </div>
      <div className="text">
        <h1>DAWAT-E-ISHQQ  Restaurant</h1>
        <p>11/8 Moti Nagar, Orantola, Jokihat</p>
      </div>

      <section className='order background'>
        <div className='container'>
          <Heading title='Order Online' subtitle='- From 11:00am to 10:00pm -' />
          <BoxCard />
        </div>
      </section>

      <Swiper
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}

        className="mySwiper scrollD"
      >

        <div className="scroll">
          {scroll.map((items, index) => (
            <SwiperSlide>
               <div className='box' key={index}>
                <img src={items.cover} alt='' />
                <div className="textute">
                    <h1>{items.name}</h1>
                    <p>{items.para}</p>
                </div>
            </div>
            </SwiperSlide>
          ))};
        </div>
      </Swiper>

      <section className='dishes'>
        <Heading title='From Our Menu' subtitle='- Random Dishes -' />
        <Dishes />
        <button className='dishBtn'>
            <Link to="/boxed">View Full Menu</Link> 
        </button>
      </section>

      <div className="call">
        CALL US: +91 (763) 2393 7889
      </div>

      <section>
        <div className='container'>
          <Heading title='Chef Recommends' subtitle='- Should to Try -' />
          <div className='content grid3 chefRecom'>
             {chefR.map((items, index) => (
                <P2 Cover={items.cover} Price={items.price} Name={items.name} About={items.about} key={index}/>
              ))};
          </div>
        </div>
      </section>


      <div className="news">
        <Swiper slidesPerView={1}  modules={[Autoplay]} autoplay={{ delay: 4000 }} className="mySwiper">
          {newsChef.map((items, index) => (
            <SwiperSlide>
              <div className='box' key={index}>
                <img src={items.cover} alt='' className='alpha' />
                <div className=" container">
                  <Heading title='Latest News' subtitle='- From Our Blog -' />
                  <div className="oppo grid2">
                    <div className="innerPic">
                      <img src={items.cover} alt="" />
                    </div>
                    <div className="newsText">
                      <p>{items.date}</p>
                      <h2>{items.titleName}</h2>
                      <h3>{items.about}</h3>
                      <button className='newsBtn'>
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))};
        </Swiper>
      </div>


      <div className="container testimonials">
        <Heading title='Testimonials' subtitle='- What Our Clients Say -' />
        <div className="clients">
        <Swiper slidesPerView={1} modules={[Autoplay]} autoplay={{ delay: 6000 }}  className="mySwiper">
          {testimonials.map((items, index) => (
            <SwiperSlide>
               <div className='box' key={index}>   
                  <div className="innerTexttest">
                     <span><i class="fa fa-quote-left"></i> </span>
                     <p>{items.feedback}</p>
                     <h2>{items.clientName}</h2>
                  </div> 
               </div>
            </SwiperSlide>
          ))};
          </Swiper>
        </div>   
        </div>
      
      <Location />

      <Footer />

    </>
  )
}

export default Home
