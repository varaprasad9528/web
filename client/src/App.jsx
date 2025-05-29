import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import { NotFound } from './pages/NotFound';
import Header from './pages/Header';
import Footer from './pages/Footer';

function App() {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
