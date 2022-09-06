import React from 'react'
import './Shop.css';
export default function Shop() {
    return (
        <div className='shop-page'>

            <h3>Products</h3>

            <select>
                <option>Weight</option>
            </select>

            <select>
                <option>Category</option>
            </select>

            <select>
                <option>Price</option>
            </select>
            <div style={{display:"flex", gap:"20px", justifyContent:"space-between"}}>
                <div className='product-list'>
                    {Array(15).fill(2).map((item, index) => {
                        return <div className='product-one'>
                            <h3>Product {index + 1}</h3>
                        </div>
                    })}
                </div>
            </div>

        </div>
    )
}
