import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "../Styles/NavbarMenu.css";
import LoginButton from "./login"
import LogoutButton from "./logout"
import { useAuth0 } from "@auth0/auth0-react";

const NavbarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();

  const toggleNavbarMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbarMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div className="navbar-container">
      <div className={isOpen ? "topnav responsive" : "topnav"} id="topnavMenu">
        <a className="active">JHT</a>
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
        {isAuthenticated && (
          <div>
            <span>{user.name}</span>
            <span>{user.email}</span>
          </div>
        )}
            <LogoutButton />
        {!isAuthenticated && (<LoginButton />)}
      </div>
    </div>
  );
};

export default NavbarMenu;
