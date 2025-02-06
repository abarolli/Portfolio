import React, { useCallback, useMemo, useRef, useState } from "react";
import _ from "lodash";

import Screen from "./Screen";
import Cell, { CellProps } from "./Cell";

import "../index.css";
import styles from "./GameOfLifeScreen.module.css";
import colors from "../configs/colors";

interface Props {
  nRows: number;
  nCols: number;
  cellSize: string;
}

type CellNeighbors = {
  top: CellProps;
  bottom: CellProps;
  left: CellProps;
  right: CellProps;
  topLeft: CellProps;
  topRight: CellProps;
  bottomLeft: CellProps;
  bottomRight: CellProps;
};

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
    prevGrid: CellProps[][],
    row: number,
    col: number
  ): number => {
    const deadCell: CellProps = { isAlive: false };
    const neighbors: CellProps[] = [
      (prevGrid[row - 1] || [])[col - 1] || deadCell, // top right
      (prevGrid[row - 1] || [])[col] || deadCell, // top
      (prevGrid[row - 1] || [])[col + 1] || deadCell, // top left
      prevGrid[row][col - 1] || deadCell, // left
      prevGrid[row][col + 1] || deadCell, // right
      (prevGrid[row + 1] || [])[col - 1] || deadCell, // bottom left
      (prevGrid[row + 1] || [])[col] || deadCell, // bottom
      (prevGrid[row + 1] || [])[col + 1] || deadCell, // bottom right
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
        }}
        className={styles.gameOfLifeContainer}
      >
        {mapGridToCellComponents()}
      </div>
      <div className={styles.gameOfLifeController}>
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
    <Screen
      style={{
        backgroundColor: colors.buttons,
        color: colors.subtleAccents,
      }}
      className="screen--centered screen--centered-col"
    >
      <h1 style={{ marginBottom: "20px" }}>Game of Life</h1>
      <div style={{ position: "relative", lineHeight: "15px" }}>
        <GameOfLife nRows={nRows} nCols={nCols} cellSize={cellSize} />
        <div
          style={{
            width: "250px",
            position: "absolute",
            top: 0,
            right: "100%",
          }}
        >
          <p>
            <strong>Game of Life</strong> is a cellular automaton that was
            introduced by famous computer scientist,{" "}
            <strong>John Conway</strong>. Among many other things, it shows how
            complex behavior can arise from simple, deterministic rules.
          </p>
          <h2 style={{ marginTop: "20px" }}>Rules:</h2>
          <ul>
            <li>
              If a cell is alive:
              <ul>
                <li>
                  If it is surrounded by one or no live neighbors, it dies by
                  solitude.
                </li>
                <li>
                  If it is surrounded by four or more live neighbors, it dies by
                  overpopulation.
                </li>
                <li>
                  If it is surrounded by two or three live neighbors, it
                  survives to the next generation.
                </li>
              </ul>
            </li>
            <li>
              If a cell is dead:
              <ul>
                <li>
                  If it is surrounded by three live neighbors, it becomes alive.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </Screen>
  );
}

export default GameOfLifeScreen;
