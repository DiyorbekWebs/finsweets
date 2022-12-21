import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import About from './pages/About_features/About_features';
import Features from './pages/Home_features/Home_features';
import Home from './pages/Home/Home.jsx';

function App() {
  return <>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/about' element={<Features/>}/>
  </Routes>
  <Footer/>
    </>;
}

export default App;
