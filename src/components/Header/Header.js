import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css"


class Header extends Component {
  render() {
    return (
      
      <div className="container">
      <Link className="btn-custom" to="/">Homes</Link>
      <Link className="btn-custom" to="/contact">Contact</Link>
      <Link className="btn-custom" to="/about">About</Link>
      </div>
    );
  }
}

export default Header;
