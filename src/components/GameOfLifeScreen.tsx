import React, { useCallback, useMemo, useRef, useState } from "react";
import _ from "lodash";

import Screen from "./Screen";
import Cell, { CellProps } from "./Cell";

import "../index.css";
import styles from "./GameOfLifeScreen.module.css";
import colors from "../configs/colors";
import ContinueButton from "./ContinueButton";

interface Props {
  nRows: number;
  nCols: number;
  cellSize: string;
  scrollToRef?: React.RefObject<HTMLDivElement>;
}

function GameOfLife({ nRows, nCols, cellSize }: Props) {
  const initGrid = (): CellProps[][] => {
    const grid = emptyGrid();
    const [centerY, centerX] = [Math.floor(nRows / 2), Math.floor(nCols / 2)];
    for (let x = 1; x <= 3; x++) {
      grid[centerY][centerX - x].isAlive = true;
      grid[centerY][centerX + x].isAlive = true;
    }
    for (let y = 1; y <= 2; y++) {
      grid[centerY - y][centerX].isAlive = true;
      grid[centerY + y][centerX].isAlive = true;
    }
    return grid;
  };

  const emptyGrid = (): CellProps[][] => {
    return Array.from({ length: nRows }, () =>
      Array.from({ length: nCols }, () => ({}))
    );
  };

  const [grid, setGrid] = useState(initGrid());
  const animationRef = useRef<number | null>(null);
  const isClicked = useRef<boolean | null>(null);
  const [isRunning, setIsRunning] = useState(Boolean(animationRef.current));

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
    setIsRunning(true);
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
    setIsRunning(false);
  };

  const reset = () => {
    stopAnimation();
    setGrid(emptyGrid());
  };

  const mapGridToCellComponents = () => {
    const retVal = grid.flat().map((cellProp, index) => (
      <Cell
        {...cellProp}
        onMouseOver={(e) => {
          if (isClicked.current) cellClickHandlers[index](e);
        }}
        onMouseDown={cellClickHandlers[index]}
      />
    ));
    return retVal;
  };

  return (
    <div className={styles.gameOfLife}>
      <div
        style={{
          gridTemplate: `repeat(${nRows}, ${cellSize}) / repeat(${nCols}, ${cellSize})`,
        }}
        className={styles.gameOfLifeGrid}
        onMouseDown={() => (isClicked.current = true)}
        onMouseUp={() => (isClicked.current = false)}
      >
        {mapGridToCellComponents()}
      </div>
      <div className={styles.gameOfLifeController}>
        <div>
          <div
            className={[
              styles.gridAnimationStatus,
              isRunning && styles.running,
            ].join(" ")}
          ></div>
          <p>Running</p>
        </div>
        <button onClick={startAnimation}>Play</button>
        <button onClick={stopAnimation}>Stop</button>
        <button onClick={updateNextGeneration}>Next Generation</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

const GameOfLifeDescription: JSX.Element = (
  <div className={styles.gameOfLifeDescription}>
    <p>
      <strong>Game of Life</strong> is a cellular automaton that was introduced
      by famous computer scientist, <strong>John Conway</strong>. Among many
      other things, it shows how complex behavior can arise from simple,
      deterministic rules. Thought it'd make a fun visual to start the
      portfolio.
    </p>
    <h2>Rules:</h2>
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
            If it is surrounded by two or three live neighbors, it survives to
            the next generation.
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
    <h3>User Instructions:</h3>
    <p>Click on the grid to add cells.</p>
    <p>
      Press <span style={{ color: colors.electricCyan }}>Play</span> to let the
      cellular automaton run.
    </p>
    <p>
      Walk through each generation one at a time with{" "}
      <span style={{ color: colors.electricCyan }}>Next Generation</span>
    </p>
  </div>
);

const GameOfLifeScreen = React.forwardRef(
  (
    { nRows, nCols, cellSize, scrollToRef }: Props,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <Screen
        style={{
          backgroundColor: colors.brightPurple,
          color: colors.text,
        }}
        className="screen--centered screen--centered-col"
        ref={ref}
      >
        <div
          className={[styles.screenMainContent, "screen__main-content"].join(
            " "
          )}
        >
          <h1 className={styles.header}>Game of Life</h1>
          <div className={styles.gameOfLifeContainer}>
            {GameOfLifeDescription}
            <GameOfLife nRows={nRows} nCols={nCols} cellSize={cellSize} />
          </div>
        </div>
        <ContinueButton
          onClick={() =>
            scrollToRef?.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Continue
        </ContinueButton>
      </Screen>
    );
  }
);

export default GameOfLifeScreen;
