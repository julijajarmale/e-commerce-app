import React from 'react'
import Navbar from '../components/Navbar'

function Login() {
  return (
    <>
      <Navbar />
      <div className="login-container">
      <div className="register">
        <div className="form">
          <h1 className="title"> SIGN IN </h1>
          <form>
            <input placeholder="username" />
            <input placeholder="password" />
            <button className="button-1">LOGIN</button>
          </form>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Login
