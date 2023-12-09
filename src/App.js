import "./App.css";
//import Navbar from "./components/Navbar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Insurance from "./components/Insurance";
import Claims from "./components/Claims";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import More from "./components/More";
import Home from "./components/Home";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Home  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/more" element={<More />} />
      </Routes>
    </div>
  );
}

export default App;
