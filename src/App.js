import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Projects/>
      <Contact />

      {/* Other components like <Hero />, <About />, etc., can be added here */}
    </div>
  );
}

export default App;
