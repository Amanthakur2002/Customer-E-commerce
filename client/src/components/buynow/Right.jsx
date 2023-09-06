import React from 'react'

const Right = () => {
    return (
        <div className='right_buy'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="rightimg" />
        <div className="cost_right">
            <p><h3>Your order is eligible for FREE Delivery.</h3></p> <br />
 <span>Select this option at checkout. Details</span>
 <h3>Subtotal : <span style={{ fontWeight: "700" }}> ₹4000.00</span></h3>
 <button className='rightbuy_btn'>Proceed to Buy</button>
 <div className="emi">
    EMI available
 </div>

        </div>
        </div>
    )
}

export default Right