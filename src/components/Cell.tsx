import React from "react";

export interface CellProps {
  isAlive?: boolean;
  onClick?: React.MouseEventHandler;
}

const Cell = React.memo(function ({ isAlive = false, onClick }: CellProps) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: isAlive ? "orange" : "white",
      }}
    ></div>
  );
});

export default Cell;
