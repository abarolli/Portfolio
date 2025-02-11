import React from "react";

import styles from "./ContinueButton.module.css";

interface Props {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
function ContinueButton({ children, onClick }: Props) {
  return (
    <button className={styles.continueButton} onClick={onClick}>
      {children}
    </button>
  );
}

export default ContinueButton;
