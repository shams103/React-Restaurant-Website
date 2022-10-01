import React from 'react'
import { Link } from "react-router-dom";
import P1 from './P1'
import img5 from "../../Images/p-5.jpg"
import Footer from './Footer'
import "./cart.css"

const Cart = () => {
  return (
    <>
       <P1 topimg={img5} topText="Cart" />
       <div className="container Cart">

        <div className="CartBox">
          <h2>Your Cart is empty, Do some shopping dude ...</h2>
        </div>

       <button className="btnCartA">
          <Link to="/pizza">
            <i class="fa-solid fa-store"></i>
                <span>Go to Shop</span> 
            <i class="fa-solid fa-arrow-right-long"></i>
          </Link>
        </button>

        </div>

       <Footer />
      
    </>
  )
}

export default Cart
