import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <p>Copyright © 2024</p>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog">Profile</a>
          </li>
          <li>
            <a href="/about">Register</a>
          </li>
          <li>
            <a href="/contact">Login</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
