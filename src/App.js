import React from 'react';
import './App.css';
import Home from './components/pages/Home';
//import ReactDOM from 'react-dom/client';
// import Projects from './components/pages/Projects';
// import Contact from './components/pages/Contact';
import './tailwind.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer'; 

// import { Route, Routes } from "react-router-dom";

const Wrapper = ({ children }) => {
  return <div style={{ margin: '0 auto', maxWidth: '1640px' }}>{children}</div>;
};

function App() {
   return (
    <Router>
        <Wrapper>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
              {/*  <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />  */}
          
          </Routes>
        <Footer />
        </Wrapper>
    </Router>
  )
}
export default App;
