import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // Importa tus componentes
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    
    <Router>
      <div className="fondoConDesenfoque" /> {/* Fondo con gradiente y desenfoque */}
      <div className="contenidoPrincipal">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />        
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
