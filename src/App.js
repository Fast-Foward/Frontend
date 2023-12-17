import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Routes를 import합니다.
import './App.css';
import Header from './components/Header'
import Index from './pages/index';
import Rank from './pages/rank';
import Id from './pages/id';
import { SelectionProvider } from './components/selectionContext';

function App() {
  return (
    <SelectionProvider>
      <Router>
      <Header />
          <Routes> {/* Switch 대신 Routes를 사용합니다. */}
            <Route path="/" element={<Index />} />
            <Route path="/rank" element={<Rank />} />
            <Route path="/id" element={<Id />} />
          </Routes>
      </Router>
    </SelectionProvider>
  );
}

export default App;
