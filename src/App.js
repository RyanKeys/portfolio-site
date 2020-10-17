import React from 'react';
import Navbar from './components/boilerplate/Navbar';
import Footer from './components/boilerplate/Footer'
import Jumbotron from './components/header/Jumbotron';
import UL from './components/content/UL'
import './App.css';
import Showcase from './components/content/Showcase';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Jumbotron/>
      <br/>
      <div className="body-container">
      <Showcase/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <UL/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
