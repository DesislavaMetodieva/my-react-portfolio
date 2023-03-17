import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer'; 
// import Contact from './components/pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css'

const Wrapper = ({ children }) => {
  return <div style={{ margin: '0 auto', maxWidth: '1640px' }}>{children}</div>;
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Wrapper>
      <Header />
      
      <Routes>
        <Route path="/" element={<App />} />
        {/* 
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
       
        <Route path="/contact" element={<Contact />} /> 
        */}
      </Routes>
      <Footer />
      </Wrapper>
    
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);


