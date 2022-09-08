import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Shop.css';


export default function Shop(props) {

    // variables for search and filter
    var [searchInput, setSearchInput] = useState("");
    var [selectPrice, setSelectPrice] = useState();

    // product description
    var productDetails = useNavigate();
    var openProduct = (item) => {
        productDetails('/product', { state: { ProductDetails: item } });
    }
    // open home
    var openHome = () => {
        productDetails('/');
    }

    // filter array
    var [productFilter, setProductFilter] = useState(() => {
        return props.products
    });

    // print without seqarch
    var printAll = () => {
        return <>
            {productFilter.map((item, index) => {
                return <div className='product-one' onClick={() => openProduct(item)}>
                    <img src={item.img} alt={item.name} />
                    <h4>{item.name}</h4>
                    <p>&#8377;{item.price}</p>
                </div>
            })}
        </>
    }
    // print search result
    var printSearch = (input) => {
        var tempProductArray = [];
        productFilter.map((item) => {
            if (item.name.toLowerCase().includes(input.toLowerCase())) {
                tempProductArray = [...tempProductArray, item]
            }
        })

        if (tempProductArray.length === 0) {
            return <h3 style={{ marginTop: "10%", color: "#98D7C2" }}>No products found !!</h3>
        }
        return <>
            {tempProductArray.map((item, index) => {
                return <div className='product-one' onClick={() => openProduct(item)}>
                    <img src={item.img} alt={item.name} />
                    <h4>{item.name}</h4>
                    <p>&#8377;{item.price}</p>
                </div>
            })}
        </>
    }
    // useeffect for filter
    useEffect(() => {
        if (selectPrice === "asc") {
            setProductFilter([...productFilter.sort((a, b) => a.price - b.price)]);
        } else if (selectPrice === "desc") {
            if (selectPrice === "desc") {
                setProductFilter([...productFilter.sort((a, b) => b.price - a.price)]);
            }
        } else {
            setProductFilter([...productFilter.sort((a, b) => a.id - b.id)]);
        }
    }, [selectPrice, productFilter])

    return (
        <div className='shop-page'>

            <h3><i class="fa-solid fa-house fa-lg" onClick={openHome}></i> <i class="fa-solid fa-arrow-right"></i> <u>Shop</u></h3>

            <div className='filter'>
                <input type="text" placeholder='search'
                    value={searchInput}
                    onChange={((event) => setSearchInput(event.target.value))} />
                <select value={selectPrice} onChange={(event) => setSelectPrice(event.target.value)}>
                    <option value="">-price-</option>
                    <option value="asc">Low to high</option>
                    <option value="desc">High to low</option>
                </select>
            </div>


            <div className='product-list'>

                {(searchInput) ? printSearch(searchInput) : printAll()}

            </div>
        </div>
    )
}
