import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="grid-2">
           <div className="contact">
              <h2>CONTACT US</h2>
              <p>11/8 Moti Nagar, Orantola, Jokihat</p>
              <p>+91 (763) 2393 7889</p>
              <p>Mon - Fri: 10:00 - 22:00</p>
              <p>Sat - Sun: 12:00 - 00:00</p>
           </div>
           <div className="icons">
             <h2>FOLLOW US</h2>
             <p>Join Us on Social media</p>
               <div className="icon-sys">
                <span><i class="fa-brands fa-instagram"></i></span> 
               <span><i class="fa-brands fa-twitter"></i></span>
               <span><i class="fa-brands fa-facebook-f"></i></span>
               <span><i class="fa-brands fa-whatsapp"></i></span>
               </div>
           </div>

        </div>
        <div className='credit'>
          <h2>Copyright © 2022 <span>Fcuk Dennie.</span> All rights reserved.</h2>
         </div>
      </footer>
    </>
  )
}

export default Footer
