import React, { useState } from 'react'
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom'


const MenuItems = ({ items }) => {

const [dropdown, setDropdown] = useState(false);

const toggleDropdown = event => {
      
  
  setDropdown((current) => !current);
    

    // else
    // {

    //   setDropdown((current) => !current);
    // }
}

  return (
    <li className="menu-items">
      {items.submenu ? (
        <>
          <Link className='navLink'
               onClick={toggleDropdown}              
               >

            {items.title}{' '} <i class="fa-solid fa-chevron-down arrow"></i>
          </Link>
          <Dropdown submenus={items.submenu} 
                dropdown={dropdown}
                />
        </>
      ) : (
        <Link to={items.path} className='navLink' onClick={()=> dropdown(false)} >{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;