import React, { useRef, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import styled from 'styled-components';

const thresholds = {
  screen: {
    about: 650,
    skills: 2200,
    projects: 3250,
    contact: 5900,
  },
  mobile: {
    about: 760,
    skills: 2800,
    projects: 4250,
    contact: 6350,
  },
};
const colors = {
  home: 'rgb(126, 147, 138)',
  about: '#C46D5E',
  skills: '#474973',
  projects: '#286360',
  contact: '#f4bf3c',
};

function App() {
  const [top, setTop] = useState();

  const ref = useRef(null);

  const handleScroll = () => {
    setTop(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <div className='App'>
      <Wrapper ref={ref} top={top}>
        <Home />
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
  transition-delay: 0.5s;
  transition: background-color 1s;
  background-color: ${(p) => {
    if (p.top < thresholds.screen.about) {
      return 'rgb(126, 147, 138)';
    }
    if (p.top > thresholds.screen.about && p.top < thresholds.screen.skills) {
      return '#C46D5E';
    }
    if (
      p.top > thresholds.screen.skills &&
      p.top < thresholds.screen.projects
    ) {
      return '#474973';
    }
    if (
      p.top > thresholds.screen.projects &&
      p.top < thresholds.screen.contact
    ) {
      return '#286360';
    }
    if (p.top > thresholds.screen.contact) {
      return '#f4bf3c';
    }
  }};

  @media (max-width: 600px) {
    background-color: ${(p) => {
      if (p.top < thresholds.mobile.about) {
        return 'rgb(126, 147, 138)';
      }
      if (p.top > thresholds.mobile.about && p.top < thresholds.mobile.skills) {
        return '#C46D5E';
      }
      if (
        p.top > thresholds.mobile.skills &&
        p.top < thresholds.mobile.projects
      ) {
        return '#474973';
      }
      if (
        p.top > thresholds.mobile.projects &&
        p.top < thresholds.mobile.contact
      ) {
        return '#286360';
      }
      if (p.top > thresholds.mobile.contact) {
        return '#f4bf3c';
      }
    }};
  }
`;
