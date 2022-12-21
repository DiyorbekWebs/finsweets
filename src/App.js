import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import About from './pages/About_features/About_features';
import Home from './pages/Home_features/Home_features';

function App() {
  return <>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/' element={<About/>}/>
  </Routes>
  <Footer/>
    </>;
}

export default App;
