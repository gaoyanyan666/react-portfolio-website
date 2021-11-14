import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from './components/topbar/Topbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import {BrowserRouter }from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Topbar />
      <div className='sections'>
      <Home/>
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      </div>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;