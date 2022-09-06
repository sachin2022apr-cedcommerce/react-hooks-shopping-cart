import React from 'react'
import './home.css';

export default function Home(props) {
  var copy = (txt) =>{
    navigator.clipboard.writeText(txt);
  }
  return (
    <div className='homeDiv'>
      <div className='banner'>
        <img style={{ width: "95%", marginLeft: "2.5%" }} src='./banner.png'
          alt='..' />
        <button className='goToCategories'> <i class="fa-solid fa-angle-down"></i></button>
      </div>

      <div className='offer-div'>
        <h2>Offers</h2>
        <hr className='hr12' />
        <div className='offer-list'>
          {props.offer.map((item, index) => {
            return <div className='offer-one'>
              <img className='promo' src='./promoIMG.png' style={{width:"40%"}}/>
              <img src={item.img} alt='..' style={{width:"100%"}}/>
              <h3>{item.name}
              </h3>
              <p>{item.code} <i onClick={() => copy(item.code)} class="fa-regular fa-copy"></i></p>
            </div>
          })}
        </div>
      </div>

      <div className='categories-div'>
        <h2>Catalogue</h2>
        <hr className='hr12' />
        <div className='categories-list'>
          {props.catalogue.map((item, index) => {
            return <div className='category-one'>
              <img src={item.img} alt=""/>
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
              <h4></h4>
              <p>---------- --------- -------
                --------- -  --------   --------
                -----------------------
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
