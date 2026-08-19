import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="site-nav">
      <NavLink className="brand" to="/" aria-label="SmartLogix Ministry home">
        <span className="brand-mark">✦</span>
        <span>
          SmartLogix
          <br />
          <strong>Ministry</strong>
        </span>
      </NavLink>
      <nav aria-label="Primary navigation">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/services">Services</NavLink>
         <NavLink to="/events">Events</NavLink>
          <NavLink to="/community">Community</NavLink>
           <NavLink to="/contact">Contact</NavLink>
      </nav>
      <a className="nav-action">Plan a Visit</a>
    </header>
  );
}