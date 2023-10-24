import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/layouts/Navbar.module.css";
import NavbarName from "./NavbarName";
import NavbarImage from "./NavbarImage";

function Navbar() {
  const [scroll, setScroll] = useState(window.scrollY);

  console.log(scroll);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} navbarContainer`}>
      <div className={`${styles.linksLeft} navItems`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
      </div>
      <div className={`${styles.personInfoContainer} navPersonInfoContainer`}>
        <NavbarName
          animationClassName={scroll > 550 ? styles.fadeIn : styles.fadeOut}
        />
        <NavbarImage
          animationClassName={scroll < 550 ? styles.fadeIn : styles.fadeOut}
        />
      </div>
      <div className={`${styles.linksRight} navItems`}>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
