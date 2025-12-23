import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import CodingSkills from "./pages/CodingSkills";
import Awards from "./pages/Awards";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="coding-skills" element={<CodingSkills />} />
        <Route path="awards" element={<Awards />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
