import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/layouts/Navbar.module.css";

function Navbar() {
  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.linksLeft}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
      </div>
      <div className={`${styles.name}`}>
        <Link to="/">Manikant Jha</Link>
        <p>Full-Stack Developer</p>
      </div>
      <div className={`${styles.linksRight}`}>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
