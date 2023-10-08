import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import About from './Pages/About';
import Home from './Pages/Home';
import Create from './Pages/Create';
import Contact from './Pages/Contact';
import Stats from './Pages/Stats';

function App() {
  return (
    <Router>
        <div className="App">
            <Menu />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/stats" element={<Stats />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
