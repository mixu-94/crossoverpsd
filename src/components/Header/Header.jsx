import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-infos">
        <div className="header-infos-logo">
          <h1 className="header-infos-logo1"> AX</h1>
          <h1 className="header-infos-logo2"> IT</h1>
        </div>
        <div className="header-infos-h2">
          <h2>MODERN AXURE TEMPLATE FOR BEAUTIFUL PROTOTYPES</h2>
        </div>
        <div className="header-infos-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo.
          </p>
        </div>
        <div className="header-infos-button">
          <button> Download </button>
        </div>
      </div>
      {/* Free Tial */}
      <div className="header-freetrial">
        <div className="header-freetrial-heading">
          <p>
            Try Your <span>FREE</span> Trial Today
          </p>
        </div>
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />

          <button type="submit"> Get Started</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
