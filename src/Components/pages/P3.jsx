import React from 'react'
import "./P3.css"
import { ranDdishes } from '../data/Data'

const P3 = () => {
  return (
    <>
       <div className="container grid2 randDish">
          {ranDdishes.map((items, index) => (
            <div className='box' key={index}>
              <div className="dishPic">
                <img src={items.cover} alt='' />      
              </div>
              <div className="dishText">
                <h2>{items.name}</h2>
                <p>{items.about}</p>
              </div>
              <div className="dishPrice">
                 <h3>${items.price}</h3>
              </div>
            </div>
          ))}
        </div>
    </>
  )
}

export default P3
