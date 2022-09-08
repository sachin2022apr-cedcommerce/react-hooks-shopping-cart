import React from 'react'
import { useNavigate } from 'react-router-dom';
import './home.css';

export default function Home(props) {
  // naviogation for category
  var NavCategory = useNavigate();
  var scrollDown = () => {
    window.scrollBy(0, 300);
  }
  // open Catalogue
  var openCategory = (Category) => {
    NavCategory('/Catalogue', { state: { Category: Category } });
  }


  return (
    <div className='homeDiv'>
      <div className='banner'>
        <img style={{ width: "95%", marginLeft: "2.5%" }} src='./banner.png'
          alt='..' />
        <button className='goToCategories' onClick={scrollDown}> <i class="fa-solid fa-angle-down"></i></button>
      </div>
      <div className='offer-div'>
        <h2>Offers</h2>
        <hr className='hr12' />
        <div className='offer-list'>
          {props.offer.map((item, index) => {
            return <div className='offer-one'>
              <img className='promo' src='./promoIMG.png' style={{ width: "40%" }} alt=".." />
              <img src={item.img} alt='..' style={{ width: "100%" }} />
              <h3>{item.name}
              </h3>
              <p>{item.discount}</p>
            </div>
          })}
        </div>
      </div>

      <div className='categories-div'>
        <h2>Catalogue</h2>
        <hr className='hr12' />
        <div className='categories-list'>
          {props.catalogue.map((item, index) => {
            return <div className='category-one' onClick={() => openCategory(item.name)}>
              <img src={item.img} alt="" style={{ width: "100%" }} />
              <h3>{item.name}</h3>
            </div>
          })}
        </div>
      </div>

      <div className='testimonial-div'>
        <h2>Testimonials</h2>
        <hr className='hr12' />
        <div className='testimonial-list'>
          {Array(3).fill(2).map((item, index) => {
            return <div className='testimonial-one'>
              <img src='user.png' alt=".." />
              <p>
                Excellent Sweet shop, i every seen in any state including
                Mumbai from were i am belongs to. variety of Sweet are
                traditionally North Indian Chandigarh. Must visit
                like any other site seen.
              </p>
              <hr className='hr2' />
              <h3>@user</h3>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
