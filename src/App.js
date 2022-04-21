import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import BottomBar from "./components/BottomBar";
import Home from "./components/Home";
import Projects from "./components/Projects"; 
import Resume from "./components/Resume";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes> 
          <Route path="/resume" element={<Resume />} /> 
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/" element={<Home />} /> 
        </Routes>
      </div>
      <BottomBar />
    </BrowserRouter>
  );
}

export default App;
