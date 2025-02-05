import React, { useCallback, useMemo, useRef, useState } from "react";
import _ from "lodash";

import Screen from "./Screen";

import "../index.css";
import styles from "./GameOfLifeScreen.module.css";

interface CellProps {
  isAlive?: boolean;
  onClick?: React.MouseEventHandler;
}

const Cell = React.memo(function ({ isAlive = false, onClick }: CellProps) {
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

function GameOfLife({ nRows, nCols, cellSize }: Props) {
  const initGrid = (): CellProps[][] => {
    return Array.from({ length: nRows }, () =>
      Array.from({ length: nCols }, () => ({}))
    );
  };

  const [grid, setGrid] = useState(initGrid());
  const animationRef = useRef<number | null>(null);

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

  const getLiveNeighborCount = (
    currentGrid: CellProps[][],
    row: number,
    col: number
  ): number => {
    const deadCell = { isAlive: false };
    const neighbors: CellProps[] = [
      ...(row === 0
        ? Array(3).fill(deadCell)
        : [
            currentGrid[Math.max(row - 1, 0)][Math.max(col - 1, 0)],
            currentGrid[Math.max(row - 1, 0)][col],
            currentGrid[Math.max(row - 1, 0)][Math.min(col + 1, nCols - 1)],
          ]), // top neighbors
      col === 0 ? deadCell : currentGrid[row][Math.max(col - 1, 0)], // left
      col === nCols ? deadCell : currentGrid[row][Math.min(col + 1, nCols - 1)], // right
      ...(row === nRows - 1
        ? Array(3).fill(deadCell)
        : [
            currentGrid[Math.min(row + 1, nRows - 1)][Math.max(col - 1, 0)],
            currentGrid[Math.min(row + 1, nRows - 1)][col],
            currentGrid[Math.min(row + 1, nRows - 1)][
              Math.min(col + 1, nCols - 1)
            ],
          ]), // bottom
    ];

    let count = 0;
    neighbors.forEach((n) => (count += n.isAlive ? 1 : 0));
    return count;
  };

  const updateNextGeneration = () => {
    setGrid((prevGrid) => {
      return prevGrid.map((row, rowNum) => {
        return row.map((cell, colNum) => {
          const neighborCount = getLiveNeighborCount(prevGrid, rowNum, colNum);
          if (cell.isAlive) {
            switch (neighborCount) {
              case 2:
              case 3:
                return { ...cell };
              default:
                return { ...cell, isAlive: false };
            }
          } else {
            if (neighborCount === 3) return { ...cell, isAlive: true };
            return { ...cell };
          }
        });
      });
    });
  };

  let startAnimation = () => {
    if (animationRef.current) return;

    playGenerations();
  };

  let frame = 0;
  const playGenerations = () => {
    if (++frame % 20 === 0) {
      updateNextGeneration();
    }

    animationRef.current = requestAnimationFrame(playGenerations);
  };

  const stopAnimation = () => {
    animationRef.current && cancelAnimationFrame(animationRef.current);
    animationRef.current = null;
  };

  const mapGridToCellComponents = () => {
    const retVal = grid
      .flat()
      .map((cellProp, index) => (
        <Cell {...cellProp} onClick={cellClickHandlers[index]} key={index} />
      ));
    return retVal;
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          gridTemplate: `repeat(${nRows}, ${cellSize}) / repeat(${nCols}, ${cellSize})`,
          marginRight: "20px",
        }}
        className={styles.gameOfLifeContainer}
      >
        {mapGridToCellComponents()}
      </div>
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          top: 0,
          left: "100%",
          whiteSpace: "nowrap",
        }}
      >
        <button style={{ marginBottom: "20px" }} onClick={startAnimation}>
          Play
        </button>
        <button style={{ marginBottom: "20px" }} onClick={stopAnimation}>
          Stop
        </button>
        <button style={{ marginBottom: "20px" }} onClick={updateNextGeneration}>
          Next Generation
        </button>
      </div>
    </div>
  );
}

function GameOfLifeScreen({ nRows, nCols, cellSize }: Props) {
  return (
    <Screen className="screen--centered screen--centered-col">
      <h1 style={{ marginBottom: "20px" }}>Game of Life by John Conway</h1>
      <GameOfLife nRows={nRows} nCols={nCols} cellSize={cellSize} />
    </Screen>
  );
}

export default GameOfLifeScreen;
