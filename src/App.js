import React from 'react'
import { HashRouter, Routes, Route } from "react-router-dom";
// Components
import NavBar from "./components/Navbar";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import CV from "./pages/CV";
import PersonalProjects from "./pages/PersonalProjects";
import Contact from "./pages/Contact";


// export default function App()
function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/About-Me" element={<About/>} />
        <Route exact path="/CV" element={<CV/>} />
        <Route exact path="/Personal-Projects" element={<PersonalProjects/>} />
        <Route exact path="/Contact" element={<Contact/>} />
      </Routes>
    </HashRouter>
  );
}
export default App;