import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="input-fields">
          <input type="text" placeholder='your name'/>
          <input type="email" placeholder='your email' />
          <input type="password" placeholder='your password'/>
        </div>
        <button>Continue</button>
        <p>Already have an Account? <span>Login here.</span></p>
        <div className="loginsignup-agrees">
          <input type="checkbox" id='checkboxId' name='' /> 
          <label htmlFor="checkboxId">by continuing, i agree to your privacy&policy.</label>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup