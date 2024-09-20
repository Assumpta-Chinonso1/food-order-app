import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'


const FoodDisplay = ({catergory}) => {
    const {Food_lists} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>

        <h2>Our top dishes</h2>
         <div className="food-display-list">
            {Food_lists.map((item,index) => {
         return <FoodItem key={index} id={item._id} name={item.name} 
        description={item.description} price={item.price} image={item.image}/>
            })}
         </div>
    </div>
  )
}

export default FoodDisplay