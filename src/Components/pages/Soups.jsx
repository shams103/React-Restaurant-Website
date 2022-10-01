import React from 'react'
import { Link } from "react-router-dom"
import P1 from './P1'
import P2 from './P2'
import Footer from './Footer'
import { chefR } from '../data/Data'
import img5 from "../../Images/p-5.jpg"

const Soups = () => {
    return (
        <>
            <P1 topimg={img5} topText="Soups" />

            <div className="container dishTypeUniversal">

                <div className="dishTypeHigh">
                    <ul className='dishTypeHigh-inner'>
                        <li >
                            <Link to="/pizza" className='inner-link'>PIZZA</Link>
                        </li>
                        <li>
                            <Link to="/salads" className=' inner-link'>SALADS</Link>
                        </li>
                        <li>
                            <Link to="/soups" className='active inner-link'>SOUPS</Link>
                        </li>
                        <li>
                            <Link to="/desserts" className='inner-link'>DESSERTS</Link>
                        </li>
                        <li>
                            <Link to="/drinks" className='inner-link'>DRINKS</Link>
                        </li>
                    </ul>
                </div>

                <div className='content grid3 chefRecom'>
                   {chefR.map((items, index) => (
                     <>
                        <P2 Cover={items.cover} Price={items.price} Name={items.name} About={items.about} key={index}/>
                        <P2 Cover={items.cover} Price={items.price} Name={items.name} About={items.about} key={index}/>
                    </>
                  ))};
              </div>

            </div>

            <Footer />
        </>
    )
}

export default Soups
