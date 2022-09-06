import React from 'react'
import './cart.css';
export default function Cart() {
    return (<div className='cartPage'>
        <h2 style={{color:"#40989D"}}>Cart</h2>
        {Array(4).fill(2).map((item,index) => {
            return <div className='cart'>

            <div className='img'>
                
            </div>

            <div className='name'>
                <h4>Demo Name</h4>
            </div>

            <div className='quantity'>
                <p>quantity</p>
            </div>

            <div className='price'>
                $100
            </div>

        </div>
        })}
        <h2>Total: $400</h2>
        <button style={{background:"#40989D"}}>Continue Shopping</button>
        <button style={{background:"#223D4D"}}>Place Order</button>
    </div>

    )
}
