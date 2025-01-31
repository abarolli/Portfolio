import React from "react";

import styles from "./Screen.module.css";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

function Screen({ children, style }: Props) {
  return (
    <div className={styles.screen} style={style}>
      {children}
    </div>
  );
}

export default Screen;
