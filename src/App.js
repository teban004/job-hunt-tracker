import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <MainContent />
      </div>
    </Router>
  );
}

export default App;
