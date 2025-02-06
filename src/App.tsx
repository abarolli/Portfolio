import { CSSProperties, useState } from "react";

import "normalize.css";
import "./index.css";

import WelcomeScreen from "./components/WelcomeScreen";
import GameOfLifeScreen from "./components/GameOfLifeScreen";

function App() {
  return (
    <>
      <WelcomeScreen />
      <GameOfLifeScreen
        nRows={window.innerHeight < 700 ? 30 : 40}
        nCols={window.innerWidth < 1600 ? 50 : 60}
        cellSize="15px"
      />
    </>
  );
}

export default App;
