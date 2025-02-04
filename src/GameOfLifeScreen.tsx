import React, { useCallback, useMemo, useState } from "react";
import _ from "lodash";

import Screen from "./Screen";

import "./index.css";
import styles from "./GameOfLifeScreen.module.css";

interface CellProps {
  isAlive?: boolean;
  onClick?: React.MouseEventHandler;
}

const Cell = React.memo(function ({ isAlive = false, onClick }: CellProps) {
  console.log("Cell rendered: isAlive=", isAlive);
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: isAlive ? "blue" : "white",
      }}
    ></div>
  );
});

interface Props {
  nRows: number;
  nCols: number;
  cellSize: string;
}

function GameOfLifeScreen({ nRows, nCols, cellSize }: Props) {
  console.log("Game of Life Screen Rendered");

  const initGrid = () => {
    const grid: CellProps[][] = Array.from({ length: nRows }, () =>
      Array.from({ length: nCols }, () => ({}))
    );
    return grid;
  };

  const [grid, setGrid] = useState(initGrid());

  const handleCellClick = useCallback((index: number) => {
    setGrid((prevGrid) => {
      return prevGrid.map((row, rowNum) => {
        return row.map((cell, colNum) => {
          return rowNum * nCols + colNum === index
            ? { ...cell, isAlive: !cell.isAlive }
            : { ...cell };
        });
      });
    });
  }, []);

  const cellClickHandlers = useMemo(() => {
    const handlers: React.MouseEventHandler[] = Array(nRows * nCols);
    for (let row = 0; row < nRows; row++) {
      for (let col = 0; col < nCols; col++) {
        const index = row * nCols + col;
        handlers[index] = () => handleCellClick(index);
      }
    }
    return handlers;
  }, [nRows, nCols, handleCellClick]);

  const mapGridToCellComponents = () => {
    const retVal = grid
      .flat()
      .map((cellProp, index) => (
        <Cell {...cellProp} onClick={cellClickHandlers[index]} key={index} />
      ));
    return retVal;
  };

  return (
    <Screen className="screen--centered">
      <div
        style={{
          gridTemplate: `repeat(${nRows}, ${cellSize}) / repeat(${nCols}, ${cellSize})`,
        }}
        className={styles.gameOfLifeContainer}
      >
        {mapGridToCellComponents()}
      </div>
    </Screen>
  );
}

export default GameOfLifeScreen;
