import React from "react";
import styles from "../../styles/common/Card.module.css";

function Card({ title, content }) {
  return (
    <div className={`${styles.cardWrapper}`}>
      <div className={`${styles.titleContainer}`}>
        <h3>{title}</h3>
        <hr />
      </div>
      <div className={`${styles.contentContainer}`}>{content}</div>
    </div>
  );
}

export default Card;
