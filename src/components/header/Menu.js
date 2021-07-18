import React, { useState } from "react";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    if (!menuOpen) {
      setMenuOpen(true);
      console.log(menuOpen);
    } else {
      setMenuOpen(false);
      console.log(menuOpen);
    }
  };

  const handleLink = () => {
    setMenuOpen(false);
  };

  return (
    <React.Fragment>
      <div
        className={`menu-btn ${menuOpen ? "open" : ""}`}
        onClick={handleClick}
      >
        <span className="menu-btn-line"></span>
      </div>
      <nav className="nav">
        <ul
          id="nav-list"
          className={`nav-list list flex ${menuOpen ? "nav-open" : ""}`}
        >
          <li className="nav-item">
            <a
              className="nav-link link nav-link_first"
              onClick={handleLink}
              href="#"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link" onClick={handleLink} href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link" onClick={handleLink} href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link" onClick={handleLink} href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link link"
              onClick={handleLink}
              href="#testimonials"
            >
              Testimonials
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link link nav-link_last"
              onClick={handleLink}
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Menu;
