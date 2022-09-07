import React, { useState } from "react"; //using react
import "./index.css"; //import css idex
import "./FamilyCard.css";
import Home from "./routes/Home" //import pages of the website
import About from "./routes/About"
import Updates from "./routes/Updates"
import Contact from "./routes/Contact"
import Account from "./routes/Account"
import Login from "./routes/Login"
import Signup from "./routes/Signup"
import Games from "./routes/Games";
import FamilyList from "./games/FamilyList";

import SessionState from "./components/SessionState"
import Navbar from "./components/Navbar.js";

import { Route, Routes } from "react-router-dom";


//We will be using Router which essentially is the standard libary of routes
// for routing in react. This means it enables navigation among components and
// and can allows the us (users) to change the browser url

function App() {

  SessionState.setId(24); // TODO this should be set on login

  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
    // The Routes tag includes all the pages that can be accessed in the app. To add a new page, do the following
    // 1. Create a new .js file somewhere (conventionally in the games or routes folder) and write code for that page (see any other page for an example)
    // 2. At the top of this file, write...
    //        import name-of-page from "relative-path-to-page"
    //
    // 3. In the routes tag, write... 
    //        <Route path="name-in-url" element={<name-of-page/>} />
    // Now while the app is running, in the URL, add the "name-in-url" and your new page should appear
    // Hope this helps :)
    //
    <>

      <FamilyList flashcards={flashcards} /><>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </></>

  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'Who is this family member?',
    answer: 'Lorem Ipsum',
    options: [
      'lor',
      'ip',
      'sum',
      'em'
    ]
  }
]

const SAMPLE_FLASHCARDS2 = [
  {
    id: 2,
    question: 'Who is this family member?',
    answer: 'Lorem Ipsum',
    options: [
      'lor',
      'ip',
      'sum',
      'em'
    ]
  }
]


export default App;
