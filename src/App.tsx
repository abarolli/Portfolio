import { useRef, useState } from "react";

import "normalize.css";
import "./index.css";

import WelcomeScreen from "./components/WelcomeScreen";
import GameOfLifeScreen from "./components/GameOfLifeScreen";
import StickyHeader from "./components/StickyHeader";
import colors from "./configs/colors";
import PythonLibrariesScreen from "./components/PythonLibrariesScreen";
import BoredMembersScreen from "./components/BoredMembersScreen";

function App() {
  const gameOfLifeRef = useRef<HTMLDivElement>(null);
  const boredMembersRef = useRef<HTMLDivElement>(null);
  const pythonLibrariesRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <WelcomeScreen scrollToRef={gameOfLifeRef} />
      <div style={{ backgroundColor: colors.brightPurple }}>
        <StickyHeader
          title="Coding Adventures"
          className="coding-adventures-header"
        />
        <GameOfLifeScreen
          nRows={window.innerHeight < 700 ? 30 : 40}
          nCols={window.innerWidth < 1600 ? 50 : 60}
          cellSize="15px"
          scrollToRef={boredMembersRef}
          ref={gameOfLifeRef}
        />
        <BoredMembersScreen
          ref={boredMembersRef}
          scrollToRef={pythonLibrariesRef}
        />
        <PythonLibrariesScreen ref={pythonLibrariesRef} />
      </div>
    </>
  );
}

export default App;
