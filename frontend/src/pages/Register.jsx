import React from 'react'
import {Link} from "react-router-dom"

const Register = () => {
  return (
    <div className="auth">
    <h1>Register</h1>
     <p>This is an error!</p>
    <form>
      <input
        required
        type="text"
        placeholder="username"
        name="username"
      />
      <input
        required
        type="email"
        placeholder="email"
        name="email"
      />
      <input
        required
        type="password"
        placeholder="password"
        name="password"
      />
      <button>Login</button>
      <span>
        Already have an account? <Link to="/login">Login</Link>
      </span>
    </form>
  </div>
  )
}

export default Register
