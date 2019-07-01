import React from "react";
import styles from "./modal.module.css";
import BackDrop from "../backDrop/backdrop";
import Wrapper from "../../../hoc/wrapperComponent";

const modal = props => {
  return (
    <Wrapper>
      <BackDrop show={props.show} closeModal={props.closeModal} />
      <div
        className={styles.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Wrapper>
  );
};

export default modal;
