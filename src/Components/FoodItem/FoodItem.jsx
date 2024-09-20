import React, { useState } from 'react'
import './FoodItem.css'
import { assests } from '../../assets/assests'

const FoodItem = ({id,name,price, description,image}) => {

  const [itemCount, setItemCount ] = useState(0)

  return (
    <div className='food-item' id='food-item'>
          <div className="food-item-img-container">
            <img className="food-item-img" src={image} alt=""  />
              {!itemCount  
                ? <img className='add' onClick={() => setItemCount(prev=>prev+1)} src={assests.plus} alt="" />
                : <div className="food-item-counter">
                  <img  onClick={() => setItemCount(prev=>prev-1)} src={assests.remove} alt="" />
                 <p>{itemCount}</p>
                 <img  onClick={() => setItemCount(prev=>prev+1)} src={assests.green} alt="" />
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