import './App.css';
import Footer from './Components/Footer';
import Head from './Components/Head';
import Home from './Components/Home';
import { Routes, Route, Link } from "react-router-dom";
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import { useState } from 'react';
// offer-first.jpg
function App() {
  var [offer, setOffer] = useState([
    {name: "First Order", discount: "10% Off", img: './offer-first.jpg', code:"buyfirst"},
    {name: "Festive Offer", discount: "15% Off", img: './offer-mithai.png', code:"diwali2022"},
    {name: "Pay Online", discount: "12% Off", 
    img: './b66e77116621679.6065840b76599.jpg', code:"buyfirst"}
  ]);
  var [catalogue, setCatalogue] = useState([
  {name:"Sweets", img:"./sweets.jpg"}, 
  {name:"Gift Hampers", img:"./gifts.jpg"},
  {name: "Cakes & Bakery", img:"./backery.jpeg"}, 
  {name:"Bulk Orders", img:"./bulk.png"}
  ])
  return (
    <div className="App">
      <Head/>
      <Routes>
          <Route path='/' element={<Home offer={offer} catalogue={catalogue}/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
