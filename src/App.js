import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavbarMenu from './Components/NavbarMenu';
import MainContent from './Components/MainContent';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <NavbarMenu />
        </div>
        <div>
          <MainContent />
        </div>
      </div>
    </Router>
  );
}

export default App;
