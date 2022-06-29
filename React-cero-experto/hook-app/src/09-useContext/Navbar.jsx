import React from "react";
import {Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Link to="login">Login</Link>
      <Link to="/">Home</Link>
      <Link to="about">About</Link> 
    </>
  )
}

export default Navbar
