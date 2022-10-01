import React from 'react'
import './P5.css'

const P5 = ({ itzimg, dishtype, about }) => {
  return (
    <>
      <div className="dishType">
        <div className="itzpic">
            <img src={itzimg} alt="" />
            <div className="itztext">
             <span><h2>{dishtype}</h2></span> 
              <p>{about}</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default P5
