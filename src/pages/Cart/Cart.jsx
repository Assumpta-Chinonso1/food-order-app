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
        {Food_lists.map((item,index) => {
          if (cartItems[item._id]>0) {
            return(
              <div className="cart-items-title cart-items-item">
                      <img src={item.image} alt="" />
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                      <p>{cartItems[item._id]}</p>
                      <p>{item.price*cartItems[item._id]}</p>
                      <p>x</p>
              </div>
            )
            
          }
        })}
      </div>

    </div>
  )
}

export default Cart