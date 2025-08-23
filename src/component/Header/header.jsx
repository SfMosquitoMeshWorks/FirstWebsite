import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md">
      <nav className="sticky-nav">
        {/* Logo and Title */}
        <div className="logo-section">
          <img src="images.jpg" alt="SF Mosquito Mesh Logo" className="h-10" />
          <h1>SF MOSQUITO MESH</h1>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(true)}>
          &#9776;
        </div>

        {/* Mobile Menu Close Button */}
        {menuOpen && (
          <div className="menu-close" onClick={() => setMenuOpen(false)}>
            &times;
          </div>
        )}

        {/* Navigation Links */}
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" end className="nav-link" onClick={() => setMenuOpen(false)}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink to="/why-choose" className="nav-link" onClick={() => setMenuOpen(false)}>
              WHY CHOOSE
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="nav-link" onClick={() => setMenuOpen(false)}>
              OUR SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
              CONTACT US
            </NavLink>
          </li>
        </ul>

        {/* Desktop Contact Us Button */}
        <button
          className="contact-us-button"
          onClick={() => navigate("/contact")}
        >
          CONTACT US
        </button>
      </nav>
    </header>
  );
};

export default Header;
