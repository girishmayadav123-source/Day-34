import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer" id="connect">
      <p>© 2026 SmartLogix Ministry · All are welcome.</p>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <a href="mailto:hello@smartlogix.org">Contact us</a>
      </div>
    </footer>
  );
}