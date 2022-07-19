import React from "react";
import "../styling/header.css";

const Header = () => {
  return (
    <header>
      <h1>Room Service</h1>

      <nav>
        <ul>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
