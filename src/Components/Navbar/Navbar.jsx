import React, { useState } from "react";
import "./Navbar.css";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";


function Navbar() {
  const [menu,setMenu]=useState("shop")
  return (
    <>
      <div className="Navbar ">
        <div className="NavParent">
          <div className="NavSon1">
            <img src={logo} alt="" />
            <p> Shopper </p>
          </div>
          <div className="NavSon2">
            <ul>
              <li onClick={ ()=>{setMenu("shop")} }> <Link style={ {textDecoration:'none'} } to='/'>Shop</Link > {menu==="shop" ?<hr/> :<></>} </li>
              <li onClick={ ()=>{setMenu("mens")} }> <Link style={ {textDecoration:'none'} } to='/mens'>Men</Link> {menu==="mens" ?<hr/> :<></>} </li>
              <li onClick={ ()=>{setMenu("womens")} }> <Link style={ {textDecoration:'none'} } to='/womens'>Women</Link> {menu==="womens" ?<hr/> :<></>} </li>
              <li onClick={ ()=>{setMenu("kids")} }> <Link style={ {textDecoration:'none'} } to='/kids'>Kids</Link> {menu==="kids" ?<hr/> :<></>} </li>
            </ul>
          </div>
          <div className="NavSon3">
            <Link> <button> Login </button> </Link>
            <Link> <img src={cart_icon} alt="" /> </Link>
            <div className="count">0</div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Navbar;
