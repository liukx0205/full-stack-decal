import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddUrl from './pages/AddUrl';
import UrlDetail from './pages/UrlDetail';
import Navbar from './component/Navbar';
import SummaryPage from './pages/SummaryPage';
import './App.css';

function App() {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddUrl />} />
          <Route path="/read/:id" element={<UrlDetail />} />
          <Route path="/summary/:id" element={<SummaryPage />} />
        </Routes>
      </div>
  );
}

export default App;
