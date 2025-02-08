import React from "react";

import "../index.css";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Screen = React.forwardRef(
  (
    { children, style, className }: Props,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className={["screen", className].join(" ")} style={style}>
        {children}
      </div>
    );
  }
);

export default Screen;
