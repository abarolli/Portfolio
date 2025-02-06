import React from "react";
import colors from "../configs/colors";

import styles from "./Cell.module.css";

export interface CellProps {
  isAlive?: boolean;
  onClick?: React.MouseEventHandler;
}

const Cell = React.memo(function ({ isAlive = false, onClick }: CellProps) {
  return (
    <div
      onClick={onClick}
      className={[
        styles.cell,
        isAlive ? styles.cellAlive : styles.cellDead,
      ].join(" ")}
    ></div>
  );
});

export default Cell;
