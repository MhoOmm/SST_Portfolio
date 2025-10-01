import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import ThemeToggle from './components/ThemeToggle'; // Comment this out if you don't have it yet

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
