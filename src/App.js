import React from 'react'
import { useAppContext } from "./AppContext";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// Components
import NavBar from "./components/Navbar";
import GlobalStyling from './components/GlobalStyling';
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import CV from "./pages/CV";
import PersonalProjects from "./pages/PersonalProjects";
import Contact from "./pages/Contact";
import NotFound from './pages/404Page';



const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const themes = {
  light: {
    name: "light",
    color: "#45413C",
    background: "#F5F2E8",
  },
  dark: {
    name: "dark",
    color: "#FBFDFF",
    background: "#27272A",
  },
};

// export default function App()
function App() {
  const { theme, setTheme } = useAppContext();

  React.useEffect(
    function () {
      const updateTheme = () =>
        darkMode ? setTheme("dark") : setTheme("light");
      updateTheme();
    },
    [setTheme]
  );

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) =>
      e.matches ? setTheme("dark") : setTheme("light")
    );

  return (
    <HashRouter>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyling />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/About-Me" element={<About/>} />
          <Route exact path="/CV" element={<CV/>} />
          <Route exact path="/Personal-Projects" element={<PersonalProjects/>} />
          <Route exact path="/Contact" element={<Contact/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}
export default App;