import React from "react";

const Menu = () => {
  return (
    <div id="menu">
      <div>
        <h4>Menu</h4>
      </div>

      <div>
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

      <div>
        <h5 id="starers">Starters</h5>
      </div>

      <div>
        <h5 id="main">Main Course</h5>
      </div>

      <div>
        <h5 id="dessert">Dessert</h5>
      </div>
    </div>
  );
};

export default Menu;
