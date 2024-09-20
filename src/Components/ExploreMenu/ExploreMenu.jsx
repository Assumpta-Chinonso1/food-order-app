import React from 'react'
import './ExploreMenu.css'
import { menu_lists } from '../../assets/assests'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>

       <h2>Explore our menu</h2>
       <p  className='explore-menu-text'>Craving something delicious? Explore our menu and order now to enjoy your favorite meals delivered fresh and fast!</p>
       <div className="explore-menu-list">
        {menu_lists.map((item, index) =>{
            return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                   <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />  
                   <p>{item.menu_name}</p>
            </div>
            )
        })}
       </div>
       <hr/>
    </div>
  )
}

export default ExploreMenu