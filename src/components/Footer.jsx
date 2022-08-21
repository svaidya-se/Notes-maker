import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Practice Project Saurav Vaidya ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
