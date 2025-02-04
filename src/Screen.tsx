import React from "react";

import "./index.css";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

function Screen({ children, style, className }: Props) {
  return (
    <div className={["screen", className].join(" ")} style={style}>
      {children}
    </div>
  );
}

export default Screen;
