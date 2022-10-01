import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { navItems } from "../data/Data";
import MenuItems from './MenuItems';


const Header = () => {

  const [navList, setNavList] = useState(false)
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () =>{
      if(window.scrollY > 66)
          {setNavbar(true)}
       else
          {setNavbar(false) }  
         
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <>
    
      <nav className={navbar ? "navbar active" : "navbar"}>

        <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
        </div>

        <div className="navbar-logo">
          <h2>Dawat-e-Ishqq</h2>
          <p>Restaurant</p>
        </div>

     <div className="Navv">
        <ul className={navList ? "small" : "nav-items"}>

             {navItems.map((item, index) => {

                return <MenuItems items={item} key={index}/>;

             })}
           
         </ul>
    </div>

         <div className="misc"> 
               <Link to="/signup">
                   <i class="fa-solid fa-bag-shopping"></i>
               </Link>
         </div>
</nav>
         
    </>
  );
}


export default Header;


