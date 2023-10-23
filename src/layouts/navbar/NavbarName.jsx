import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/layouts/Navbar.module.css";

function NavbarName({ animationClassName }) {
  return (
    <div className={`${animationClassName} ${styles.personNameContainer}`}>
      <Link to="/">Manikant Jha</Link>
      <p>Full-Stack Developer</p>
    </div>
  );
}

export default NavbarName;
