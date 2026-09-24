import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Machines from "./pages/Machines";
import Balloons from "./pages/Balloons";
import Equipment from "./pages/Equipment";
import Coordination from "./pages/Coordination"; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/machines" element={<Machines />} />
        <Route path="/balloons" element={<Balloons />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/coordination" element={<Coordination />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;