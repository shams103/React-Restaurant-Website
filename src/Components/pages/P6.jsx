import React from 'react'
import { ourLocation } from '../data/Data'
import './P6.css'

const P6 = () => {
  return (
    <>
        <div className="grid3">
             {ourLocation.map((items, index) => (
               <div className='boxContact' key={index}>
                  <span>
                  <i class={items.contactIcon}></i>
                  </span>
                  <div className="inner-box">
                      <h2>{items.contactType}</h2>
                      <p>{items.contactDetails}</p>
                      <p className='tit'>{items.contactDetails2}</p>
                  </div>
              </div>
             ))}
        </div>
      
    </>
  )
}

export default P6
