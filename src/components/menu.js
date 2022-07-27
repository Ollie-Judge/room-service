import React from "react";
import "../styling/menu.css";
import Food from "./foods/food/food";

const Menu = () => {
  return (
    <div id="menu">
      <div className="menuTitle">
        <h4>Menu</h4>
      </div>

      <div className="menuNav">
        <ul>
          <li>
            <a href="#starters">Starters</a>
          </li>
          <li>
            <a href="#main">Main Course</a>
          </li>
          <li>
            <a href="#dessert">Dessert</a>
          </li>
        </ul>
      </div>

      <div className="startersTitle">
        <h5 id="starers">Starters</h5>
        <Food />
      </div>

      <div className="mainTitle">
        <h5 id="main">Main Course</h5>
        <Food />
      </div>

      <div className="dessertTitle">
        <h5 id="dessert">Dessert</h5>
        <Food />
      </div>
    </div>
  );
};

export default Menu;
