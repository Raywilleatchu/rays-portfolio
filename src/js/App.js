import React from 'react'
import '../css/App.scss';
import { MainDisplay } from "./MainDisplay";
import { Home } from './Home.js';
import "../css/MainDisplay.scss";
import { Routes, Route } from 'react-router-dom';
import { About } from './About.js';
import { Portfolio } from './Portfolio.js';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainDisplay />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='portfolio' element={<Portfolio />}/>
        </Route>
      </Routes>
    </>
  );
}


export default App;
