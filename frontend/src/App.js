import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BreedDetail from "./pages/BreedDetail";
import Liked from "./pages/Liked";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breed/:name" element={<BreedDetail />} />
        <Route path="/liked" element={<Liked />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;