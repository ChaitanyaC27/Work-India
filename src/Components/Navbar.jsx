import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#dce9ff", padding: "10px 0" }}>
      <div className="container">
        
        {/* Brand Name */}
        <NavLink className="navbar-brand fw-bold text-primary" to="/" style={{ letterSpacing: "1px", fontSize: "22px" }}>
          Work India
        </NavLink>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link fw-semibold text-primary border-bottom border-2 border-primary" : "nav-link fw-semibold text-dark"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link fw-semibold text-primary border-bottom border-2 border-primary" : "nav-link fw-semibold text-dark"}>
                About
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link fw-semibold text-primary border-bottom border-2 border-primary" : "nav-link fw-semibold text-dark"}>
                Services
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/book-service" className={({ isActive }) => isActive ? "nav-link fw-semibold text-primary border-bottom border-2 border-primary" : "nav-link fw-semibold text-dark"}>
                Book a Service
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/join-as-worker" className={({ isActive }) => isActive ? "nav-link fw-semibold text-primary border-bottom border-2 border-primary" : "nav-link fw-semibold text-dark"}>
                Join as Worker
              </NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
