import { useState } from "react";

import "normalize.css";
import "./index.css";

import WelcomeScreen from "./components/WelcomeScreen";
import GameOfLifeScreen from "./components/GameOfLifeScreen";
import StickyHeader from "./components/StickyHeader";
import colors from "./configs/colors";
import PythonLibrariesScreen from "./components/PythonLibrariesScreen";

function App() {
  return (
    <>
      <WelcomeScreen />
      <div
        style={{ position: "relative", backgroundColor: colors.subtleAccents }}
      >
        <StickyHeader
          title="Coding Adventures"
          className="coding-adventures-header"
        />
        <GameOfLifeScreen
          nRows={window.innerHeight < 700 ? 30 : 40}
          nCols={window.innerWidth < 1600 ? 50 : 60}
          cellSize="15px"
        />
        <PythonLibrariesScreen />
      </div>
    </>
  );
}

export default App;
