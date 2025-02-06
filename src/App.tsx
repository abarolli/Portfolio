import { useState } from "react";

import "normalize.css";
import "./index.css";

import WelcomeScreen from "./components/WelcomeScreen";
import GameOfLifeScreen from "./components/GameOfLifeScreen";
import StickyHeader from "./components/StickyHeader";
import Screen from "./components/Screen";
import colors from "./configs/colors";

function App() {
  return (
    <>
      <WelcomeScreen />
      <div
        style={{ position: "relative", backgroundColor: colors.subtleAccents }}
      >
        <StickyHeader title="Coding Adventures" color={colors.cyberLime} />
        <GameOfLifeScreen
          nRows={window.innerHeight < 700 ? 30 : 40}
          nCols={window.innerWidth < 1600 ? 50 : 60}
          cellSize="15px"
        />
        <Screen style={{ backgroundColor: colors.darkMatrixGreen }}>
          Hello
        </Screen>
      </div>
    </>
  );
}

export default App;
