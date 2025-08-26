import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

   const handleSubmit = (e) =>{
      e.preventDefault();
      console.log("Name:", name)
      console.log("Email:", email); 
      console.log("Password:", password); 
      console.log("ConfirmPassword:", confirmPassword); 
   }



  return (
    <div className="register-container">
      <header className="register-header">
        <h1>Create Your Friendify Account</h1>
        <p>Join now and start connecting with friends!</p>
      </header>

      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your full name"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Create a password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm your password"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit" className="cta-btn">Sign Up</button>
      </form>

      <p className="login-text">
        Already have an account? <Link to="/login">Login here.</Link>
      </p>
    </div>
  )
}

