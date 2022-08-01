import React from "react";
import "../styling/footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>
        <h5>Room Service application M38</h5>
      </div>

      <div className="socialMedia">
        <ul>
          <li>
            <a
              href="https://en-gb.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
