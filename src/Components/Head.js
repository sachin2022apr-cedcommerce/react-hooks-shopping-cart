import React from 'react'
import './head.css';
import { Link } from "react-router-dom";
export default function Head() {
  return (
    <header>
      <h1>logo</h1>
      <div style={{display:"flex",justifyContent:"space-between" ,alignItems:"center", width:"70%"}}>
        <Link style={{textDecoration:"none"}} to="/"><h2>Home</h2></Link>
        <Link style={{textDecoration:"none"}} to="/"><h2>Categories</h2></Link>
        <Link style={{textDecoration:"none"}} to="/shop"><h2>Shop</h2></Link>
        
        <h2><i class="fa-regular fa-user"></i></h2>
        <Link style={{textDecoration:"none"}} to="/cart">
        <h2><i class="fa-solid fa-cart-shopping"></i></h2>
        </Link>

        
      </div>
      
      
    </header>
  )
}
