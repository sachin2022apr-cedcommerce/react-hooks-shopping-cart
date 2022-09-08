import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './Product.css';
export default function Product(props) {

  // getting product details
  var details = useLocation();
  var product = details.state.ProductDetails;

  // back to shop page
  var shoppage = useNavigate();

  // add to cart
  var addToCart = (addItem) => {
    var quantityFlag = 0;
    props.productCart.map((item, index) => {
      if (item.id === addItem.id) {
        quantityFlag = 1;
        let t = props.productCart;
        t[index].quantity += 1;
        props.setProductCart([...t])
      }
    })
    // product does not exist in cart array push in cart array
    if (quantityFlag === 0) {
      props.setProductCart([
        ...props.productCart, {
          id: addItem.id,
          name: addItem.name,
          img: addItem.img,
          price: addItem.price,
          catagory: addItem.catagory,
          quantity: 1
        }
      ])
    }
    console.log(props.productCart);
  }
  // open shop
  var openShop = () => {
    shoppage('/shop');
  }
  // open home
  var openHome = () => {
    shoppage('/');
  }
  return (
    <div className='productDescriptionPage'>
      <h3 className='h3'><i class="fa-solid fa-house fa-lg" onClick={openHome} style={{ cursor: "pointer" }}>
      </i> <i class="fa-solid fa-arrow-right"></i> <span onClick={openShop}> Shop </span> <i class="fa-solid fa-arrow-right"></i> <u>Product</u></h3>
      <div className='Details'>
        <img src={product.img} alt='' />
        <div className='basicDetails'>
          <h2>{product.name}</h2>
          <h1>{Array(product.rating).fill(2).map(() => {
            return <i class="fa-solid fa-star" style={{ color: "#233D4D" }}></i>
          })}
            {Array(5 - product.rating).fill(2).map(() => {
              return <i class="fa-regular fa-star" style={{ color: "#055e96" }}></i>
            })}</h1>
          <h5>{product.catagory} ({product.quantity}{(product.type === "pcs") ? <>pcs</> : <></>})</h5>
          <h3>{product.price}₹</h3>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
      <p>{product.description}</p>
    </div>
  )
}
