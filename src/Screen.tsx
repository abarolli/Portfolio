import React, { CSSProperties, ReactNode } from "react";

import styles from "./Screen.module.css";

interface Props {
  children: ReactNode;
  style?: CSSProperties;
}

function Screen({ children, style }: Props) {
  return (
    <div style={style} className={styles.screen}>
      {children}
    </div>
  );
}

export default Screen;
