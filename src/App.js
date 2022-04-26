import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import BottomBar from "./components/BottomBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects"; 
import Resume from "./pages/Resume";

function App() {
  return (
    <BrowserRouter>
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div className="logobox">
                <h1 className="logo">ドリス</h1>
                <div className="name"><p>doris morales</p></div>
      </div>
      <NavBar />
    </div>
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
