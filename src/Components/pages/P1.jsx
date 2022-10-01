import React from 'react'
import './P1.css'

const P1 = ({ topimg, topText }) => {
  return (
    <>
       <div className="imageFirst" >
        <img src={topimg} alt='' />
      </div>
      <div className="Toptext">
        <h1>{topText}</h1>
      </div>
    </>
  )
}

export default P1
