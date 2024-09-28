import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Components/Context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartItems} = useContext(StoreContext)

  return (
    <form className='place-order'>
         <div className="place-order-left">
          <p className="title">Delivery Informaton</p>
          <div className="multi-fields">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='LastName' />
          </div>
          <input type="email"  placeholder='Email address'/>
          <input type="text" placeholder='Street' />
          <div className="multi-fields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='state' />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zip code' />
            <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='phone' />
          </div>
         <div className="place-order-right">
         <div className="cart-total">
                <h2>Cart Total</h2>
                <div>
                  <div className="cart-total-details">
                    <p>Sub-Total</p>
                  <p> ${getTotalCartItems()}</p> 
                  </div>
         <hr />
                  <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>${getTotalCartItems()===0?0:2}</p>
                  </div>
                  <hr />
                  <div className="cart-total-details">
                    <b>Total</b>
                    <b>${getTotalCartItems()===0?0:2}</b>
                  </div>
                  </div>
                  <button>PROCEED TO PAYMENT</button>
               
                  </div>
                 
         </div>
    </form>
  )
}

export default PlaceOrder