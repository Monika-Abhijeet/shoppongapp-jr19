import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signout } from "../../actions";

function Navbar(props) {
  const dispatch = useDispatch();
  return (
    <div className="navbar-container d-flex  justify-content-between align-items-center">
      <Link to="/">
        <p>Logo</p>
      </Link>
      <ul className="d-flex navbar-list justify-content-between">
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/product-list">
          <li>Product list</li>
        </Link>
        <Link to="/cart">
          <li>cart</li>
        </Link>
        <li onClick={() => dispatch(signout())}>Logout</li>
      </ul>
    </div>
  );
}

export default Navbar;
