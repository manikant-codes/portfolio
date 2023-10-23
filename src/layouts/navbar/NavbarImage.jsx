import React from "react";
import styles from "../../styles/layouts/Navbar.module.css";

function NavbarImage({ animationClassName }) {
  return (
    <div className={`${styles.personImageContainer} ${animationClassName}`}>
      <img
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="user"
      />
    </div>
  );
}

export default NavbarImage;
