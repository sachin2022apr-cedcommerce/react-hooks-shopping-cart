import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './cart.css';
export default function Cart(props) {
    //total price for calculating total price of the cart
    let totalPrice = 0;

    //  NavBill
    var NavBill = useNavigate();
    // delete individual products
    let deleteProduct = (itemIndex) => {
        let tempcart = [];
        if (window.confirm('Remove Product from cart')) {
            props.productCart.map((item, index) => {
                if (item.id === itemIndex) {
                    tempcart = props.productCart;
                    tempcart.splice(index, 1);
                    console.log(props.productCart);
                }
                props.setProductCart([...tempcart])
            })
        }
    }

    // function for decreasing products
    let decreaseProduct = (itemIndex) => {
        props.productCart.map((item, index) => {
            if (item.id === itemIndex) {
                let tempQuantity = props.productCart
                tempQuantity[index].quantity -= 1;

                //Removing products from cart if quantity become 0
                if (tempQuantity[index].quantity === 0) {
                    tempQuantity.splice(index, 1);
                }
                props.setProductCart([...tempQuantity])
            }
        })

    }

    // function for increasing products
    let increaseProduct = (itemIndex) => {
        props.productCart.map((item, index) => {
            if (item.id === itemIndex) {
                let tempQuantity = props.productCart
                tempQuantity[index].quantity += 1;
                props.setProductCart([...tempQuantity])
            }
        })
    }

    // checkout Function
    let printBill = (totalPrice) => {
        NavBill('/printBill', { state: { totalPrice: totalPrice } });
    }

    // emptyCart
    let emptyCart = () => {
        if (window.confirm('Do you want to empty your cart')) {
            props.setProductCart([])
        }
    }

    return (
        <div className='cartPage'>
            {(props.productCart.length) ? <>
                <h2>Your Cart</h2>
                <hr className='cartHr1' />
                {/* printing cart Products */}
                <div className='CartProducts'>
                    {props.productCart.map((item) => {
                        return <>
                            <div className='OneProduct'>
                                <img src={item.img} alt='..' />
                                <div className='CartDetail'>
                                    <div className='nameDelete'>
                                        <div style={{ width: "70%" }}>
                                            <h4>{item.name}</h4>
                                        </div>
                                        <div>
                                            <h3><i onClick={() => deleteProduct(item.id)} class="fa-solid fa-trash"></i></h3>
                                        </div>
                                    </div>
                                    <div><h4 className='product-category'><i class="fa-solid fa-tag"></i> {item.catagory}</h4>
                                    </div>
                                    <div className='price-Quantity'>
                                        <div>
                                            <h3>${item.price}</h3>
                                        </div>
                                        <div className='Change-Quantity'>
                                            <span>
                                                <button className='minus' onClick={() => decreaseProduct(item.id)}><i class="fa-solid fa-minus"></i></button>
                                                <h4>{item.quantity}</h4>
                                                <button className='plus' onClick={() => increaseProduct(item.id)}><i class="fa-solid fa-plus"></i></button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <p style={{ display: "none" }}>{totalPrice += item.quantity * item.price}</p>
                            </div>
                            <hr className='cartHr1' />
                        </>
                    })}
                </div>

                {/* checkout Button */}
                <div className='checkOutDiv'>
                    <button onClick={emptyCart} style={{ width: "200px", background: "#be4c53", border: "2px solid #be4c53" }}>

                        <i class="fa-solid fa-trash-can"></i> Empty Cart</button>
                    <div style={{ width: "85%" }}>
                        <h3>Total Price: ${totalPrice}</h3>
                    </div>
                    <button onClick={() => printBill(totalPrice)}>Check Out <i class="fa-solid fa-truck-fast fa-lg"></i></button>
                </div>
            </> : <>

                {/* message if cart is empty */}
                <hr className='cartHr1' />
                <h2 style={{ color: "#167D7F" }}>Your Cart is Empty</h2>
                <hr className='cartHr1' />
            </>}
        </div>

    )
}
