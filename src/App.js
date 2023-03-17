import React from 'react';
import './App.css';
import Home from './components/pages/Home';
//import ReactDOM from 'react-dom/client';
// import Projects from './components/pages/Projects';
// import Contact from './components/pages/Contact';
// import Header from './components/pages/Header';
// import Footer from './components/pages/Footer';
//import Navbar from './components/Navbar';
//import NavTabs from './components/NavTabs';
import './tailwind.css';

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
