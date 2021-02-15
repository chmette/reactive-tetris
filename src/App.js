import React from "react";
import Tetris from "./components/Tetris";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./index.css";

const App = () => {
  return (
    <main>
		<Header />
      <Tetris />
      <Footer />
    </main>
  );
};

export default App;
