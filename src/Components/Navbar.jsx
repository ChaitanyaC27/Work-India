import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#dce9ff", padding: "10px 0" }}
    >
      <div className="container">
        {/* Brand Logo / Title */}
        <NavLink
          className="navbar-brand fw-bold text-primary"
          to="/"
          style={{ letterSpacing: "1px", fontSize: "22px" }}
        >
          Work India
        </NavLink>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Book a Service", path: "/book-service" },
              { name: "Join as Worker", path: "/join-as-worker" },
            ].map((item) => (
              <li className="nav-item mx-2" key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    "nav-link fw-semibold " +
                    (isActive
                      ? "text-primary border-bottom border-2 border-primary"
                      : "text-dark")
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
