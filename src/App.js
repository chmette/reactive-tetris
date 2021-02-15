import React from "react";
import Tetris from "./components/Tetris";
import Header from "./components/Header";
import "./index.css";

const App = () => {
  return (
    <main>
		<Header />
      <Tetris />
    </main>
  );
};

export default App;
