import React from 'react'
import './P2.css'


const P2 = ({ Cover, Price, Name, About }) => {


  return (
    <>
              <div className='Chefbox' >
                <div className="chefPic">
                  <img src={Cover} alt='' />
                  <span>${Price}</span>
                </div>
                <div className="chefText">
                  <div className="chefTextinner">
                    <h2>{Name}</h2>
                    <p>{About}</p>
                    <button className='chefBtn'>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div> 
    </>
  )
}

export default P2
