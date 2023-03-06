import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import Navbar from './components/pages/Navbar';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects/*" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Header>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
