import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <style>
        {`
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 18px 8%;
            background: #6b4f2a;
            color: white;
          }

          .navbar-logo {
            font-size: 24px;
            font-weight: bold;
          }

          .navbar-links {
            display: flex;
            gap: 30px;
          }

          .navbar-links a {
            color: white;
            text-decoration: none;
            font-size: 16px;
          }

          .navbar-links a:hover {
            color: #f3e8d0;
          }
        `}
      </style>

      <nav className="navbar">
        <div className="navbar-logo">
          Ministry
        </div>

        <div className="navbar-links">
          <Link to="/community">Community</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;