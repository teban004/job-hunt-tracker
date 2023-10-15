import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "../Styles/NavbarMenu.css";

const NavbarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbarMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbarMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div className={isOpen ? "topnav responsive" : "topnav"} id="topnavMenu">
      <a className="active">Menu</a>
      <Link to="/about" onClick={closeNavbarMenu}>
        Info
      </Link>
      <Link to="/contact" onClick={closeNavbarMenu}>
        Contact
      </Link>
      <Link to="/create" onClick={closeNavbarMenu}>
        Create
      </Link>
      <Link to="/home" onClick={closeNavbarMenu}>
        View
      </Link>
      <a className="icon" onClick={toggleNavbarMenu}>
        {isOpen ? <FiX /> : <FiMenu />}
      </a>
    </div>
  );
};

export default NavbarMenu;
