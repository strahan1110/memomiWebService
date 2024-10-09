import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import InicioSesion from './pages/InicioSesion'; 
import RegistroNovios from './pages/RegistroNovios'; 

const App = () => {
  return (
    <Router>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <Routes>
        {/* Ruta de la página principal */}
        <Route 
          path="/" 
          element={
            <>
              <HeroSection />
              <Workflow />
              <Pricing />
            </>
          } 
        />
        
        {/* Otras rutas */}
        <Route path="/inicio-sesion" element={<InicioSesion />} />
        <Route path="/registro-novios" element={<RegistroNovios />} />
       
      </Routes>
    </div>
    <Footer />
  </Router>
  );
};

export default App;
