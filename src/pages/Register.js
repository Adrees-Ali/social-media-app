import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="register-container">
      <header className="register-header">
        <h1>Create Your Friendify Account</h1>
        <p>Join now and start connecting with friends!</p>
      </header>

      <form className="register-form">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your full name"
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          autoComplete="email"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Create a password"
          required
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm your password"
          required
        />

        <button type="submit" className="cta-btn">Sign Up</button>
      </form>

      <p className="login-text">
        Already have an account? <Link to="/login">Login here.</Link>
      </p>
    </div>
  )
}

