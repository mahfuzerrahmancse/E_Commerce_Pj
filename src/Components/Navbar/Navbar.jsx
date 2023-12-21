import React from "react";
import "./Navbar.css";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

function Navbar() {
  return (
    <>
      <div className="Navbar ">
        <div className="NavParent">
          <div className="NavSon1">
            <img src={logo} alt="" />
            <p> Shopper </p>
          </div>
          <div className="NavSon2">NavSon2:</div>
          <div className="NavSon3">
            NavSon3:
            <button> Login </button>
            <img src={cart_icon} alt="" />
          </div>
        </div>
      </div>
      <div style={{ minHeight: "700px" }}>gf</div>
    </>
  );
}

export default Navbar;
