import React, { useState } from 'react'
import './head.css';
import { Link } from "react-router-dom";
export default function Head(props) {
  return (
    <header>
      {/* head page navigation */}
      <h1>HouseOfSweets</h1>
      <div className='headChild' style={{}}>
        <Link style={{ textDecoration: "none" }} to="/"><h2>Home</h2></Link>
        <Link style={{ textDecoration: "none" }} to="/shop"><h2>Shop</h2></Link>

        <h2><i class="fa-regular fa-user"></i></h2>
        <Link style={{ textDecoration: "none" }} to="/cart">
          <h2><i class="fa-solid fa-cart-shopping"><sup>{props.productCart.length}</sup></i></h2>
        </Link>

      </div>


    </header>
  )
}
