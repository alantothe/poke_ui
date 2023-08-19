import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import AllPokemon from "./pages/AllPokemon";

import Home from "./pages/Home.jsx";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<AllPokemon />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
