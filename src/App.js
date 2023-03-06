import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
// import Header from './components/pages/Header';
// import Footer from './components/pages/Footer';
//import Navbar from './components/Navbar';
//import NavTabs from './components/NavTabs';
import './tailwind.css';


function App() {
  return (
    <main>
       <Home />
    {/* <Navbar /> */}
    <About />
    {/* <Projects /> */}
   
    <Contact />
  </main>
  );
}

export default App;
