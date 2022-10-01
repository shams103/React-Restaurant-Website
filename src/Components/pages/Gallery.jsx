import React from 'react'
import P1 from './P1'
import img2 from "../../Images/p-2.jpg"
import  { galleryImg }  from '../data/Data'
import './gallery.css'
import Footer from './Footer'

const Gallery = () => {
  return (
    <>
      <P1 topimg={img2}  topText="Gallery"/>

      <div className="container grid3 gallery">
        {galleryImg.map((items, index) => (
          <div className='box' key={index}>
             <img src={items.cover} alt='' />
          </div>
        ))};         
      </div>

      <Footer />

    </>
  )
}

export default Gallery
