import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import NavBar from "./components/NavBar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";

function AppRoutes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
