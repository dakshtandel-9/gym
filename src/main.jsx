import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Use Routes instead of Router
import './index.css';
import Homepage from './landingpage/Home/Homepage';
import Aboutpage from './landingpage/About/Aboutpage';
import Membershippage from './landingpage/Membership/Membershippage';
import Footer from './landingpage/Footer';
import Navbar from './landingpage/Navbar';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/membership" element={<Membershippage />} />
    </Routes>
    d
    <Footer />
  </BrowserRouter>
);
