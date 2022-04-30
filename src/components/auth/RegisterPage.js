import React from 'react';
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          className="auth__input"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          className="auth__input"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="off"
          className="auth__input"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          autoComplete="off"
          className="auth__input"
        />        
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>


        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>

  )
}
