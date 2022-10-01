import React from "react"

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className='heading'>
        <h1>{subtitle}</h1>
        <p>{title}</p>
      </div>
    </>
  )
}

export default Heading