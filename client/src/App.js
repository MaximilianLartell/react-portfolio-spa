import React, { useRef, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import styled from 'styled-components';

function App() {
  const [color, setColor] = useState('green');

  const ref = useRef(null);
  const colors = {
    home: 'green',
    about: 'white',
    work: 'green',
    skills: 'blue',
    projects: 'orange',
    contact: 'rgb(255, 255, 10)',
  };

  const handleScroll = () => {
    if (window.scrollY < 600) {
      setColor(colors.home);
    }
    if (window.scrollY > 600 && window.scrollY < 1300) {
      setColor(colors.about);
    }
    if (window.scrollY > 1300 && window.scrollY < 2900) {
      setColor(colors.work);
    }
    if (window.scrollY > 2900 && window.scrollY < 4000) {
      setColor(colors.skills);
    }
    if (window.scrollY > 4000 && window.scrollY < 6000) {
      setColor(colors.projects);
    }
    if (window.scrollY > 6700) {
      setColor(colors.contact);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <div className='App'>
      <Home />

      <Wrapper ref={ref} id={color} color={color}>
        {/* <div ref={ref} className={`navbar-wrapper  ${sticky ? 'sticky' : ''}`}> */}
        <Navbar />
        <main>
          <About />
          <Projects />
        </main>
        <Contact />
      </Wrapper>
    </div>
  );
}

export default App;

const Wrapper = styled('div')`
  background-color: ${(props) => props.color};
  transition: background-color 0.5s;
  transition-delay: 0.5s;
`;
