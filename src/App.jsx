import React from 'react';
import Hero from './components/hero.jsx';
import Navbar from './components/navbar.jsx';
import Skills from './components/skills.jsx';
import Aboutme from './components/aboutme.jsx'
import Service from "./components/Services.jsx";
import Projects from './components/projects.jsx';
import Contact from './components/Contacts.jsx';
import Footer from './components/footer.jsx';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>      
      <Aboutme/>
      <Skills/>
      <Service/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;

