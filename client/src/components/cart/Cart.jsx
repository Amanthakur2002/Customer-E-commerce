import React from 'react';
import './cart.css';
import { Divider } from '@mui/material'

const Cart = () => {
    return (
        <div className='cart_section'>
            <div className="cart_container">
                <div className="left_cart">
                    <img src="https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70" alt="cart_img" />
                    <div className="cart_btn">
                        <button className='cart_btn1'>Add to cart</button>
                        <button className='cart_btn2'>Buy Now</button>
                    </div>
                </div>
                <div className="right_cart">
<h3>Fitness Gear</h3>
<h4>AJRO DEAL New Adjustable Resistance Tube  </h4>
<Divider/>
<p className='mrp'>M.R.P. : $1195</p>
<p>Deal of the day : <span style={{color:"#B12704"}}>$614</span></p>
<p>You Save : :<span style={{color:"#B12704"}}>$300 (50%)</span></p>

<div className="discount_box">
    <h5>Discount : <span style={{color:"#111"}}>Extra 10% off</span></h5>
    <h4>FREE Delivery : <span style={{ color:'#111', fontWeight:"600"}}> Oct18 - 21 </span>Details</h4>
    <p>fastest delevery: <span style={{color:'#111', fontWeight:"600"}}>Tomorrow 11 AM</span></p>
</div>
<p className='description'>About the item : <span style={{ color:"#565959", fontSize:17, fontWeight:500, letterSpacing:"0.4px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odio illum iste corporis accusantium quam aliquid, explicabo harum quod quis magnam. Expedita modi ipsa ex labore ut earum a! Quas ex nemo corrupti aspernatur perspiciatis itaque delectus quo odio in. Unde, alias! Maxime, illo nesciunt. Recusandae fuga facilis voluptas tenetur quas, laboriosam dignissimos temporibus dolor numquam dolorum dolore animi quisquam. </span></p>
                </div>
            </div>
        </div>
    )
}

export default Cart