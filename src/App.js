import React from "react"; //using react
import "./index.css"; //import css idex
import Home from "./routes/Home" //import pages of the website
import About from "./routes/About"
import Updates from "./routes/Updates"
import Contact from "./routes/Contact"
import Account from "./routes/Account"
import Project from "./routes/Project"
import ReactionGame from "./games/ReactionGame"
import SessionState from "./components/SessionState"

import { Route, Routes } from "react-router-dom";


//We will be using Router which essentially is the standard libary of routes
// for routing in react. This means it enables navigation among components and
// and can allows the us (users) to change the browser url

function App() {

  SessionState.setId(24); // TODO this should be set on login

  return (
    <>
    <Routes> 
      <Route path="/" element={<Home />} /> 
      <Route path="/updates" element={<Updates />} /> 
      <Route path="/about" element={<About />} /> 
      <Route path="/contact" element={<Contact />} /> 
      <Route path="/account" element={<Account />} /> 
      <Route path="/project" element={<Project />} /> 
      <Route path="/reactionGame" element={<ReactionGame />} />
    </Routes>
    </>
  );
}

export default App;
