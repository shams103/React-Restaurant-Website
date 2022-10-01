import React from 'react';
import { Link } from "react-router-dom";
import "./Dropdown.css"; 

const Dropdown = ({ submenus, dropdown }) => {

  
    
    return (
        <ul className={dropdown ? "services-submenu clicked" : "services-submenu"} >

         {submenus.map((submenu, index) => (
           <li key={index} className="menu-items">
            <Link to={submenu.path} onClick={()=> dropdown(false)} >{submenu.title}</Link>
           </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;