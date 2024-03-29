import React from "react"; //using react
import "./index.css"; //import css idex
import "./css/FamilyCard.css"
import Home from "./routes/Home" //import pages of the website
import About from "./routes/About"
import Updates from "./routes/Updates"
import Contact from "./routes/Contact"
import Login from "./routes/Login"
import Signup from "./routes/Signup"
import Games from "./routes/Games"
import Profile from "./routes/Profile"

import Navbar from "./components/Navbar.js";

import { Route, Routes } from "react-router-dom";
import ProfileEdit from "./routes/ProfileEdit";
import DeckList from "./components/Flashcards/DeckList";
import CardList from "./components/Flashcards/CardList";
import PlayDeck from "./components/Flashcards/PlayDeck";


//We will be using Router which essentially is the standard libary of routes
// for routing in react. This means it enables navigation among components and
// and can allows the us (users) to change the browser url

function App() {

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
      <Navbar></Navbar>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/updates" element={<Updates />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/games" element={<Games />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
        <Route path="/decks" element={<DeckList />} />
        <Route path="/edit/cards" element={<CardList />} />
        <Route path="/play/deck" element={<PlayDeck />} />
      </Routes>
    </>
  );
}


export default App;
