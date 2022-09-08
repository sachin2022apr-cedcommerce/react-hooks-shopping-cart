import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './bill.css';

export default function PrintBill(props) {
  // navigation for shop page
  var shoppage = useNavigate();

  // getting total amount
  var bill = useLocation();
  var fetchBill = bill.state.totalPrice;

  // place order funtion
  let printBill = () => {
    if (window.confirm('Do you want to Confirm Order')) {
      props.setProductCart([]);
      shoppage('/cart');
    }
  }
  // back to home
  var openHome = () => {
    shoppage('/shop');
  }

  return (
    <div className='bill-page'>
      <h2>Total: {fetchBill}</h2>
      <div className='formElement'>
        <span>Name </span><input type="text" />
      </div>
      <div className='formElement'>
        <span>Email </span><input type="text" />
      </div>
      <div className='formElement'>
        <span>Mobile </span><input type="text" />
      </div>
      <div className='formElement'>
        <span>Address </span><input type="text" />
      </div>
      <button onClick={() => printBill()}>Place Order</button>
      <button onClick={openHome}
        style={{ backgroundColor: "#233D4C" }}>Continue Shopping</button>
    </div>
  )
}
