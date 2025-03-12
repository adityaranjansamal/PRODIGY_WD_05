import React from "react";
import "/src/styles/Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer class="footer">
        <p>
          &copy; <span>{currentYear}</span> Aditya Ranjan Samal. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
