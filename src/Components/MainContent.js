import React from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
import About from '../Pages/About';
import Home from '../Pages/Home';
import Create from '../Pages/Create';
import Contact from '../Pages/Contact';
import Stats from '../Pages/Stats';

const MainContent = () => {
  return (
    <>
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </main>
    <footer>
        <p>&copy; 2023 Job Hunt Tracker</p>
    </footer>
</>
);
};

export default MainContent;
