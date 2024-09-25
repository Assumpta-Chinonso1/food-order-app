import React, { useState } from 'react'
import './LoginForm.css'
import { assests } from '../../assets/assests'

const LoginForm = ({setShowLoginForm}) => {
    const [currState, setCurrState] = useState("Login")
  return (
    <div className='login-form'>
          <form action="" className="login-form-container">
            <div className="login-form-title">
                <h2>{currState} </h2>
                <img onClick={()=> setShowLoginForm(false)} src={assests.cross} alt="" />
            </div>
            <div className="login-form-inputs">
                {currState==="Login"?<></>:  <input type="text" placeholder='Your name ' required />}
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='Your password' required />
            </div>
            <button>{currState==="Sign-Up"?"Create account":"Login"}</button>
            <div className="login-form-conditions">
                <input type="checkbox" required />
                <p>By Continuing, I agree to terms of use and privacy policy</p>
            </div>
            {currState==="Login" 
            ?<p>Create  new account? <span onClick={()=> setCurrState("Sign-Up")}>Click here</span></p> 
            :   
            <p>Already have an account? <span onClick={()=> setCurrState("Login")}>Login here</span></p> 
            }
           
            </form>
    </div>
  )
}

export default LoginForm