import React from "react";
import styles from "./backdrop.module.css";

const backDrop = props => {
  return props.show ? (
    <div className={styles.BackDrop} onClick={props.closeModal} />
  ) : null;
};

export default backDrop;
