import React from "react";

import styles from "./Screen.module.css";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

function Screen({ children, style, className }: Props) {
  return (
    <div className={[styles.screen, className].join(" ")} style={style}>
      {children}
    </div>
  );
}

export default Screen;
