import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css"


class Header extends Component {
  render() {
    return (
      
      <div className="container">
      <Link className="button" to="/">Homes</Link>
      <Link className="button" to="/contact">Contact</Link>
      <Link className="button" to="/about">About</Link>
      </div>
    );
  }
}

export default Header;
