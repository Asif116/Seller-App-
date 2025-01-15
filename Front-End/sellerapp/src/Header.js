import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing

function Header() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">Seller App</a>
        <div>
          <Link to="/" className="text-white mx-2">Home</Link>
          <Link to="/about" className="text-white mx-2">About</Link>
          <Link to="/contact" className="text-white mx-2">Contact</Link>
          <Link to="/login" className="btn btn-light">Login</Link> {/* Login Button */}
        </div>
      </div>
    </nav>
  );
}

export default Header;
