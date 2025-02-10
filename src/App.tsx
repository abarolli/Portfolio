import { useRef, useState } from "react";

import "normalize.css";
import "./index.css";

import WelcomeScreen from "./components/WelcomeScreen";
import GameOfLifeScreen from "./components/GameOfLifeScreen";
import PythonLibrariesScreen from "./components/PythonLibrariesScreen";
import BoredMembersScreen from "./components/BoredMembersScreen";
import SocialsScreen from "./components/SocialsScreen";

function App() {
  const gameOfLifeRef = useRef<HTMLDivElement>(null);
  const boredMembersRef = useRef<HTMLDivElement>(null);
  const pythonLibrariesRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <WelcomeScreen scrollToRef={gameOfLifeRef} />
      <div>
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
        <PythonLibrariesScreen
          ref={pythonLibrariesRef}
          scrollToRef={socialsRef}
        />
        <SocialsScreen ref={socialsRef} />
      </div>
    </>
  );
}

export default App;
