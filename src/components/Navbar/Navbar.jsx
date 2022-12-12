import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const navbarLinks = [
    { url: "features", title: "Features" },
    { url: "about", title: "About" },
    { url: "pricing", title: "Pricing" },
    { url: "reviews", title: "Reviews" },
    { url: "contact", title: "Contact" },
  ];
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };
  return (
    <div className="navbar">
      <Link
        className="navbar-logo-home"
        activeclass="active"
        to="home"
        offset={-10}
        duration={1200}
      >
        <div className="navbar-logo">
          <h1 className="navbar-logo-heading">AX</h1>
          <h1 className="navbar-logo-heading2">IT</h1>
        </div>
      </Link>

      {menuClicked ? (
        <FiX
          size={25}
          className={"navbar-menu-responsive"}
          onClick={toggleMenuClick}
        />
      ) : (
        <FiMenu
          size={25}
          className={"navbar-menu-responsive"}
          onClick={toggleMenuClick}
        />
      )}

      <ul
        className={
          menuClicked ? "navbar-links navbar-links--active" : "navbar-links"
        }
      >
        {navbarLinks.map((item, index) => {
          return (
            <li className="navbar-item" key={index}>
              <Link
                className="navbar-link"
                activeclass="active"
                to={`${item.url}`}
                offset={-10}
                duration={1200}
                onClick={toggleMenuClick}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
