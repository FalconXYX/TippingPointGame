import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import GamePage from "./pages/Game/game";
import IntroPage from "./pages/Intro/intro";
import InstructionsPage from "./pages/Instructions/instructions";
import ChoosePage from "./pages/Choose/choose";
import WinPage from "./pages/Win/win";

function App() {
  return (
    <>
      <Router basename={"/"}>
        <Routes>
          <Route path="/" element={<IntroPage></IntroPage>} />
          <Route path="/choose" element={<ChoosePage></ChoosePage>} />
          <Route path="/game" element={<GamePage></GamePage>} />
          <Route path="/win" element={<WinPage></WinPage>} />

          <Route
            path="/instructions"
            element={<InstructionsPage></InstructionsPage>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
