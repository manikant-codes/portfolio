import React from "react";
import styles from "../../styles/layouts/Navbar.module.css";

function NavbarImage({ animationClassName }) {
  return (
    <div
      className={`${animationClassName} ${styles.personImageContainer} navImage`}
    >
      <img
        src="https://wallpapers.com/images/hd/1920-x-1080-batman-ncwdrhst9kpgfzva.jpg"
        alt="user"
      />
    </div>
  );
}

export default NavbarImage;
