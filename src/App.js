import React, { useState } from "react";
import Tetris from "./components/Tetris";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InstructionsPopup from "./components/InstructionsPopup";

import "./index.css";

const App = () => {
  const [popupShown, setPopupShown] = useState(false);
  const handlePopup = () => {
    setPopupShown(!popupShown);
  };

  return (
    <main>
      <Header onPopupHandle={handlePopup} />
      {popupShown && <InstructionsPopup onPopupHandle={handlePopup} />}
      <Tetris />
      <Footer />
    </main>
  );
};

export default App;
