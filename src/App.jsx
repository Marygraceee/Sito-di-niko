import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contatti from './components/Contatti/Contatti';
import Home from './components/Home/Home';
import Servizi from './components/Servizi/Servizi';
import './App.css';
import Form from './components/Form/Form';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/servizi" element={<Servizi />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Form />
    </Router>

  );
}

export default App;
