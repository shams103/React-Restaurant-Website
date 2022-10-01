import React from 'react'
import img6 from "../../Images/p-6.jpg"
import Heading from '../common/Heading'
import TDOffer from '../pages/P3'
import "./menu.css"
import dessertImg from '../../Images/p-5.jpg'
import P5 from './P5'
import Footer from './Footer' 



const Menu = () => {
  return (
    <>
     
      <div className="imageM" >
        <img src={img6} alt='' />
      </div>
      <div className="text">
        <h1>OUR MENU</h1>
      </div>
    <div className="menu">
      <div className="container M">
         <div className="offer">
            <Heading title="Today's Offer" subtitle="- Don't Miss -" />
            <TDOffer />
        </div>
        
        <P5 itzimg={dessertImg} dishtype='Dessert' about='The term dessert can apply to many confections,
         such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies,
          macaroons, sweet soups and tarts. Fruit is also commonly found in dessert
           courses because naturally occurring sweetness.'/>

        <TDOffer />

        <P5 itzimg={dessertImg} dishtype='Pizza' about='Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese,
         and often various other ingredients, which is then baked at a high temperature,
          traditionally in a wood-fired oven de ralema honu'/>

       <TDOffer />


       <P5 itzimg={dessertImg} dishtype='Salads' about='Salads consists green salads; vegetable
        salads; salads of pasta, legumes, or grains; mixed salads incorporating meat,
         poultry, or seafood; and fruit salads, Meranda el ella komediya pama kehtaniyya ueom refdau seriy Namenyta Wesopliua Resyu poeloiyyre'/>

     <TDOffer />  

     <P5 itzimg={dessertImg} dishtype='Soups' about='Soup is a primarily liquid food, generally served warm or hot, that is made by combining ingredients of
      meat or vegetables with stock, milk, or water. Hot soups are additionally characterized
       by boiling solid ingredients Ellanorem welliuyoremsa dorekc'/>

      <TDOffer />

      </div>  

    <Footer />

    </div>
     
    </>
  )
}

export default Menu
