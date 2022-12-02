import React from 'react';
import './App.css';
import Contact from './components/Contact';
// import Footer from './components/Footer';
import Intro from './components/Intro';
import Knowledge from './components/Knowledge';
import Projects from './components/Projects';
// import Sidebar from './components/Sidebar';
import Testimonials from './components/Testimonials';
import Landing from './components/Landing';


function App() {
  return (
    <div className="App">
      <Landing/>
      <Intro/>
      <Knowledge/>
      <Projects/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}

export default App;
