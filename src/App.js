import './App.css';
import Footer from './Components/Footer';
import Head from './Components/Head';
import Home from './Components/Home';
import { Routes, Route, Link } from "react-router-dom";
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import { useState } from 'react';
import Product from './Components/Product';
import Catalogue from './Components/Catalogue';
import PrintBill from './Components/PrintBill';

function App() {
  // cart array
  const [productCart, setProductCart] = useState([]);

  // offers array
  var [offer, setOffer] = useState([
    { name: "First Order", discount: "10% Off", img: './offer-first.jpg' },
    { name: "Festive Offer", discount: "15% Off", img: './offer-mithai.png' },
    {
      name: "Pay Online", discount: "12% Off",
      img: './b66e77116621679.6065840b76599.jpg'
    }
  ]);

  // catalogue array
  var [catalogue, setCatalogue] = useState([
    { name: "Sweets", img: "./sweets.jpg" },
    { name: "Gift Hampers", img: "./gifts.jpg" },
    { name: "Cakes & Bakery", img: "./backery.jpeg" }
  ]);
  // Products array
  var [products, setProducts] = useState([
    {
      id: 1,
      name: "Assorted Barfis Box", catagory: "Sweets", price: 600, type: "pcs", quantity: "9", rating: 4, img: "./images/p1.png",
      description: "When you glance through the display of any Bengali sweet shop, you are often on the quest to distinguish one chenna sweet to the other! Rasgulla, Rasmalai, Rajbhog, Chom Chom, while it can all be a tad bit confusing, they are all just so delicious!"
    },

    {
      id: 2,
      name: "Sweet Shop Rajbhog", catagory: "Sweets", price: 300, type: "pcs", quantity: "5", rating: 5, img: "./images/p2.png",
      description: "When you glance through the display of any Bengali sweet shop, you are often on the quest to distinguish one chenna sweet to the other! Rasgulla, Rasmalai, Rajbhog, Chom Chom, while it can all be a tad bit confusing, they are all just so delicious!"
    },

    {
      id: 3,
      name: "Gulab Jamun", catagory: "Sweets", price: 250, type: "pcs", quantity: "6", rating: 5, img: "./images/p3.png",
      description: "When you glance through the display of any Bengali sweet shop, you are often on the quest to distinguish one chenna sweet to the other! Rasgulla, Rasmalai, Rajbhog, Chom Chom, while it can all be a tad bit confusing, they are all just so delicious!"
    },

    {
      id: 4,
      name: "Besan Laddu Box", catagory: "Sweets", price: 550, type: "pcs", quantity: "9", rating: 4, img: "./images/p4.png",
      description: "When you glance through the display of any Bengali sweet shop, you are often on the quest to distinguish one chenna sweet to the other! Rasgulla, Rasmalai, Rajbhog, Chom Chom, while it can all be a tad bit confusing, they are all just so delicious!"
    },


    {
      id: 5,
      name: "Tasteful Offerings", catagory: "Gift Hampers", price: 2250, type: "kg", quantity: "500gm", rating: 5, img: "./images/p5.png",
      description: "This mother's day, surprise her with tasteful indulgence & choicest blooms of chrysanthemums with baklava sweets, printed jute bags with pistachios, choco fill cookies & himalayan pink salt couverture chocolate bar in a bohemian styled macrame basket."
    },
    {
      id: 6,
      name: "Spectacular Hamper", catagory: "Gift Hampers", price: 3050, type: "kg", quantity: "800gm", rating: 5, img: "./images/p6.png",
      description: "A blend of elegance and delectable delights - Baklava sweets, kale quinoa puffs, floral-infused teas, almond praline chocolates, choco-coated almonds, yellow and pink spray roses, the all-embracing gift box will leave the recipient feeling truly special."
    },
    {
      id: 7,
      name: "Package In Gift Bag", catagory: "Gift Hampers", price: 1550, type: "kg", quantity: "1kg", rating: 5, img: "./images/p7.png",
      description: "Bring a little sweetness to someone's day, send them our Care Package filled with our favourite treats - all ready to be sent to someone you care for! After all, every bite of mithai is a hug when apart. Hand-made with love one by one - with only the best ingredients."
    },
    {
      id: 8,
      name: "Sweet Shop Hamper", catagory: "Gift Hampers", price: 2550, type: "kg", quantity: "1.5kg", rating: 4, img: "./images/p8.png",
      description: "Bring a little sweetness to someone's day, send them our Care Package filled with our favourite treats - all ready to be sent to someone you care for! After all, every bite of mithai is a hug when apart. Hand-made with love one by one - with only the best ingredients."
    },


    {
      id: 9,
      name: "Kitkat Choco Cake", catagory: "Cakes & Bakery", price: 699, type: "kg", quantity: "1kg", rating: 4, img: "./images/p9.png",
      description: "Award yourself with this rich chocolate cake wonderfully crammed with Cadbury Fuse and white chocolate chunks and draped lusciously with molten chocolate. This perfect work of art hides in every bite, the scrumptious flavours of heavily whipped chocolate cream and nutty bits of chocolate that is a little nutty and a lot of tasty!"
    },
    {
      id: 10,
      name: "Snicker Choco Cake", catagory: "Cakes & Bakery", price: 599, type: "kg", quantity: "500gm", rating: 5, img: "./images/p10.png",
      description: "Award yourself with this rich chocolate cake wonderfully crammed with Cadbury Fuse and white chocolate chunks and draped lusciously with molten chocolate. This perfect work of art hides in every bite, the scrumptious flavours of heavily whipped chocolate cream and nutty bits of chocolate that is a little nutty and a lot of tasty!"
    },
    {
      id: 11,
      name: "Fruit Vanilla Cake", catagory: "Cakes & Bakery", price: 899, type: "kg", quantity: "1.5kg", rating: 5, img: "./images/p11.png",
      description: "Who says the right place of fruits is just in the fridge or dining table? How about the toppings on a cake? If you love fruit so much then give this delicious flavorful fruit cake a try. We are sure you won't regret the taste. A delicious choice for every occasion."
    },
    {
      id: 12,
      name: "Butterscotch Cake", catagory: "Cakes & Bakery", price: 799, type: "kg", quantity: "1kg", rating: 4, img: "./images/p12.png",
      description: "Take a break from regular-looking cakes and say yes to the Swirls of Flavor Pineapple Cake. It is a beautifully composed cake with shades of white, yellow, and dark brown. Pineapple is the main flavor and filling in the cake paired with a little bit of vanilla and small chocolate bars."
    },
  ]);

  return (
    <div className="App">
      {/* head */}
      <Head productCart={productCart} />
      <Routes>
        <Route path='/' element={<Home offer={offer} catalogue={catalogue} />} />
        <Route path='/shop' element={<Shop products={products} />} />
        <Route path='/cart' element={<Cart products={products} productCart={productCart} setProductCart={setProductCart} />} />
        <Route path='/product' element={<Product productCart={productCart} setProductCart={setProductCart} />} />
        <Route path='/Catalogue' element={<Catalogue products={products} />} />
        <Route path='/printBill' element={<PrintBill setProductCart={setProductCart} />} />
      </Routes>

      {/* foot */}
      <Footer />
    </div>
  );
}

export default App;
