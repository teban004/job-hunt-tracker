import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // You can choose different icons
import "../Styles/NavbarMenu.css";

const NavbarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbarMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
    var x = document.getElementById("topnavMenu");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  return (
    <div className="topnav" id="topnavMenu">
      <a className="active">Menu</a>
      <Link to="/about">Info</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/create">Create</Link>
      <Link to="/home">View</Link>
      <a className="icon" onClick={toggleNavbarMenu}>
        {isOpen ? <FiX /> : <FiMenu />}
      </a>
    </div>
  );
};

export default NavbarMenu;
