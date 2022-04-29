import React from "react";
import "./styles/tailwind.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./componets/Header";
import { Home } from "./componets/Home";
import { About } from "./componets/About";
import { Projects } from "./componets/Projects";

function App() {
  return (
    <div className="bg-neutral-200 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100 h-screen">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
