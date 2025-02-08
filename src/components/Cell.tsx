import React from "react";

import styles from "./Cell.module.css";

export interface CellProps {
  isAlive?: boolean;
  onMouseDown?: React.MouseEventHandler;
  onMouseOver?: React.MouseEventHandler;
}

const Cell = React.memo(function ({
  isAlive = false,
  onMouseDown,
  onMouseOver,
}: CellProps) {
  return (
    <div
      onMouseDown={onMouseDown}
      onMouseOver={onMouseOver}
      className={[
        styles.cell,
        isAlive ? styles.cellAlive : styles.cellDead,
      ].join(" ")}
    ></div>
  );
});

export default Cell;
