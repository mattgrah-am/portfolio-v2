import React from "react";
import "./styles/tailwind.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./componets/Header";
import { Home } from "./componets/Home";
import { About } from "./componets/About";
import { Projects } from "./componets/Projects";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
