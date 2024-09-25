import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginForm from './Components/LoginForm/LoginForm'
import Cart from './pages/Cart/Cart'


const App = () => {

  const [showLoginForm, setShowLoginForm] = useState(false)
  return (

    <> 
           {showLoginForm? <LoginForm setShowLoginForm={setShowLoginForm}/>:<></>}

    <div className='app'>
     <Navbar setShowLoginForm={setShowLoginForm}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Cart' element={<Cart/>} />
      
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
      </div>
      
      </>
  )
}

export default App
