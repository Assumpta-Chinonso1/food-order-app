import React, { useContext} from 'react'
import './Cart.css'
import { StoreContext } from '../../Components/Context/StoreContext'

const Cart = () => {
  const {cartItems, Food_lists, removefromCart} = useContext(StoreContext)
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
      </div>

    </div>
  )
}

export default Cart