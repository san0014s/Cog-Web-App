import React from "react"; //using react
import "./index.css"; //import css idex
import Home from "./routes/Home" //import pages of the website
import About from "./routes/About"
import Project from "./routes/Project"
import Contact from "./routes/Contact"
import ReactionGame from "./games/ReactionGame"

import { Route, Routes } from "react-router-dom";


//We will be using Router which essentially is the standard libary of routes
// for routing in react. This means it enables navigation among components and
// and can allows the us (users) to change the browser url

function App() {
  return (
    <>
    <Routes> 
      <Route path="/" element={<Home />} /> 
      <Route path="/project" element={<Project />} /> 
      <Route path="/about" element={<About />} /> 
      <Route path="/contact" element={<Contact />} /> 
      <Route path="/reactionGame" element={<ReactionGame />} />
    </Routes>
    </>
  );
}

export default App;
