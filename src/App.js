import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import Winner from "./pages/Winner/Winner";
import Loser from "./pages/Loser/Loser";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/winner" element={<Winner />} />
          <Route path="/loser" element={<Loser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
