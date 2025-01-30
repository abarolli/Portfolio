import { useState } from "react";
import "./App.css";
import ProfileImage from "./ProfileImage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Oni's Portfolio</h1>
      <ProfileImage />
    </>
  );
}

export default App;
