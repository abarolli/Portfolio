import { CSSProperties, useState } from "react";

import "normalize.css";
import "./index.css";

import WelcomeScreen from "./components/WelcomeScreen";
import GameOfLifeScreen from "./components/GameOfLifeScreen";

function App() {
  return (
    <>
      <WelcomeScreen />
      <GameOfLifeScreen nRows={30} nCols={50} cellSize="15px" />
    </>
  );
}

export default App;
