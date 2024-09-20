import React, { useContext } from 'react'
import './FoodItem.css'
import { assests } from '../../assets/assests'
import { StoreContext } from '../Context/StoreContext'

const FoodItem = ({id,name,price, description,image}) => {

  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className='food-item' id='food-item'>
          <div className="food-item-img-container">
            <img className="food-item-img" src={image} alt=""  />
              {!cartItems[id]  
                ? <img className='add' onClick={() => addToCart(id)} src={assests.plus} alt="" />
                : <div className="food-item-counter">
                  <img  onClick={() => removeFromCart(id)} src={assests.remove} alt="" />
                 <p>{cartItems[id]}</p>
                 <img  onClick={() => addToCart(id)} src={assests.green} alt="" />
                </div>
              
            }
          </div>
          <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assests.star} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
          </div>
    </div>
  )
}

export default FoodItem