import React from "react";
import "../styling/header.css";
import Basket from './images/basket.png';
import Menu from './images/menu.png';

const Header = () => {
  return (
    <header>
      <h6 className="websiteTop"> GUESTLINE ROOM SERVICE APPLICATION 2022</h6>  
      <h1 className="websiteTitle">AVAILABLE MENUS</h1>

      <div id="basketicon"> <img src={Basket} alt="basket"/> 
      </div>

      <div id="menuicon"> <img src={Menu} alt="basket"/> 
      </div>

    </header>
  );
};

export default Header;
