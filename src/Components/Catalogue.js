import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Catalogue(props) {

    // navigation for product details.
    var productDetails = useNavigate();

    // getting Category name
    var tempCategory = useLocation();
    var getCategory = tempCategory.state.Category;

    // open product description page
    var openProduct = (item) => {
        productDetails('/product', { state: { ProductDetails: item } });
    }
    // home page
    var openHome = () => {
        productDetails('/');
    }
    return (
        <div className='shop-page'>
            <h3><i class="fa-solid fa-house fa-lg" onClick={openHome}></i> <i class="fa-solid fa-arrow-right"></i> <u>{getCategory}</u></h3>
            <div className='product-list'>
                {props.products.map((item, index) => {
                    return (item.catagory === getCategory) ? <div className='product-one' onClick={() => openProduct(item)}>
                        <img src={item.img} alt={item.name} />
                        <h4>{item.name}</h4>
                        <p>{item.price}₹</p>
                    </div> : <></>
                })}
            </div>
        </div>
    )
}
