import React from "react";

import styles from "./ContinueButton.module.css";

interface Props {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
function ContinueButton({ children, onClick }: Props) {
  return (
    <button
      data-aos="bounce"
      className={styles.scrollToButton}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ContinueButton;
