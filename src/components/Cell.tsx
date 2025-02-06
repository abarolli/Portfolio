import React from "react";
import colors from "../configs/colors";

export interface CellProps {
  isAlive?: boolean;
  onClick?: React.MouseEventHandler;
}

const Cell = React.memo(function ({ isAlive = false, onClick }: CellProps) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: isAlive ? colors.cyberOrange : colors.text,
      }}
    ></div>
  );
});

export default Cell;
