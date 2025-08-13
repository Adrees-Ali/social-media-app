import React from 'react'
import { Link } from 'react-router-dom'



export default function Login() {
  return (
    <div className="login-container">
      <header className="login-header">
        <h1>Welcome Back to Friendify!</h1>
        <p>Please login to your account to continue.</p>
      </header>

      <form className="login-form">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your registered email"
          required
          autoComplete="email"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
          autoComplete="current-password"
        />

        <button type="submit" className="cta-btn">Login</button>
      </form>

      <p className="signup-text">
        Don't have an account? <Link to="/register">Register here.</Link>
      </p>

      <p className="forgot-password">
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>
    </div>
  )
}
